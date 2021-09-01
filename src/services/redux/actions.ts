import { ERequestReducer } from '../../const';
import { IArticle } from '../../types';
import { TActions, TRootState } from './types-redux';

export const changeValue = (payload: string): TActions => ({ type: ERequestReducer.changeValue, payload });
export const changeInputPage = (payload: string): TActions => ({ type: ERequestReducer.changeInputPage, payload });
export const changeCurrentPage = (payload: string): TActions => ({ type: ERequestReducer.changeCurrentPage, payload });
export const changePageSize = (payload: string): TActions => ({ type: ERequestReducer.changePageSize, payload });
export const changeSort = (payload: string): TActions => ({ type: ERequestReducer.changeSort, payload });

export const changeValidate = (payload: boolean): TActions => ({ type: ERequestReducer.changeValidate, payload });
export const changeLoading = (payload: boolean): TActions => ({ type: ERequestReducer.changeLoading, payload });
export const changeRequestRun = (payload: boolean): TActions => ({ type: ERequestReducer.changeRequestRun, payload });

export const errorResponse = (state: TRootState): boolean => state.responseReducer.error;
export const articlesResponse = (state: TRootState): IArticle[] => state.responseReducer.articles;
export const detailsResponse = (state: TRootState): IArticle[] => state.responseReducer.details;
