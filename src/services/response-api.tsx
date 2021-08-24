import { API_KEY, BASE_URL, SEARCH_DATA_DEFAULT } from '../const';
import { SetStateArrayType, SetStateSearchDataType, TResultSearch } from '../types';

export default function ResponseAPI(
  setSearchData: SetStateSearchDataType,
  searchData: typeof SEARCH_DATA_DEFAULT,
  setResultSearch: SetStateArrayType,
): void {
  // setSearchData({ ...searchData, value: SEARCH_DATA_DEFAULT.value });
  setSearchData({ ...searchData, loading: !SEARCH_DATA_DEFAULT.loading });
  const searchValue = searchData.value;
  const sortValue = searchData.sortArticle;
  const response = `${BASE_URL}?q=${searchValue}&sortBy=${sortValue}&apiKey=${API_KEY}`;
  fetch(response)
    .then((resp) => resp.json())
    .then((resp: TResultSearch) => setResultSearch(resp.articles))
    .finally(() => setSearchData({ ...searchData, loading: SEARCH_DATA_DEFAULT.loading }));
}
