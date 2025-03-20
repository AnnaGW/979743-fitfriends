import { TrainingDuration } from './training-duration.enum';
import { TrainingLevel } from './training-level.enum';
import { TrainingType } from './training-type.enum';
import { TrainingGender } from './training-gender.enum';

export interface Training {
  id?: string;
  title: string;
  backgroungImg: string;
  level: TrainingLevel;
  type: TrainingType;
  duration: TrainingDuration;
  price: number;
  calories: number;
  description: string;
  gender: TrainingGender;
  video: string;
  rating: number;
  coach: string;
  specialOffer: boolean;
  createdAt: Date;
}
