import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { UserGender, UserLocation, UserRole } from '../../types';
import './regform.css';
import { registrationAction } from '../../store/api-actions';
import { AppRoute } from '../../const';

function RegistrationForm(): JSX.Element {
  const [name, setName] = useState<string>('');
  const [isNameValid, setIsNameValid] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [avatarSrc, setAvatarSrc] = useState<string>();
  const [avatarFile, setAvatarFile] = useState<File>();
  const [gender, setGender] = useState<string>(UserGender.Unimportant);
  const [dateOfBirth, setDateOfBirth] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [isLocationNotEmpty, setIsLocationNotEmpty] = useState<boolean>(false);
  const [locationVisible, setLocationVisible] = useState<boolean>(false);
  const [role, setRole] = useState<string>(UserRole.Coach);
  const [checkedAgreement, setCheckedAgreement] = useState<boolean>(false);

  // const regData = {
  //   name: name,
  //   email: email,
  //   password: password,
  //   // avatar: avatar,
  //   gender: gender,
  //   dateOfBirth: dateOfBirth,
  //   location: location,
  //   role: role,
  // }
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const toggleErrorSpan = (inputElement: EventTarget & HTMLInputElement, errorMessage: string): void => {
      const errorElement = document.querySelector(`.${inputElement.id}-error`)
      if (errorElement) {
        if (errorMessage !== '') {
          inputElement.classList.add('form__type-input-error')
          errorElement.textContent = errorMessage
          errorElement.classList.add('form__error-active')
        } else {
          inputElement.classList.remove('form__type-input-error')
          errorElement.textContent = ''
          errorElement.classList.remove('form__error-active')
        }
      }
    }

    const checkInputValidity = (inputElement: EventTarget & HTMLInputElement): void => {
      if (
        inputElement.validity.patternMismatch || inputElement.validity.typeMismatch
        || inputElement.validity.rangeOverflow || inputElement.validity.rangeUnderflow
        || inputElement.validity.tooLong || inputElement.validity.tooShort
      ) {
        inputElement.setCustomValidity(inputElement.dataset.errorMessage ?? 'ошибка')
      } else {inputElement.setCustomValidity('')}
    }

    const toggleInputError = (inputElement: EventTarget & HTMLInputElement): void => {
      if (!inputElement.validity.valid) {
        toggleErrorSpan(inputElement, inputElement.validationMessage)
      } else {
        toggleErrorSpan(inputElement, '');
      }
    }
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    // валидация введенных данных
    const formData = new FormData();
    formData.set('name', name);
    formData.set('email', email);
    formData.set('password', password);
    formData.set('gender', gender);
    formData.set('dateOfBirth', dateOfBirth);
    formData.set('location', location);
    formData.set('role', role);
    // if (avatarSrc) {formData.set('avatarSrc', avatarSrc);}
    if (avatarFile) {formData.set('avatar', avatarFile)};

    console.log('Проходимся по ключам:')
      for (let key of formData.keys()) {
        console.log(key)
      }

    console.log('Проходимся по значениям:')
    for (let value of formData.values()) {
      console.log(value)
    }

    dispatch(registrationAction(formData))
    .then((serverResult) => {
      if (serverResult.type === 'user/registration/fulfilled') {
        console.log('serverResult - ', serverResult);
        // if(serverResult.payload.role === UserRole.Ward) {navigate(AppRoute.QuestionnaireWard)}
        navigate(AppRoute.QuestionnaireCoach);
      }
    });
  };

  return (
    <form id="reg-form" action="" method="get" onSubmit={handleSubmit} noValidate>
      <div className="sign-up">
        <div className="sign-up__load-photo">
          <div className="input-load-avatar">
            <label>
              <input
                id="avatar"
                className="visually-hidden"
                type="file"
                accept="image/png, image/jpeg"
                onChange={(evt) => {
                  if (evt.target.files !== null && evt.target.files !== undefined) {
                    setAvatarFile(evt.target.files[0]);
                    setAvatarSrc(URL.createObjectURL(evt.target.files[0]));
                    evt.target.value = '';
                  }}
                }
              />
              <span className="input-load-avatar__btn">
                <img src={avatarSrc ? avatarSrc : 'img/content/avatars/no-avatar.png'} className="sign-up__avatar-img"/>
                <svg width="20" height="20" aria-hidden="true">
                  <use xlinkHref="#icon-import"></use>
                </svg>
              </span>
            </label>
          </div>
          <div className="sign-up__description">
            <h2 className="sign-up__legend">Загрузите фото профиля</h2>
            <span className="sign-up__text">JPG, PNG, оптимальный размер 100&times;100&nbsp;px</span>
          </div>
        </div>
        <div className="sign-up__data">
          <div className="custom-input">
            <label>
              <span className="custom-input__label">Имя</span>
              <span className="custom-input__wrapper">
                <input
                  id="reg-name"
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-ЯЁё]{1,15}$"
                  data-error-message="Допускаются символы латиницы и кириллицы, от 1 до 15 символов."
                  minLength={1}
                  maxLength={15}
                  required
                  onChange={(evt) => {
                    checkInputValidity(evt.target);
                    setIsNameValid(evt.target.validity.valid);
                    setName(evt.target.value);
                  }}
                  onBlur={(evt) => toggleInputError(evt.target)}
                  onFocus={(evt) => toggleErrorSpan(evt.target, '')}
                />
              </span>
              <span className="form__error reg-name-error"></span>
            </label>
          </div>
          <div className="custom-input">
            <label>
              <span className="custom-input__label">E-mail</span>
              <span className="custom-input__wrapper">
                <input
                  id="reg-email"
                  type="email"
                  name="email"
                  value={email ?? ''}
                  pattern="\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}"
                  data-error-message="Укажите корректный адрес электронной почты"
                  required
                  onChange={(evt) => {
                    setEmail(evt.target.value);
                    checkInputValidity(evt.target);
                    setIsEmailValid(evt.target.validity.valid);
                  }}
                  onBlur={
                    (evt) => {
                      toggleInputError(evt.target);
                    }
                  }
                  onFocus={(evt) => toggleErrorSpan(evt.target, '')}
                />
              </span>
              <span className="form__error reg-email-error"></span>
            </label>
          </div>
          <div className="custom-input">
            <label>
              <span className="custom-input__label">Дата рождения</span>
              <span className="custom-input__wrapper">
                <input
                  id="reg-birthday"
                  type="date"
                  name="birthday"
                  data-error-message="Укажите дату Вашего рождения"
                  max="2099-12-31"
                  value={dateOfBirth ?? ''}
                  onChange={(evt) => {
                    setDateOfBirth(evt.target.value);
                    checkInputValidity(evt.target);
                  }}
                  onBlur={
                    (evt) => {
                      toggleInputError(evt.target);
                    }
                  }
                  onFocus={(evt) => toggleErrorSpan(evt.target, '')}
                />
              </span>
              <span className="form__error reg-birthday-error"></span>
            </label>
          </div>
          <div className="custom-select custom-select--not-selected">
            <span className="custom-select__label">Ваша локация</span>
            <button
              className="custom-select__button"
              type="button"
              aria-label="Выберите одну из опций"
              data-error-message="Укажите Вашу локацию"
              onFocus={(evt) => {
                setLocationVisible(true);
                console.log(evt.target.validity);
              }}
              onBlur={() => setLocationVisible(false)}
            >
              <span className="custom-select__text" style={{opacity: 0.5}}>{location}</span>
              <span className="custom-select__icon" >
                <svg width="15" height="6" aria-hidden="true">
                  <use xlinkHref="#arrow-down"></use>
                </svg>
              </span>
            </button>
            <ul
              className={locationVisible ? "custom-select__list custom-select__list--visible" : "custom-select__list"}
              role="listbox"
            >
              <li role="option" onClick={() => setLocation(UserLocation.Petrogradskaya)}>{UserLocation.Petrogradskaya}</li>
              <li role="option" onClick={() => setLocation(UserLocation.Pioneer)}>{UserLocation.Pioneer}</li>
              <li role="option" onClick={() => setLocation(UserLocation.Sports)}>{UserLocation.Sports}</li>
              <li role="option" onClick={() => setLocation(UserLocation.Starry)}>{UserLocation.Starry}</li>
              <li role="option" onClick={() => setLocation(UserLocation.Udelnaya)}>{UserLocation.Udelnaya}</li>
            </ul>
          </div>
          <div className="custom-input">
            <label>
              <span className="custom-input__label">Пароль</span>
              <span className="custom-input__wrapper">
                <input
                  id="reg-password"
                  type="password"
                  name="password"
                  autoComplete="off"
                  data-error-message="Пароль должен содержать от 6 до 12 символов"
                  minLength={6}
                  maxLength={12}
                  value={password ?? ''}
                  required
                  onChange={(evt) => {
                    checkInputValidity(evt.target);
                    setPassword(evt.target.value);
                    setIsPasswordValid(evt.target.validity.valid);
                    console.log(evt.target.validity);
                  }}
                  onBlur={(evt) => toggleInputError(evt.target)}
                  onFocus={(evt) => toggleErrorSpan(evt.target, '')}
                />
              </span>
              <span className="form__error reg-password-error"></span>
            </label>
          </div>
          <div className="sign-up__radio">
            <span className="sign-up__label">Пол</span>
            <div className="custom-toggle-radio custom-toggle-radio--big">
              <div className="custom-toggle-radio__block">
                <label>
                  <input
                    type="radio"
                    name="sex"
                    value={UserGender.Male}
                    checked={gender == UserGender.Male ? true: false}
                    onChange={() => setGender(UserGender.Male)}
                  />
                  <span className="custom-toggle-radio__icon"></span>
                  <span className="custom-toggle-radio__label">Мужской</span>
                </label>
              </div>
              <div className="custom-toggle-radio__block">
                <label>
                  <input
                    type="radio"
                    name="sex"
                    value={UserGender.Female}
                    checked={gender == UserGender.Female ? true: false}
                    onChange={() => setGender(UserGender.Female)}
                  />
                  <span className="custom-toggle-radio__icon"></span>
                  <span className="custom-toggle-radio__label">Женский</span>
                </label>
              </div>
              <div className="custom-toggle-radio__block">
                <label>
                  <input
                    type="radio"
                    name="sex"
                    value={UserGender.Unimportant}
                    checked={gender == UserGender.Unimportant ? true: false}
                    onChange={() => setGender(UserGender.Unimportant)}
                  />
                  <span className="custom-toggle-radio__icon"></span>
                  <span className="custom-toggle-radio__label">Неважно</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="sign-up__role">
          <h2 className="sign-up__legend">Выберите роль</h2>
          <div className="role-selector sign-up__role-selector">
            <div className="role-btn">
              <label>
                <input
                  className="visually-hidden"
                  type="radio" name="role"
                  value="coach"
                  checked={role == UserRole.Coach ? true: false}
                  onChange={() => setRole(UserRole.Coach)}/>
                <span className="role-btn__icon">
                  <svg width="12" height="13" aria-hidden="true">
                    <use xlinkHref="#icon-cup"></use>
                  </svg>
                </span>
                <span className="role-btn__btn">Я хочу тренировать</span>
              </label>
            </div>
            <div className="role-btn">
              <label>
                <input
                  className="visually-hidden"
                  type="radio"
                  name="role"
                  value="sportsman"
                  checked={role == UserRole.Ward ? true: false}
                  onChange={() => setRole(UserRole.Ward)}/>
                <span className="role-btn__icon">
                  <svg width="12" height="13" aria-hidden="true">
                    <use xlinkHref="#icon-weight"></use>
                  </svg>
                </span>
                <span className="role-btn__btn">Я хочу тренироваться</span>
              </label>
            </div>
          </div>
        </div>
        <div className="sign-up__checkbox">
          <label>
            <input
              type="checkbox"
              value="user-agreement"
              name="user-agreement"
              checked={checkedAgreement}
              onChange={() => setCheckedAgreement(!checkedAgreement)}
            />
            <span className="sign-up__checkbox-icon">
              <svg width="9" height="6" aria-hidden="true">
                <use xlinkHref="#arrow-check"></use>
              </svg>
            </span>
            <span className="sign-up__checkbox-label">
              Я соглашаюсь с <span>политикой конфиденциальности</span> компании
            </span>
          </label>
        </div>
        <button className="btn sign-up__button" type="submit" disabled={
          !isNameValid || !isEmailValid || !isPasswordValid || !location
        }>
          Продолжить
        </button>
        {/* <span className="form__empty-error form__error-active" id="empty-error">{isFormValid ? '' : 'Заполните все поля для отправки формы'}</span> */}
      </div>
    </form>
  );
}

export default RegistrationForm;
