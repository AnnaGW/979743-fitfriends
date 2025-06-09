import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { createAPI, createAPIFiles } from '../services/api';

export const api = createAPI();
export const apiFiles = createAPIFiles();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
