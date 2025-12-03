import { extendTheme, useColorModeValue } from "@chakra-ui/react";

// const bg = useColorModeValue("#edede9", "#0A0A0A");

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  textStyles: {
    primary: {
      fontFamily: `'Texturina Variable', sans-serif`,
    },
    secondary: {
      fontFamily: `'Ubuntu', sans-serif`,
      fontWeight: 500,
    },
  },
  styles: {
    global: {
      body: {
        _light: {
          bg: "#edede9",
        },
        _dark: {
          bg: "#0A0A0A",
        },
      },
    },
  },
});

export default theme;
