import { useState, useEffect } from "react";
import axios from "axios";
import FormNewPerson from "./components/FormNewPerson";
import ContactList from "./components/ContactList";
import Search from "./components/Search";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPersons = persons.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    const exists = persons.some((p) => p.name === newPerson.name);

    if (exists) {
      alert(`${newPerson.name} is already added to phonebook`);
      return;
    }

    const personObject = {
      name: newPerson.name,
      number: newPerson.number,
      id: persons.length + 1,
    };

    personService.create(personObject).then((response) => {
      setPersons(persons.concat(response));
      setNewPerson({ name: "", number: "" });
    });
  };

  const handleNameChange = (event) => {
    setNewPerson({ ...newPerson, name: event.target.value });
  };

  const handleNumberChange = (event) => {
    setNewPerson({ ...newPerson, number: event.target.value });
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Search onChange={handleSearchTermChange}></Search>
      <FormNewPerson
        onSubmit={addPerson}
        newPerson={newPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      ></FormNewPerson>
      <ContactList persons={filteredPersons}></ContactList>
    </div>
  );
};

export default App;
