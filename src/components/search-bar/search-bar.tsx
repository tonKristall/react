import React, { ChangeEvent, useState } from 'react';
import Validation from '../../services/validate';
import { ISearchRequestProps } from '../../types';
import RequestParams from '../request-params/request-params';
import './search-bar.scss';

export default function SearchBar(props: ISearchRequestProps): JSX.Element {
  const [validate, setValidate] = useState(true);

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!props.searchData.loading) {
      Validation(props.searchData, setValidate, props.setSearchData, props.setResultSearch, props.resultSearch);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.setSearchData({ ...props.searchData, value: event.target.value });
  };

  return (
    <div className="search-bar">
      <form className="search-bar__wrapper" onSubmit={handleSubmit}>
        <input
          id="search"
          type="text"
          className="search-bar__input"
          disabled={props.searchData.loading}
          onChange={handleChange}
        ></input>
        <button className="search-bar__button" type="submit">
          {!props.searchData.loading ? 'search' : 'loading'}
        </button>
      </form>
      <span className="invalid-validation">{!validate && "It's required field"} </span>
      <RequestParams
        searchData={props.searchData}
        setSearchData={props.setSearchData}
        resultSearch={props.resultSearch}
        setResultSearch={props.setResultSearch}
      />
    </div>
  );
}
