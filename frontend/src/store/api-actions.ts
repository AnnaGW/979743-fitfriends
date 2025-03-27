import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { requireAuthorization, serverError } from './action';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const.js';
import { TAuthData } from '../types/auth-data.js';
import { TUser } from '../types/user.js';
import { saveToken } from '../services/token.js';
import { store } from './index.js';

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  TUser,
  TAuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('users-api/login', async ({ login, password }, { extra: api }) => {
  console.log('form value - ', login, password);
  const { data } = await api.post<TUser>(APIRoute.Login, { login, password });

  console.log('token value - ', data.refreshToken);
  saveToken(data.refreshToken);
  // dispatch(requireAuthorization(AuthorizationStatus.Auth));
  return data;
});

//здесь возвращается только токен, надо вернуть всю информацию о пользователе

export const clearErrorAction = createAsyncThunk('game/clearError', () => {
  setTimeout(() => store.dispatch(serverError(null)), TIMEOUT_SHOW_ERROR);
});
