import React, { useEffect, useState } from 'react';
import RenderResultSearch from './result-search/result-search';
import SearchBar from './search-bar/search-bar';
import '../styles.scss';
import { SEARCH_DATA_DEFAULT, SEARCH_RESULT_DEFAULT } from '../const';
import ResponseAPI from '../services/response-api';
import Header from './header/header';

export default function AppContainer(): JSX.Element {
  const [resultSearch, setResultSearch] = useState(SEARCH_RESULT_DEFAULT);
  const [searchData, setSearchData] = useState(SEARCH_DATA_DEFAULT);

  useEffect(() => {
    if (searchData.requestRun) {
      ResponseAPI(setSearchData, searchData, setResultSearch, resultSearch);
    }
  }, [searchData.currentPage, searchData.pageSize, searchData.sortArticle]);

  return (
    <div className="app-container">
      <Header />
      <SearchBar
        searchData={searchData}
        setSearchData={setSearchData}
        resultSearch={resultSearch}
        setResultSearch={setResultSearch}
      />
      <RenderResultSearch SearchData={searchData} SetSearchData={setSearchData} ResultSearch={resultSearch} />
    </div>
  );
}
