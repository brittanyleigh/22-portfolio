import React from "react";
import { Flex, Box, useColorModeValue } from "@chakra-ui/react";

import History from "./History";
import Intro from "./Intro";

function Nav() {
  const borderColor = useColorModeValue("green.300", "purple.800");
  // const topGradient = useColorModeValue("green.300", "blue.900");
  const bottomGradient = useColorModeValue("green.200", "purple.700");

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
        bgGradient={`linear(to-b, ${bottomGradient}, ${bottomGradient})`}
        bgRepeat="no-repeat"
      />
      <Intro />
      <History />
    </Flex>
  );
}

export default Nav;
