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
    'valid values ​​for field "gender" are: "женский", "мужской", "неважно"',
  NotInUserLocation:
    'valid values ​​for field "location" are: «Пионерская», «Петроградская», «Удельная», «Звёздная», «Спортивная»',
  BgImgFileTypeNotValid: 'valid file type for background image are .jpg or png',
  AvatarFileTypeNotValid: 'valid file type for avatar are .jpg or png',
  TrainingsTypeArrayLengthNotValid: 'Max length of Trainings Type Array is 3',
} as const;

export enum UserDtoValidation {
  UserNameMinLength = 1,
  UserNameMaxLength = 15,
  PasswordMinLength = 6,
  PasswordMaxLength = 12,
  DescriptionMinLength = 10,
  DescriptionMaxLength = 140,
}

export const SALT_ROUNDS = 10;
