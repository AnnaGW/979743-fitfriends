import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { File } from '@backend/core';

@Schema({
  collection: 'files',
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class FileUploaderModel extends Document implements File {
  @Prop({
    required: true,
  })
  public originalName: string;

  @Prop({
    required: true,
  })
  public hashName: string;

  @Prop({
    required: true,
  })
  public subDirectory: string;

  @Prop({
    required: true,
  })
  public mimetype: string;

  @Prop({
    required: true,
  })
  public path: string;

  @Prop({
    required: true,
  })
  public size: number;

  public id?: string;

  public createdAt: Date;

  public updatedAt: Date;
}

export const FileUploaderSchema =
  SchemaFactory.createForClass(FileUploaderModel);

FileUploaderSchema.virtual('id').get(function () {
  return this._id.toString();
});
