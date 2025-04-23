import {
  IsOptional,
  IsString,
  MinLength,
  MaxLength,
  IsEnum,
} from 'class-validator';
import { TrainingLevel, TrainingType } from '@backend/core';
import { UserDtoValidation } from '../user.constant';

export class UpdateCoachDto {
  @IsEnum(TrainingType)
  @IsString()
  public trainingType: TrainingType;

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
}
