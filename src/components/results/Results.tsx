import React, { FunctionComponent } from 'react';
import { SearchEngine } from '../../utils/constants';
import { useSearch } from '../../utils/useSearch';
import { parseResults } from '../../utils/parseResults';

interface ResultsProps {
  searchEngine: SearchEngine;
  query: string;
}

export const Results: FunctionComponent<ResultsProps> = ({
  searchEngine,
  query,
}) => {
  const [result, loading, error] = useSearch(query, searchEngine);

  if (loading) return <div>Loading {searchEngine} Results...</div>;

  if (error) return <div>{JSON.stringify(error)}</div>;

  if (!result) return null;

  const parsedResults = parseResults(searchEngine, result);

  return (
    <div>
      <h3 className='title'>Results from {searchEngine}:</h3>
      {parsedResults ? (
        <ul>
          {parsedResults.map((item) => (
            <li key={item.url}>
              <div>{item.name}</div>
              <a href={item.url}>{item.url}</a>
            </li>
          ))}
        </ul>
      ) : (
        <strong>None.</strong>
      )}
    </div>
  );
};
