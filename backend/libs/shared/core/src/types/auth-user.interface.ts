import { User } from './user.inerface';

export interface AuthUser extends User {
  passwordHash: string;
}
