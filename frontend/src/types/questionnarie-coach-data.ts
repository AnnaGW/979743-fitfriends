import { TrainingType } from './training-type';

export type TQuestionnarieCoachData = {
  email: string;
  trainingType: TrainingType[] | string[] | [];
  trainingLevel: string;
  description?: string;
  coachMerits: string;
  certificates: string;
  isPersonalCoach: boolean;
};
