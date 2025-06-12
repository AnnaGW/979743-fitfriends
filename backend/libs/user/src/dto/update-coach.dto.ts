import {
  IsOptional,
  IsString,
  IsArray,
  MinLength,
  MaxLength,
  IsEnum,
  IsEmail,
} from 'class-validator';
import { TrainingLevel, TrainingType } from '@backend/core';
import {
  AuthenticationValidateMessage,
  UserDtoValidation,
} from '../user.constant';

export class UpdateCoachDto {
  @IsString()
  public userID: string;

  @IsEmail({}, { message: AuthenticationValidateMessage.EmailNotValid })
  @IsString()
  public email: string;

  @IsArray({ message: AuthenticationValidateMessage.EmailNotValid })
  @IsEnum(TrainingType, { each: true })
  public trainingType: TrainingType[];

  @IsEnum(TrainingLevel)
  @IsString()
  public trainingLevel: TrainingLevel;

  @IsOptional()
  @IsString()
  @MinLength(UserDtoValidation.DescriptionMinLength)
  @MaxLength(UserDtoValidation.DescriptionMaxLength)
  public description?: string;

  @IsString()
  public coachMerits: string;

  @IsString()
  public certificates: string;

  //Добавить флаг готов тренировать
}
