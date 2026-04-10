import { useNavigate } from "react-router-dom";
import { useField } from "./../hooks/index";

const CreateNew = ({ addAnecdote }) => {
  const { reset: resetContent, ...contentProps } = useField("content");
  const { reset: resetAuthor, ...authorProps } = useField("author");
  const { reset: resetInfo, ...infoProps } = useField("info");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addAnecdote({
      content: contentProps.value,
      author: authorProps.value,
      info: infoProps.value,
      votes: 0,
    });
    navigate("/");
  };

  const resetForm = () => {
    resetContent();
    resetAuthor();
    resetInfo();
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...contentProps} />
        </div>
        <div>
          author
          <input {...authorProps} />
        </div>
        <div>
          url for more info
          <input {...infoProps} />
        </div>
        <button type="submit">create</button>
        <button type="button" onClick={resetForm}>
          reset
        </button>
      </form>
    </div>
  );
};

export default CreateNew;
