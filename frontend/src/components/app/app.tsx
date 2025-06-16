import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const';
import MainPage from '../../pages/main/main';
import Login from '../../pages/login/login';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
import Registration from '../../pages/registration/registration';
import Error404 from '../../pages/error/error';
import QuestionnaireWardPage from '../../pages/questionnaires/questionnaire-ward';
import QuestionnaireCoachPage from '../../pages/questionnaires/questionnaire-coach';
import PersonalAccountCoach from '../../pages/personal-accounts/pa-coach/personal-account-coach';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const userRole = useAppSelector((state) => state.userInfo.role);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <MainPage />
              </PrivateRoute>
            }
          />

          <Route path={AppRoute.Login} element={<Login />} />

          <Route path={AppRoute.Registration} element={<Registration />} />

          <Route
            path={AppRoute.QuestionnaireWard}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <QuestionnaireWardPage />
              </PrivateRoute>
            }
          />

          <Route
            path={AppRoute.QuestionnaireCoach}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <QuestionnaireCoachPage />
              </PrivateRoute>
            }
          />

          <Route
            path={AppRoute.PersonalAccountCoach}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <PersonalAccountCoach />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
