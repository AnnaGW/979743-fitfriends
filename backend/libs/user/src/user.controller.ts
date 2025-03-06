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
import { fillDto } from '@backend/helpers';

@Controller('user')
export class UserController {
  constructor(private readonly authService: UserService) {}

  // @Post('register')
  // public async create(@Body() dto: CreateUserDto) {
  //   const newUser = await this.authService.register(dto);
  //   return newUser.toPOJO();
  // }

  // @Post('login')
  // public async login(@Body() dto: LoginUserDto) {
  //   const verifiedUser = await this.authService.verifyUser(dto);
  //   const userToken = await this.authService.createUserToken(verifiedUser);
  //   return fillDto(LoggedUserRdo, { ...verifiedUser.toPOJO(), ...userToken });
  // }

  // @UseGuards(JwtAuthGuard)
  // @Get(':id')
  // public async show(@Param('id', MongoIdValidationPipe) id: string) {
  //   const existUser = await this.authService.getUser(id);
  //   return existUser.toPOJO();
  // }
}
