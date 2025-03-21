import { User, TokenPayload } from '@backend/core';

export function createJWTPayload(user: User): TokenPayload {
  return {
    sub: user.id,
    name: user.name,
    email: user.email,
    avatar: user.avatar,
    gender: user.gender,
    dateOfBirth: user.dateOfBirth,
    description: user.description,
    location: user.location,
    backgroundImg: user.backgroundImg,
    createdAt: user.createdAt,
  };
}
