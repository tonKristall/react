// eslint-disable-next-line import/no-cycle
import { IArticle } from './types';

export const BASE_URL = 'https://newsapi.org/v2/everything';
export const API_KEY = 'e24452b342624b06a01cb679dd2a9ac3';
export const MAX_ARTICLES = 100;

export const SEARCH_DATA_DEFAULT = {
  requestRun: false,
  value: '',
  loading: false,
  sortArticle: 'publishedAt',
  pageSize: '10',
  currentPage: '1',
  inputPage: '1',
};

export const SEARCH_RESULT_DEFAULT = {
  error: false,
  articles: <IArticle[]>[],
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
