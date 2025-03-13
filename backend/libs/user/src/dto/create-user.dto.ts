import {
  IsEmail,
  IsISO8601,
  IsOptional,
  IsString,
  MinLength,
  MaxLength,
  IsEnum,
} from 'class-validator';
import { UserGender } from '@backend/core';
import { AuthenticationValidateMessage } from '../user.constant';
import { UserLocation } from '@backend/core';

export class CreateUserDto {
  @IsString()
  public name: string;

  @IsEmail({}, { message: AuthenticationValidateMessage.EmailNotValid })
  public email: string;

  @IsString()
  public password: string;

  @IsOptional()
  @IsString()
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
  public description?: string;

  @IsEnum(UserLocation, {
    message: AuthenticationValidateMessage.NotInUserLocation,
  })
  @IsString()
  public location: UserLocation;

  @IsString()
  public backgroundImg: string;
}
