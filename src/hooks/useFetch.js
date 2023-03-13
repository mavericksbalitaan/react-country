import { useState, useEffect } from 'react';

function useFetch(url) {
  const [arr, setArr] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function fetchData() {
      const response = await fetch(url, { signal });
      const data = await response.json();
      setArr(data);
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return arr;
}

export default useFetch;
