import React, { useEffect, useState } from 'react';
import './App.css';
import Note from './components/Note/Note';
// import axios from "axios"
import DUMMY_NOTES from './DUMMY_NOTES';

function App() {
  const [notesList, setNotesList] = useState<any[]>([])

  useEffect(() => {
    setNotesList(DUMMY_NOTES)

  }, [])

  // const getNotes = async () => {
  //   try {
  //     const response = await axios.get(
  //       'http://localhost:5000/notes'
  //     )
  //     setNotesList(response.data.notes)
  //     console.log(notesList);
  //   } catch (error) {
  //     console.error(error);

  //   }
  // }
  console.log(notesList);

  return (
    <div className="App">
      <div>Notes Application </div>
      <div className="notes-list">
        {
          notesList.map((noteItem, index) => {
            return (
              <Note note={noteItem} key={index} />)
          })
        }
      </div>
    </div>
  );
}

export default App;
