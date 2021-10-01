import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Main from './components/app-container';
import Header from './components/header/header';
import './styles.scss';

export default function App(): JSX.Element {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Main />
      </div>
    </Router>
  );
}
