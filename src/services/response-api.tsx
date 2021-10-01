import { API_KEY, APP_STATE_DEFAULT, BASE_URL } from '../const';
import { IResultSearch } from '../types';
import {
  changeArticles, changeDetails, changeErrorRequest, changeLoading, changeRequestRun,
} from './redux/actions';
import { TAppDispatch } from './redux/types-redux';

export default function ResponseAPI(
  dispatch: TAppDispatch,
  searchValue: string,
  sortValue: string,
  pageSizeValue: string,
  currentPage: string,
  details: boolean,
): void {
  const response = `
  ${BASE_URL}?q=${searchValue}&sortBy=${sortValue}&pageSize=${pageSizeValue}&page=${currentPage}&apiKey=${API_KEY}`;
  if (searchValue) {
    dispatch(changeLoading(!APP_STATE_DEFAULT.loading));
    fetch(response)
      .then((resp) => resp.json())
      .then((resp: IResultSearch) => {
        if (resp.articles) {
          dispatch(changeErrorRequest(false));
          if (!details) {
            dispatch(changeArticles(resp.articles));
          } else {
            dispatch(changeDetails(resp.articles));
          }
        } else {
          dispatch(changeErrorRequest(true));
        }
      })
      .catch(() => {
        dispatch(changeErrorRequest(true));
      })
      .finally(() => {
        dispatch(changeLoading(APP_STATE_DEFAULT.loading));
        if (!details) {
          dispatch(changeRequestRun(true));
        }
      });
  }
}
