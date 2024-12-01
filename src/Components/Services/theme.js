import { ChakraProvider, theme as defaultTheme } from '@chakra-ui/react';

const theme = {
  ...defaultTheme,
  config: {
    ...defaultTheme.config,
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
};

export default theme;
