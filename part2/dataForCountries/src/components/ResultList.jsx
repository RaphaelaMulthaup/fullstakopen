const ResultList = ({filteredCountries, showCountryDetail}) => {  
  return (
    <ul>
      {filteredCountries.map((c, i) => (
        <li key={i}>{c.name.official} <button onClick={()=>showCountryDetail(i)}>Show</button></li>
      ))}
    </ul>
  );
};

export default ResultList;
