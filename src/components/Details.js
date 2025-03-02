import '../stylesheets/details.scss';
import { Link, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useQuery } from '@tanstack/react-query';

function Details() {
  const params = useParams();

  const fetchApi = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${params.country}`);
    return response.json();
  };

  const { data, isPending } = useQuery({
    queryKey: ['countries', params.country],
    queryFn: fetchApi,
  });

  if (isPending) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="details-container">
        <div className="details-header">
          <Link to="/countries">
            <button type="button" className="btn btn-secondary">
              Back
            </button>
          </Link>
        </div>
        <>
          <div className="details-wrapper">
            <img src={data[0].flags.png} alt="flag" className="flag" />
            <img
              src={data[0].coatOfArms.png}
              alt="coatOfArms"
              className="coatOfArms"
            />
          </div>
          <h3 className="text-center header3">{data[0].name.common}</h3>
          <div className="details-stats">
            {data[0].unMember && (
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
                {data[0].name.official}
              </h4>
              <h4>
                Capital City: &emsp;
                {data[0].capital}
              </h4>
              <h4>
                Currency: &emsp;
                {Object.keys(data[0].currencies)[0]}
              </h4>
              <h4>
                Area: &emsp;
                {data[0].area.toLocaleString('en-US')}
                {' '}
                km
                <sup>2</sup>
              </h4>
              <h4>
                Population: &emsp;
                {data[0].population.toLocaleString('en-US')}
              </h4>
              <h4>
                Timezones: &emsp;
                {data[0].timezones.length
                  && data[0].timezones.map((tmz) => (
                    <span key={nanoid()}>
                      {tmz}
                      {' '}
                      &emsp;
                    </span>
                  ))}
              </h4>
              <h4>
                Driving side: &emsp;
                {data[0].car.side}
              </h4>
            </div>
          </div>
        </>
      </div>
    </>
  );
}

export default Details;
