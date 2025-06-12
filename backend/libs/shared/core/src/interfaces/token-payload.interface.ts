import {
  UserGender,
  UserLocation,
  Role,
  TrainingType,
  TrainingDuration,
  TrainingLevel,
} from '@backend/core';
export interface TokenPayload {
  sub: string;
  name: string;
  email: string;
  avatar?: string;
  dateOfBirth?: Date;
  location: UserLocation;
  gender: UserGender;
  role: Role;
  createdAt: Date;
  description?: string;
  backgroundImg?: string;
  trainingType?: TrainingType[];
  trainingLevel?: TrainingLevel;
  trainingDuration?: TrainingDuration;
  calories?: number;
  caloriesPerDay?: number;
  isUserReady?: boolean;
  coachMerits?: string;
  isPersonalCoach?: boolean;
  certificates?: string;
}
