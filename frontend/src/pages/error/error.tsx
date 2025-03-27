import { Helmet } from 'react-helmet-async';
// import './error.css';
import { Link, useLocation } from 'react-router-dom';

function Error404(): JSX.Element{
  const location = useLocation();
  return (
    <>
      <Helmet>
        <title>FitFriends. Страница не найдена</title>
      </Helmet>
      <main className="page__main page__main--index page--error">
        <p className="error">Страница http://localhost:3000{location.pathname}, к сожалению, не найдена</p>
        <Link className="go-home" to="/">Вернуться домой &rarr;</Link>
      </main>
    </>
  );
}

export default Error404;
