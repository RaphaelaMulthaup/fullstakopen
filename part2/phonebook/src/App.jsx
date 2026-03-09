import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "123456" },
  ]);
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newPerson.name} onChange={handleNameChange} />
        </div>
        <div>
          number:{" "}
          <input value={newPerson.number} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((p) => (
          <li key={p.name}>
            {p.name}: {p.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
