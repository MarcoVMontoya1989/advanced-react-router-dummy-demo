import React from 'react';
import QuoteList from "../quotes/QuoteList";
import DUMMY_QUOTES from "../tempData";

const AllQuotesComponent = () => {
  return (
    <div>
      <h1>all quotes</h1>
      <QuoteList quotes={DUMMY_QUOTES}/>
    </div>
  );
};

export default AllQuotesComponent;