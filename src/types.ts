import { Dispatch, SetStateAction } from 'react';
// eslint-disable-next-line import/no-cycle
import { SEARCH_DATA_DEFAULT } from './const';

export type TSetStateBoolean = Dispatch<SetStateAction<boolean>>;

export type TSetStateArray = Dispatch<SetStateAction<IResultSearch>>;

export type TSetStateSearchData = Dispatch<SetStateAction<typeof SEARCH_DATA_DEFAULT>>;
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

export interface IResultSearch {
  error: boolean;
  articles: IArticle[];
}

export interface IRenderResultSearchProps {
  SearchData: typeof SEARCH_DATA_DEFAULT;
  SetSearchData: TSetStateSearchData;
  ResultSearch: IResultSearch;
}

export interface ISearchRequestProps {
  searchData: typeof SEARCH_DATA_DEFAULT;
  setSearchData: TSetStateSearchData;
  resultSearch: IResultSearch;
  setResultSearch: Dispatch<SetStateAction<IResultSearch>>;
}
