import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";

import lightSky from "../images/sky-clouds.jpeg";
import nightSky from "../images/night-sky.jpeg";

import "@fontsource/catamaran";
import "@fontsource/just-me-again-down-here";

function GradientWrapper({ children }) {
  const { colorMode } = useColorMode();
  const bgImage = colorMode == "light" ? lightSky : nightSky;

  return (
    <Box backgroundImage={`url(${bgImage})`} backgroundSize="cover">
      {children}
    </Box>
  );
}

export default GradientWrapper;
