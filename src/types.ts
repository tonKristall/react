import { Dispatch, SetStateAction } from 'react';
import { SEARCH_DATA_DEFAULT } from './const';

export type ArticleTypes = {
  articles: [];
};

export type SetStateBooleanType = Dispatch<SetStateAction<boolean>>;

export type SetStateSearchDataType = Dispatch<SetStateAction<typeof SEARCH_DATA_DEFAULT>>;
