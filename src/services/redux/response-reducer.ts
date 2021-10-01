import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SEARCH_RESULT_DEFAULT } from '../../const';
import { IArticle } from '../../types';

const initialState = SEARCH_RESULT_DEFAULT;

export const responseSlice = createSlice({
  name: 'response',
  initialState,
  reducers: {
    changeError: (state, action: PayloadAction<boolean>) => ({ ...state, error: action.payload }),
    changeArticles: (state, action: PayloadAction<IArticle[]>) => ({ ...state, articles: action.payload }),
    changeDetails: (state, action: PayloadAction<IArticle[]>) => ({ ...state, details: action.payload }),
  },
});

export const responseReducer = responseSlice.reducer;
