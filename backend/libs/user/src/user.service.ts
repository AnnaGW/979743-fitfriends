import {
  Injectable,
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as dayjs from 'dayjs';
import { UserRepository } from './user.repository';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import {
  AUTH_USER_EXISTS,
  AUTH_USER_NOT_FOUND,
  AUTH_USER_PASSWORD_WRONG,
} from './user.constant';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  public async register(dto: CreateUserDto): Promise<UserEntity> {
    const {
      name,
      email,
      password,
      avatar,
      gender,
      dateOfBirth,
      description,
      location,
      backgroundImg,
    } = dto;

    const user = {
      name,
      email,
      passwordHash: '',
      avatar,
      gender,
      // dateBirth: dayjs(dateOfBirth).toDate(),
      dateBirth: new Date(dateOfBirth),
      description,
      location,
      backgroundImg,
    };

    const existUser = await this.userRepository.findByEmail(email);

    if (existUser) {
      throw new ConflictException(AUTH_USER_EXISTS);
    }

    const userEntity = await new UserEntity(user).setPassword(password);

    this.userRepository.save(userEntity);
    return userEntity;
  }

  public async verifyUser(dto: LoginUserDto) {
    const { email, password } = dto;
    const existUser = await this.userRepository.findByEmail(email);

    if (!existUser) {
      throw new NotFoundException(AUTH_USER_NOT_FOUND);
    }

    if (!(await existUser.comparePassword(password))) {
      throw new UnauthorizedException(AUTH_USER_PASSWORD_WRONG);
    }

    return existUser;
  }

  public async getUser(id: string) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFoundException(AUTH_USER_NOT_FOUND);
    }

    return user;
  }
}
