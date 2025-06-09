import 'multer';
import { Express } from 'express';
import { HttpService } from '@nestjs/axios';
import {
  Body,
  Controller,
  Delete,
  Post,
  Req,
  UseFilters,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateUserCommonDto, LoginUserDto } from '@backend/user';

import { ApplicationServiceURL } from './configuration/api.config';
import { AxiosExceptionFilter } from './filters/axios-exception.filter';

type savedFile = {
  fileName: string;
};

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
    console.log('Что пришло в контроллер api - fileInfo - ', fileInfo);
    console.log('Что пришло в контроллер api - file - ', file);
    // const formData = new FormData();
    // formData.set('avatar', file.buffer);
    const { data } = await this.httpService.axiosRef.post(
      'http://localhost:3335/api/files/upload',
      file,
      {
        headers: {
          'Content-Type': 'multipart/form-data; boundary=boundary',
        },
      }
    );
    console.log('что вернул files в api - ', data);
    return data;
  }

  @Post('registration')
  @UseInterceptors(FileInterceptor('avatar'))
  public async registration(
    @Body() newUser,
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
    // const { data } = await this.httpService.axiosRef.post(
    //   `${ApplicationServiceURL.Users}/register`,
    //   newUserDto
    // );
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
}
