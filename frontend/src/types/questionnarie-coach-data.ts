import { TrainingType } from './training-type';
import { TrainingLevel } from './training-level';

export type TQuestionnarieCoachData = {
  userID: string;
  email: string;
  trainingType: string[];
  trainingLevel: string;
  description?: string;
  coachMerits: string;
  certificates: string;
  isPersonalCoach: boolean;
};
