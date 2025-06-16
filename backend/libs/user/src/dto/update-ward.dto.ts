import {
  IsEmail,
  IsString,
  IsEnum,
  IsNumber,
  IsArray,
  Min,
  Max,
} from 'class-validator';
import { TrainingDuration, TrainingLevel, TrainingType } from '@backend/core';
import { AuthenticationValidateMessage } from '../user.constant';
export class UpdateWardDto {
  @IsEmail({}, { message: AuthenticationValidateMessage.EmailNotValid })
  @IsString()
  public email: string;

  @IsArray({ message: AuthenticationValidateMessage.EmailNotValid })
  @IsEnum(TrainingType, { each: true })
  public trainingType: TrainingType[];

  @IsEnum(TrainingDuration)
  @IsString()
  public trainingDuration: TrainingDuration;

  @IsEnum(TrainingLevel)
  @IsString()
  public trainingLevel: TrainingLevel;

  @IsNumber({ maxDecimalPlaces: 0 })
  @Min(1000)
  @Max(5000)
  public calories: number;

  @IsNumber({ maxDecimalPlaces: 0 })
  @Min(1000)
  @Max(5000)
  @IsNumber()
  public caloriesPerDay: number;
}
