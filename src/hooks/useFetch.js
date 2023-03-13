import { useState, useEffect } from 'react';

function useFetch(url) {
  const [arr, setArr] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setArr(data);
    }

    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return arr;
}

export default useFetch;
