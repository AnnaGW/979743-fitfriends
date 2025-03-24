import { TUser } from './user.type';
import { store } from '../store/index.js';
import { AuthorizationStatus } from '../const';

export type TAuthProcess = {
  authorizationStatus: AuthorizationStatus;
  userInfo: TUser;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
