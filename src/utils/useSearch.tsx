import { useState, useEffect } from 'react';
import { getReq } from './getReq';
import axios from 'axios';
import { SearchEngine } from './constants';

export function useSearch(query: string, searchEngine: SearchEngine) {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { url, headers } = getReq(query, searchEngine);

  useEffect(() => {
    if (!query) {
      setResult('');
      return;
    }
    setLoading(true);
    axios
      .get(url, headers)
      .then((response) => {
        setResult(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.response?.data.error.message || error.message);
      });

    return () => {};
    // eslint-disable-next-line
  }, [query, searchEngine]);

  return [result, loading, error];
}
