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
  const anecdotes = useSelector(({ anecdotes, filterTerm }) => {
    const filtered = anecdotes.filter((a) =>
      a.content.toLowerCase().includes(filterTerm.toLowerCase()),
    );
    return filtered.sort((a, b) => b.votes - a.votes);
  });

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
