import { useEffect } from 'react';
import { useAsync } from '../../utils/use-async';

const fetchData = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const json = await data.json();
  return json;
};

export const Home = () => {
  const [reFetchData, result, error, status] = useAsync(fetchData, true);

  useEffect(() => {
    setTimeout(() => {
      reFetchData();
    }, 6000);
  }, [reFetchData]);

  function handleClick() {
    reFetchData();
  }

  if (status === 'idle') {
    return <pre>idle: Nada executando</pre>;
  }

  if (status === 'pending') {
    return <pre>pending: Loading...</pre>;
  }

  if (status === 'error') {
    return <pre>error: {error.message}</pre>;
  }

  if (status === 'settled') {
    return <pre onClick={handleClick}>settled: {JSON.stringify(result, null, 2)}</pre>;
  }
};
