// NoteList.js
import React from 'react';
import { Paper, Typography, List, TextareaAutosize, ListItem, Divider } from '@mui/material';

export default function NoteList({ notes }) {
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
                readOnly 
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}
