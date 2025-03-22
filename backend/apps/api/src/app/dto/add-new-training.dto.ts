import {
  TrainingLevel,
  TrainingType,
  TrainingDuration,
  TrainingGender,
} from '@backend/core';

export class AddNewTrainingDto {
  public title: string;
  public backgroungImg: string;
  public level: TrainingLevel;
  public type: TrainingType;
  public duration: TrainingDuration;
  public price: number;
  public calories: number;
  public description: string;
  public gender: TrainingGender;
  public video: string;
  public coach: string;
  public specialOffer: boolean;
}
