import { useEffect } from 'react';

function Loader() {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.loader-container').style = 'display: none';
    }, 100);
  });
}

export default Loader;
