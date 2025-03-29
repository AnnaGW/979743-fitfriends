import { store } from '../store';
import { serverErrorAction } from '../store/action';
import { TIMEOUT_SHOW_ERROR } from '../const';

export const processErrorHandle = (message: string): void => {
  store.dispatch(serverErrorAction(message));
  setTimeout(() => store.dispatch(serverErrorAction(null)), TIMEOUT_SHOW_ERROR);
};
