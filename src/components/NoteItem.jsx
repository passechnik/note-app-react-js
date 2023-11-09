import React from 'react';
import { ListItem, ListItemText } from '@mui/material';

export default function NoteItem({ title }) {
  return (
    <ListItem button>
      <ListItemText primary={title} />
      {/* Add more details or actions for each note if needed */}
    </ListItem>
  );
}
