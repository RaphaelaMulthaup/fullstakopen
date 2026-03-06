const Total = ({ parts }) => {
  return (
    <p className="bold">
      {" "}
      <span>Total of </span> 
      {parts[0].exercises + parts[1].exercises + parts[2].exercises}{" "}
      <span> exercices</span>{" "}
    </p>
  );
};

export default Total;
