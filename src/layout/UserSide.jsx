import React from 'react';
import { Footer } from '../components/sections/LayoutUserSide/Footer';
import { FooterFixed } from '../components/sections/LayoutUserSide/FooterFixed';
import { Header } from '../components/sections/LayoutUserSide/Header';
import { HeaderFixed } from '../components/sections/LayoutUserSide/HeaderFixed';
import styled from 'styled-components';

const UserSideStyle = styled.div`
  position: relative;
`;

export const UserSide = (props) => {
  return (
    <UserSideStyle>
      <HeaderFixed />
      <Header />
      {props.children}
      <Footer />
      <FooterFixed />
    </UserSideStyle>
  );
};
