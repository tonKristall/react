import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeDetails } from '../../services/redux/actions';
import { TRootState } from '../../services/redux/types-redux';
import { IArticle } from '../../types';
import './result-search.scss';
import SelectPage from './select-page';

export default function RenderResultSearch(): JSX.Element {
  const dispatch = useDispatch();
  const articles = useSelector((state: TRootState) => state.responseReducer.articles as IArticle[]);
  const errorRequest = useSelector((state: TRootState) => state.responseReducer.error);
  const requestRun = useSelector((state: TRootState) => state.stateAppReducer.requestRun);
  const loading = useSelector((state: TRootState) => state.stateAppReducer.loading);

  const handleClick = () => {
    dispatch(changeDetails([]));
  };

  if (errorRequest) {
    return <div className="error-response">error response</div>;
  }
  if (articles.length) {
    return (
      <div className="result-search">
        <SelectPage />
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
          {articles.map((article, index) => {
            const url = `/details/${encodeURIComponent(article.title)}`;
            return (
              <tbody key={index}>
                <tr className="article">
                  <td>
                    <a href={article.url}>{article.title}</a>
                  </td>
                  <td>{article.description}</td>
                  <td>{article.author}</td>
                  <td>{article.publishedAt}</td>
                  <td>
                    <Link to={url} onClick={handleClick}>details</Link>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
  if (requestRun && !loading) {
    return <div>Nothing was found</div>;
  }
  return <div></div>;
}
