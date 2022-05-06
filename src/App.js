import React, { useState } from 'react';
import './App.css';
import NoteList from './Components/NoteList/NoteList';
import {nanoid} from 'nanoid';
import Search from './Components/Search/Search'
import Header from './Components/Header/Header';
function App() {

const [notes, setNotes] = useState([

{
  id: nanoid(),
  text: "this is my first note",
  date: "7/11/2021"
},
{
  id: nanoid(),
  text: "this is my second note",
  date: "5/8/2021"
},
{
  id: nanoid(),
  text: "this is my third note",
  date: "10/1/2021"
},


])

const AddNote = (text) => {
 const date = new Date();
 const newNote = {
   id: nanoid(),
   text: text,
   date: date.toLocaleDateString()
 }
 const newNotes = [...notes, newNote]
 setNotes(newNotes);
}

const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !==id)
    setNotes(newNotes);
  
}

const [searchText, setSearchText] = useState('')
  return (
    <div className="container">
      <Header />
      <Search handleSearchNote={setSearchText}/>
      <NoteList  notes={notes.filter((note) => note.text.toLocaleLowerCase().includes(searchText))} 
      handleAddNote={AddNote} 
      handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
