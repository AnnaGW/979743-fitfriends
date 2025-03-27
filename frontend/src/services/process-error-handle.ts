import { store } from '../store';
import { serverError } from '../store/action';
import { clearErrorAction } from '../store/api-actions';

export const processErrorHandle = (message: string): void => {
  store.dispatch(serverError(message));
  store.dispatch(clearErrorAction());
};
