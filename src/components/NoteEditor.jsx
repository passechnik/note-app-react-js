// NoteEditor.js
import React, { useState } from 'react';
import { Paper, TextField, Button, Typography } from '@mui/material';

function NoteEditor() {
  const [currentNote, setCurrentNote] = useState({ id: null, title: '' });

  const handleNoteChange = (e) => {
    setCurrentNote({ ...currentNote, title: e.target.value });
  };

  const handleSaveNote = () => {
    // Implement logic to save the note
    console.log('Note saved:', currentNote);
  };

  return (
    <Paper elevation={3} sx={{ padding: 2, height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        {currentNote.id ? 'Edit Note' : 'Create New Note'}
      </Typography>
      <TextField
        label="Note Title"
        fullWidth
        margin="normal"
        value={currentNote.title}
        onChange={handleNoteChange}
      />
      <Button variant="contained" color="primary" onClick={handleSaveNote}>
        Save Note
      </Button>
      {/* Add more fields or actions for note editing */}
    </Paper>
  );
}

export default NoteEditor;
