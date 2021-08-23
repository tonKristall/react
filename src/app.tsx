import React from 'react';
import SearchBar from './components/search-bar/search-bar';
import './styles.scss';

export default function App(): JSX.Element {
  return (
    <div className="app-container">
      <SearchBar />
    </div>
  );
}
