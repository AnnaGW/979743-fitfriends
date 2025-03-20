import { Transform } from 'class-transformer';
import {
  IsArray,
  IsIn,
  IsMongoId,
  IsNumber,
  IsOptional,
  IsUUID,
} from 'class-validator';
import { SortDirection } from '@backend/core';
import {
  DEFAULT_TRAINING_COUNT_LIMIT,
  DEFAULT_SORT_DIRECTION,
  DEFAULT_PAGE_COUNT,
} from './training.constant';

export class TrainingQuery {
  @Transform(({ value }) => +value || DEFAULT_TRAINING_COUNT_LIMIT)
  @IsNumber()
  @IsOptional()
  public limit? = DEFAULT_TRAINING_COUNT_LIMIT;

  @IsIn(Object.values(SortDirection))
  @IsOptional()
  public sortDirection?: SortDirection = DEFAULT_SORT_DIRECTION;

  @Transform(({ value }) => +value || DEFAULT_PAGE_COUNT)
  @IsOptional()
  public page?: number = DEFAULT_PAGE_COUNT;

  public level: string;
}
