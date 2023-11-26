import React, { useState } from 'react';
import {
  Paper,
  Typography,
  List,
  ListItem,
  Divider,
  InputBase,
  IconButton,
  Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';

export default function NoteList({ notes, onNoteClick, onDeleteAll }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleNoteClick = (noteId) => {
    // call the onNoteClick function with the clicked note
    onNoteClick(notes.find((note) => note.id === noteId));
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (note.content && note.content.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Paper elevation={3} sx={{ padding: 2, height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        My Notes
      </Typography>
      {/* add the search bar */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
        <InputBase
          placeholder="Search notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
          sx={{ marginRight: '8px' }}
        />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </div>

      {filteredNotes.length === 0 ? (
        <Typography variant="body2">No matching notes</Typography>
      ) : (
        <List>
          {filteredNotes.map((note) => (
            <React.Fragment key={note.id}>
              <ListItem
                disablePadding
                onClick={() => handleNoteClick(note.id)}
                sx={{
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
                  <Typography
                    variant="body2"
                    sx={{ color: '#757575', marginTop: '8px', textAlign: 'start' }}
                  >
                    {note.content.substring(0, 20)}
                  </Typography>
                )}
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      )}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button onClick={onDeleteAll} color="error" title="Delete All Notes">
          Delete All
        </Button>
        <IconButton color="error">
          <DeleteIcon />
        </IconButton>
      </div>
    </Paper>
  );
}
