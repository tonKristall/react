import React, { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { HEADER_LINK, SEARCH_DATA_DEFAULT, SEARCH_RESULT_DEFAULT } from '../const';
import ResponseAPI from '../services/response-api';
import Details from './details/details';
import About from './page-about/about';
import RenderResultSearch from './result-search/result-search';
import SearchBar from './search-bar/search-bar';

export default function Main(): JSX.Element {
  const [resultSearch, setResultSearch] = useState(SEARCH_RESULT_DEFAULT);
  const [searchData, setSearchData] = useState(SEARCH_DATA_DEFAULT);
  const location = useLocation();
  useEffect(() => {
    if (searchData.requestRun) {
      ResponseAPI(setSearchData, searchData, setResultSearch, resultSearch);
    }
  }, [searchData.currentPage, searchData.pageSize, searchData.sortArticle]);

  return (
    <TransitionGroup className="main">
      <CSSTransition timeout={300} classNames="fade" key={location.pathname}>
        <Switch>
          <Route exact path={HEADER_LINK.home}>
            <SearchBar
              searchData={searchData}
              setSearchData={setSearchData}
              resultSearch={resultSearch}
              setResultSearch={setResultSearch}
            />
            <RenderResultSearch searchData={searchData} setSearchData={setSearchData} resultSearch={resultSearch} />
          </Route>
          <Route exact path={HEADER_LINK.about}>
            <About />
          </Route>
          <Route path={HEADER_LINK.details}>
            <Details />
          </Route>
          <Route path="*">
            <div>404</div>
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}
