const Form = ({ searchTerm, handleSearchTermChange }) => {
  return (
    <>
      <label htmlFor="input">find countries</label>
      <input
        id="input"
        value={searchTerm}
        type="text"
        onChange={handleSearchTermChange}
      />
    </>
  );
};

export default Form;
