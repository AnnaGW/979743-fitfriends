import { Entity, StorableEntity } from '@backend/core';

export interface Repository<T extends Entity> {
  findById(id: T['id']): Promise<T | null>;
  save(entity: T): Promise<string>;
  update(entity: T): Promise<void>;
  deleteById(id: T['id']): Promise<void>;
}
