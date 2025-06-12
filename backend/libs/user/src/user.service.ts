import { JwtService } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import {
  Injectable,
  Inject,
  ConflictException,
  HttpException,
  HttpStatus,
  NotFoundException,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import dayjs from 'dayjs';
import { Token, Ward, Coach } from '@backend/core';
import { createJWTPayload } from '@backend/helpers';
import { UserRepository } from './user.repository';
import { RefreshTokenService } from './refresh-token-module/refresh-token.service';
import { UserEntity } from './user.entity';
import { CreateUserCommonDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { jwtConfig } from '@backend/user-config';
import {
  AUTH_USER_EXISTS,
  AUTH_USER_NOT_FOUND,
  AUTH_USER_PASSWORD_WRONG,
} from './user.constant';
import { UpdateCoachDto } from './dto/update-coach.dto';
import { UpdateWardDto } from './dto/update-ward.dto';

type User = Ward & Coach;

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
    @Inject(jwtConfig.KEY)
    private readonly jwtOptions: ConfigType<typeof jwtConfig>,
    private readonly refreshTokenService: RefreshTokenService
  ) {}

  public async register(dto: CreateUserCommonDto): Promise<UserEntity> {
    const {
      name,
      email,
      password,
      avatar,
      avatarID,
      dateOfBirth,
      location,
      gender,
      role,
    } = dto;

    const user = {
      name,
      email,
      passwordHash: '',
      avatar,
      avatarID,
      dateOfBirth: dayjs(dateOfBirth).toDate(),
      location,
      gender,
      role,
      backgroundImg: 'default.png',
      createdAt: new Date(),
    };

    const existUser = await this.userRepository.findByEmail(email);

    if (existUser) {
      throw new ConflictException(AUTH_USER_EXISTS);
    }

    const userEntity = await new UserEntity(user).setPassword(password);

    await this.userRepository.save(userEntity);

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

  public async getUserByEmail(email: string) {
    const existUser = await this.userRepository.findByEmail(email);

    if (!existUser) {
      throw new NotFoundException(`User with email ${email} not found`);
    }

    return existUser;
  }

  public async createUserToken(user: User): Promise<Token> {
    const accessTokenPayload = createJWTPayload(user);
    const refreshTokenPayload = {
      ...accessTokenPayload,
      tokenId: crypto.randomUUID(),
    };
    await this.refreshTokenService.createRefreshSession(refreshTokenPayload);

    try {
      const accessToken = await this.jwtService.signAsync(accessTokenPayload);
      const refreshToken = await this.jwtService.signAsync(
        refreshTokenPayload,
        {
          secret: this.jwtOptions.refreshTokenSecret,
          expiresIn: this.jwtOptions.refreshTokenExpiresIn,
        }
      );
      return { accessToken, refreshToken };
    } catch (error) {
      this.logger.error('[Token generation error]: ' + error.message);
      throw new HttpException(
        'Ошибка при создании токена.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  public async deleteUserToken(tokenId: string): Promise<void> {
    //обращение к сервису refreshTokenService
  }

  public async updateCoach(dto: UpdateCoachDto): Promise<UserEntity> {
    const existUserEntity = await this.userRepository.findByEmail(dto.email);

    if (!existUserEntity) {
      throw new ConflictException(AUTH_USER_NOT_FOUND);
    }
    const updatedUser = { ...existUserEntity.toPOJO(), ...dto };
    existUserEntity.populate(updatedUser);

    await this.userRepository.update(existUserEntity);

    return existUserEntity;
  }
  public async updateWard(dto: UpdateWardDto): Promise<UserEntity> {
    const existUserEntity = await this.userRepository.findByEmail(dto.email);

    if (!existUserEntity) {
      throw new ConflictException(AUTH_USER_NOT_FOUND);
    }
    const updatedUser = { ...existUserEntity.toPOJO(), ...dto };
    existUserEntity.populate(updatedUser);

    await this.userRepository.update(existUserEntity);

    return existUserEntity;
  }
}
