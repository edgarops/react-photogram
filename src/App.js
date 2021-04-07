import React from 'react';

import GlobalStyle from './styles/GlobalStyle';
import { ModalProvider, BaseModalBackground } from 'styled-react-modal';
import styled from 'styled-components';
import './App.css';

import Providers from './hooks';

import Routes from './routes';

const fadingBackground = styled(BaseModalBackground)`
  opacity: ${props => props.opacity};
  transition: opacity ease 200ms;
`;

function App() {
  return (
    <Providers> 
      <ModalProvider backgroundComponent={fadingBackground}>
        <Routes/>
      </ModalProvider>
      <GlobalStyle />
    </Providers>
  );
}

export default App;
