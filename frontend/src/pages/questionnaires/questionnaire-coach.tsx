import { Helmet } from 'react-helmet-async';
import QuestionnaireCoachForm from '../../components/forms/form-questionnaire-coach';

function QuestionnaireCoachPage(): JSX.Element {
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
          <div className="popup-form popup-form--questionnaire-coach">
            <div className="popup-form__wrapper">
              <div className="popup-form__content">
                <div className="popup-form__form">
                  <QuestionnaireCoachForm />
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

export default QuestionnaireCoachPage;
