import React from 'react';
import QuoteForm from "../quotes/QuoteForm";

const NewQuotesComponent = () => {

  const addQuoteHandler = quoteData => {

  }

  return (
    <div>
      new quotes
      <QuoteForm onAddQuoteHandler={addQuoteHandler} />
    </div>
  );
};

export default NewQuotesComponent;