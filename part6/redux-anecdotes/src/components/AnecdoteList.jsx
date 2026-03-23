import { useSelector, useDispatch } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  );
};

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => [...state].sort((a, b) => b.votes - a.votes));

  return (
    <>
      {anecdotes.map((a) => (
        <Anecdote
          key={a.id}
          anecdote={a}
          handleClick={() => dispatch(vote(a.id))}
        ></Anecdote>
      ))}
    </>
  );
};

export default AnecdoteList;
