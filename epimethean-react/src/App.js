import Heading from './components/Heading';
import Note from './components/Note';
import Tools from './components/Tools';
//import Notepad from './components/Notepad';
import { useState } from 'react';


export default function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes(prevNotes => {
      return[...prevNotes, newNote];
    });
  }

  return (
    <div className="App">
      <Heading />
      <Tools addFunc={addNote} />
      {notes.map((noteItem, index) =>{
        return(
          <Note
            key={index}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}

    </div>
  );
}
