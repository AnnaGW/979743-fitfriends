import 'multer';
import { Express } from 'express';
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MongoIdValidationPipe } from '@backend/pipes';
import { FileUploaderService } from './file-uploader.service';
import { fillDto } from '@backend/helpers';
import { UploadedFileRdo } from './rdo/file-uploaded.rdo';

@Controller('files')
export class FileUploaderController {
  constructor(private readonly fileUploaderService: FileUploaderService) {}

  @Post('/upload')
  @UseInterceptors(FileInterceptor('avatar'))
  public async uploadFile(
    // @Req() request: Request,
    @Body() fileInfo,
    @UploadedFile() file: Express.Multer.File
  ) {
    console.log('Что пришло в сервис fileInfo - ', fileInfo);
    console.log('Что пришло в сервис files - ', file);
    // const fileEntity = await this.fileUploaderService.saveFile(file);
    // return fillDto(UploadedFileRdo, fileEntity.toPOJO());
  }

  @Get(':fileId')
  public async show(@Param('fileId', MongoIdValidationPipe) fileId: string) {
    const existFile = await this.fileUploaderService.getFile(fileId);
    return fillDto(UploadedFileRdo, existFile);
  }
}
