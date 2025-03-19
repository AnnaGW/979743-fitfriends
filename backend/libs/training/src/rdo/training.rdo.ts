import { Expose } from 'class-transformer';

export class TrainingRdo {
  @Expose()
  public id: string;

  @Expose()
  public title: string;

  @Expose()
  public backgroungImg: string;

  @Expose()
  public level: string;

  @Expose()
  public type: string;

  @Expose()
  public duration: string;

  @Expose()
  public price: string;

  @Expose()
  public calories: string;

  @Expose()
  public description: string;

  @Expose()
  public gender: string;

  @Expose()
  public video: string;

  @Expose()
  public rating: string;

  @Expose()
  public coach: string;

  @Expose()
  public specialOffer: string;
}
