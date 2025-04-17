import { AUTH_TOKEN } from '../const';

export type Token = {
  accessToken: string;
  refreshToken: string;
};

export const getAccessToken = (): string => {
  const token = localStorage.getItem(AUTH_TOKEN.Access);
  return token ?? '';
};

export const getRefreshToken = (): string => {
  const token = localStorage.getItem(AUTH_TOKEN.Refresh);
  return token ?? '';
};

export const saveToken = (token: Token): void => {
  localStorage.setItem(AUTH_TOKEN.Access, token.accessToken);
  localStorage.setItem(AUTH_TOKEN.Refresh, token.refreshToken);
};

export const dropToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN.Access);
  localStorage.removeItem(AUTH_TOKEN.Refresh);
};
