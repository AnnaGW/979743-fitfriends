import { Role, UserGender, UserLocation } from '@backend/core';

export interface UserCommon {
  id?: string;
  name: string;
  email: string;
  avatar?: string;
  dateOfBirth?: Date;
  location: UserLocation;
  gender: UserGender;
  role: Role;
  createdAt: Date;
}
