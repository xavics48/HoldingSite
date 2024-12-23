// src/theme/index.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    orange: {
      500: '#f7931e',
    },
    beige: '#f5f5dc',
  },
  fonts: {
    body: 'Arial, sans-serif',
    heading: 'Georgia, serif',
  },
});

export default theme;
