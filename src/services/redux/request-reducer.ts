import { PayloadAction } from '@reduxjs/toolkit';
import { ERequestReducer, SEARCH_DATA_DEFAULT } from '../../const';

const requestReducer = (state = SEARCH_DATA_DEFAULT, action: PayloadAction<string>): typeof SEARCH_DATA_DEFAULT => {
  switch (action.type) {
    case ERequestReducer.changeValue: {
      return { ...state, value: action.payload };
    }
    case ERequestReducer.changeSort:
      return { ...state, sortArticle: action.payload };
    case ERequestReducer.changeInputPage:
      return { ...state, inputPage: action.payload };
    case ERequestReducer.changeCurrentPage:
      return { ...state, currentPage: action.payload };
    case ERequestReducer.changePageSize:
      return { ...state, pageSize: action.payload };
    default:
      return state;
  }
};

export default requestReducer;
