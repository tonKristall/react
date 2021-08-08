import React from 'react';
import CardsContainer from './components/cards/cards';
import SearchBar from './components/search-bar/search-bar';
import './styles.scss';

export default function App():JSX.Element {
  return <div className='app-container'>
    <SearchBar />
    <CardsContainer />
  </div>;
}
