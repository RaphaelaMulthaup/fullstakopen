import { useState, useEffect } from "react";
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
    personService
      .getAll()
      .then((response) => {
        setPersons(response);
      })
      .catch(() => alert("The data could not be loaded."));
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newPerson.name,
      number: newPerson.number,
    };

    const existingPerson = persons.find((p) => p.name === newPerson.name);

    if (existingPerson) {
      handleExistingPerson(existingPerson, personObject);
    } else {
      createNewPerson(personObject);
    }
  };

  const createNewPerson = (personObject) => {
    personService
      .create(personObject)
      .then((response) => {
        setPersons(persons.concat(response));
        setNewPerson({ name: "", number: "" });
      })
      .catch(() => alert("The data for the new contact could not be saved."));
  };

  const handleExistingPerson = (existingPerson, personObject) => {
    if (windowConfirmReplace(existingPerson)) {
      personService
        .replaceNumber(existingPerson.id, personObject)
        .then((returneObject) => {
          setStatesAferReplaceNumber(existingPerson, returneObject);
        })
        .catch(() => alert("The number could not be replaced."));
    }
  };

  const windowConfirmReplace = (existingPerson) => {
    return window.confirm(
      `${existingPerson.name} is already added to phonebook, replace the old number with a new one?`,
    );
  };

  const setStatesAferReplaceNumber = (existingPerson, returneObject) => {
    setPersons(
      persons.map((p) => (p.id === existingPerson.id ? returneObject : p)),
    );
    setNewPerson({ name: "", number: "" });
  };

const deletePerson = (id) => {
  personService
    .deletePerson(id)
    .then(() => {
      setPersons(persons.filter((p) => p.id !== id));
    })
    .catch(() => alert("The contact could not be deleted."));
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
      <ContactList
        persons={filteredPersons}
        deletePerson={deletePerson}
      ></ContactList>
    </div>
  );
};

export default App;
