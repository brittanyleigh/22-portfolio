import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

import "@fontsource/catamaran";
import "@fontsource/just-me-again-down-here";

function GradientWrapper({ children }) {
  const topGradient = useColorModeValue("blue.100", "blue.900");
  const bottomGradient = useColorModeValue("green.100", "green.900");

  return (
    <Box bgGradient={`linear(to-b, ${topGradient}, ${bottomGradient})`}>
      {children}
    </Box>
  );
}

export default GradientWrapper;
