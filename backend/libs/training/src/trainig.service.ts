import { Injectable, Logger } from '@nestjs/common';
import { TrainingRepository } from './training.repository';
import { CreateTrainingDto } from './dto/create-training.dto';
import { TrainingEntity } from './trainig.entity';

@Injectable()
export class TrainingService {
  private readonly logger = new Logger(TrainingService.name);

  constructor(private readonly trainingRepository: TrainingRepository) {}

  public async createTraining(dto: CreateTrainingDto): Promise<TrainingEntity> {
    const newTraining = new TrainingEntity(dto);
    await this.trainingRepository.save(newTraining);
    return newTraining;
  }
}
