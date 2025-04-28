import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseMongoRepository } from '@backend/data-access';

import { FileUploaderEntity } from './file-uploader.entity';
import { FileUploaderFactory } from './file-uploader.factory';
import { FileUploaderModel } from './file-uploader.model';

@Injectable()
export class FileUploaderRepository extends BaseMongoRepository<
  FileUploaderEntity,
  FileUploaderModel
> {
  constructor(
    entityFactory: FileUploaderFactory,
    @InjectModel(FileUploaderModel.name) fileModel: Model<FileUploaderModel>
  ) {
    super(entityFactory, fileModel);
  }
}
