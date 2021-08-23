import React, { ChangeEvent, useState } from 'react';
import { SEARCH_DATA_DEFAULT } from '../../const';
import Validation from '../../services/validate';
import './search-bar.scss';

export default function SearchBar(): JSX.Element {
  const [searchData, setSearchData] = useState(SEARCH_DATA_DEFAULT);
  const [validate, setValidate] = useState(true);

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    Validation(searchData, setValidate, setSearchData);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchData({ ...searchData, value: event.target.value });
  };

  return (
    <div className="search-bar">
      <form className="search-bar__wrapper" onSubmit={handleSubmit}>
        <input
          id="search"
          type="text"
          className="search-bar__input"
          onChange={handleChange}
        ></input>
        <button className="search-bar__button" type="submit">
          {!searchData.loading ? 'search' : 'loading'}
        </button>
      </form>
      <span className="invalid-validation">{!validate && 'It\'s required field'} </span>
    </div>
  );
}
