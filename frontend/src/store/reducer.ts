import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, UserGender, UserLocation } from '../const';
import { TAuthProcess } from '../types/state';
import { userInfo } from './action';

const initialState: TAuthProcess = {
  authorizationStatus: AuthorizationStatus.NoAuth,
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
  },
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(userInfo, (state) => {
    state.authorizationStatus = AuthorizationStatus.Auth;
  });
});

export { reducer };
