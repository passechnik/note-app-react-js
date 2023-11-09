import React, { useState } from 'react';
import { Paper, Typography, List, TextareaAutosize, ListItem, Divider, Button } from '@mui/material';
import NoteEditor from './NoteEditor';

export default function NoteList() {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Note 1' },
    { id: 2, title: 'Note 2' },
  ]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <Paper elevation={3} sx={{ padding: 2, height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        My Notes
      </Typography>
      <List>
        {notes.map((note) => (
          <React.Fragment key={note.id}>
            <ListItem disablePadding>
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Start typing..."
                minRows={4}
                style={{ width: '100%', fontSize: '1rem', border: 'none', outline: 'none' }}
                value={note.title}
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
      <NoteEditor onSaveNote={addNote} />
    </Paper>
  );
}

