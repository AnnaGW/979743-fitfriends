import 'multer';
import { Express } from 'express';
import { HttpService } from '@nestjs/axios';
import {
  Body,
  Controller,
  Delete,
  Post,
  Put,
  Req,
  UseFilters,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  CreateUserCommonDto,
  LoginUserDto,
  UpdateCoachDto,
} from '@backend/user';

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

  @Post('save-file')
  @UseInterceptors(FileInterceptor('avatar'))
  public async saveFile(
    @Body() fileInfo,
    @UploadedFile() file: Express.Multer.File
  ) {
    const { data } = await this.httpService.axiosRef.post(
      'http://localhost:3335/api/files/upload',
      file,
      {
        headers: {
          'Content-Type': 'multipart/form-data; boundary=boundary',
        },
      }
    );
    return data;
  }

  @Post('registration')
  @UseInterceptors(FileInterceptor('avatar'))
  public async registration(@Body() newUser: CreateUserCommonDto) {
    const { data } = await this.httpService.axiosRef.post(
      `${ApplicationServiceURL.Users}/register`,
      newUser
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
    // отзыв refresh token в users
  }

  @Put('update-coach')
  public async updateCoach(@Body() updatedUser: UpdateCoachDto) {
    const { data } = await this.httpService.axiosRef.put(
      `${ApplicationServiceURL.Users}/update-coach`,
      updatedUser
    );
    return data;
  }
}
