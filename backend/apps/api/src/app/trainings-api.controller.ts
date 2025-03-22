import {
  Body,
  Controller,
  Post,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { AxiosExceptionFilter } from './filters/axios-exception.filter';
import { CheckAuthGuard } from './guards/check-auth.guard';
import { AddNewTrainingDto } from './dto/add-new-training.dto';
import { ApplicationServiceURL } from './configuration/api.config';

@Controller('training-api')
@UseFilters(AxiosExceptionFilter)
export class TrainingApiController {
  constructor(private readonly httpService: HttpService) {}

  @UseGuards(CheckAuthGuard)
  @UseInterceptors(UseInterceptors)
  @Post('/')
  public async create(@Body() dto: AddNewTrainingDto) {
    const { data } = await this.httpService.axiosRef.post(
      `${ApplicationServiceURL.Trainings}/`,
      dto
    );
    return data;
  }
}
