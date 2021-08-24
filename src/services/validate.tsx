import { SEARCH_DATA_DEFAULT } from '../const';
import {
  SetStateArrayType,
  SetStateBooleanType,
  SetStateSearchDataType,
} from '../types';
import ResponseAPI from './response-api';

export default function Validation(
  searchData: typeof SEARCH_DATA_DEFAULT,
  setValidate: SetStateBooleanType,
  setSearchData: SetStateSearchDataType,
  setResultSearch: SetStateArrayType,
): void {
  const searchValue = searchData.value;
  if (searchValue) {
    setValidate(true);
    ResponseAPI(setSearchData, searchData, setResultSearch);
  } else {
    setValidate(false);
  }
}
