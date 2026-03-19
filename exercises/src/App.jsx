// import { useState, useEffect } from "react";
// import Note from "./components/Note";
// import noteService from "./services/notes";
// import Notification from "./components/Notification";
// import Footer from './components/Footer'

// const App = () => {
//   const [notes, setNotes] = useState([]);
//   const [newNote, setNewNote] = useState("a new note...");
//   const [showAll, setShowAll] = useState(true);
//   const [errorMessage, setErrorMessage] = useState("some error happened...");

//   useEffect(() => {
//     noteService.getAll().then((initialNotes) => {
//       setNotes(initialNotes);
//     });
//   }, []);

//   const addNote = (event) => {
//     event.preventDefault();
//     const noteObject = {
//       content: newNote,
//       important: Math.random() < 0.5,
//     };

//     noteService.create(noteObject).then((returnedNote) => {
//       setNotes(notes.concat(returnedNote));
//       setNewNote("");
//     });
//   };

//   const handleNoteChange = (event) => {
//     setNewNote(event.target.value);
//   };

//   const notesToShow = showAll
//     ? notes
//     : notes.filter((note) => note.important === true);

//   const toggleImportance = (id) => {
//     const noteObject = notes.find((n) => n.id === id);
//     const changedNote = { ...noteObject, important: !noteObject.important };
//     noteService
//       .update(id, changedNote)
//       .then((returnedNote) => {
//         setNotes(notes.map((n) => (n.id === id ? returnedNote : n)));
//       })
//       .catch((error) => {
//         setErrorMessage(
//           `Note '${noteObject.content}' was already removed from server`
//         )
//         setTimeout(() => {
//           setErrorMessage(null)
//         }, 5000)
//         setNotes(notes.filter((n) => n.id !== id));
//       });
//   };

//   return (
//     <div>
//       <h1>Notes</h1>
//       <Notification message={errorMessage} />
//       <div>
//         <button onClick={() => setShowAll(!showAll)}>
//           show {showAll ? "important" : "all"}
//         </button>
//       </div>
//       <ul>
//         {notesToShow.map((n) => (
//           <Note
//             key={n.id}
//             note={n}
//             toggleImportance={() => toggleImportance(n.id)}
//           ></Note>
//         ))}
//       </ul>
//       <form onSubmit={addNote}>
//         <input value={newNote} onChange={handleNoteChange} />
//         <button type="submit">save</button>
//       </form>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default App;

import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [value, setValue] = useState('')
  const [rates, setRates] = useState({})
  const [currency, setCurrency] = useState(null)

  useEffect(() => {
    console.log('effect run, currency is now', currency)

    // skip if currency is not defined
    if (currency) {
      console.log('fetching exchange rates...')
      axios
        .get(`https://open.er-api.com/v6/latest/${currency}`)
        .then(response => {
          setRates(response.data.rates)
        })
    }
  }, [currency])

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const onSearch = (event) => {
    event.preventDefault()
    setCurrency(value)
  }

  return (
    <div>
      <form onSubmit={onSearch}>
        currency: <input value={value} onChange={handleChange} />
        <button type="submit">exchange rate</button>
      </form>
      <pre>
        {JSON.stringify(rates, null, 2)}
      </pre>
    </div>
  )
}

export default App