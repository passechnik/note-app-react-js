import React, { useState } from 'react';
import { Container, Grid, Button } from '@mui/material';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';
import NoteViewer from './components/NoteViewer';

export default function App() {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Note 1', content: 'Content of Note 1' },
    { id: 2, title: 'Note 2', content: 'Content of Note 2' },
  ]);

  const [selectedNote, setSelectedNote] = useState(null);
  const [viewingNote, setViewingNote] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleNoteClick = (note) => {
    setSelectedNote(note);
    setViewingNote(true);
    setIsEditing(false);
  };

  const handleEdit = (editedNote) => {
    // find the index of the edited note in the notes array
    const index = notes.findIndex((note) => note.id === editedNote.id);

    // update the notes array with the edited note
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes];
      updatedNotes[index] = editedNote;
      return updatedNotes;
    });
  };

  const handleDelete = () => {
    const updatedNotes = notes.filter((note) => note.id !== selectedNote.id);
    setNotes(updatedNotes);

    // clear the selected note and set viewingNote and isEditing to false
    setSelectedNote(null);
    setViewingNote(false);
    setIsEditing(false);
  };

  const handleAddNewNote = () => {
    setViewingNote(false);
    setIsEditing(true);
  };

  const handleSaveNote = (newNote) => {
    if (isEditing) {
      // update the existing note in the list
      setNotes((prevNotes) =>
        prevNotes.map((note) => (note.id === newNote.id ? { ...note, ...newNote } : note))
      );
    } else {
      // add the new note to the list
      setNotes((prevNotes) => [...prevNotes, newNote]);
    }

    // clear the selected note and set viewingNote and isEditing to false
    setSelectedNote(null);
    setViewingNote(false);
    setIsEditing(false);
  };

  const handleDeleteAll = () => {
    // Implement the logic to delete all notes
    setNotes([]);
    setSelectedNote(null);
    setViewingNote(false);
    setIsEditing(false);
  }

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
      <Grid container spacing={2}>
        <Grid item md={3} xs={12}>
          <NoteList notes={notes} onNoteClick={handleNoteClick} onDeleteAll={handleDeleteAll} />
        </Grid>
        <Grid item md={7} xs={12}>
          {viewingNote ? (
            <NoteViewer
              selectedNote={selectedNote}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onAddNewNote={handleAddNewNote}
            />
          ) : (
            <NoteEditor onSaveNote={handleSaveNote} isEditing={isEditing} selectedNote={selectedNote} />
          )}
        </Grid>
        <Grid item md={2} xs={12}>
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

