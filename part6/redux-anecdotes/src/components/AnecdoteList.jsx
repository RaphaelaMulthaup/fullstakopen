import { useSelector, useDispatch } from "react-redux";
import { increaseVote } from "../reducers/anecdoteReducer";
import { showNotification} from "../reducers/notificatonReducer";

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
    console.log(filterTerm);
    const filtered = anecdotes.filter((a) =>
      a.content.toLowerCase().includes(filterTerm.toLowerCase()),
    );
    return filtered.sort((a, b) => b.votes - a.votes);
  });

  const voteAnecdote = (id, anecdote) => {
    dispatch(increaseVote(id));
    dispatch(showNotification(`You voted '${anecdote}'`, 10));
  };

  return (
    <>
      {anecdotes.map((a) => (
        <Anecdote
          key={a.id}
          anecdote={a}
          handleClick={() => voteAnecdote(a.id, a.content)}
        ></Anecdote>
      ))}
    </>
  );
};

export default AnecdoteList;
