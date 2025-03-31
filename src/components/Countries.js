import { Fragment, useRef, useState } from 'react';
import '../stylesheets/countries.scss';
import { useQuery } from '@tanstack/react-query';
import { nanoid } from 'nanoid';
import Cards from './Cards';
import Navbar from './Navbar';
import ErrorBoundary from './ErrorBoundary';

function Countries() {
  const formRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchApi = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    return response.json();
  };

  const { data, isPending } = useQuery({
    queryKey: ['countries'],
    queryFn: fetchApi,
  });

  if (isPending) {
    return <p>Loading...</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    setSearchQuery(formData.get('country'));
  };

  const filteredCountries = data?.filter((country) => {
    const lowerCase = country.name.common.toLowerCase();
    return lowerCase.startsWith(searchQuery.toLowerCase());
  });

  const debounce = (func, delay) => {
    let timeoutId;
    // eslint-disable-next-line
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const handleInput = () => {
    const formData = new FormData(formRef.current);
    debounce(setSearchQuery(formData.get('country')), 300);
  };

  return (
    <>
      <div className="fixed">
        <Navbar />
        <form className="searchBar" onSubmit={handleSubmit} ref={formRef}>
          <input
            type="text"
            name="country"
            onChange={handleInput}
            placeholder="Search country..."
          />
          <input type="submit" value="Search" />
        </form>
      </div>
      <div className="countries-container">
        {filteredCountries?.map((country) => (
          <Fragment key={nanoid()}>
            <ErrorBoundary fallback="Something went wrong...">
              <Cards key={nanoid()} country={country} />
            </ErrorBoundary>
          </Fragment>
        ))}
      </div>
    </>
  );
}

export default Countries;
