import { UserGender, UserLocation } from '../const';

export type TUser = {
  id?: string;
  name: string;
  email: string;
  avatar?: string;
  gender: UserGender;
  dateOfBirth?: string;
  description?: string;
  location: UserLocation;
  backgroundImg: string;
  createdAt: string;
  refreshToken: string;
  accessToken: string;
};
