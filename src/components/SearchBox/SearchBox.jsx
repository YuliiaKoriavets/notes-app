import {GoSearch}  from 'react-icons/go'
import { InputWrapper, Input } from './SearchBox.styled';

export default function SearchBox() {
  return (
    <InputWrapper>
        <GoSearch/>
      <Input type="text" name="text" placeholder="Search"/>
    </InputWrapper>
  );
}
