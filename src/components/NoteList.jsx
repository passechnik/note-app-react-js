// NoteList.js
import React, { useState } from 'react';
import { Paper, Typography, List, ListItem, Divider } from '@mui/material';

export default function NoteList({ notes }) {
  const [activeNoteId, setActiveNoteId] = useState(null);

  const handleNoteClick = (noteId) => {
    setActiveNoteId(noteId);
  };

  return (
    <Paper elevation={3} sx={{ padding: 2, height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        My Notes
      </Typography>
      <List>
        {notes.map((note) => (
          <React.Fragment key={note.id}>
            <ListItem
              disablePadding
              onClick={() => handleNoteClick(note.id)}
              sx={{
                border: activeNoteId === note.id ? '2px solid #2196f3' : 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                marginBottom: '12px', 
                padding: '16px', 
                display: 'flex',
                alignItems: 'flex-start', 
                flexDirection: 'column', 
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: 'bold', textAlign: 'start' }}>
                {note.title}
              </Typography>
              {note.content && (
                <Typography variant="body2" sx={{ color: '#757575', marginTop: '8px', textAlign: 'start' }}>
                  {note.content.substring(0, 20)}
                </Typography>
              )}
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}
