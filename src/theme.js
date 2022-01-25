import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  blue: {
    100: "#d4dbe5",
    200: "#aab8ca",
    300: "#7f94b0",
    400: "#f7fafc",
    500: "#597191",
    600: "#324052",
    700: "#26303d",
    800: "#192029",
    900: "#0d1014",
  },
  green: {
    100: "#e7ece8",
    200: "#d0dad0",
    300: "#b8c7b9",
    400: "#a1b5a1",
    500: "#89A28A",
    600: "#69866b",
    700: "#4f6450",
    800: "#354335",
    900: "#1a211b",
  },
  red: {
    100: "#ddd3d3",
    200: "#bba8a8",
    300: "#997c7c",
    400: "#705757",
    500: "#443535",
    600: "#362a2a",
    700: "#292020",
    800: "#1b1515",
    900: "#0e0b0b",
  },
  yellow: {
    100: "#faf7e7",
    200: "#f4efce",
    300: "#efe7b6",
    400: "#e9df9d",
    500: "#E4D785",
    600: "#d7c44a",
    700: "#b19e27",
    800: "#766a1a",
    900: "#3b350d",
  },
};

const theme = extendTheme({ config, colors });

export default theme;
