import { TQuestionnarieCoachData } from './questionnarie-coach-data';
import { TQuestionnarieWardData } from './questionnarie-ward-data';
import { TUser } from './user';

export type TUserFull = TUser & TQuestionnarieCoachData & TQuestionnarieWardData;
