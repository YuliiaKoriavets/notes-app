import React, { useContext } from 'react';
import { DataContext } from '../context/dataContext';
import { SelectedNoteContext } from '../context/selectedNoteContext';

export default function ListItem() {
  const { notes } = useContext(DataContext);
  console.log(notes);

  const { setSelectedNote } = useContext(SelectedNoteContext);

  const handleNoteClick = note => {
    console.log(note);
    setSelectedNote(note);
  };

  return (
    <ul>
      {notes.map(({ id, values, updated_at }) => (
        <li key={id} onClick={() => handleNoteClick({ id, values, updated_at })}>
          <h3>{values.aVzCoOuYnkW5u8WRXUWPeK.slice(0, 30) + '...'}</h3>
          <p>{new Date(updated_at).toLocaleDateString('en-GB')}</p>
          <p>{values.aVzCoOuYnkW5u8WRXUWPeK.slice(0, 21) + '...'}</p>
        </li>
      ))}
    </ul>
  );
}
