import { Expose } from 'class-transformer';
import { UserCommonRdo } from './user-common.rdo';

export class UpdatedCoachRdo extends UserCommonRdo {
  @Expose()
  public trainingType: string[];

  @Expose()
  public trainingLevel: string;

  @Expose()
  public description?: string;

  @Expose()
  public coachMerits: string;

  @Expose()
  public certificates: string;
}
