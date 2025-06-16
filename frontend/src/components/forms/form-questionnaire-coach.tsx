import { FormEvent, ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrainingLevel, TrainingType } from '../../types';
import './regform.css';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { saveFile } from '../../services/saving-files';
import { TQuestionnarieCoachData } from '../../types/questionnarie-coach-data';
import { updateCoach } from '../../store/api-actions';
import { AppRoute } from '../../const';

function QuestionnaireCoachForm(): JSX.Element {
  const userInfo = useAppSelector((state) => state.userInfo);

  const [trainingType, setTrainingType] = useState<string[]>([]);
  const [trainingTypeCount, setTrainingTypeCount] = useState<number>(0);
  const [trainingLevel, setTrainingLevel] = useState<TrainingLevel>(TrainingLevel.Junior);
  const [coachMerits, setCoachMerits] = useState<string>('');
  const [certificatesSrc, setCertificatesSrc] = useState<string>('');
  const [certificateFile, setCertificateFile] = useState<File>();
  const [isPersonalCoach, setIsPersonalCoach] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const choiceTrainingType = (evt: ChangeEvent<HTMLInputElement>) => {
    if (trainingType.includes(evt.target.value)) {
      const filtered = trainingType.filter((el) => el !== evt.target.value);
      setTrainingType(filtered);
      evt.target.checked = false;
      setTrainingTypeCount(filtered.length);
      return;
    }
    trainingType.push(evt.target.value);
    setTrainingType(trainingType);
    evt.target.checked = true;
    setTrainingTypeCount(trainingType.length);
  };

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    let updatedCoach: TQuestionnarieCoachData;

    const questionnaireCoachData = {
      email: userInfo.email ?? '',
      trainingType: trainingType,
      trainingLevel: trainingLevel,
      coachMerits: coachMerits,
      isPersonalCoach: isPersonalCoach,
      certificates: '',
    };

    if (certificateFile) {
      const formData = new FormData();
      formData.set('avatar', certificateFile, certificateFile?.name);
      const savedFileInfo = await saveFile(formData);

      updatedCoach = {
        ...questionnaireCoachData,
        certificates: savedFileInfo.id,
      };
    } else {
      updatedCoach = {
        ...questionnaireCoachData,
      };
    }
    console.log('Что отправилось на сервер - ', updatedCoach);

    dispatch(updateCoach(updatedCoach)).then((serverResult) => {
      if (serverResult.type === 'user/updateCoach/fulfilled') {
        console.log('что вернулось с сервера - ', serverResult.payload);
        navigate(AppRoute.PersonalAccountCoach);
      }
    });
  };

  return (
    <form method="get" encType="multipart/form-data" onSubmit={handleSubmit}>
      <div className="questionnaire-coach">
        <h1 className="visually-hidden">Опросник</h1>
        <div className="questionnaire-coach__wrapper">
          <div className="questionnaire-coach__block">
            <span className="questionnaire-coach__legend">Ваша специализация (тип) тренировок</span>
            <div className="specialization-checkbox questionnaire-coach__specializations">
              <div className="btn-checkbox">
                <label>
                  <input
                    className="visually-hidden"
                    type="checkbox"
                    name="specialisation"
                    value={TrainingType.Yoga}
                    onInput={choiceTrainingType}
                  />
                  <span className="btn-checkbox__btn">Йога</span>
                </label>
              </div>
              <div className="btn-checkbox">
                <label>
                  <input
                    className="visually-hidden"
                    type="checkbox"
                    name="specialisation"
                    value={TrainingType.Running}
                    onInput={choiceTrainingType}
                  />
                  <span className="btn-checkbox__btn">Бег</span>
                </label>
              </div>
              <div className="btn-checkbox">
                <label>
                  <input
                    className="visually-hidden"
                    type="checkbox"
                    name="specialisation"
                    value={TrainingType.Power}
                    onInput={choiceTrainingType}
                  />
                  <span className="btn-checkbox__btn">Силовые</span>
                </label>
              </div>
              <div className="btn-checkbox">
                <label>
                  <input
                    className="visually-hidden"
                    type="checkbox"
                    name="specialisation"
                    value={TrainingType.Aerobics}
                    onInput={choiceTrainingType}
                  />
                  <span className="btn-checkbox__btn">Аэробика</span>
                </label>
              </div>
              <div className="btn-checkbox">
                <label>
                  <input
                    className="visually-hidden"
                    type="checkbox"
                    name="specialisation"
                    value={TrainingType.Crossfit}
                    onInput={choiceTrainingType}
                  />
                  <span className="btn-checkbox__btn">Кроссфит</span>
                </label>
              </div>
              <div className="btn-checkbox">
                <label>
                  <input
                    className="visually-hidden"
                    type="checkbox"
                    name="specialisation"
                    value={TrainingType.Boxing}
                    onInput={choiceTrainingType}
                  />
                  <span className="btn-checkbox__btn">Бокс</span>
                </label>
              </div>
              <div className="btn-checkbox">
                <label>
                  <input
                    className="visually-hidden"
                    type="checkbox"
                    name="specialisation"
                    value={TrainingType.Pilates}
                    onInput={choiceTrainingType}
                  />
                  <span className="btn-checkbox__btn">Пилатес</span>
                </label>
              </div>
              <div className="btn-checkbox">
                <label>
                  <input
                    className="visually-hidden"
                    type="checkbox"
                    name="specialisation"
                    value={TrainingType.Stretching}
                    onInput={choiceTrainingType}
                  />
                  <span className="btn-checkbox__btn">Стрейчинг</span>
                </label>
              </div>
            </div>
            <span className={trainingTypeCount > 3 ? 'form__error form__error-active' : 'form__error'}>
              {trainingTypeCount > 3 ? 'Можно выбрать только три типа тренировок' : ''}
            </span>
            <span className={trainingTypeCount === 0 ? 'form__error form__error-active' : 'form__error'}>
              {trainingTypeCount === 0 ? 'Выберите тип тренировки' : ''}
            </span>
          </div>
          <div className="questionnaire-coach__block">
            <span className="questionnaire-coach__legend">Ваш уровень</span>
            <div className="custom-toggle-radio custom-toggle-radio--big questionnaire-coach__radio">
              <div className="custom-toggle-radio__block">
                <label>
                  <input
                    type="radio"
                    name="level"
                    checked={trainingLevel == TrainingLevel.Junior ? true : false}
                    onChange={() => setTrainingLevel(TrainingLevel.Junior)}
                  />
                  <span className="custom-toggle-radio__icon"></span>
                  <span className="custom-toggle-radio__label">Новичок</span>
                </label>
              </div>
              <div className="custom-toggle-radio__block">
                <label>
                  <input
                    type="radio"
                    name="level"
                    checked={trainingLevel == TrainingLevel.Dilettante ? true : false}
                    onChange={() => setTrainingLevel(TrainingLevel.Dilettante)}
                  />
                  <span className="custom-toggle-radio__icon"></span>
                  <span className="custom-toggle-radio__label">Любитель</span>
                </label>
              </div>
              <div className="custom-toggle-radio__block">
                <label>
                  <input
                    type="radio"
                    name="level"
                    checked={trainingLevel == TrainingLevel.Professional ? true : false}
                    onChange={() => setTrainingLevel(TrainingLevel.Professional)}
                  />
                  <span className="custom-toggle-radio__icon"></span>
                  <span className="custom-toggle-radio__label">Профессионал</span>
                </label>
              </div>
            </div>
          </div>
          <div className="questionnaire-coach__block">
            <span className="questionnaire-coach__legend">Ваши дипломы и сертификаты</span>
            <div className="drag-and-drop questionnaire-coach__drag-and-drop">
              <label>
                <span className="drag-and-drop__label" tabIndex={0}>
                  {certificatesSrc ? certificatesSrc : 'Загрузите сюда файлы формата PDF, JPG или PNG'}
                  <svg width="20" height="20" aria-hidden="true">
                    <use xlinkHref="#icon-import"></use>
                  </svg>
                </span>
                <input
                  type="file"
                  name="import"
                  tabIndex={-1}
                  accept=".pdf, .jpg, .png"
                  onChange={(evt) => {
                    if (evt.target.files !== null && evt.target.files !== undefined) {
                      setCertificatesSrc(evt.target.files[0].name);
                      setCertificateFile(evt.target.files[0]);
                      evt.target.value = '';
                    }
                  }}
                />
              </label>
            </div>
          </div>
          <div className="questionnaire-coach__block">
            <span className="questionnaire-coach__legend">Расскажите о своём опыте, который мы сможем проверить</span>
            <div className="custom-textarea questionnaire-coach__textarea">
              <label>
                <textarea
                  name="description"
                  placeholder=" "
                  value={coachMerits ?? ''}
                  onChange={(evt) => {
                    setCoachMerits(evt.target.value);
                  }}
                ></textarea>
              </label>
            </div>
            <div className="questionnaire-coach__checkbox">
              <label>
                <input
                  type="checkbox"
                  value="individual-training"
                  name="individual-training"
                  checked={isPersonalCoach}
                  onChange={() => setIsPersonalCoach(!isPersonalCoach)}
                />
                <span className="questionnaire-coach__checkbox-icon">
                  <svg width="9" height="6" aria-hidden="true">
                    <use xlinkHref="#arrow-check"></use>
                  </svg>
                </span>
                <span className="questionnaire-coach__checkbox-label">
                  Хочу дополнительно индивидуально тренировать
                </span>
              </label>
            </div>
          </div>
        </div>
        <button
          className="btn questionnaire-coach__button"
          type="submit"
          disabled={trainingTypeCount === 0 || !certificatesSrc}
        >
          Продолжить
        </button>
      </div>
    </form>
  );
}

export default QuestionnaireCoachForm;
