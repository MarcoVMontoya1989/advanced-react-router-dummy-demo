import React, {Fragment, useEffect} from 'react';
import QuoteForm from "../quotes/QuoteForm";
import {useHistory} from "react-router-dom";

import useHttp from "../../hooks/use-http";
import {addQuote} from "../../lib/api";

const NewQuotesComponent = () => {

  const {sendRequest, status} = useHttp(addQuote);

  const historyParams = useHistory();

  useEffect(() => {
    if (status === 'completed') {
      historyParams.push(`/quotes`);
    }
  }, [status, historyParams]);

  const addQuoteHandler = quoteData => {
    sendRequest(quoteData);
  };

  return (
    <Fragment>
      new quotes
      <QuoteForm
        isLoading={status === 'pending'}
        onAddQuoteHandler={addQuoteHandler} />
    </Fragment>
  );
};

export default NewQuotesComponent;