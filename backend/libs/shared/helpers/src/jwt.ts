import { UserCommon, TokenPayload, Coach, Ward } from '@backend/core';

type User = Ward & Coach;

export function createJWTPayload(user: User): TokenPayload {
  return {
    sub: user.id,
    name: user.name,
    email: user.email,
    avatar: user.avatar,
    dateOfBirth: user.dateOfBirth,
    location: user.location,
    gender: user.gender,
    role: user.role,
    createdAt: user.createdAt,
    description: user.description,
    backgroundImg: user.backgroundImg,
    trainingType: user.trainingType,
    trainingLevel: user.trainingLevel,
    trainingDuration: user.trainingDuration,
    calories: user.calories,
    caloriesPerDay: user.caloriesPerDay,
    isUserReady: user.isUserReady,
    coachMerits: user.coachMerits,
    isPersonalCoach: user.isPersonalCoach,
    certificates: user.certificates,
  };
}
