import Form from "./components/Form";
import Results from "./components/Results";
import { useEffect, useState } from "react";
import countrieService from "./services/countries";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [countriesInformations, setCountriesInformations] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    countrieService
      .getAll()
      .then((response) => {
        setCountriesInformations(response);
      })
      .catch(() => alert("The data could not be loaded."));
  }, []);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
    setSelectedCountry(null);
  };

  const filteredCountries = countriesInformations.filter((c) =>
    c.name.official.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const showCountryDetail = (i) => {
    setSelectedCountry(filteredCountries[i]);
  };

  return (
    <>
      <Form
        searchTerm={searchTerm}
        handleSearchTermChange={handleSearchTermChange}
      ></Form>
      <Results
        filteredCountries={filteredCountries}
        searchTerm={searchTerm}
        showCountryDetail={showCountryDetail}
        selectedCountry={selectedCountry}
      ></Results>
    </>
  );
};

export default App;
