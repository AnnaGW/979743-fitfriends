import {Helmet} from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { FormEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { AppRoute } from '../../const';
import { userInfo } from '../../store/action';

function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClickHandler = (evt: FormEvent<HTMLElement>) => {
    evt.preventDefault();
    dispatch(userInfo());
    navigate(AppRoute.Main);
  };

  return (
    <>
      <Helmet>
        <title>Войти — FitFriends</title>
      </Helmet>
      <div className="wrapper">
        <main>
          <div className="background-logo">
            <svg
              className="background-logo__logo"
              width="750"
              height="284"
              aria-hidden="true"
            >
              <use xlinkHref="#logo-big"></use>
            </svg>
            <svg
              className="background-logo__icon"
              width="343"
              height="343"
              aria-hidden="true"
            >
              <use xlinkHref="#icon-logotype"></use>
            </svg>
          </div>
          <div className="popup-form popup-form--sign-in">
            <div className="popup-form__wrapper">
              <div className="popup-form__content">
                <div className="popup-form__title-wrapper">
                  <h1 className="popup-form__title">Вход</h1>
                </div>
                <div className="popup-form__form">
                  <form method="get">
                    <div className="sign-in">
                      <div className="custom-input sign-in__input">
                        <label>
                          <span className="custom-input__label">E-mail</span>
                          <span className="custom-input__wrapper">
                            <input type="email" name="email" />
                          </span>
                        </label>
                      </div>
                      <div className="custom-input sign-in__input">
                        <label>
                          <span className="custom-input__label">Пароль</span>
                          <span className="custom-input__wrapper">
                            <input type="password" name="password" />
                          </span>
                        </label>
                      </div>
                      <button className="btn sign-in__button" type="submit" onClick={onClickHandler}>
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

export default Login;
