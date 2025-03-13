import { UserGender } from './user-gender.enum';
import { UserLocation } from './user-location.enum';

export interface User {
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
}
