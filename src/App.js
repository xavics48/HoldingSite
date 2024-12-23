import React from 'react';
import { Button } from '@chakra-ui/react';
import Navbar from './components/navbar/navbar';
import theme from './theme';
import { ChakraProvider } from '@chakra-ui/react';                                                                                                                                                                                                                                                                                                                                                                                              

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
    </ChakraProvider>
  );
}

export default App;