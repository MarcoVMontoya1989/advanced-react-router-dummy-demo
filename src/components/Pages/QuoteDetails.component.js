import React, {Fragment} from 'react';
import {useParams, Route} from 'react-router-dom';
import Comments from '../comments/Comments';

const QuoteDetailsComponent = () => {

  const params = useParams();

  return (
    <Fragment>
      <h1>quote details</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}
             component={Comments}>
      </Route>
    </Fragment>
  );
};

export default QuoteDetailsComponent;