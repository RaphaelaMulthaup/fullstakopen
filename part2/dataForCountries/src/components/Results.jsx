import ResultList from "./ResultList";
import CountryDetail from "./CountryDetail"

const Results = ({ filteredCountries, searchTerm, showCountryDetail, selectedCountry }) => {
  if (!searchTerm) {
    return null;
  }

  if (selectedCountry) {
    return <CountryDetail country={selectedCountry}/>;
  }

  if (filteredCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (filteredCountries.length === 1) {
    return <CountryDetail country={filteredCountries[0]} />;
  }

  return <ResultList filteredCountries={filteredCountries} showCountryDetail={showCountryDetail}/>;
};

export default Results;
