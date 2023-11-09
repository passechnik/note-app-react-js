import React, { useState } from 'react';
import { List, Paper, Typography } from '@mui/material';
import NoteItem from './NoteItem';

export default function NoteList() {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Note 1' },
    { id: 2, title: 'Note 2' },
    // Add more notes as needed
  ]);

  return (
    <Paper elevation={3} sx={{ padding: 2, height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        My Notes
      </Typography>
      <List>
        {notes.map((note) => (
          <NoteItem key={note.id} title={note.title} />
        ))}
      </List>
    </Paper>
  );
}


