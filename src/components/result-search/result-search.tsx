import React from 'react';
import { Link } from 'react-router-dom';
import { IRenderResultSearchProps } from '../../types';
import './result-search.scss';
import SelectPage from './select-page';

export default function RenderResultSearch(props: IRenderResultSearchProps): JSX.Element {
  const { articles } = props.resultSearch;
  if (props.resultSearch.error) {
    return <div className="error-response">error response</div>;
  }
  if (articles.length) {
    return (
      <div className="result-search">
        <SelectPage
          searchData={props.searchData}
          setSearchData={props.setSearchData}
          resultSearch={props.resultSearch}
        />
        <table className="result-search__table">
          <thead>
            <tr className="result-search__headers">
              <td>title</td>
              <td>description</td>
              <td>author</td>
              <td>published at</td>
              <td>url details</td>
            </tr>
          </thead>
          {articles.map((article, index) => (
            <tbody key={index}>
              <tr className="article">
                <td>
                  <a href={article.url}>{article.title}</a>
                </td>
                <td>{article.description}</td>
                <td>{article.author}</td>
                <td>{article.publishedAt}</td>
                <td><Link to={`/details/${article.title}`}>details</Link></td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  } if (props.searchData.requestRun) {
    return <div>Nothing was found</div>;
  }
  return <div></div>;
}
