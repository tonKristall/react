import React, { ChangeEvent } from 'react';
import { MAX_ARTICLES, SEARCH_DATA_DEFAULT } from '../../const';
import { IRenderResultSearchProps } from '../../types';
import './select-page.scss';

export default function SelectPage(props: IRenderResultSearchProps): JSX.Element {
  const numberPage = Math.ceil(MAX_ARTICLES / Number(props.searchData.pageSize));

  const HandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextPage = event.target.value;
    const validatePage = event.target.validity.valid;
    const timerChangePage = setTimeout(() => {
      props.setSearchData({ ...props.searchData, currentPage: nextPage, inputPage: nextPage });
    }, 2000);
    props.setSearchData({ ...props.searchData, inputPage: nextPage });
    setTimeout(() => {
      if (!validatePage || !nextPage || nextPage !== event.target.value) {
        clearTimeout(timerChangePage);
      }
    }, 1999);
  };

  return (
    <div className="select-page">
      <span>Page</span>
      <input
        type="number"
        value={props.searchData.inputPage}
        min={SEARCH_DATA_DEFAULT.value}
        max={numberPage}
        onChange={HandleChange}
        disabled={props.searchData.loading}
      />
      <span>of {numberPage}</span>
    </div>
  );
}
