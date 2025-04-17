import { AuthorizationStatus } from '../../const';
import Intro from '../../pages/intro/intro';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  console.log('authorizationStatus в PrivateRoute - ', props.authorizationStatus);
  const {authorizationStatus, children} = props;
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Intro />
  );
}

export default PrivateRoute;
