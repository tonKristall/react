import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EPageSizeValues, ESortValues, SEARCH_DATA_DEFAULT } from '../../const';
import {
  changeCurrentPage, changeInputPage, changePageSize, changeSort,
} from '../../services/redux/actions';
import { TAppDispatch, TRootState } from '../../services/redux/types-redux';
import ResponseAPI from '../../services/response-api';
import './request-params.scss';

export default function RequestParams(): JSX.Element {
  const dispatch = useDispatch<TAppDispatch>();
  const loading = useSelector((state: TRootState) => state.stateAppReducer.loading);
  const sort = useSelector((state: TRootState) => state.requestReducer.sortArticle);
  const currentPage = useSelector((state: TRootState) => state.requestReducer.currentPage);
  const requestRun = useSelector((state: TRootState) => state.stateAppReducer.requestRun);
  const searchValue = useSelector((state: TRootState) => state.requestReducer.value);
  const pageSize = useSelector((state: TRootState) => state.requestReducer.pageSize);

  useEffect(() => {
    if (requestRun) {
      ResponseAPI(dispatch, searchValue, sort, pageSize, currentPage, false);
    }
  }, [sort, currentPage, pageSize]);

  return (
    <div className="request-params">
      <div className="request-params__sort">
        <p>Sort:</p>
        <select
          value={sort}
          disabled={loading}
          onChange={(event) => {
            dispatch(changeSort(event.target.value));
          }}
        >
          <option value={ESortValues.published}>{ESortValues.published}</option>
          <option value={ESortValues.popularity}>{ESortValues.popularity}</option>
          <option value={ESortValues.relevancy}>{ESortValues.relevancy}</option>
        </select>
      </div>
      <div className="request-params__articles-on-page">
        <p>articles on page:</p>
        <select
          value={pageSize}
          disabled={loading}
          onChange={(event) => {
            dispatch(changePageSize(event.target.value));
            dispatch(changeCurrentPage(SEARCH_DATA_DEFAULT.currentPage));
            dispatch(changeInputPage(SEARCH_DATA_DEFAULT.inputPage));
          }}
        >
          <option value={EPageSizeValues.ten}>{EPageSizeValues.ten}</option>
          <option value={EPageSizeValues.twenty}>{EPageSizeValues.twenty}</option>
          <option value={EPageSizeValues.fifty}>{EPageSizeValues.fifty}</option>
          <option value={EPageSizeValues.hundred}>{EPageSizeValues.hundred}</option>
        </select>
      </div>
    </div>
  );
}
