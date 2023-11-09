import React, { useState } from 'react';
import { Paper, Typography, TextareaAutosize, Button, TextField } from '@mui/material';

export default function NoteEditor({ onSaveNote }) {
  const [currentNote, setCurrentNote] = useState({ id: null, title: '', content: '' });

  const handleNoteChange = (e) => {
    setCurrentNote({ ...currentNote, content: e.target.value });
  };

  const handleTitleChange = (e) => {
    setCurrentNote({ ...currentNote, title: e.target.value });
  };

  const handleSaveNote = () => {
    // create a new note with a unique ID
    const newNote = { ...currentNote, id: Date.now() };

    // call the onSaveNote function to save the note to the list
    onSaveNote(newNote);

    // clear the currentNote state for the next note
    setCurrentNote({ id: null, title: '', content: '' });
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
        onChange={handleTitleChange}
      />
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="Start typing..."
        minRows={4}
        style={{ width: '100%', fontSize: '1rem', border: 'none', outline: 'none', marginTop: '8px' }}
        value={currentNote.content}
        onChange={handleNoteChange}
      />
      <Button variant="contained" color="primary" onClick={handleSaveNote} sx={{ marginTop: '8px' }}>
        Save Note
      </Button>
    </Paper>
  );
}

