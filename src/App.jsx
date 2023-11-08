import React, { useState } from 'react';
import { Container, Typography, Button, TextField } from '@mui/material';
import './style.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" align="center">
        My Note-taking App
      </Typography>
      <div className="notes-list">
        {notes.map((note, index) => (
          <div key={index} className="note">
            {note}
          </div>
        ))}
      </div>
      <TextField
        label="Add a new note"
        variant="outlined"
        fullWidth
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={addNote}>
        Add Note
      </Button>
    </Container>
  );
}

export default App;
