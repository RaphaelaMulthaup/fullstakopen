const FormNewPerson = ({
  onSubmit,
  newPerson,
  handleNameChange,
  handleNumberChange,
}) => {
  return (
    <>
      <h2>add a new</h2>
      <form onSubmit={onSubmit}>
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
    </>
  );
};

export default FormNewPerson;
