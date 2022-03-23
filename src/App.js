import React from 'react';
import { BrowserRouter as Routerr } from 'react-router-dom';
import { Router } from './router/Router';
import { GlobalStyled } from './styles/Global.styled';

const App = () => {
  return (
    <div>
      <GlobalStyled />
      <Routerr>
        <Router />
      </Routerr>
    </div>
  );
};

export default App;
