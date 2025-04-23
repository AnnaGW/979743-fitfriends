import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  Coach,
  Ward,
  Role,
  TrainingDuration,
  TrainingLevel,
  TrainingType,
  UserGender,
  UserLocation,
} from '@backend/core';

type User = Ward & Coach;
@Schema({
  collection: 'users',
  timestamps: true,
})
export class UserModel extends Document implements User {
  @Prop({
    required: true,
  })
  public name: string;

  @Prop({
    required: true,
    unique: true,
  })
  public email: string;

  @Prop({
    required: true,
  })
  public passwordHash: string;

  @Prop()
  public avatar: string;

  @Prop()
  public dateOfBirth: Date;

  @Prop({
    required: true,
    type: String,
    enum: UserLocation,
  })
  public location: UserLocation;

  @Prop({
    required: true,
    type: String,
    enum: UserGender,
  })
  public gender: UserGender;

  @Prop({
    required: true,
    type: String,
    enum: Role,
  })
  public role: Role;

  @Prop()
  public description: string;

  @Prop({
    required: true,
  })
  public backgroundImg: string;

  @Prop({
    required: true,
  })
  public createdAt: Date;

  @Prop({
    type: String,
    enum: TrainingType,
  })
  public trainingType: TrainingType;

  @Prop({
    type: String,
    enum: TrainingLevel,
  })
  public trainingLevel: TrainingLevel;

  @Prop({
    type: String,
    enum: TrainingDuration,
  })
  public trainingDuration: TrainingDuration;

  @Prop()
  public calories: number;

  @Prop()
  public caloriesPerDay: number;

  @Prop()
  public isUserReady: boolean;

  @Prop()
  public coachMerits: string;

  @Prop()
  public isPersonalCoach: boolean;

  @Prop()
  public certificates: string;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
