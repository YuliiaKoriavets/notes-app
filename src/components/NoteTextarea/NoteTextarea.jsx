import React, { useCallback, useEffect, useRef, useContext} from 'react'
import { SelectedNoteContext } from '../../context/selectedNoteContext';
import { Textarea, Date } from './NoteTextarea.styled'

export default function NoteTextarea () {
  const { selectedNote, setSelectedNote } = useContext(SelectedNoteContext);
  console.log(selectedNote);
  const textareaRef = useRef(null)

  const handleChange = useCallback((e) => {
    setSelectedNote((prevNote) => ({
      ...prevNote,
      content: e.target.value,
    }));
  }, [setSelectedNote]);

  useEffect(() => {
    textareaRef.current.focus()
  }, [])

  return (
    <>
      <Date>{selectedNote?.updated_at}</Date>
      <Textarea
            className="textarea"
            id="my-textarea"
            maxLength="3000"
            value={selectedNote?.content}
            onChange={handleChange}
            placeholder="Enter your notes..."
            ref={textareaRef}
      />
    </>
  )
}