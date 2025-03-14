import { Injectable } from '@nestjs/common';
import { Training, EntityFactory } from '@backend/core';
import { TrainingEntity } from './trainig.entity';

@Injectable()
export class TrainingFactory implements EntityFactory<TrainingEntity> {
  public create(entityPlainData: Training): TrainingEntity {
    return new TrainingEntity(entityPlainData);
  }
}
