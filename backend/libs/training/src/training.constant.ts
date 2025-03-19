export const TRAINING_NOT_FOUND = 'Training not found';
export const TRAINING_COLLECTION_IS_EMPTY = 'Training collection is empty';

export enum TrainingDTOValidation {
  TitleMinLength = 1,
  TitleMaxLength = 15,
  DescriptionMinLength = 10,
  DescriptionMaxLength = 140,
  CoachnMinLength = 1,
  CoachMaxLength = 15,
}

export enum TrainingValidateMessage {
  NotInTrainingLevel = 'valid values ​​for field "level" are: "новичок", "любитель", "профессионал"',
  NotInTrainingType = 'valid values ​​for field "type" are: "йога", "бег", "бокс", "стрейчинг", "кроссфит", "аэробика", "пилатес"',
  NotInTrainingDuration = 'valid values ​​for field "duration" are: "10-30 мин", "30-50 мин", "50-80 мин", "80-100 мин"',
  NotInTrainingGender = 'valid values ​​for field "gender" are: "для женщин", "для мужчин", "для всех"',
  BackgroungImgFileTypeIsNotValid = 'valid file type for backgroungImg are .jpg or png',
  VideoFileTypeIsNotValid = 'valid file type for video are .mov, .avi or mp4',
  CoachNameIsNotValid = 'valid value ​​for field coach is letters of Russian/English alphabet only',
}
