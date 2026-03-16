const Person = ({ person, deletePerson }) => {
  // const handleDelete = () => {

  // }

  return (
    <>
      <li key={person.id}>
        {person.name}: {person.number}{" "}
        <button
          onClick={() => {
            window.confirm(`Delere ${person.name}?`) && deletePerson(person.id);
          }}
        >
          delete
        </button>
      </li>
    </>
  );
};

export default Person;
