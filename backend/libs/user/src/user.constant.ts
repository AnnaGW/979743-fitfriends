export const AUTH_USER_EXISTS = 'User with this email exists';
export const AUTH_USER_NOT_FOUND = 'User not found';
export const AUTH_USER_PASSWORD_WRONG = 'User password is wrong';

export const AuthenticationResponseMessage = {
  LoggedSuccess: 'User has been successfully logged.',
  LoggedError: 'Password or Login is wrong.',
  UserFound: 'User found',
  UserNotFound: 'User not found',
  UserExist: 'User with the email already exists',
  UserCreated: 'The new user has been successfully created.',
} as const;

export const AuthenticationValidateMessage = {
  EmailNotValid: 'The email is not valid',
  DateBirthNotValid: 'The user date birth is not valid',
  PasswordNotValid: 'The password is not valid',
  NotInUserGender:
    'valid values ​​for this field are: "женский", "мужской", "неважно"',
  NotInUserLocation:
    'valid values ​​for this field are: «Пионерская», «Петроградская», «Удельная», «Звёздная», «Спортивная»',
} as const;

export enum UserDtoValidation {
  UserNameMinLength = 3,
  UserNameMaxLength = 50,
  PasswordMinLength = 6,
  PasswordMaxLength = 12,
}

export const SALT_ROUNDS = 10;
