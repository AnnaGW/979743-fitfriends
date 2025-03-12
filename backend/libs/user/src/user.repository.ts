import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BaseMemoryRepository } from '@backend/data-access';
import { BaseMongoRepository } from '@backend/data-access';
import { UserEntity } from './user.entity';
import { UserFactory } from './user.factory';
import { UserModel } from './user.model';

@Injectable()
export class UserRepository extends BaseMongoRepository<UserEntity, UserModel> {
  constructor(
    entityFactory: UserFactory,
    @InjectModel(UserModel.name) userModel: Model<UserModel>
  ) {
    super(entityFactory, userModel);
  }

  public async findByEmail(email: string): Promise<UserEntity | null> {
    const document = await this.model.findOne({ email }).exec();
    return this.createEntityFromDocument(document);
  }
}
// export class UserRepository extends BaseMemoryRepository<UserEntity> {
//   constructor(entityFactory: UserFactory) {
//     super(entityFactory);
//   }
//   public async findByEmail(email: string): Promise<UserEntity | null> {
//     const entities = Array.from(this.entities.values());
//     const user = entities.find((entity) => entity.email === email);

//     if (!user) {
//       return null;
//     }

//     return this.entityFactory.create(user);
//   }
// }
