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
  public rating: number;
  public coach: string;
  public specialOffer: boolean;

  constructor(trainig?: Training) {
    super();
    this.populate(trainig);
  }

  public populate(trainig?: Training): void {
    this.id = trainig.id ?? '';
    this.title = trainig.title;
    this.backgroungImg = trainig.backgroungImg;
    this.level = trainig.level;
    this.type = this.type;
    this.duration = this.duration;
    this.price = this.price;
    this.calories = this.calories;
    this.description = this.description;
    this.gender = this.gender;
    this.video = this.video;
    this.rating = this.rating;
    this.coach = this.coach;
    this.specialOffer = this.specialOffer;
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
    };
  }
}
