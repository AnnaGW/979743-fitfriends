import { Helmet } from 'react-helmet-async';
import { FormEvent, ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { AppRoute } from '../../const';
import { TrainingDuration, TrainingLevel } from '../../types';

function QuestionnaireWardPage(): JSX.Element {
  const [trainingType, setTrainingType] = useState<string[]>([]);
  const [trainingDuration, setTrainingDuration] = useState<string>(TrainingDuration.Short);
  const [trainingLevel, setTrainingLevel] = useState<string>(TrainingLevel.Junior);
  const [calories, setCalories] = useState<number>(1000);
  const [caloriesPerDay, setCaloriesPerDay] = useState<number>(1000);

  const QuestionnaireWardData = {
    trainingType: trainingType,
    trainingDuration: trainingDuration,
    trainingLevel: trainingLevel,
    calories: calories,
    caloriesPerDay: caloriesPerDay,
  };

  const choiceTrainingType = (evt: ChangeEvent<HTMLInputElement>) => {
    if (trainingType.includes(evt.target.value)) {
      const filtered = trainingType.filter((el) => el !== evt.target.value);
      setTrainingType(filtered);
      evt.target.checked = false;
      return;
    }
    trainingType.push(evt.target.value);
    setTrainingType(trainingType);
    evt.target.checked = true;
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    // валидация введенных данных
  };

  return (
    <>
      <Helmet>
        <title>Опросник — FitFriends</title>
      </Helmet>
      <div className="wrapper">
        <main>
          <div className="background-logo">
            <svg className="background-logo__logo" width="750" height="284" aria-hidden="true">
              <use xlinkHref="#logo-big"></use>
            </svg>
            <svg className="background-logo__icon" width="343" height="343" aria-hidden="true">
              <use xlinkHref="#icon-logotype"></use>
            </svg>
          </div>
          <div className="popup-form popup-form--questionnaire-user">
            <div className="popup-form__wrapper">
              <div className="popup-form__content">
                <div className="popup-form__form">
                  <form method="get" onSubmit={handleSubmit}>
                    <div className="questionnaire-user">
                      <h1 className="visually-hidden">Опросник</h1>
                      <div className="questionnaire-user__wrapper">
                        <div className="questionnaire-user__block">
                          <span className="questionnaire-user__legend">Ваша специализация (тип) тренировок</span>
                          <div className="specialization-checkbox questionnaire-user__specializations">
                            <div className="btn-checkbox">
                              <label>
                                <input
                                  className="visually-hidden"
                                  type="checkbox"
                                  name="specialisation"
                                  value="yoga"
                                  onChange={choiceTrainingType}
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
                                  value="running"
                                  onChange={choiceTrainingType}
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
                                  value="power"
                                  onChange={choiceTrainingType}
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
                                  value="aerobics"
                                  onChange={choiceTrainingType}
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
                                  value="crossfit"
                                  onChange={choiceTrainingType}
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
                                  value="boxing"
                                  onChange={choiceTrainingType}
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
                                  value="pilates"
                                  onChange={choiceTrainingType}
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
                                  value="stretching"
                                  onChange={choiceTrainingType}
                                />
                                <span className="btn-checkbox__btn">Стрейчинг</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="questionnaire-user__block">
                          <span className="questionnaire-user__legend">
                            Сколько времени вы готовы уделять на тренировку в день
                          </span>
                          <div className="custom-toggle-radio custom-toggle-radio--big questionnaire-user__radio">
                            <div className="custom-toggle-radio__block">
                              <label>
                                <input
                                  type="radio"
                                  name="time"
                                  checked={trainingDuration == TrainingDuration.Short ? true : false}
                                  onChange={() => setTrainingDuration(TrainingDuration.Short)}
                                />
                                <span className="custom-toggle-radio__icon"></span>
                                <span className="custom-toggle-radio__label">10-30 мин</span>
                              </label>
                            </div>
                            <div className="custom-toggle-radio__block">
                              <label>
                                <input
                                  type="radio"
                                  name="time"
                                  checked={trainingDuration == TrainingDuration.Middle ? true : false}
                                  onChange={() => setTrainingDuration(TrainingDuration.Middle)}
                                />
                                <span className="custom-toggle-radio__icon"></span>
                                <span className="custom-toggle-radio__label">30-50 мин</span>
                              </label>
                            </div>
                            <div className="custom-toggle-radio__block">
                              <label>
                                <input
                                  type="radio"
                                  name="time"
                                  checked={trainingDuration == TrainingDuration.Long ? true : false}
                                  onChange={() => setTrainingDuration(TrainingDuration.Long)}
                                />
                                <span className="custom-toggle-radio__icon"></span>
                                <span className="custom-toggle-radio__label">50-80 мин</span>
                              </label>
                            </div>
                            <div className="custom-toggle-radio__block">
                              <label>
                                <input
                                  type="radio"
                                  name="time"
                                  checked={trainingDuration == TrainingDuration.SuperLong ? true : false}
                                  onChange={() => setTrainingDuration(TrainingDuration.SuperLong)}
                                />
                                <span className="custom-toggle-radio__icon"></span>
                                <span className="custom-toggle-radio__label">80-100 мин</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="questionnaire-user__block">
                          <span className="questionnaire-user__legend">Ваш уровень</span>
                          <div className="custom-toggle-radio custom-toggle-radio--big questionnaire-user__radio">
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
                        <div className="questionnaire-user__block">
                          <div className="questionnaire-user__calories-lose">
                            <span className="questionnaire-user__legend">Сколько калорий хотите сбросить</span>
                            <div className="custom-input custom-input--with-text-right questionnaire-user__input">
                              <label>
                                <span className="custom-input__wrapper">
                                  <input
                                    type="number"
                                    name="calories-lose"
                                    value={calories}
                                    onChange={(evt) => setCalories(Number(evt.target.value))}
                                  />
                                  <span className="custom-input__text">ккал</span>
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className="questionnaire-user__calories-waste">
                            <span className="questionnaire-user__legend">Сколько калорий тратить в день</span>
                            <div className="custom-input custom-input--with-text-right questionnaire-user__input">
                              <label>
                                <span className="custom-input__wrapper">
                                  <input
                                    type="number"
                                    name="calories-waste"
                                    value={caloriesPerDay}
                                    onChange={(evt) => setCaloriesPerDay(Number(evt.target.value))}
                                  />
                                  <span className="custom-input__text">ккал</span>
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="btn questionnaire-user__button" type="submit">
                        Продолжить
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <script src="js/vendor.min.js"></script>
      <script src="js/main.min.js"></script>
    </>
  );
}

export default QuestionnaireWardPage;
