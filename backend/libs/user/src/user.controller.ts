import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { LoggedUserRdo } from './rdo/logged-user.rdo';
import { fillDto } from '@backend/helpers';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  public async create(@Body() dto: CreateUserDto) {
    const newUser = await this.userService.register(dto);
    return newUser.toPOJO();
  }

  @Post('login')
  public async login(@Body() dto: LoginUserDto) {
    const verifiedUser = await this.userService.verifyUser(dto);
    // const userToken = await this.userService.createUserToken(verifiedUser);
    // return fillDto(LoggedUserRdo, { ...verifiedUser.toPOJO(), ...userToken });
    return verifiedUser.toPOJO();
  }

  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  // public async show(@Param('id', MongoIdValidationPipe) id: string) {
  public async show(@Param('id') id: string) {
    const existUser = await this.userService.getUser(id);
    return existUser.toPOJO();
  }
}
