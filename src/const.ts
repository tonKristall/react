import { IArticle } from './types';

export const BASE_URL = 'https://newsapi.org/v2/everything';
export const API_KEY = 'e24452b342624b06a01cb679dd2a9ac3';
export const MAX_ARTICLES = 100;

export const SEARCH_DATA_DEFAULT = {
  value: '',
  sortArticle: 'publishedAt',
  pageSize: '10',
  currentPage: '1',
  inputPage: '1',
};

export const APP_STATE_DEFAULT = {
  requestRun: false,
  validate: true,
  loading: false,
};

export const SEARCH_RESULT_DEFAULT = {
  error: false,
  articles: <IArticle[]>[],
  details: <IArticle[]>[],
};

export enum ESortValues {
  published = 'PublishedAt',
  relevancy = 'Relevancy',
  popularity = 'Popularity',
}

export enum EPageSizeValues {
  ten = '10',
  twenty = '20',
  fifty = '50',
  hundred = '100',
}

export enum EHeaderLink {
  home = '/',
  about = '/about',
  details = '/details/:title',
}

export enum ERequestReducer {
  changeValue = 'CHANGE_VALUE',
  changeValidate = 'CHANGE_VALIDATE',
  changeInputPage = 'CHANGE_INPUT_PAGE',
  changeCurrentPage = 'CHANGE_CURRENT_PAGE',
  changePageSize = 'CHANGE_PAGE_SIZE',
  changeSort = 'CHANGE_SORT',
  changeLoading = 'CHANGE_LOADING',
  changeRequestRun = 'CHANGE_REQUEST_RUN',
}

export enum EResponseReducer {
  changeErrorRequest = 'CHANGE_ERROR_REQUEST',
  changeArticles = 'CHANGE_ARTICLES',
  changeDetails = 'CHANGE_DETAILS',
}
