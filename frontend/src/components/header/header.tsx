import {Link} from 'react-router-dom';
import MainMenu from '../main-menu/main-menu';
import { MainMenuItem } from '../../types/main-menu-active-element';

type HeaderProps = {
  menuActiveElement: MainMenuItem;
}

function Header(props: HeaderProps): JSX.Element {
  const {menuActiveElement} = props;
  return (
    <header className="header">
      <div className="container">
        <span className="header__logo">
          <svg width="187" height="70" aria-hidden="true">
            <use xlinkHref="#logo"></use>
          </svg>
        </span>
        <MainMenu activeElement={menuActiveElement} />
        <div className="search">
          <form action="#" method="get">
            <label>
              <span className="search__label">Поиск</span>
              <input type="search" name="search" />
              <svg
                className="search__icon"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <use xlinkHref="#icon-search"></use>
              </svg>
            </label>
            <ul className="search__list">
              <li className="search__item">
                <Link className="search__link" to="#">
                  Бокс
                </Link>
              </li>
              <li className="search__item">
                <Link className="search__link is-active" to="#">
                  Бег
                </Link>
              </li>
              <li className="search__item">
                <Link className="search__link" to="#">
                  Аэробика
                </Link>
              </li>
              <li className="search__item">
                <Link className="search__link" to="#">
                  Text
                </Link>
              </li>
              <li className="search__item">
                <Link className="search__link" to="#">
                  Text
                </Link>
              </li>
              <li className="search__item">
                <Link className="search__link" to="#">
                  Text
                </Link>
              </li>
              <li className="search__item">
                <Link className="search__link" to="#">
                  Text
                </Link>
              </li>
              <li className="search__item">
                <Link className="search__link" to="#">
                  Text
                </Link>
              </li>
              <li className="search__item">
                <Link className="search__link" to="#">
                  Text
                </Link>
              </li>
              <li className="search__item">
                <Link className="search__link" to="#">
                  Text
                </Link>
              </li>
              <li className="search__item">
                <Link className="search__link" to="#">
                  Text
                </Link>
              </li>
              <li className="search__item">
                <Link className="search__link" to="#">
                  Text
                </Link>
              </li>
              <li className="search__item">
                <Link className="search__link" to="#">
                  Text
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
