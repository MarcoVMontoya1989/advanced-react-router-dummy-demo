import React, {Fragment} from 'react';
import {useParams, Route} from 'react-router-dom';
import Comments from '../comments/Comments';
import HighlightedQuote from '../quotes/HighlightedQuote';

import DUMMY_QUOTES from "../tempData";

const QuoteDetailsComponent = () => {

  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  return (
    <Fragment>
      {/*<h1>quote details</h1>*/}
      {/*<p>{params.quoteId}</p>*/}
      <HighlightedQuote data={quote} />
      <Route path={`/quotes/${params.quoteId}/comments`}
             component={Comments}>
      </Route>
    </Fragment>
  );
};

export default QuoteDetailsComponent;