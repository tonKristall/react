import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeRequestRun, changeValidate, changeValue } from '../../services/redux/actions';
import { TAppDispatch, TRootState } from '../../services/redux/types-redux';
import ResponseAPI from '../../services/response-api';
import RequestParams from '../request-params/request-params';
import './search-bar.scss';

export default function SearchBar(): JSX.Element {
  const dispatch = useDispatch<TAppDispatch>();
  const validate = useSelector((state: TRootState) => state.stateAppReducer.validate);
  const loading = useSelector((state: TRootState) => state.stateAppReducer.loading);
  const searchValue = useSelector((state: TRootState) => state.requestReducer.value);
  const sortValue = useSelector((state: TRootState) => state.requestReducer.sortArticle);
  const pageSizeValue = useSelector((state: TRootState) => state.requestReducer.pageSize);
  const currentPage = useSelector((state: TRootState) => state.requestReducer.currentPage);

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(changeRequestRun(true));
    if (!loading) {
      if (searchValue) {
        dispatch(changeValidate(true));
        ResponseAPI(dispatch, searchValue, sortValue, pageSizeValue, currentPage, false);
      } else {
        dispatch(changeValidate(false));
        dispatch(changeRequestRun(false));
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeValue(event.target.value));
  };

  return (
    <div className="search-bar">
      <form className="search-bar__wrapper" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-bar__input"
          value={searchValue}
          disabled={loading}
          onChange={handleChange}
        ></input>
        <button className="search-bar__button" type="submit">
          {!loading ? 'search' : 'loading'}
        </button>
      </form>
      <span className="invalid-validation">{!validate && "It's required field"} </span>
      <RequestParams />
    </div>
  );
}
