import { TrainingType } from './training-type';
import { TrainingDuration } from './training-duration';
import { TrainingLevel } from './training-level';

export type TQuestionnarieWardData = {
  trainingType: TrainingType;
  trainingDuration: TrainingDuration;
  trainingLevel: TrainingLevel;
  calories: number;
  caloriesPerDay: number;
};
