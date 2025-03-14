import { Module } from '@nestjs/common';
import { TrainingController } from './trainig.controller';
import { TrainingService } from './trainig.service';

@Module({
  imports: [],
  controllers: [TrainingController],
  providers: [TrainingService],
  exports: [],
})
export class TrainingModule {}
