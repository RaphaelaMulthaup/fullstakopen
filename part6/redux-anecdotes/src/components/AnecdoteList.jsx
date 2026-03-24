import { useSelector, useDispatch } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import { setNotification, clearNotification, showNotification} from "../reducers/notificatonReducer";

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
    dispatch(vote(id));
    dispatch(showNotification(`You voted '${anecdote}'`));
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
