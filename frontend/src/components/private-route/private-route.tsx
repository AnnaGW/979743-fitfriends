import { AuthorizationStatus } from '../../const';
import Intro from '../../pages/intro/intro';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      // : <Navigate to={AppRoute.Login} />
      : <Intro />
  );
}

export default PrivateRoute;
