import { AuthUserCommon } from './auth-user-common.interface';
import { TrainingType } from './training-type.enum';
import { TrainingLevel } from './training-level.enum';
import { TrainingDuration } from './training-duration.enum';

export interface Ward extends AuthUserCommon {
  description?: string;
  backgroundImg?: string;
  trainingType?: TrainingType;
  trainingLevel?: TrainingLevel;
  trainingDuration?: TrainingDuration;
  calories?: number;
  caloriesPerDay?: number;
  isUserReady?: boolean;
}
