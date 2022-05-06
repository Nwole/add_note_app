import React, { useState } from "react";
import "./addnote.css";

const AddNote = ({handleAddNote}) => {
    const characterLimit = 500;
  const [noteText, setNoteText] = useState(" ");

  const handleChange = (event) => {
      if(characterLimit - event.target.value.length >= 0){
        setNoteText(event.target.value);

      }
  };

  const handleSaveclick =() => {
      if(noteText.trim().length > 0){
        handleAddNote(noteText)
      }
    setNoteText(" ")
  }
  return (
    <div className="note new">
      <textarea
        value={noteText}
        onChange={handleChange}
        row="8"
        col="10"
        placeholder="type to add note..."
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length}</small>
        <button onClick={handleSaveclick} className="save">Save</button>
      </div>
    </div>
  );
};

export default AddNote;
