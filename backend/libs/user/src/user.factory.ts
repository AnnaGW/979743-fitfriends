import { Injectable } from '@nestjs/common';
import { AuthUser, EntityFactory } from '@backend/core';
import { UserEntity } from './user.entity';

@Injectable()
export class UserFactory implements EntityFactory<UserEntity> {
  public create(entityPlainData: AuthUser): UserEntity {
    return new UserEntity(entityPlainData);
  }
}
