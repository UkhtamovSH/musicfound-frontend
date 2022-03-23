import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerStyle } from '../../../styles/Global.styled';
import { HeaderSectionStyle } from '../../../styles/Header.styled';

export const Header = () => {
  return (
    <HeaderSectionStyle>
      <ContainerStyle>
        <ul>
          <li>
            <Link to='/'>Популярные исполнители</Link>
          </li>
        </ul>
      </ContainerStyle>
    </HeaderSectionStyle>
  );
};
