import { UserGender, UserLocation } from '../types';

export type TUser = {
  id?: string;
  name: string;
  email: string;
  avatar?: string;
  gender: UserGender;
  dateOfBirth?: string;
  location: UserLocation;
  createdAt: string;
  refreshToken: string;
  accessToken: string;
};
