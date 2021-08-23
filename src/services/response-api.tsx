import { API_KEY, BASE_URL, SEARCH_DATA_DEFAULT } from '../const';
import { ArticleTypes, SetStateSearchDataType } from '../types';

export default function ResponseAPI(
  setSearchData: SetStateSearchDataType,
  searchData: typeof SEARCH_DATA_DEFAULT,
): void {
  setSearchData({ ...searchData, value: SEARCH_DATA_DEFAULT.value });
  setSearchData({ ...searchData, loading: !SEARCH_DATA_DEFAULT.loading });
  const searchValue = searchData.value;
  const { sort } = searchData;
  const response = `${BASE_URL}?q=${searchValue}&sort=${sort}&apiKey=${API_KEY}`;
  fetch(response)
    .then((resp) => resp.json())
    .then((resp: ArticleTypes) => console.log(resp.articles))
    .finally(() => setSearchData({ ...searchData, loading: SEARCH_DATA_DEFAULT.loading }));
}
