import { Body, Controller, Post } from '@nestjs/common';
import { TrainingService } from './trainig.service';
import { CreateTrainingDto } from './dto/create-training.dto';
import { fillDto } from '@backend/helpers';
import { TrainingRdo } from './rdo/training.rdo';
@Controller('training')
export class TrainingController {
  constructor(private readonly trainingService: TrainingService) {}

  @Post('create')
  public async create(@Body() dto: CreateTrainingDto) {
    const newTraining = await this.trainingService.createTraining(dto);
    // return newTraining;
    return fillDto(TrainingRdo, { ...newTraining.toPOJO() });
  }
}
