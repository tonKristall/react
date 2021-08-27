import { API_KEY, BASE_URL, SEARCH_DATA_DEFAULT } from '../const';
import { IResultSearch, TSetStateArray, TSetStateSearchData } from '../types';

export default function ResponseAPI(
  setSearchData: TSetStateSearchData,
  searchData: typeof SEARCH_DATA_DEFAULT,
  setResultSearch: TSetStateArray,
  resultSearch: IResultSearch,
): void {
  setSearchData({ ...searchData, loading: !SEARCH_DATA_DEFAULT.loading });
  const searchValue = searchData.value;
  const sortValue = searchData.sortArticle;
  const pageSizeValue = searchData.pageSize;
  const { currentPage } = searchData;
  const response = `
    ${BASE_URL}?q=${searchValue}&sortBy=${sortValue}&pageSize=${pageSizeValue}&page=${currentPage}&apiKey=${API_KEY}`;
  fetch(response)
    .then((resp) => resp.json())
    .then((resp: IResultSearch) => {
      if (resp.articles) {
        setResultSearch({
          error: false,
          articles: resp.articles,
        });
      } else {
        setResultSearch({
          error: true,
          articles: resultSearch.articles,
        });
      }
    })
    .catch(() => {
      console.log(`error${resultSearch.articles}`);
      setResultSearch({
        error: true,
        articles: resultSearch.articles,
      });
    })
    .finally(() => {
      setSearchData({
        ...searchData,
        loading: SEARCH_DATA_DEFAULT.loading,
        requestRun: true,
      });
    });
}
