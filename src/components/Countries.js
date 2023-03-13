import '../stylesheets/countries.scss';
import { nanoid } from 'nanoid';
import Cards from './Cards';
import Navbar from './Navbar';
import useFetch from '../hooks/useFetch';
import Loader from '../utils/Loader';
import '../stylesheets/loader.scss';

function Countries() {
  Loader();
  const arr = useFetch('https://restcountries.com/v3.1/all');

  return (
    <>
      <div className="loader-container">
        <div className="loader" />
      </div>
      <div className="fixed">
        <Navbar />
      </div>
      <div className="countries-container">
        {arr && (
          arr.map((country) => <Cards key={nanoid()} country={country} />)
        )}
      </div>
    </>
  );
}

export default Countries;
