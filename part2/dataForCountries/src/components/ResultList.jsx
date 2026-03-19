const ResultList = ({filteredCountries}) => {  
  return (
    <ul>
      {filteredCountries.map((c, i) => (
        <li key={i}>{c.name.official}</li>
      ))}
    </ul>
  );
};

export default ResultList;
