import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const';
import MainPage from '../../pages/main/main';
import Login from '../../pages/login/login';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
import Registration from '../../pages/registration/registration';
import Error404 from '../../pages/error/error';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

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

          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
