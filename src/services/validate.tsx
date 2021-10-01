import { SEARCH_DATA_DEFAULT } from '../const';
import {
  IResultSearch,
  TSetStateArray,
  TSetStateBoolean,
  TSetStateSearchData,
} from '../types';
import ResponseAPI from './response-api';

export default function Validation(
  searchData: typeof SEARCH_DATA_DEFAULT,
  setValidate: TSetStateBoolean,
  setSearchData: TSetStateSearchData,
  setResultSearch: TSetStateArray,
  resultSearch: IResultSearch,
): void {
  const searchValue = searchData.value;
  if (searchValue) {
    setValidate(true);
    ResponseAPI(setSearchData, searchData, setResultSearch, resultSearch);
  } else {
    setValidate(false);
  }
}
