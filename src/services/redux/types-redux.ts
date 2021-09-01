import { IArticle } from '../../types';
import store from './store';

export type TRootState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;

export type TActions = {
  type: string;
  payload: string | boolean | IArticle[];
};
