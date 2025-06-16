import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { APIRoute } from '../const.js';
import { TAuthData } from '../types/auth-data.js';
import { saveToken, dropToken } from '../services/token.js';
import { TUser } from '../types/user.js';
import { TRegData } from '../types/reg-data.js';
import { TQuestionnarieCoachData } from '../types/questionnarie-coach-data.js';
import { TQuestionnarieWardData } from '../types/questionnarie-ward-data.js';
import { TUserFull } from '../types/user-full.js';

export const loginAction = createAsyncThunk<
  TUserFull,
  TAuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async ({ email, password }, { extra: api }) => {
  const { data } = await api.post<TUserFull>(APIRoute.Login, { email, password });

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
  TUserFull,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { extra: api }) => {
  const { data } = await api.post<TUserFull>(APIRoute.Check);
  return data;
});

export const updateCoach = createAsyncThunk<
  TUserFull,
  TQuestionnarieCoachData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/updateCoach', async (updatedUser: TQuestionnarieCoachData, { extra: api }) => {
  const { data } = await api.put<TUserFull>(APIRoute.UpdateCoach, updatedUser);
  return data;
});

export const updateWard = createAsyncThunk<
  TUser,
  TQuestionnarieWardData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/updateWard', async (_arg, { extra: api }) => {
  const { data } = await api.put<TUser>(APIRoute.UpdateWard);
  return data;
});
