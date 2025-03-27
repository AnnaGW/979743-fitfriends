import { TUser } from './user.js';
import { store } from '../store/index.js';
import { AuthorizationStatus } from '../const';

export type TAuthProcess = {
  authorizationStatus: AuthorizationStatus;
  userInfo: TUser;
  error: string | null;
};

export type TErrors = {
  serverError: string | null;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
