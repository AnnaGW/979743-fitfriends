import {
  Entity,
  StorableEntity,
  Training,
  TrainingDuration,
  TrainingGender,
  TrainingLevel,
  TrainingType,
} from '@backend/core';

export class TrainingEntity extends Entity implements StorableEntity<Training> {
  public title: string;
  public backgroungImg: string;
  public level: TrainingLevel;
  public type: TrainingType;
  public duration: TrainingDuration;
  public price: number;
  public calories: number;
  public description: string;
  public gender: TrainingGender;
  public video: string;
  public rating: number[];
  public coach: string;
  public specialOffer: boolean;
  public createdAt: Date;

  constructor(training?: Training) {
    super();
    this.populate(training);
  }

  public populate(trainig?: Training): void {
    this.id = trainig.id ?? '';
    this.title = trainig.title;
    this.backgroungImg = trainig.backgroungImg;
    this.level = trainig.level;
    this.type = trainig.type;
    this.duration = trainig.duration;
    this.price = trainig.price;
    this.calories = trainig.calories;
    this.description = trainig.description;
    this.gender = trainig.gender;
    this.video = trainig.video;
    this.rating = trainig.rating;
    this.coach = trainig.coach;
    this.specialOffer = trainig.specialOffer;
    this.createdAt = trainig.createdAt;
  }

  public toPOJO(): Training {
    return {
      id: this.id,
      title: this.title,
      backgroungImg: this.backgroungImg,
      level: this.level,
      type: this.type,
      duration: this.duration,
      price: this.price,
      calories: this.calories,
      description: this.description,
      gender: this.gender,
      video: this.video,
      rating: this.rating,
      coach: this.coach,
      specialOffer: this.specialOffer,
      createdAt: this.createdAt,
    };
  }
}
