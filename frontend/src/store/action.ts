import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { TUser } from '../types/user';

//меняет статус авторизации noAuth на Auth и выводит в консоль текущий статус авторизации
export const userInfo = createAction('user/info', (value: TUser) => {
  console.log(value);
  return {
    payload: value,
    currentDate: new Date(),
  };
});

export const setAuthorizationAction = createAction<AuthorizationStatus>('user/checkAuthorization');

export const serverErrorAction = createAction<string | null>('serverError');
