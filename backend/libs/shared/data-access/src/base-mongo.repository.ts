import { Document, Model, RootFilterQuery } from 'mongoose';
import { NotFoundException } from '@nestjs/common';

import {
  Entity,
  StorableEntity,
  EntityFactory,
  SortDirection,
} from '@backend/core';
import { Repository } from './repository.interface';

export abstract class BaseMongoRepository<
  T extends Entity & StorableEntity<ReturnType<T['toPOJO']>>,
  DocumentType extends Document
> implements Repository<T>
{
  constructor(
    protected entityFactory: EntityFactory<T>,
    protected readonly model: Model<DocumentType>
  ) {}

  protected createEntityFromDocument(document: DocumentType): T | null {
    if (!document) {
      return null;
    }

    const plainObject = document.toObject({
      getters: true,
      versionKey: false,
      flattenObjectIds: true,
    }) as ReturnType<T['toPOJO']>;
    return this.entityFactory.create(plainObject);
  }

  public async findById(id: T['id']): Promise<T> {
    const document = await this.model.findById(id).exec();
    return this.createEntityFromDocument(document);
  }

  public async save(entity: T): Promise<string> {
    const newEntity = new this.model(entity.toPOJO());
    await newEntity.save();

    entity.id = newEntity._id.toString();
    return entity.id;
  }

  public async update(entity: T): Promise<void> {
    const updatedDocument = await this.model
      .findByIdAndUpdate(entity.id, entity.toPOJO(), {
        new: true,
        runValidators: true,
      })
      .exec();

    if (!updatedDocument) {
      throw new NotFoundException(`Entity with id ${entity.id} not found`);
    }
  }

  public async deleteById(id: T['id']): Promise<void> {
    const deletedDocument = await this.model.findByIdAndDelete(id).exec();
    if (!deletedDocument) {
      throw new NotFoundException(`Entity with id ${id} not found.`);
    }
  }
  public async getCollection(filter?: RootFilterQuery<T>): Promise<T[]> {
    const selection = await this.model
      .find(filter)
      .sort({ createdAt: -1 })
      .exec();
    const collection = selection.map((tr) => this.createEntityFromDocument(tr));
    return collection;
  }
}
