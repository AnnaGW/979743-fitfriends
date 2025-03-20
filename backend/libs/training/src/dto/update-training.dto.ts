import {
  IsString,
  IsNumber,
  IsBoolean,
  MinLength,
  MaxLength,
  IsEnum,
  Matches,
  Min,
  Max,
  IsOptional,
} from 'class-validator';
import {
  TrainingDuration,
  TrainingGender,
  TrainingLevel,
  TrainingType,
} from '@backend/core';
import {
  TrainingDTOValidation,
  TrainingValidateMessage,
} from '../training.constant';

export class UpdateTrainingDto {
  @IsOptional()
  @IsString()
  @MinLength(TrainingDTOValidation.TitleMinLength)
  @MaxLength(TrainingDTOValidation.TitleMaxLength)
  public title?: string;

  @IsOptional()
  @IsString()
  @Matches(/([^s]+(.(jpg|png))$)/, {
    message: TrainingValidateMessage.BackgroungImgFileTypeIsNotValid,
  })
  public backgroungImg?: string;

  @IsOptional()
  @IsEnum(TrainingLevel, {
    message: TrainingValidateMessage.NotInTrainingLevel,
  })
  @IsString()
  public level?: TrainingLevel;

  @IsOptional()
  @IsEnum(TrainingType, {
    message: TrainingValidateMessage.NotInTrainingType,
  })
  @IsString()
  public type?: TrainingType;

  @IsOptional()
  @IsEnum(TrainingDuration, {
    message: TrainingValidateMessage.NotInTrainingDuration,
  })
  @IsString()
  public duration?: TrainingDuration;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 0 })
  @Min(0)
  public price?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 0 })
  @Min(1000)
  @Max(5000)
  public calories?: number;

  @IsOptional()
  @IsString()
  @MinLength(TrainingDTOValidation.DescriptionMinLength)
  @MaxLength(TrainingDTOValidation.DescriptionMaxLength)
  public description?: string;

  @IsOptional()
  @IsEnum(TrainingGender, {
    message: TrainingValidateMessage.NotInTrainingGender,
  })
  @IsString()
  public gender?: TrainingGender;

  @IsOptional()
  @IsString()
  @Matches(/([^s]+(.(mov|avi|mp4))$)/, {
    message: TrainingValidateMessage.VideoFileTypeIsNotValid,
  })
  public video?: string;

  @IsOptional()
  @IsString()
  @MinLength(TrainingDTOValidation.CoachnMinLength)
  @MaxLength(TrainingDTOValidation.CoachMaxLength)
  // @Matches(/([А-Яа-яЁёa-zA-Z] $)/, {
  //TODO проверить RegExp
  //   message: TrainingValidateMessage.CoachNameIsNotValid,
  // })
  public coach: string;

  @IsOptional()
  @IsBoolean()
  public specialOffer: boolean;
}
