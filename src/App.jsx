// App.js
import React from 'react';
import { Container, Grid } from '@mui/material';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';

function App() {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
      <Grid container spacing={2}>
        <Grid item md={4} xs={12}>
          <NoteList />
        </Grid>
        <Grid item md={8} xs={12}>
          <NoteEditor />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
