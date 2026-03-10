import { useState } from "react";
import FormNewPerson from "./components/FormNewPerson";
import ContactList from "./components/ContactList";
import Search from "./components/Search";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });
  const [filteredPersons, setFilteredPersons] = useState(persons);

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
      <Search
        onChange={handleSearchTermChange}
      ></Search>
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
