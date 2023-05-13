import React, { useContext } from 'react';
import { DataContext } from '../../context/dataContext';
import { GoPlus } from 'react-icons/go';
import { ImBin } from 'react-icons/im';
import { FaEdit } from 'react-icons/fa';
import ListItem from '../ListItem';
import { Wrapper, BtnWrapper, Button } from './Sidebar.styled';

export default function Sidebar() {

  return (
    <Wrapper>
      <BtnWrapper>
        <Button >
          <GoPlus />
        </Button>
        <Button>
          <ImBin />
        </Button>
        <Button>
          <FaEdit />
        </Button>
      </BtnWrapper>
      <ListItem />
    </Wrapper>
  );
}
