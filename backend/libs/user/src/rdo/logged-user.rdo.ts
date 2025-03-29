import { Expose } from 'class-transformer';

export class LoggedUserRdo {
  @Expose()
  public id: string;

  @Expose()
  public name: string;

  @Expose()
  public email: string;

  @Expose()
  public avatar: string;

  @Expose()
  public gender: string;

  @Expose()
  public dateOfBirth: string;

  @Expose()
  public description: string;

  @Expose()
  public location: string;

  @Expose()
  public backgroundImg: string;

  @Expose()
  public accessToken: string;

  @Expose()
  public refreshToken: string;

  @Expose()
  public createdAt: Date;
}
