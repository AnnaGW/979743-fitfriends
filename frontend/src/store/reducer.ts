import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, UserGender, UserLocation } from '../const';
import { TAuthProcess } from '../types/state';
import { userInfo, setAuthorizationAction, serverErrorAction } from './action';
import { loginAction } from './api-actions';

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
    description: '',
    location: UserLocation.Starry,
    backgroundImg: '',
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
    .addCase(serverErrorAction, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
