import { createContext, useState } from 'react';

const SelectedNoteContext = createContext({
  selectedNote: null,
  setSelectedNote: () => {},
});

function SelectedNoteProvider({ children }) {
    const [selectedNote, setSelectedNote] = useState(null);
  
    return (
      <SelectedNoteContext.Provider value={{ selectedNote, setSelectedNote }}>
        {children}
      </SelectedNoteContext.Provider>
    );
  }

export {SelectedNoteContext, SelectedNoteProvider}