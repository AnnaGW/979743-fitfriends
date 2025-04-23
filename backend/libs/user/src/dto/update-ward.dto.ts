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

export class UpdateWardDto {
  @IsEnum(TrainingType)
  @IsString()
  public trainingType: TrainingType;

  @IsEnum(TrainingDuration)
  @IsString()
  public trainingDuration: TrainingDuration;

  @IsEnum(TrainingLevel)
  @IsString()
  public trainingLevel: TrainingLevel;

  @IsNumber()
  public calories: number;

  @IsNumber()
  public caloriesPerDay: number;
}
