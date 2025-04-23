import {
  IsEmail,
  IsISO8601,
  IsOptional,
  IsString,
  MinLength,
  MaxLength,
  IsEnum,
  Matches,
  IsNumber,
  IsBoolean,
} from 'class-validator';
import {
  Role,
  TrainingDuration,
  TrainingLevel,
  TrainingType,
  UserGender,
} from '@backend/core';
import {
  AuthenticationValidateMessage,
  UserDtoValidation,
} from '../user.constant';
import { UserLocation } from '@backend/core';

export class CreateUserCommonDto {
  @IsString()
  @MinLength(UserDtoValidation.UserNameMinLength)
  @MaxLength(UserDtoValidation.UserNameMaxLength)
  public name: string;

  @IsEmail({}, { message: AuthenticationValidateMessage.EmailNotValid })
  public email: string;

  @IsString()
  @MinLength(UserDtoValidation.PasswordMinLength)
  @MaxLength(UserDtoValidation.PasswordMaxLength)
  public password: string;

  @IsOptional()
  @IsString()
  @Matches(/([^s]+(.(jpg|png))$)/, {
    message: AuthenticationValidateMessage.AvatarFileTypeNotValid,
  })
  public avatar?: string;

  @IsOptional()
  @IsISO8601({}, { message: AuthenticationValidateMessage.DateBirthNotValid })
  public dateOfBirth?: string;

  @IsEnum(UserLocation, {
    message: AuthenticationValidateMessage.NotInUserLocation,
  })
  @IsString()
  public location: UserLocation;

  @IsEnum(UserGender, {
    message: AuthenticationValidateMessage.NotInUserGender,
  })
  @IsString()
  public gender: UserGender;

  @IsEnum(Role)
  @IsString()
  public role: Role;
}
