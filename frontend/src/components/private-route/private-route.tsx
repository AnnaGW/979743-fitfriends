import { AuthorizationStatus } from '../../const';
import Intro from '../../pages/intro/intro';
import Spinner from '../spinner/spinner';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {

  const {authorizationStatus, children} = props;

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return (<Spinner />);
  }

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Intro />
  );
}

export default PrivateRoute;
