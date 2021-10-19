import React, {Fragment} from 'react';
import {useParams, Route, Link, useRouteMatch} from 'react-router-dom';
import Comments from '../comments/Comments';
import HighlightedQuote from '../quotes/HighlightedQuote';

import DUMMY_QUOTES from "../tempData";

const QuoteDetailsComponent = () => {
  const matchUrl = useRouteMatch();
  const params = useParams();

  let quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  if (!quote) {
    return (<span>There is no quotes</span>);
  }

  return (
    <Fragment>
      <HighlightedQuote data={quote} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link className='btn--flat'
                to={`/quotes/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}
             component={Comments}>
      </Route>
    </Fragment>
  );
};

export default QuoteDetailsComponent;