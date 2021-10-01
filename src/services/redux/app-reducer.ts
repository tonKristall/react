import { PayloadAction } from '@reduxjs/toolkit';
import { APP_STATE_DEFAULT, ERequestReducer } from '../../const';

const stateAppReducer = (state = APP_STATE_DEFAULT, action: PayloadAction<boolean>): typeof APP_STATE_DEFAULT => {
  switch (action.type) {
    case ERequestReducer.changeValidate:
      return { ...state, validate: action.payload };
    case ERequestReducer.changeLoading:
      return { ...state, loading: action.payload };
    case ERequestReducer.changeRequestRun:
      return { ...state, requestRun: action.payload };
    default:
      return state;
  }
};

export default stateAppReducer;
