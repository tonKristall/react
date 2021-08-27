import React from 'react';
import { IRenderResultSearchProps } from '../../types';
import './result-search.scss';
import SelectPage from './select-page';

export default function RenderResultSearch(props: IRenderResultSearchProps): JSX.Element {
  const { articles } = props.ResultSearch;
  if (props.ResultSearch.error) {
    return <div className="error-response">error response</div>;
  }
  if (articles.length) {
    return (
      <div className="result-search">
        <SelectPage
          SearchData={props.SearchData}
          SetSearchData={props.SetSearchData}
          ResultSearch={props.ResultSearch}
        />
        <table className="result-search__table">
          <thead>
            <tr className="result-search__headers">
              <td>title</td>
              <td>description</td>
              <td>image</td>
              <td>author</td>
              <td>published at</td>
            </tr>
          </thead>
          {articles.map((article) => (
            <tbody>
              <tr className="article">
                <td>
                  <a href={article.url}>{article.title}</a>
                </td>
                <td>{article.description}</td>
                <td>
                  <img src={article.urlToImage} alt={article.title}></img>
                </td>
                <td>{article.author}</td>
                <td>{article.publishedAt}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  } if (props.SearchData.requestRun) {
    return <div>Nothing was found</div>;
  }
  return <div></div>;
}
