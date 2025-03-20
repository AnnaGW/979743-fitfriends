import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { MongoIdValidationPipe } from '@backend/pipes';
import { TrainingService } from './trainig.service';
import { CreateTrainingDto } from './dto/create-training.dto';
import { fillDto } from '@backend/helpers';
import { TrainingRdo } from './rdo/training.rdo';
import { UpdateTrainingDto } from './dto/update-training.dto';
// import { JwtAuthGuard } from '../../user/src/guards/jwt-auth.guard';

@Controller('training')
export class TrainingController {
  constructor(private readonly trainingService: TrainingService) {}

  @Post('create')
  public async create(@Body() dto: CreateTrainingDto) {
    const newTraining = await this.trainingService.createTraining(dto);
    return fillDto(TrainingRdo, { ...newTraining.toPOJO() });
  }

  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  public async show(@Param('id', MongoIdValidationPipe) id: string) {
    const existTraining = await this.trainingService.getTraining(id);
    return existTraining.toPOJO();
  }

  @Patch(':id')
  public async editTraining(
    @Param('id') id: string,
    @Body() dto: UpdateTrainingDto
  ) {
    const editedTraining = await this.trainingService.updateTraining(dto, id);
    return editedTraining.toPOJO();
  }

  @Delete(':id')
  public async deleteTRaining(@Param('id') id: string) {
    await this.trainingService.deleteTraining(id);
  }

  @Get('/')
  public async getSelection() {
    const selectedTrainings =
      await this.trainingService.getTrainingCollection();
    return selectedTrainings.map((tr) => tr.toPOJO());
  }
}
