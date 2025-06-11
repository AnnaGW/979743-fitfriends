import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { APIRoute } from '../const.js';
import { TAuthData } from '../types/auth-data.js';
import { saveToken, dropToken } from '../services/token.js';
import { TUser } from '../types/user.js';
import { TRegData } from '../types/reg-data.js';

export const loginAction = createAsyncThunk<
  TUser,
  TAuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async ({ email, password }, { extra: api }) => {
  const { data } = await api.post<TUser>(APIRoute.Login, { email, password });

  saveToken({
    accessToken: data.accessToken,
    refreshToken: data.refreshToken,
  });
  return data;
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
});

export const registrationAction = createAsyncThunk<
  TUser,
  TRegData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/registration', async (newUser: TRegData, { extra: api }) => {
  const { data } = await api.post<TUser>(APIRoute.Registration, newUser);

  saveToken({
    accessToken: data.accessToken,
    refreshToken: data.refreshToken,
  });
  return data;
});

export const checkAuthAction = createAsyncThunk<
  TUser,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { extra: api }) => {
  const { data } = await api.post<TUser>(APIRoute.Check);
  return data;
});
