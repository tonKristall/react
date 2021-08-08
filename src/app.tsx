import React from "react";
import './styles.scss';

export function App():JSX.Element {
    return <div className='app-container'>
      <SearchBar />
      <CardsContainer />
    </div>
}

export function SearchBar():JSX.Element {
  return <div className='search-bar'>
    <div className='search-bar__wrapper'>
      <input type='text' className='search-bar__input'></input>
      <span className='search-bar__button'>search</span>
    </div>
  </div>
}

export function CardsContainer():JSX.Element {
  return <div>
    <Card />
  </div>
}

export function Card():JSX.Element {
  return <div>Tes React</div>
}