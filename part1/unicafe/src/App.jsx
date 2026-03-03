import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;

  return (
    <div>
      <Feedback
        setGood={setGood}
        setNeutral={setNeutral}
        setBad={setBad}
      ></Feedback>
      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Statistics good={good} neutral={neutral} bad={bad} all={all} />
      )}{" "}
    </div>
  );
};

const Feedback = ({ setGood, setNeutral, setBad }) => {
  return (
    <>
      {" "}
      <h2>Give feedback</h2>
      <div>
        <Button
          onClick={() => setGood((prev) => prev + 1)}
          name={"good"}
        ></Button>
        <Button
          onClick={() => setNeutral((prev) => prev + 1)}
          name={"neutral"}
        ></Button>
        <Button
          onClick={() => setBad((prev) => prev + 1)}
          name={"bad"}
        ></Button>
      </div>
    </>
  );
};

const Statistics = ({ good, neutral, bad, all }) => {
  const average = all === 0 ? 0 : (good - bad) / all;
  const positive = all === 0 ? 0 : (good / all) * 100;

  return (
    <>
      {" "}
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text={"good "} amount={good}></StatisticLine>
          <StatisticLine text={"neutral "} amount={neutral}></StatisticLine>
          <StatisticLine text={"bad "} amount={bad}></StatisticLine>
          <StatisticLine text={"all "} amount={all}></StatisticLine>
          <StatisticLine text={"average "} amount={average}></StatisticLine>
          <StatisticLine text={"positiv "} amount={positive}></StatisticLine>
        </tbody>
      </table>
    </>
  );
};

const Button = ({ onClick, name }) => {
  return <button onClick={onClick}>{name}</button>;
};

const StatisticLine = ({ text, amount }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{amount}</td>
    </tr>
  );
};

export default App;
