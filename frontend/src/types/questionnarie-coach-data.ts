import { TrainingType } from './training-type';
import { TrainingLevel } from './training-level';

export type TQuestionnarieCoachData = {
  trainingType: TrainingType;
  trainingLevel: TrainingLevel;
  description?: string;
  coachMerits: string;
  certificates: string;
  isPersonalCoach: boolean;
};
