import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  Training,
  TrainingLevel,
  TrainingType,
  TrainingDuration,
  TrainingGender,
} from '@backend/core';
@Schema({
  collection: 'training',
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class TrainingModel extends Document implements Training {
  @Prop({
    required: true,
  })
  public title: string;

  @Prop({
    required: true,
  })
  public backgroungImg: string;

  @Prop({
    required: true,
    type: String,
    enum: TrainingLevel,
  })
  public level: TrainingLevel;

  @Prop({
    required: true,
    type: String,
    enum: TrainingType,
  })
  public type: TrainingType;

  @Prop({
    required: true,
    type: String,
    enum: TrainingDuration,
  })
  public duration: TrainingDuration;

  @Prop({
    required: true,
  })
  public price: number;

  @Prop({
    required: true,
  })
  public calories: number;

  @Prop({
    required: true,
  })
  public description: string;

  @Prop({
    required: true,
    type: String,
    enum: TrainingGender,
  })
  public gender: TrainingGender;

  @Prop({
    required: true,
  })
  public video: string;

  @Prop({
    required: true,
  })
  public rating: number;

  @Prop({
    required: true,
  })
  public coach: string;

  @Prop({
    required: true,
  })
  public specialOffer: boolean;
}

export const TrainingSchema = SchemaFactory.createForClass(TrainingModel);
