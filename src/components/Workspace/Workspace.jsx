import { Wrapper, SearchBoxWrapper } from "./Workspace.styled"
import SearchBox from "../SearchBox/SearchBox"
import NoteTextarea from "../NoteTextarea/NoteTextarea"

export default function Workspace(){
    return(
        <Wrapper>
            <SearchBoxWrapper>
                <SearchBox/>
            </SearchBoxWrapper>
            <NoteTextarea/>
        </Wrapper>
    )
}