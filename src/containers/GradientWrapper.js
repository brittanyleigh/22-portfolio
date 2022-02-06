import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

import "@fontsource/catamaran";
import "@fontsource/just-me-again-down-here";

function GradientWrapper({ children }) {
  const topGradient = useColorModeValue("blue.400", "blue.900");
  const bottomGradient = useColorModeValue("green.300", "green.700");

  return (
    <Box bgGradient={`linear(to-b, ${topGradient}, ${bottomGradient})`}>
      {children}
    </Box>
  );
}

export default GradientWrapper;
