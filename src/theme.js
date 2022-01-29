import { extendTheme } from "@chakra-ui/react";
import chroma from "chroma-js";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const generateColors = (color500) => {
  return chroma.scale([
    chroma(color500).brighten(2.5),
    chroma(color500).darken(3),
  ]);
};

const blues = generateColors("#6abded");
const greens = generateColors("#6fdbc2");

const colors = {
  blue: {
    100: blues(0).hex(),
    200: blues(0.125).hex(),
    300: blues(0.25).hex(),
    400: blues(0.375).hex(),
    500: blues(0.5).hex(),
    600: blues(0.625).hex(),
    700: blues(0.75).hex(),
    800: blues(0.875).hex(),
    900: blues(1).hex(),
  },
  green: {
    100: greens(0).hex(),
    200: greens(0.125).hex(),
    300: greens(0.25).hex(),
    400: greens(0.375).hex(),
    500: greens(0.5).hex(),
    600: greens(0.625).hex(),
    700: greens(0.75).hex(),
    800: greens(0.875).hex(),
    900: greens(1).hex(),
  },
};

const theme = extendTheme({ config, colors });

export default theme;
