import React from 'react';
import { IRenderResultSearchProps } from '../../types';
import './result-search.scss';

export default function RenderResultSearch(props: IRenderResultSearchProps): JSX.Element {
  if (props.ResultSearch.length) {
    return (
      <div className="result-search">
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
          {props.ResultSearch.map((article) => (
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
  }
  return <div></div>;
}
