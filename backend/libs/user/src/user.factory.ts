import { Injectable } from '@nestjs/common';
import { AuthUserCommon, EntityFactory } from '@backend/core';
import { UserEntity } from './user.entity';

@Injectable()
export class UserFactory implements EntityFactory<UserEntity> {
  public create(entityPlainData: AuthUserCommon): UserEntity {
    return new UserEntity(entityPlainData);
  }
}
