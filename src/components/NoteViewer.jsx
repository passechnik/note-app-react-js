import React from 'react';
import { Paper, Typography, Button } from '@mui/material';

export default function NoteViewer({ selectedNote, onEdit, onDelete }) {
  if (!selectedNote) {
    return (
      <Paper elevation={3} sx={{ padding: 2, height: '100%' }}>
        <Typography variant="h6" gutterBottom>
          No note selected
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper elevation={3} sx={{ padding: 2, height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        {selectedNote.title}
      </Typography>
      <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
        {selectedNote.content}
      </Typography>
      <Button variant="outlined" color="primary" onClick={onEdit} sx={{ marginTop: 2, marginRight: 2 }}>
        Edit
      </Button>
      <Button variant="outlined" color="secondary" onClick={onDelete} sx={{ marginTop: 2 }}>
        Delete
      </Button>
    </Paper>
  );
}

