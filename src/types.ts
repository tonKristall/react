import { Dispatch, SetStateAction } from 'react';
import { SEARCH_DATA_DEFAULT } from './const';

export type SetStateBooleanType = Dispatch<SetStateAction<boolean>>;

export type SetStateArrayType = Dispatch<SetStateAction<IArticle[]>>;

export type SetStateSearchDataType = Dispatch<SetStateAction<typeof SEARCH_DATA_DEFAULT>>;
export interface IArticle {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  id: null;
  name: string;
  title: string;
  url: string;
  urlToImage: string;
}

export interface TResultSearch {
  articles: IArticle[];
}

export interface IRenderResultSearchProps {
  ResultSearch: IArticle[];
}

export interface ISearchBarProps {
  setResultSearch: Dispatch<SetStateAction<IArticle[]>>;
}

export enum SortValues {
  published = 'publishedAt',
  relevancy = 'relevancy',
  popularity = 'popularity',
}

// export type TRequestParams = {
//   sortArticle: string;
//   articlesOnPage: string;
// };

export interface IRequestParamsProps {
  searchData: typeof SEARCH_DATA_DEFAULT;
  setSearchData: SetStateSearchDataType;
}
