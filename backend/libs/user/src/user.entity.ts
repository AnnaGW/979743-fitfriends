import { genSalt, hash, compare } from 'bcrypt';
import {
  Coach,
  Ward,
  Entity,
  Role,
  StorableEntity,
  TrainingDuration,
  TrainingLevel,
  TrainingType,
  UserGender,
  UserLocation,
} from '@backend/core';
import { SALT_ROUNDS } from './user.constant';

export class UserEntity extends Entity implements StorableEntity<Coach & Ward> {
  public name: string;
  public email: string;
  public passwordHash: string;
  public avatar?: string;
  public dateOfBirth?: Date;
  public location: UserLocation;
  public gender: UserGender;
  public role: Role;
  public createdAt: Date;
  public description?: string;
  public backgroundImg?: string;
  public trainingLevel?: TrainingLevel;
  public trainingType?: TrainingType;
  public trainingDuration?: TrainingDuration;
  public calories?: number;
  public caloriesPerDay?: number;
  public isUserReady?: boolean;
  public coachMerits?: string;
  public isPersonalCoach?: boolean;
  public certificates?: string;

  constructor(user?: Coach & Ward) {
    super();
    this.populate(user);
  }

  public populate(user?: Coach & Ward): void {
    if (!user) {
      return;
    }
    this.id = user.id ?? '';
    this.email = user.email;
    this.name = user.name;
    this.avatar = user.avatar;
    this.passwordHash = user.passwordHash;
    this.gender = user.gender;
    this.dateOfBirth = user.dateOfBirth;
    this.description = user.description;
    this.location = user.location;
    this.backgroundImg = user.backgroundImg;
    this.createdAt = user.createdAt;
    this.role = user.role;
    this.trainingLevel = user.trainingLevel;
    this.trainingType = user.trainingType;
    this.trainingDuration = user.trainingDuration;
    this.calories = user.calories;
    this.caloriesPerDay = user.caloriesPerDay;
    this.isUserReady = user.isUserReady;
    this.coachMerits = user.coachMerits;
    this.isPersonalCoach = user.isPersonalCoach;
    this.certificates = user.certificates;
  }

  public toPOJO(): Coach & Ward {
    return {
      id: this.id,
      email: this.email,
      name: this.name,
      avatar: this.avatar,
      passwordHash: this.passwordHash,
      gender: this.gender,
      dateOfBirth: this.dateOfBirth,
      description: this.description,
      location: this.location,
      backgroundImg: this.backgroundImg,
      createdAt: this.createdAt,
      role: this.role,
      trainingLevel: this.trainingLevel,
      trainingType: this.trainingType,
      trainingDuration: this.trainingDuration,
      calories: this.calories,
      caloriesPerDay: this.caloriesPerDay,
      isUserReady: this.isUserReady,
      coachMerits: this.coachMerits,
      isPersonalCoach: this.isPersonalCoach,
      certificates: this.certificates,
    };
  }

  public async setPassword(password: string): Promise<UserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
