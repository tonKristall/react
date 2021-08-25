import React from 'react';
import { EPageSizeValues, ESortValues, IRequestParamsProps } from '../../types';
import './request-params.scss';

export default function RequestParams(props: IRequestParamsProps): JSX.Element {
  return (
    <div className="request-params">
      <div className="request-params__sort">
        <p>Sort:</p>
        <select
          onChange={(event) => {
            props.setSearchData({
              ...props.searchData,
              sortArticle: event.target.value,
            });
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
          onChange={(event) => {
            props.setSearchData({
              ...props.searchData,
              pageSize: event.target.value,
            });
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
