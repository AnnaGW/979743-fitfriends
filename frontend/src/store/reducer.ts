import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { TrainingDuration, TrainingLevel, UserGender, UserLocation, UserRole } from '../types';
import { TAuthProcess } from '../types/state';
import { serverErrorAction } from './action';
import { loginAction, logoutAction, registrationAction, checkAuthAction, updateCoach } from './api-actions';
import { adaptData } from '../services/data-adapter';

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
    role: UserRole.Ward,
  },
  coachInfo: {
    email: '',
    trainingType: [],
    trainingLevel: TrainingLevel.Junior,
    description: '',
    coachMerits: '',
    certificates: '',
    isPersonalCoach: false,
  },
  wardInfo: {
    email: '',
    trainingType: [],
    trainingLevel: TrainingLevel.Junior,
    trainingDuration: TrainingDuration.Short,
    calories: 0,
    caloriesPerDay: 0,
  },
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginAction.fulfilled, (state, action) => {
      const adaptedData = adaptData(action.payload);
      state.userInfo = adaptedData.userInfo;
      state.coachInfo = adaptedData.coachInfo;
      state.wardInfo = adaptedData.wardInfo;
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
      const adaptedData = adaptData(action.payload);
      state.userInfo = adaptedData.userInfo;
      state.coachInfo = adaptedData.coachInfo;
      state.wardInfo = adaptedData.wardInfo;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(checkAuthAction.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(updateCoach.fulfilled, (state, action) => {
      const adaptedData = adaptData(action.payload);
      state.userInfo = adaptedData.userInfo;
      state.coachInfo = adaptedData.coachInfo;
    })
    .addCase(serverErrorAction, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
