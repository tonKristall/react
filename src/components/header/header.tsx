import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HEADER_LINK } from '../../const';
import './header.scss';

export default function Header(): JSX.Element {
  const location = useLocation();

  return (
    <header className="header">
      <ul>
        <li>
          <Link className={location.pathname === HEADER_LINK.home ? 'link link__active' : 'link'} to="/">
            home
          </Link>
        </li>
        <li>
          <Link className={location.pathname === HEADER_LINK.about ? 'link link__active' : 'link'} to="/about">
            about
          </Link>
        </li>
      </ul>
    </header>
  );
}
