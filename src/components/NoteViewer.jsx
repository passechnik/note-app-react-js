import React from 'react';
import { Paper, Typography, Button } from '@mui/material';

export default function NoteViewer({ selectedNote, onEdit, onDelete, onAddNewNote }) {
  if (!selectedNote) {
    return (
      <Paper elevation={3} sx={{ padding: 2, height: '100%' }}>
        <Typography variant="h6" gutterBottom>
          No note selected
        </Typography>
      </Paper>
    );
  }

  const handleEditClick = () => {
    onEdit(selectedNote);
  };

  const handleDeleteClick = () => {
    onDelete(selectedNote);
  };

  return (
    <Paper elevation={3} sx={{ padding: 2, height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        {selectedNote.title}
      </Typography>
      <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
        {selectedNote.content}
      </Typography>
      <Button variant="outlined" color="primary" onClick={handleEditClick} sx={{ marginTop: 2, marginRight: 2 }}>
        Edit
      </Button>
      <Button variant="outlined" color="secondary" onClick={handleDeleteClick} sx={{ marginTop: 2 }}>
        Delete
      </Button>
      {/* Render the '+' button to add a new note */}
      <Button variant="outlined" color="primary" onClick={onAddNewNote} sx={{ marginTop: 2 }}>
        +
      </Button>
    </Paper>
  );
}
