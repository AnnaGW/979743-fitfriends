import { TUser } from './user.js';
import { store } from '../store/index.js';
import { AuthorizationStatus } from '../const';
import { TQuestionnarieCoachData } from './questionnarie-coach-data.js';
import { TQuestionnarieWardData } from './questionnarie-ward-data.js';

export type TAuthProcess = {
  authorizationStatus: AuthorizationStatus;
  userInfo: TUser;
  coachInfo: TQuestionnarieCoachData;
  wardInfo: TQuestionnarieWardData;
  error: string | string[] | null;
};

export type TErrors = {
  serverError: string | null;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
