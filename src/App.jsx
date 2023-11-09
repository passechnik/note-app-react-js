// App.js
import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';

function App() {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Note 1' },
    { id: 2, title: 'Note 2' },
  ]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
      <Grid container spacing={2}>
        {/* Left side: NoteList (1/4 of the screen) */}
        <Grid item md={3} xs={12}>
          <NoteList notes={notes} />
        </Grid>

        {/* Right side: NoteEditor (3/4 of the screen) */}
        <Grid item md={9} xs={12}>
          <NoteEditor onSaveNote={addNote} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
