import { IArticle } from '../../types';
import { TRootState } from './types-redux';

export const errorResponse = (state: TRootState): boolean => state.responseReducer.error;
export const articlesResponse = (state: TRootState): IArticle[] => state.responseReducer.articles;
export const detailsResponse = (state: TRootState): IArticle[] => state.responseReducer.details;
