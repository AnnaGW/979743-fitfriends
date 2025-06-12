import { AuthUserCommon } from './auth-user-common.interface';
import { TrainingType } from './training-type.enum';
import { TrainingLevel } from './training-level.enum';

export interface Coach extends AuthUserCommon {
  description?: string;
  backgroundImg?: string;
  trainingType?: TrainingType[];
  trainingLevel?: TrainingLevel;
  coachMerits?: string;
  isPersonalCoach?: boolean;
  certificates?: string;
}
