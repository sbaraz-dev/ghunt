import CSSReset from '@chakra-ui/css-reset';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <CSSReset />
      <App/>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
