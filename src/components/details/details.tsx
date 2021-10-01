import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TAppDispatch, TRootState } from '../../services/redux/types-redux';
import ResponseAPI from '../../services/response-api';
import { TUrlParams } from '../../types';
import './details.scss';

export default function Details(): JSX.Element {
  const dispatch = useDispatch<TAppDispatch>();
  const params: TUrlParams = useParams();
  const articleDetails = useSelector((state: TRootState) => state.responseReducer.details[0]);
  const loading = useSelector((state: TRootState) => state.stateAppReducer.loading);
  const sort = useSelector((state: TRootState) => state.requestReducer.sortArticle);
  const currentPage = useSelector((state: TRootState) => state.requestReducer.currentPage);
  const pageSize = useSelector((state: TRootState) => state.requestReducer.pageSize);

  useEffect(() => {
    ResponseAPI(dispatch, `"${params.title}"`, sort, pageSize, currentPage, true);
  }, [params.title]);

  if (articleDetails) {
    return (
      <div className="details">
        <p>{articleDetails.title}</p>
        <p>{articleDetails.author}</p>
        <p>{articleDetails.publishedAt}</p>
        <p>{articleDetails.description}</p>
        <img src={articleDetails.urlToImage} alt="article image"></img>
        <p>{articleDetails.content}</p>
        <p>
          <a href={articleDetails.url}>source</a>
        </p>
      </div>
    );
  }
  if (loading) {
    return <div>Loading</div>;
  }
  return <div className="error-response">error response</div>;
}
