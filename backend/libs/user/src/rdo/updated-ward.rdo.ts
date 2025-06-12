import { Expose } from 'class-transformer';
import { UserCommonRdo } from './user-common.rdo';

export class UpdatedCoachRdo extends UserCommonRdo {
  @Expose()
  public trainingType: string[];

  @Expose()
  public trainingDuration: string;

  @Expose()
  public trainingLevel: string;

  @Expose()
  public description?: string;

  @Expose()
  public calories: number;

  @Expose()
  public caloriesPerDay: number;
}
