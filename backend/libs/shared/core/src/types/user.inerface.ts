import { UserGender } from './user-gender.enum';

export interface User {
  id?: string;
  name: string;
  email: string;
  avatar?: string;
  gender: UserGender;
  dateOfBirth: Date;
  description: string;
  location: string;
  backgroundImg: string;
}
