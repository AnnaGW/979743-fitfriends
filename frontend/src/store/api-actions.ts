import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { APIRoute } from '../const.js';
import { TAuthData } from '../types/auth-data.js';
import { saveToken } from '../services/token.js';
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
  const serializedData = JSON.stringify({ email, password });
  console.log('serializedData', serializedData);
  const { data } = await api.post<TUser>(APIRoute.Login, serializedData);
  saveToken(data.refreshToken);
  return data;
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
  const serializedData = JSON.stringify(newUser);
  console.log('serializedData', serializedData);
  const { data } = await api.post<TUser>(APIRoute.Registration, serializedData);
  return data;
});
