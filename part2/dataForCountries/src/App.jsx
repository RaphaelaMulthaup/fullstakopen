import Form from "./components/Form";
import Results from "./components/Results";
import { useEffect, useState } from "react";
import countrieService from "./services/countries";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [countriesInformations, setCountriesInformations] = useState([]);

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
  };

  const filteredCountries = countriesInformations.filter((c) =>
    c.name.official.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <Form
        searchTerm={searchTerm}
        handleSearchTermChange={handleSearchTermChange}
      ></Form>
      <Results filteredCountries={filteredCountries} searchTerm={searchTerm}></Results>
    </>
  );
};

export default App;
