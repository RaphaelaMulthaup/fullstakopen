import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Feedback
        setGood={setGood}
        setNeutral={setNeutral}
        setBad={setBad}
      ></Feedback>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
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

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = all === 0 ? 0 : (good - bad) / all;
  const positive = all === 0 ? 0 : (good / all) * 100;

  return (
    <>
      {" "}
      <h2>Statistics</h2>
      <div>
        <Display name={"good "} amount={good}></Display>
        <Display name={"neutral "} amount={neutral}></Display>
        <Display name={"bad "} amount={bad}></Display>
        <Display name={"all "} amount={all}></Display>
        <Display name={"average "} amount={average}></Display>
        <Display name={"positiv "} amount={positive}></Display>
      </div>
    </>
  );
};

const Button = ({ onClick, name }) => {
  return <button onClick={onClick}>{name}</button>;
};

const Display = ({ name, amount }) => {
  return (
    <div>
      {name}
      {amount}
    </div>
  );
};

export default App;
