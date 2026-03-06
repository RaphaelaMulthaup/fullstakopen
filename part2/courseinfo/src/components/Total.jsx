const Total = ({ parts }) => {
  const total = parts.reduce((s, p) => s + p.exercises, 0);

  return (
    <p className="bold">
      {" "}
      <span>Total of </span>
      {total}
      <span> exercices</span>{" "}
    </p>
  );
};

export default Total;
