export enum AppRoute {
  Main = '/',
  Login = '/login',
  Logout = '/logout',
  Registration = '/registration',
  TrainingList = '/training-list',
  QuestionnaireWard = '/questionnaire-ward',
  QuestionnaireCoach = '/questionnaire-coach',
  PersonalAccountCoach = 'personal-account-coach',
  PersonalAccountWard = 'personal-account-ward',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const BACKEND_URL = 'http://localhost:4000/api';

export const FILE_UPLOAD_URL = 'http://localhost:3335/api';

export const REQUEST_TIMEOUT = 5000;

export const TIMEOUT_SHOW_ERROR = 10000;

export enum APIRoute {
  Login = 'users-api/login',
  Logout = 'users-api/logout',
  Registration = 'users-api/registration',
  Check = 'users-api/check-auth',
  SaveFile = 'files/upload',
  UpdateCoach = 'users-api/update-coach',
  UpdateWard = 'users-api/update-ward',
}

export enum AUTH_TOKEN {
  Access = 'fitfriends-access-token',
  Refresh = 'fitfriends-refresh-token',
}

export enum NameSpace {
  Auth = 'AUTH', // действия, связанные с авторизацией
  Data = 'DATA', // действия, связанные  запросом и отправкой данных
  Error = 'ERROR', // обработка ошибок сервера
  UserAction = 'USER_ACTION', // действия, связанные с реацией приложения на действия пользователя
}

export enum Validation {
  PasswordMinLength = 6,
  PasswordMaxLength = 12,
}

export const PASSWORD_PATTERN = /(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{2,}/;
export const EMAIL_PATTERN = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const NAME_PATTERN = /^[a-zA-Zа-яА-ЯЁё]+$/;
