import React, {Fragment, useEffect} from 'react';
import {useParams, Route, Link, useRouteMatch} from 'react-router-dom';
import Comments from '../comments/Comments';
import HighlightedQuote from '../quotes/HighlightedQuote';
import useHttp from "../../hooks/use-http";
import {getSingleQuote} from "../../lib/api";

import DUMMY_QUOTES from "../tempData";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuoteDetailsComponent = () => {
  const matchUrl = useRouteMatch();
  const params = useParams();

  const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote);
  const {quoteId} = params;

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);


  if (status === 'pending') {
    return (
      <div className={'centered'}>
        <LoadingSpinner />
      </div>
    )
  }

  if(error) {
    return (<p className={'centered'}>{error}</p>)
  }

  if (!loadedQuote) {
    return (<span>There is no quotes</span>);
  }

  return (
    <Fragment>
      <HighlightedQuote data={loadedQuote} />

      <Route path={matchUrl.path} exact>
        <div className="centered">
          <Link className='btn--flat'
                to={`${matchUrl.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${matchUrl.path}/comments`}
             component={Comments}>
      </Route>
    </Fragment>
  );
};

export default QuoteDetailsComponent;