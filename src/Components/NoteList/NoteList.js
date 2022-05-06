import React from "react";
import "./note-list.css";
import Note from "../Note/Note";
import AddNote from "../AddNote/AddNote";

const NoteList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note id={note.id} 
        text={note.text} 
        date={note.date} 
        key={note.id} 
        handleDeleteNote={ handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />

       
    </div>
  );
};

export default NoteList;
