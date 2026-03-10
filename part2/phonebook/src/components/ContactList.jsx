const ContactList = ({ persons }) => {
  return (
    <>
      <h2>Numbers</h2>
      <ul>
        {persons.map((p) => (
          <li key={p.id}>
            {p.name}: {p.number}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList
