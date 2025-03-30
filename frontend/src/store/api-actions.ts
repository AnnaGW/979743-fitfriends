import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { APIRoute } from '../const.js';
import { TAuthData } from '../types/auth-data.js';
import { saveToken } from '../services/token.js';
import { TUser } from '../types/user.js';

export const loginAction = createAsyncThunk<
  TUser,
  TAuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async ({ email, password }, { extra: api }) => {
  console.log('form value - ', email, password);
  const serializedData = JSON.stringify({ email, password });
  console.log('serializedData', serializedData);
  // const { data } = await api.post<TUser>(APIRoute.Login, { login, password });
  const { data } = await api.post<TUser>(APIRoute.Login, serializedData);

  console.log('data from loginAction - ', data);
  saveToken(data.refreshToken);
  return data;
});
