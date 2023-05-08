import React, { useCallback, useEffect, useRef } from 'react'
import { Textarea, Date } from './NoteTextarea.styled'

export default function NoteTextarea () {
  const textareaRef = useRef(null)

  const handleChange = useCallback(e => {
    console.log('Changed value to: ', e.target.value)
  }, [])

  useEffect(() => {
    textareaRef.current.focus()
  }, [])

  return (
    <>
      <Date>Date</Date>
      <Textarea
        className="textarea"
        id="my-textarea"
        maxLength="3000"
        // name="pet[notes]"
        onChange={handleChange}
        placeholder="Enter your notes..."
        ref={textareaRef}
      />
    </>
  )
}