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

export class CreateTrainingDto {
  @IsString()
  @MinLength(TrainingDTOValidation.TitleMinLength)
  @MaxLength(TrainingDTOValidation.TitleMaxLength)
  public title: string;

  @IsString()
  @Matches(/([^s]+(.(jpg|png))$)/, {
    message: TrainingValidateMessage.BackgroungImgFileTypeIsNotValid,
  })
  public backgroungImg: string;

  @IsEnum(TrainingLevel, {
    message: TrainingValidateMessage.NotInTrainingLevel,
  })
  @IsString()
  public level: TrainingLevel;

  @IsEnum(TrainingType, {
    message: TrainingValidateMessage.NotInTrainingType,
  })
  @IsString()
  public type: TrainingType;

  @IsEnum(TrainingDuration, {
    message: TrainingValidateMessage.NotInTrainingDuration,
  })
  @IsString()
  public duration: TrainingDuration;

  @IsNumber({ maxDecimalPlaces: 0 })
  @Min(0)
  public price: number;

  @IsNumber({ maxDecimalPlaces: 0 })
  @Min(1000)
  @Max(5000)
  public calories: number;

  @IsString()
  @MinLength(TrainingDTOValidation.DescriptionMinLength)
  @MaxLength(TrainingDTOValidation.DescriptionMaxLength)
  public description: string;

  @IsEnum(TrainingGender, {
    message: TrainingValidateMessage.NotInTrainingGender,
  })
  @IsString()
  public gender: TrainingGender;

  @IsString()
  @Matches(/([^s]+(.(mov|avi|mp4))$)/, {
    message: TrainingValidateMessage.VideoFileTypeIsNotValid,
  })
  public video: string;

  @IsString()
  @MinLength(TrainingDTOValidation.CoachnMinLength)
  @MaxLength(TrainingDTOValidation.CoachMaxLength)
  @Matches(/^[А-Яа-яЁёa-zA-Z]+$/, {
    message: TrainingValidateMessage.CoachNameIsNotValid,
  })
  public coach: string;

  @IsBoolean()
  public specialOffer: boolean;
}
