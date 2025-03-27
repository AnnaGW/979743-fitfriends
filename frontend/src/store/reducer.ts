import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, UserGender, UserLocation } from '../const';
import { TAuthProcess } from '../types/state';
import { userInfo, requireAuthorization, serverError } from './action';
import { loginAction } from './api-actions';

const initialState: TAuthProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: {
    id: '',
    name: '',
    email: '',
    avatar: '',
    gender: UserGender.Unimportant,
    dateOfBirth: new Date(),
    description: '',
    location: UserLocation.Starry,
    backgroundImg: '',
    createdAt: new Date(),
    refreshToken: '',
  },
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(userInfo, (state) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(serverError, (state, action) => {
      state.error = action.payload;
    });
  // .addCase(loginAction.fulfilled, (state, action) => {
  //   state.userInfo = action.payload;
  //   state.authorizationStatus = AuthorizationStatus.Auth;
  // });
  // .addCase(loginAction.rejected, (state) => {
  //   state.authorizationStatus = AuthorizationStatus.NoAuth;
  // });
});

export { reducer };
