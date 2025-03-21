import { UserGender, UserLocation } from '@backend/core';
export interface TokenPayload {
  sub: string;
  email: string;
  name: string;
  avatar?: string;
  gender: UserGender;
  dateOfBirth?: Date;
  description?: string;
  location: UserLocation;
  backgroundImg: string;
  createdAt: Date;
}
