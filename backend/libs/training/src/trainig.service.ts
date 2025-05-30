import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { TrainingRepository } from './training.repository';
import { CreateTrainingDto } from './dto/create-training.dto';
import { TrainingEntity } from './trainig.entity';
import {
  TRAINING_COLLECTION_IS_EMPTY,
  TRAINING_NOT_FOUND,
} from './training.constant';
import { UpdateTrainingDto } from './dto/update-training.dto';

@Injectable()
export class TrainingService {
  private readonly logger = new Logger(TrainingService.name);

  constructor(private readonly trainingRepository: TrainingRepository) {}

  public async createTraining(dto: CreateTrainingDto): Promise<{
    training: TrainingEntity;
    ratingCount: number;
  }> {
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
      rating: [0],
      coach,
      specialOffer,
      createdAt: new Date(),
    };

    const newTraining = new TrainingEntity(training);
    await this.trainingRepository.save(newTraining);

    const ratingCount =
      training.rating.reduce((a, b) => a + b) / training.rating.length;
    return { training: newTraining, ratingCount };
  }

  public async getTraining(id: string): Promise<{
    training: TrainingEntity;
    ratingCount: number;
  }> {
    const training = await this.trainingRepository.findById(id);

    if (!training) {
      throw new NotFoundException(TRAINING_NOT_FOUND);
    }

    const ratingCount =
      training.rating.reduce((a, b) => a + b) / training.rating.length;
    return { training, ratingCount };
  }

  public async updateTraining(
    dto: UpdateTrainingDto,
    id: string
  ): Promise<{
    training: TrainingEntity;
    ratingCount: number;
  }> {
    const training = (await this.trainingRepository.findById(id)).toPOJO();

    if (!training) {
      throw new NotFoundException(TRAINING_NOT_FOUND);
    }

    const editedTraining = {
      ...training,
      ...dto,
      lastEditDate: new Date(),
    };
    const editedTrainingEntity = new TrainingEntity(editedTraining);
    await this.trainingRepository.update(editedTrainingEntity);

    const ratingCount =
      training.rating.reduce((a, b) => a + b) / training.rating.length;

    return { training: editedTrainingEntity, ratingCount };
  }

  public async deleteTraining(id: string) {
    try {
      this.trainingRepository.deleteById(id);
    } catch {
      throw new NotFoundException(TRAINING_NOT_FOUND);
    }
  }

  public async getTrainingCollection(): Promise<
    {
      training: TrainingEntity;
      ratingCount: number;
    }[]
  > {
    // const collection = await this.trainingRepository.getCollection({
    //   level: 'новичок', // должно прилетать из контроллера
    // }); // TODO
    const collection = await this.trainingRepository.getCollection();
    if (!collection) {
      throw new NotFoundException(TRAINING_COLLECTION_IS_EMPTY);
    }

    const adaptedCollection = collection.map((tr) => ({
      training: tr,
      ratingCount: tr.rating.reduce((a, b) => a + b) / tr.rating.length,
    }));

    return adaptedCollection;
  }
}
