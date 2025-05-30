import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { UserGender, UserLocation } from '../types';
import { TAuthProcess } from '../types/state';
import { userInfo, setAuthorizationAction, serverErrorAction } from './action';
import { loginAction, logoutAction, registrationAction, checkAuthAction } from './api-actions';

const initialState: TAuthProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: {
    id: '',
    name: '',
    email: '',
    avatar: '',
    gender: UserGender.Unimportant,
    createdAt: new Date().toISOString(),
    dateOfBirth: new Date().toISOString(),
    location: UserLocation.Starry,
    refreshToken: '',
    accessToken: '',
  },
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setAuthorizationAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(userInfo, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.userInfo = action.payload;
    })
    .addCase(loginAction.fulfilled, (state, action) => {
      state.userInfo = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(loginAction.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(logoutAction.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(registrationAction.fulfilled, (state, action) => {
      state.userInfo = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(registrationAction.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(checkAuthAction.fulfilled, (state, action) => {
      state.userInfo = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(checkAuthAction.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(serverErrorAction, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
