import React, { useState, useEffect } from 'react';
import { Paper, Typography, IconButton, Button, TextField } from '@mui/material';
import { TextareaAutosize } from '@mui/base'
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';
import { width } from '@mui/system';

const NoteViewer = ({ selectedNote, onEdit, onDelete, onAddNewNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState({ title: '', content: '' });

  useEffect(() => {
    // update the editedNote state when selectedNote changes
    setEditedNote({
      title: selectedNote ? selectedNote.title : '',
      content: selectedNote ? selectedNote.content : '',
    });
  }, [selectedNote]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit({
      ...selectedNote,
      title: editedNote.title,
      content: editedNote.content,
    });
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <Paper elevation={3} sx={{ padding: 2, height: '100%', display: "flex", flexDirection: 'column', gap: '20px' }}>
      {isEditing ? (
        <>
          <TextField
            type="text"
            value={editedNote.title}
            onChange={(e) => setEditedNote({ ...editedNote, title: e.target.value })}
          />
          <TextareaAutosize
            value={editedNote.content}
            required
            style={{ padding: '20px' }}
            minRows={1}
            onChange={(e) => setEditedNote({ ...editedNote, content: e.target.value })}
          />
          <IconButton onClick={handleSaveClick} color="primary" sx={{ marginTop: 2, marginRight: 2 }} aria-label="Save">
            <SaveIcon />
          </IconButton>
          <IconButton onClick={handleCancelClick} color="default" sx={{ marginTop: 2 }}>
            <CancelIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant="h4" gutterBottom>
            {editedNote.title}
          </Typography>
          <Typography variant="body1" style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', maxWidth: '100%', display: 'flex' }}>
            {editedNote.content}
          </Typography>
          <IconButton onClick={handleEditClick} color="primary" aria-label='Edit' sx={{ marginTop: 2, marginRight: 2, width: 'fit-content' }}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => onDelete(selectedNote)} color="secondary" sx={{ marginTop: 2 }}>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={onAddNewNote} color="primary" sx={{ marginTop: 2 }}>
            +
          </IconButton>
        </>
      )}
    </Paper>
  );
};

export default NoteViewer;
