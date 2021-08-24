import React from 'react';
import { IRequestParamsProps, SortValues } from '../../types';
import './request-params.scss';

export default function RequestParams(props: IRequestParamsProps): JSX.Element {
  return (
    <div className="request-params">
      <div className="request-params__sort">
        <p>Sort:</p>
        <form>
          <div>
            <label htmlFor="publishedSort">published</label>
            <label htmlFor="relevancySort">relevancy</label>
            <label htmlFor="popularitySort">popularity</label>
          </div>
          <div>
            <input
              type="radio"
              id="publishedSort"
              name="sort"
              value="publishedAt"
              checked={props.searchData.sortArticle === SortValues.published}
              onChange={() => props.setSearchData({
                ...props.searchData,
                sortArticle: SortValues.published,
              })
              }
            />
            <input
              type="radio"
              id="relevancySort"
              name="sort"
              value="relevancy"
              onChange={() => props.setSearchData({
                ...props.searchData,
                sortArticle: SortValues.relevancy,
              })
              }
            />
            <input
              type="radio"
              id="popularitySort"
              name="sort"
              value="popularity"
              onChange={() => props.setSearchData({
                ...props.searchData,
                sortArticle: SortValues.popularity,
              })
              }
            />
          </div>
        </form>
      </div>
      <div className="request-params__articles-on-page">
        <p>articles on page:</p>
      </div>
    </div>
  );
}
