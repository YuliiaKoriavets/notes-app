import React, {useState, useContext } from 'react';
import { DataContext } from '../../context/dataContext';
import { SelectedNoteProvider} from '../../context/selectedNoteContext';
import { Wrapper, SearchBoxWrapper } from "./Workspace.styled"
import SearchBox from "../SearchBox/SearchBox"
import NoteTextarea from "../NoteTextarea/NoteTextarea"

export default function Workspace(){
    const [selectedNote, setSelectedNote] = useState(null);
    
    return(
        <SelectedNoteProvider value={{ selectedNote, setSelectedNote }}> 
        <Wrapper>
            <SearchBoxWrapper>
                <SearchBox/>
            </SearchBoxWrapper>
            <NoteTextarea/>
        </Wrapper>
        </SelectedNoteProvider>
    )
}