import { UserGender, UserLocation, UserRole } from '../types';

export type TUser = {
  id?: string;
  name: string;
  email: string;
  avatar?: string;
  gender: UserGender;
  dateOfBirth?: string;
  location: UserLocation;
  role: UserRole;
  createdAt: string;
  refreshToken: string;
  accessToken: string;
};
