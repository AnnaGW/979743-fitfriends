import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { UserGender, UserLocation, UserRole } from '../../const';
import './regform.css';
import { registrationAction } from '../../store/api-actions';
import { AppRoute } from '../../const';


function RegistrationForm(): JSX.Element {
  const [regName, setRegName] = useState<string>('');
  const [regEmail, setRegEmail] = useState<string>('');
  const [regPassword, setRegPassword] = useState<string>('');
  const [regAvatar, setRegAvatar] = useState<string>('');
  const [regGender, setRegGender] = useState<string>(UserGender.Unimportant);
  const [regDateOfBirth, setRegdateOfBirth] = useState<string>('');
  const [regLocation, setRegLocation] = useState<string>('');
  const [locationVisible, setLocationVisible] = useState<boolean>(false);
  const [regBackgroundImg, setRegBackgroundImg] = useState<string>('');
  const [regRole, setRegRole] = useState<string>(UserRole.Coach);
  const [checkedAgreement, setCheckedAgreement] = useState<boolean>(true);

  const regData = {
    name: regName,
    email: regEmail,
    password: regPassword,
    avatar: regAvatar,
    gender: regGender,
    dateOfBirth: regDateOfBirth,
    location: regLocation,
    backgroundImg: regBackgroundImg,
    // regRole: regRole,
  }

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    // валидация введенных данных
    console.log('regData - ', regData);
    dispatch(registrationAction(regData))
    .then((serverRusult) => {
      if (serverRusult.type === 'user/login/fulfilled') {
        navigate(AppRoute.Main);
      }
    });
  };

  return (
    <form action="" method="get" onSubmit={handleSubmit}>
      <div className="sign-up">
        <div className="sign-up__load-photo">
          <div className="input-load-avatar">
            <label>
              <input className="visually-hidden" type="file" accept="image/png, image/jpeg" />
              <span className="input-load-avatar__btn">
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
                <input type="text" name="name" value={regName ?? ''} onChange={(evt) => setRegName(evt.target.value)} id="reg-name" />
              </span>
            </label>
          </div>
          <div className="custom-input">
            <label>
              <span className="custom-input__label">E-mail</span>
              <span className="custom-input__wrapper">
                <input type="email" name="email" value={regEmail ?? ''} onChange={(evt) => setRegEmail(evt.target.value)} id="reg-email" />
              </span>
            </label>
          </div>
          <div className="custom-input">
            <label>
              <span className="custom-input__label">Дата рождения</span>
              <span className="custom-input__wrapper">
                <input type="date" name="birthday" max="2099-12-31" value={regDateOfBirth ?? ''} onChange={(evt) => setRegdateOfBirth(evt.target.value)} id="reg-birthday" />
              </span>
            </label>
          </div>
          <div className="custom-select custom-select--not-selected">
            <span className="custom-select__label">Ваша локация</span>
            <button className="custom-select__button" type="button" aria-label="Выберите одну из опций" onFocus={() => setLocationVisible(true)} onBlur={() => setLocationVisible(false)}>
              <span className="custom-select__text" style={{opacity: 0.5}}>{regLocation}</span>
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
              <li role="option" onClick={() => setRegLocation(UserLocation.Petrogradskaya)}>{UserLocation.Petrogradskaya}</li>
              <li role="option" onClick={() => setRegLocation(UserLocation.Pioneer)}>{UserLocation.Pioneer}</li>
              <li role="option" onClick={() => setRegLocation(UserLocation.Sports)}>{UserLocation.Sports}</li>
              <li role="option" onClick={() => setRegLocation(UserLocation.Starry)}>{UserLocation.Starry}</li>
              <li role="option" onClick={() => setRegLocation(UserLocation.Udelnaya)}>{UserLocation.Udelnaya}</li>
            </ul>
          </div>
          <div className="custom-input">
            <label>
              <span className="custom-input__label">Пароль</span>
              <span className="custom-input__wrapper">
                <input type="password" name="password" autoComplete="off" value={regPassword ?? ''} onChange={(evt) => setRegPassword(evt.target.value)} id="reg-password"/>
              </span>
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
                    checked={regGender == UserGender.Male ? true: false}
                    onChange={() => setRegGender(UserGender.Male)}
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
                    checked={regGender == UserGender.Female ? true: false}
                    onChange={() => setRegGender(UserGender.Female)}
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
                    checked={regGender == UserGender.Unimportant ? true: false}
                    onChange={() => setRegGender(UserGender.Unimportant)}
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
                  checked={regRole == UserRole.Coach ? true: false}
                  onChange={() => setRegRole(UserRole.Coach)}/>
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
                  checked={regRole == UserRole.Sportsman ? true: false}
                  onChange={() => setRegRole(UserRole.Sportsman)}/>
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
        <button className="btn sign-up__button" type="submit" disabled={!checkedAgreement}>
          Продолжить
        </button>
      </div>
    </form>
  );
}

export default RegistrationForm;
