import React from 'react';
import { BrowserRouter as Routerr } from 'react-router-dom';
import { Router } from './router/Router';

const App = () => {
  return (
    <>
      <Routerr>
        <Router />
      </Routerr>
    </>
  );
};

export default App;
