import { Expose } from 'class-transformer';

export class LoggedUserRdo {
  @Expose()
  public id: string;

  @Expose()
  public email: string;

  @Expose()
  public accessToken: string;

  @Expose()
  public name: string;

  @Expose()
  public dateOfBirth: string;

  @Expose()
  public createdAt: Date;
}
