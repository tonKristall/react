import React from 'react';
import SearchBar from './components/search-bar/search-bar';
import './styles.scss';

export default function App():JSX.Element {
  return <div className='app-container'>
    <SearchBar />
  </div>;
}


// Key:
// 5ec1ed0a7188f2205fc06b771a57adb7

// Secret:
// fad83a26379e08e3

// https://www.flickr.com/services/rest/?
// text:
// sort : date-posted-asc, date-posted-desc, date-taken-asc, date-taken-desc, interestingness-desc, interestingness-asc, relevance.