import { createAction } from '@reduxjs/toolkit';

export const serverErrorAction = createAction<string | null>('serverError');
