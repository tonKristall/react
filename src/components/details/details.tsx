import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SEARCH_DATA_DEFAULT, SEARCH_RESULT_DEFAULT } from '../../const';
import ResponseAPI from '../../services/response-api';
import { TUrlParams } from '../../types';
import './details.scss';

export default function DetailsHead(): JSX.Element {
  const params: TUrlParams = useParams();
  const [resultSearchDetails, setResultSearchDetails] = useState(SEARCH_RESULT_DEFAULT);
  const [searchDataDetails, setSearchDataDetails] = useState({ ...SEARCH_DATA_DEFAULT, value: params.title });
  const articleDetails = resultSearchDetails.articles[0];
  useEffect(() => {
    ResponseAPI(setSearchDataDetails, searchDataDetails, setResultSearchDetails, resultSearchDetails);
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
  } if (searchDataDetails.loading) {
    return <div>Loading</div>;
  }
  return <div className="error-response">error response</div>;
}
