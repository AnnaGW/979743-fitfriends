import { HttpService } from '@nestjs/axios';
import {
  Body,
  Controller,
  Delete,
  Post,
  Req,
  UseFilters,
} from '@nestjs/common';

import { CreateUserCommonDto, LoginUserDto } from '@backend/user';

import { ApplicationServiceURL } from './configuration/api.config';
import { AxiosExceptionFilter } from './filters/axios-exception.filter';

@Controller('users-api')
@UseFilters(AxiosExceptionFilter)
export class UsersApiController {
  constructor(private readonly httpService: HttpService) {}

  @Post('login')
  public async login(@Body() loginUserDto: LoginUserDto) {
    const { data } = await this.httpService.axiosRef.post(
      `${ApplicationServiceURL.Users}/login`,
      loginUserDto
    );
    return data;
  }

  @Post('registration')
  public async registration(@Body() newUserDto: CreateUserCommonDto) {
    console.log('что пришло в контроллер api - ', newUserDto);
    const { data } = await this.httpService.axiosRef.post(
      `${ApplicationServiceURL.Users}/register`,
      newUserDto
    );
    return data;
  }

  @Post('refresh')
  public async refreshToken(@Req() req: Request) {
    const { data } = await this.httpService.axiosRef.post(
      `${ApplicationServiceURL.Users}/refresh`,
      null,
      {
        headers: {
          Authorization: req.headers['authorization'],
        },
      }
    );

    return data;
  }

  @Post('check-auth')
  public async checkAuth(@Req() req: Request) {
    const { data } = await this.httpService.axiosRef.post(
      `${ApplicationServiceURL.Users}/check`,
      null,
      {
        headers: {
          Authorization: req.headers['authorization'],
        },
      }
    );

    return data;
  }

  @Delete('logout')
  public async logout(@Req() req: Request) {
    console.log('что пришло в logout api - ', req.headers['authorization']);
    // отзыв refresh token в users
  }
}
