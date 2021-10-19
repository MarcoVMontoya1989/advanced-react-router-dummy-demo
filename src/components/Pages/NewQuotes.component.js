import React from 'react';
import QuoteForm from "../quotes/QuoteForm";
import {useHistory} from "react-router-dom";

const NewQuotesComponent = () => {

  const historyParams = useHistory();

  const addQuoteHandler = quoteData => {

    historyParams.push(`/quotes/q1`);
  };

  return (
    <div>
      new quotes
      <QuoteForm onAddQuoteHandler={addQuoteHandler} />
    </div>
  );
};

export default NewQuotesComponent;