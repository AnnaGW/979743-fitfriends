import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
// import { checkAuthorization, userInfo } from '../../store/action';
// import { AuthorizationStatus, UserGender, UserLocation } from '../../const';
import { PASSWORD_PATTERN, EMAIL_PATTERN, AppRoute } from '../../const';
import { useNavigate } from 'react-router-dom';

function LoginForm(): JSX.Element {
  const [login, setLogin] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
     if (login !== null && password !== null) {
         dispatch(loginAction({
           login: login,
           password: password
         }))
        //  .then((serverRusult) => {
        //   if (serverRusult.type === 'user/login/fulfilled') {
        //     navigate(AppRoute.Main);
        //   }
        // });
     }
  };

  // посмотреть в ТЗ куда перенаправлять после успешной авторизации - на главную?

  return (
    <form action="" method="post" onSubmit={handleSubmit}>
      <div className="sign-in">
        <div className="custom-input sign-in__input">
          <label>
            <span className="custom-input__label">E-mail</span>
            <span className="custom-input__wrapper">
              <input
                type="email"
                name="email"
                value={login ?? ''}
                onChange={(evt) => setLogin(evt.target.value)}
                placeholder="Email"
                required={false}
                id="auth-name"
              />
            </span>
          </label>
        </div>
        <div className="custom-input sign-in__input">
          <label>
            <span className="custom-input__label">Пароль</span>
            <span className="custom-input__wrapper">
              <input
                type="password"
                name="password"
                value={password ?? ''}
                onChange={(evt) => setPassword(evt.target.value)}
                placeholder="Password"
                required={false}
                id="auth-password"
              />
            </span>
          </label>
        </div>
        <button className="btn sign-in__button" type="submit">
          Продолжить
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
