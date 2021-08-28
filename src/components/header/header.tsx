import React, { MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { HEADER_ACTIVE_DEFAULT } from '../../const';
import { THeaderItem } from '../../types';
import './header.scss';

export default function Header(): JSX.Element {
  const [active, setActive] = useState(HEADER_ACTIVE_DEFAULT);

  const handleClick = (event: MouseEvent) => {
    const linkName = (event.target as HTMLElement).textContent as THeaderItem;
    if (!active[linkName]) {
      const resetActive: typeof HEADER_ACTIVE_DEFAULT = { ...active };
      const arrActive = Object.keys(resetActive);
      arrActive.forEach((element) => {
        resetActive[element as THeaderItem] = false;
      });
      setActive({ ...resetActive, [linkName]: true });
    }
  };

  return (
    <header className="header">
      <ul onClick={handleClick}>
        <li>
          <Link className={active.home ? 'link link__active' : 'link'} to="/">
            home
          </Link>
        </li>
        <li>
          <Link className={active.about ? 'link link__active' : 'link'} to="/about">
            about
          </Link>
        </li>
      </ul>
    </header>
  );
}
