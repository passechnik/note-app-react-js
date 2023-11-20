import React, { useState } from 'react';
import { Container, Grid, Button } from '@mui/material';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';
import NoteViewer from './components/NoteViewer';

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [viewingNote, setViewingNote] = useState(false);

  const handleNoteClick = (note) => {
    setSelectedNote(note);
    setViewingNote(true);
  };

  const handleEdit = () => {
    setViewingNote(false);
    console.log('Edit note:', selectedNote);
  };

  const handleDelete = () => {
    setViewingNote(false);
    console.log('Delete note:', selectedNote);
   
    setSelectedNote(null);
  };

  const handleAddNewNote = () => {
    setViewingNote(false);
    
    console.log('Add new note');
  };

  const handleSaveNote = (newNote) => {
  
    setNotes([...notes, newNote]);
  
    console.log('Save note:', newNote);
  };

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
      <Grid container spacing={2}>
        <Grid item md={4} xs={12}>
          <NoteList notes={notes} onNoteClick={handleNoteClick} />
        </Grid>
        <Grid item md={4} xs={12}>
          {viewingNote ? (
            <NoteViewer selectedNote={selectedNote} onEdit={handleEdit} onDelete={handleDelete} />
          ) : (
            <NoteEditor onSaveNote={handleSaveNote} />
          )}
        </Grid>
        <Grid item md={4} xs={12}>
          {/* a small '+' button to add a new note */}
          {!viewingNote && (
            <Button variant="outlined" color="primary" onClick={handleAddNewNote} sx={{ marginTop: 2 }}>
              +
            </Button>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
