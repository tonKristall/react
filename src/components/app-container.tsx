import React, { useState } from 'react';
import RenderResultSearch from './result-search/result-search';
import SearchBar from './search-bar/search-bar';
import '../styles.scss';
import { IArticle } from '../types';

export default function AppContainer(): JSX.Element {
  const [resultSearch, setResultSearch] = useState<IArticle[]>([]);
  return (
    <div className="app-container">
      <SearchBar setResultSearch={setResultSearch} />
      <RenderResultSearch ResultSearch={resultSearch} />
    </div>
  );
}
