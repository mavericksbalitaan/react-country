import '../stylesheets/details.scss';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import '../stylesheets/loader.scss';
import Loader from '../utils/Loader';

function Details() {
  Loader();

  const params = useParams();
  const [arr, setArr] = useState(null);
  const [curr, setCurr] = useState(null);
  // const [lat, setLat] = useState(null);
  // const [lng, setLng] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${params.country}`,
      );
      const data = await response.json();
      setArr(data);
      setCurr(data[0].currencies);
      // setLat(data[0].latlng[0]);
      // setLng(data[0].latlng[1]);
    }
    fetchData();
  }, [params.country]);

  return (
    <>
      <div className="loader-container">
        <div className="loader" />
      </div>
      <div className="details-container">
        <div className="details-header">
          <Link to="/countries">
            <button type="button" className="btn btn-secondary">
              Back
            </button>
          </Link>
        </div>
        {arr ? (
          <>
            <div className="details-wrapper">
              <img src={arr[0].flags.png} alt="flag" className="flag" />
              <img
                src={arr[0].coatOfArms.png}
                alt="coatOfArms"
                className="coatOfArms"
              />
            </div>
            <h3 className="text-center header3">{arr[0].name.common}</h3>
            <div className="details-stats">
              {arr[0].unMember && (
                <div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/UN_emblem_blue.svg/512px-UN_emblem_blue.svg.png?20220704023106"
                    alt="UN_emblem_blue"
                    className="UN-member"
                  />
                </div>
              )}
              <div>
                <h4>
                  Official Name: &emsp;
                  {arr[0].name.official}
                </h4>
                <h4>
                  Capital City: &emsp;
                  {arr[0].capital}
                </h4>
                <h4>
                  Currency: &emsp;
                  {Object.keys(curr)[0]}
                </h4>
                <h4>
                  Area: &emsp;
                  {arr[0].area.toLocaleString('en-US')}
                  {' '}
                  km
                  <sup>2</sup>
                </h4>
                <h4>
                  Population: &emsp;
                  {arr[0].population.toLocaleString('en-US')}
                </h4>
                <h4>
                  Timezones: &emsp;
                  {arr[0].timezones.length
                    && arr[0].timezones.map((tmz) => (
                      <span key={nanoid()}>
                        {tmz}
                        {' '}
&emsp;
                      </span>
                    ))}
                </h4>
                <h4>
                  Driving side: &emsp;
                  {arr[0].car.side}
                </h4>
              </div>
            </div>
          </>
        ) : (
          <>
            <h5>Loading data...</h5>
          </>
        )}
      </div>
    </>
  );
}

export default Details;
