import { useState, useEffect } from "react";
import axios from "axios";
import FormNewPerson from "./components/FormNewPerson";
import ContactList from "./components/ContactList";
import Search from "./components/Search";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });
  const [filteredPersons, setFilteredPersons] = useState(persons);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
      setFilteredPersons(response.data)
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

    setPersons(persons.concat(personObject));
    setNewPerson({ name: "", number: "" });
  };

  const handleNameChange = (event) => {
    setNewPerson({ ...newPerson, name: event.target.value });
  };

  const handleNumberChange = (event) => {
    setNewPerson({ ...newPerson, number: event.target.value });
  };

  const handleSearchTermChange = (event) => {
    console.log(event.target.value);
    const filteredPersons = persons.filter((p) =>
      p.name.toLowerCase().includes(event.target.value.toLowerCase()),
    );
    setFilteredPersons(filteredPersons);
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
