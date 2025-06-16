import { TrainingType } from './training-type';
import { TrainingDuration } from './training-duration';
import { TrainingLevel } from './training-level';

export type TQuestionnarieWardData = {
  email: string;
  trainingType: TrainingType[] | string[] | [];
  trainingDuration: TrainingDuration;
  trainingLevel: TrainingLevel;
  calories: number;
  caloriesPerDay: number;
};
