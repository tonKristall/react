import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { EHeaderLink } from '../const';
import Details from './details/details';
import About from './page-about/about';
import RenderResultSearch from './result-search/result-search';
import SearchBar from './search-bar/search-bar';

export default function Main(): JSX.Element {
  const location = useLocation();
  return (
    <TransitionGroup className="main">
      <CSSTransition timeout={300} classNames="fade" key={location.pathname}>
        <Switch>
          <Route exact path={EHeaderLink.home}>
            <SearchBar />
            <RenderResultSearch />
          </Route>
          <Route exact path={EHeaderLink.about}>
            <About />
          </Route>
          <Route path={EHeaderLink.details}>
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
