import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BaseMongoRepository } from '@backend/data-access';
import { TrainingEntity } from './trainig.entity';
import { TrainingFactory } from './training.factory';
import { TrainingModel } from './training.model';

@Injectable()
export class TrainingRepository extends BaseMongoRepository<
  TrainingEntity,
  TrainingModel
> {
  constructor(
    entityFactory: TrainingFactory,
    @InjectModel(TrainingModel.name) trainingModel: Model<TrainingModel>
  ) {
    super(entityFactory, trainingModel);
  }
}
