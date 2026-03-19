import Weather from "./Weather";

const CountryDetail = ({ country }) => {
  return (
    <>
      <h1>{country.name.official}</h1>
      <p>Capital {country.capital}</p>
      <p>Area {country.area}</p>
      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages).map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
      <Weather country={country}></Weather>
    </>
  );
};

export default CountryDetail;
