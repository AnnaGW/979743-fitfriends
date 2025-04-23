import { UserCommon } from './user-common.interface';

export interface AuthUserCommon extends UserCommon {
  passwordHash: string;
}
