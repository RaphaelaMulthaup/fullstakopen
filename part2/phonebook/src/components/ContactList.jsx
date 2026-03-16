import Person from "./Person";

const ContactList = ({ persons, deletePerson }) => {
  return (
    <>
      <h2>Numbers</h2>
      <ul>
        {persons.map((p) => (
          <Person key={p.id} person={p} deletePerson={deletePerson}></Person>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
