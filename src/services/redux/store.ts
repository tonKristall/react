import { combineReducers, configureStore } from '@reduxjs/toolkit';
import stateAppReducer from './app-reducer';
import requestReducer from './request-reducer';
import { responseReducer } from './response-reducer';

const rootReducer = combineReducers({
  stateAppReducer,
  requestReducer,
  responseReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
