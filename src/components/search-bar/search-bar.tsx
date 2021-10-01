import React from 'react';
import './search-bar.scss';

export default function SearchBar():JSX.Element {
  return <div className='search-bar'>
    <div className='search-bar__wrapper'>
      <input type='text' className='search-bar__input'></input>
      <span className='search-bar__button'>search</span>
    </div>
  </div>;
}
