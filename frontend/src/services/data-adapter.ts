//преобразование данных, полученных с сервера TUserFull в данные для глобального store - TAuthProcess
import { TUserFull } from '../types/user-full';
import { TUser } from '../types/user';
import { TQuestionnarieCoachData } from '../types/questionnarie-coach-data';
import { TQuestionnarieWardData } from '../types/questionnarie-ward-data';

type AdaptedData = {
  userInfo: TUser;
  coachInfo: TQuestionnarieCoachData;
  wardInfo: TQuestionnarieWardData;
};
export function adaptData(data: TUserFull): AdaptedData {
  return {
    userInfo: {
      id: data.id,
      name: data.name,
      email: data.email,
      avatar: data.avatar,
      gender: data.gender,
      dateOfBirth: data.dateOfBirth,
      location: data.location,
      role: data.role,
      createdAt: data.createdAt,
      refreshToken: data.refreshToken,
      accessToken: data.accessToken,
    },
    coachInfo: {
      email: data.email,
      trainingType: data.trainingType,
      trainingLevel: data.trainingLevel,
      description: data.description,
      coachMerits: data.coachMerits,
      certificates: data.certificates,
      isPersonalCoach: data.isPersonalCoach,
    },
    wardInfo: {
      email: data.email,
      trainingType: data.trainingType,
      trainingDuration: data.trainingDuration,
      trainingLevel: data.trainingLevel,
      calories: data.calories,
      caloriesPerDay: data.caloriesPerDay,
    },
  };
}
