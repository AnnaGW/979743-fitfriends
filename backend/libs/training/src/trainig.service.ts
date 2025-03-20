import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { TrainingRepository } from './training.repository';
import { CreateTrainingDto } from './dto/create-training.dto';
import { TrainingEntity } from './trainig.entity';
import {
  TRAINING_COLLECTION_IS_EMPTY,
  TRAINING_NOT_FOUND,
} from './training.constant';

@Injectable()
export class TrainingService {
  private readonly logger = new Logger(TrainingService.name);

  constructor(private readonly trainingRepository: TrainingRepository) {}

  public async createTraining(dto: CreateTrainingDto): Promise<TrainingEntity> {
    const {
      title,
      backgroungImg,
      level,
      type,
      duration,
      price,
      calories,
      description,
      gender,
      video,
      rating,
      coach,
      specialOffer,
    } = dto;

    const training = {
      title,
      backgroungImg,
      level,
      type,
      duration,
      price,
      calories,
      description,
      gender,
      video,
      rating,
      coach,
      specialOffer,
      createdAt: new Date(),
    };

    const newTraining = new TrainingEntity(training);
    await this.trainingRepository.save(newTraining);
    return newTraining;
  }

  public async getTraining(id: string): Promise<TrainingEntity> {
    const training = await this.trainingRepository.findById(id);

    if (!training) {
      throw new NotFoundException(TRAINING_NOT_FOUND);
    }

    return training;
  }

  public async getTrainingCollection(): Promise<TrainingEntity[]> {
    // const collection = await this.trainingRepository.getCollection({
    //   level: 'новичок', // должно прилетать из контроллера
    // });
    const collection = await this.trainingRepository.getCollection();
    if (!collection) {
      throw new NotFoundException(TRAINING_COLLECTION_IS_EMPTY);
    }
    return collection;
  }
}
