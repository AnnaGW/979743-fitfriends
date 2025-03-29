import { Helmet } from 'react-helmet-async';
import RegistrationForm from '../../components/forms/form-registration';

function Registration(): JSX.Element {
  return (
    <>
    <Helmet>
        <title>Регистрация — FitFriends</title>
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
        <div className="popup-form popup-form--sign-up">
          <div className="popup-form__wrapper">
            <div className="popup-form__content">
              <div className="popup-form__title-wrapper">
                <h1 className="popup-form__title">Регистрация</h1>
              </div>
              <div className="popup-form__form">
                <RegistrationForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
      <script src="js/vendor.min.js"></script>
      <script src="js/main.min.js"></script>
    </>
  )
}

export default Registration;
