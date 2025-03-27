import {Helmet} from 'react-helmet-async';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AppRoute } from '../../const';
import LoginForm from '../../components/forms/form-login';
import { AuthorizationStatus } from '../../const';

function Login(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const navigate = useNavigate();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Main);
    }
  },[authorizationStatus, navigate]);

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
                  <LoginForm />
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
