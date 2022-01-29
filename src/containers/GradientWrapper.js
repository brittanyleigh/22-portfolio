import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

function GradientWrapper({ children }) {
  const topGradient = useColorModeValue("blue.100", "blue.600");
  const bottomGradient = useColorModeValue("green.400", "green.900");

  return (
    <Box bgGradient={`linear(to-b, ${topGradient}, ${bottomGradient})`}>
      {children}
    </Box>
  );
}

export default GradientWrapper;
