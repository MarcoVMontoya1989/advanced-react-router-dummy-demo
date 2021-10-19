import React from 'react';

const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'Maximo',
    text: 'lorem Ipsum',
  },
  {
    id: 'q2',
    author: 'Cicero',
    text: 'foobar Ipsum',
  },
  {
    id: 'q3',
    author: 'Julius',
    text: 'lorem something',
  },
]

const AllQuotesComponent = () => {
  return (
    <div>
      <h1>all quotes</h1>
    </div>
  );
};

export default AllQuotesComponent;