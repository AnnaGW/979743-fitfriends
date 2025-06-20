import { FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AppRoute, Validation } from '../../const';
import { useNavigate } from 'react-router-dom';
import { checkInputValidity, toggleInputError, toggleErrorSpan } from '../../services/validation';

function LoginForm(): JSX.Element {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [emailInvalid, setEmailInvalid] = useState<boolean>(false);
  const [passwordInvalid, setPasswordInvalid] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (email !== null && password !== null) {
      dispatch(
        loginAction({
          email: email,
          password: password,
        })
      ).then((serverRusult) => {
        if (serverRusult.type === 'user/login/fulfilled') {
          navigate(AppRoute.Main);
        }
      });
    }
  };

  return (
    <form action="" method="post" onSubmit={handleSubmit}>
      <div className="sign-in">
        <div className="custom-input sign-in__input">
          <label>
            <span className="custom-input__label">E-mail</span>
            <span className="custom-input__wrapper">
              <input
                id="auth-name"
                type="email"
                name="email"
                value={email ?? ''}
                pattern="\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}"
                data-error-message="Укажите корректный адрес электронной почты"
                onChange={(evt) => {
                  checkInputValidity(evt.target);
                  setEmail(evt.target.value);
                  setEmailInvalid(!!evt.target.validity.valid);
                }}
                onBlur={(evt) => toggleInputError(evt.target)}
                onFocus={(evt) => toggleErrorSpan(evt.target, '')}
                placeholder="Email"
                required
              />
            </span>
            <span className="form__error auth-name-error"></span>
          </label>
        </div>
        <div className="custom-input sign-in__input">
          <label>
            <span className="custom-input__label">Пароль</span>
            <span className="custom-input__wrapper">
              <input
                id="auth-password"
                type="password"
                name="password"
                value={password ?? ''}
                data-error-message="Пароль должен содержать от 6 до 12 символов"
                minLength={Validation.PasswordMinLength}
                maxLength={Validation.PasswordMaxLength}
                onChange={(evt) => {
                  checkInputValidity(evt.target);

                  setPassword(evt.target.value);
                  setPasswordInvalid(evt.target.validity.valid);
                }}
                onBlur={(evt) => toggleInputError(evt.target)}
                onFocus={(evt) => toggleErrorSpan(evt.target, '')}
                placeholder="Password"
                required
              />
            </span>
            <span className="form__error auth-password-error"></span>
          </label>
        </div>
        <button className="btn sign-in__button" type="submit" disabled={!emailInvalid || !passwordInvalid}>
          Продолжить
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
