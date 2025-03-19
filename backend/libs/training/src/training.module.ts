import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrainingController } from './trainig.controller';
import { TrainingService } from './trainig.service';
import { TrainingModel, TrainingSchema } from './training.model';
import { TrainingRepository } from './training.repository';
import { TrainingFactory } from './training.factory';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TrainingModel.name, schema: TrainingSchema },
    ]),
  ],
  controllers: [TrainingController],
  providers: [TrainingService, TrainingRepository, TrainingFactory],
  exports: [],
})
export class TrainingModule {}
