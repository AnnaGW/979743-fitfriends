import {
  IsEmail,
  IsISO8601,
  IsOptional,
  IsString,
  MinLength,
  MaxLength,
  IsEnum,
  Matches,
} from 'class-validator';
import { UserGender } from '@backend/core';
import {
  AuthenticationValidateMessage,
  UserDtoValidation,
} from '../user.constant';
import { UserLocation } from '@backend/core';

export class CreateUserDto {
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

  @IsEnum(UserGender, {
    message: AuthenticationValidateMessage.NotInUserGender,
  })
  @IsString()
  public gender: UserGender;

  @IsOptional()
  @IsISO8601({}, { message: AuthenticationValidateMessage.DateBirthNotValid })
  public dateOfBirth?: string;

  @IsOptional()
  @IsString()
  @MinLength(UserDtoValidation.DescriptionMinLength)
  @MaxLength(UserDtoValidation.DescriptionMaxLength)
  public description?: string;

  @IsEnum(UserLocation, {
    message: AuthenticationValidateMessage.NotInUserLocation,
  })
  @IsString()
  public location: UserLocation;

  @IsString()
  @Matches(/([^s]+(.(jpg|png))$)/, {
    message: AuthenticationValidateMessage.BgImgFileTypeNotValid,
  })
  public backgroundImg: string;
}
