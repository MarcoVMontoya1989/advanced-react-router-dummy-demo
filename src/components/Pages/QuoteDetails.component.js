import React from 'react';
import {useParams} from 'react-router-dom';

const QuoteDetailsComponent = () => {

  const params = useParams();

  console.log(params.quoteId);

  return (
    <div>
      quote details
      {params.quoteId}
    </div>
  );
};

export default QuoteDetailsComponent;