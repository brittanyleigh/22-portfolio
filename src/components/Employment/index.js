import React from "react";
import { Flex, Box, useColorModeValue } from "@chakra-ui/react";

import History from "./History";
import Intro from "./Intro";

function Nav() {
  const borderColor = useColorModeValue("blue.200", "blue.1000");
  const topGradient = useColorModeValue("blue.300", "blue.900");
  const bottomGradient = useColorModeValue("blue.100", "blue.700");

  return (
    <Flex
      alignItems="center"
      py={10}
      my={{ base: 0, md: 12 }}
      position="relative"
      flexDir={{ base: "column", md: "row" }}
    >
      <Box
        position="absolute"
        border="10px"
        borderStyle="double"
        borderColor={borderColor}
        w={{ base: "100%", md: "65%" }}
        h={{ base: "70%", md: "100%" }}
        bgGradient={`linear(to-b, ${topGradient}, ${bottomGradient})`}
        bgRepeat="no-repeat"
      />
      <Intro />
      <History />
    </Flex>
  );
}

export default Nav;
