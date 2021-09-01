import React from 'react';
import { NavLink } from 'react-router-dom';
import { EHeaderLink } from '../../const';
import './header.scss';

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <ul>
        <li>
          <NavLink exact className={'link'} activeClassName={'link__active'} to={EHeaderLink.home}>
            home
          </NavLink>
        </li>
        <li>
          <NavLink exact className={'link'} activeClassName={'link__active'} to={EHeaderLink.about}>
            about
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
