import {
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
  MaxLength,
} from 'class-validator';
import { UserGender } from '@backend/core';
import { AuthenticationValidateMessage } from '../user.constant';
import { UserLocation } from '@backend/core';

export class CreateUserDto {
  public name: string;
  public email: string;
  public password: string;
  public avatar?: string;
  public gender: UserGender;
  public dateOfBirth?: string;
  public description?: string;
  public location: UserLocation;
  public backgroundImg: string;
}
