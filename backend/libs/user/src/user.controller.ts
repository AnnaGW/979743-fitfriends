import {
  Controller,
  Body,
  Post,
  Put,
  Get,
  Param,
  Req,
  UseGuards,
  HttpCode,
  HttpStatus,
  Delete,
} from '@nestjs/common';
import { MongoIdValidationPipe } from '@backend/pipes';
import { UserService } from './user.service';
import { CreateUserCommonDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { LoggedUserRdo } from './rdo/logged-user.rdo';
import { UserCommonRdo } from './rdo/user-common.rdo';
import { fillDto } from '@backend/helpers';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { JwtRefreshGuard } from './guards/jwt-refresh.guard';
import { RequestWithUser } from './request-with-user.interface';
import { RequestWithTokenPayload } from './request-with-token-payload.interface';
import { UpdateCoachDto } from './dto/update-coach.dto';
import { UpdateWardDto } from './dto/update-ward.dto';
import { UpdatedCoachRdo } from './rdo/updated-coach.rdo';
import { log } from 'console';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  public async create(@Body() dto: CreateUserCommonDto) {
    const newUser = await this.userService.register(dto);
    const userToken = await this.userService.createUserToken(newUser);
    return fillDto(UserCommonRdo, { ...newUser.toPOJO(), ...userToken });
  }

  @Put('update-coach')
  public async updateCoach(@Body() dto: UpdateCoachDto) {
    const updatedUser = await this.userService.updateCoach(dto);
    return fillDto(UpdatedCoachRdo, { ...updatedUser });
  }

  @Put('update-ward')
  public async updateWard(@Body() dto: UpdateWardDto) {
    const updatedUser = await this.userService.updateWard(dto);
    return fillDto(UpdatedCoachRdo, { ...updatedUser });
  }

  @Post('login')
  public async login(@Body() dto: LoginUserDto) {
    const verifiedUser = await this.userService.verifyUser(dto);
    const userToken = await this.userService.createUserToken(verifiedUser);
    return fillDto(LoggedUserRdo, { ...verifiedUser.toPOJO(), ...userToken });
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  public async show(@Param('id', MongoIdValidationPipe) id: string) {
    const existUser = await this.userService.getUser(id);
    return existUser.toPOJO();
  }

  @UseGuards(JwtRefreshGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  public async refreshToken(@Req() { user }: RequestWithUser) {
    return this.userService.createUserToken(user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('check')
  public async checkToken(@Req() { user: payload }: RequestWithTokenPayload) {
    return payload;
  }

  @Delete('logout')
  public async deleteToken(@Req() { user: payload }: RequestWithTokenPayload) {
    //выделить из пришедшей информации id токена и передать его в сервис deleteUserToken.
  }
}
