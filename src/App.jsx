// App.js
import React from 'react';
import { Container, Grid } from '@mui/material';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';

function App() {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
      <Grid container spacing={2}>
        {/* left side: NoteList (1/4 of the screen) */}
        <Grid item md={3} xs={12}>
          <NoteList />
        </Grid>

        {/* right side: NoteEditor (3/4 of the screen) */}
        <Grid item md={9} xs={12}>
          <NoteEditor />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
