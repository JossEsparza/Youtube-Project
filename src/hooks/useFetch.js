import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);

      try {
        console.log('antes del fetch');
        const response = await fetch(url, { signal: controller.signal });
        const result = await response.json();
        console.log('despues del fetch');
        setData(result);
      } catch (error) {
        setError(error);
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};
