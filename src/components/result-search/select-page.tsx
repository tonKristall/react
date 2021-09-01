import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MAX_ARTICLES, SEARCH_DATA_DEFAULT } from '../../const';
import { changeCurrentPage, changeInputPage } from '../../services/redux/actions';
import { TRootState } from '../../services/redux/types-redux';
import './select-page.scss';

export default function SelectPage(): JSX.Element {
  const dispatch = useDispatch();
  const pageSize = useSelector((state: TRootState) => state.requestReducer.pageSize);
  const numberPage = Math.ceil(MAX_ARTICLES / Number(pageSize));
  const inputPage = useSelector((state: TRootState) => state.requestReducer.inputPage);
  const loading = useSelector((state: TRootState) => state.stateAppReducer.loading);

  const HandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextPage = event.target.value;
    const validatePage = event.target.validity.valid;

    const timerChangePage = setTimeout(() => {
      dispatch(changeCurrentPage(nextPage));
      dispatch(changeInputPage(nextPage));
    }, 2000);

    dispatch(changeInputPage(nextPage));

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
        value={inputPage}
        min={SEARCH_DATA_DEFAULT.value}
        max={numberPage}
        onChange={HandleChange}
        disabled={loading}
      />
      <span>of {numberPage}</span>
    </div>
  );
}
