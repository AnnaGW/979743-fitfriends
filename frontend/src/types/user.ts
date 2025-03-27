import { UserGender, UserLocation } from '../const';

export type TUser = {
  id?: string;
  name: string;
  email: string;
  avatar?: string;
  gender: UserGender;
  dateOfBirth?: Date;
  description?: string;
  location: UserLocation;
  backgroundImg: string;
  createdAt: Date;
  refreshToken: string;
};
