import React from 'react';
import { Footer } from '../components/sections/LayoutUserSide/Footer';
import { FooterFixed } from '../components/sections/LayoutUserSide/FooterFixed';
import { Header } from '../components/sections/LayoutUserSide/Header';
import { HeaderFixed } from '../components/sections/LayoutUserSide/HeaderFixed';

export const UserSide = (props) => {
  return (
    <>
      <HeaderFixed />
      <Header />
      {props.children}
      <Footer />
      <FooterFixed />
    </>
  );
};
