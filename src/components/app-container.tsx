import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import RenderResultSearch from './result-search/result-search';
import SearchBar from './search-bar/search-bar';
import '../styles.scss';
import { SEARCH_DATA_DEFAULT, SEARCH_RESULT_DEFAULT } from '../const';
import ResponseAPI from '../services/response-api';
import Header from './header/header';
import About from './page-about/about';

export default function AppContainer(): JSX.Element {
  const [resultSearch, setResultSearch] = useState(SEARCH_RESULT_DEFAULT);
  const [searchData, setSearchData] = useState(SEARCH_DATA_DEFAULT);

  useEffect(() => {
    if (searchData.requestRun) {
      ResponseAPI(setSearchData, searchData, setResultSearch, resultSearch);
    }
  }, [searchData.currentPage, searchData.pageSize, searchData.sortArticle]);

  return (
    <Router>
      <div className="app-container">
        <Header />
        <Switch>
          <Route exact path="/">
            <SearchBar
              searchData={searchData}
              setSearchData={setSearchData}
              resultSearch={resultSearch}
              setResultSearch={setResultSearch}
            />
            <RenderResultSearch SearchData={searchData} SetSearchData={setSearchData} ResultSearch={resultSearch} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="*">
            <div>404</div>
          </Route>
          {/* <Route path="/article/:id">
            <Article />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}
