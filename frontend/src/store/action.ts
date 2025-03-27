import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';

export const userInfo = createAction('user/info');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const serverError = createAction<string | null>('game/serverError');
