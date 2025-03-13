import { genSalt, hash, compare } from 'bcrypt';
import { AuthUser, Entity, StorableEntity, UserGender } from '@backend/core';
import { SALT_ROUNDS } from './user.constant';
import { UserLocation } from '@backend/core';

export class UserEntity extends Entity implements StorableEntity<AuthUser> {
  public email: string;
  public name: string;
  public avatar?: string;
  public passwordHash: string;
  public gender: UserGender;
  public dateOfBirth?: Date;
  public description?: string;
  public location: UserLocation;
  public backgroundImg: string;

  constructor(user?: AuthUser) {
    super();
    this.populate(user);
  }

  public populate(user?: AuthUser): void {
    if (!user) {
      return;
    }
    this.id = user.id ?? ''; // TODO: this.id = user.id ?? '';
    this.email = user.email;
    this.name = user.name;
    this.avatar = user.avatar;
    this.passwordHash = user.passwordHash;
    this.gender = user.gender;
    this.dateOfBirth = user.dateOfBirth;
    this.description = user.description;
    this.location = user.location;
    this.backgroundImg = user.backgroundImg;
  }

  public toPOJO(): AuthUser {
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
