import { useEffect, useState } from 'react';

export const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('EFFECT', new Date().toLocaleString());
    const controller = new AbortController();
    const fetchData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      try {
        const response = await fetch(url, { ...options, signal: controller.signal });
        const jsonResult = await response.json();
        setResult(jsonResult);
      } catch (error) {
        if (error.name == 'AbortError') {
          console.warn('fetch request was cancelled');
        }
      }
      setLoading(false);
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, [url, options]);

  return [result, loading];
};
