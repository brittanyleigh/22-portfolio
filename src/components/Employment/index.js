import React from "react";
import { Flex, Box } from "@chakra-ui/react";

import History from "./History";
import Intro from "./Intro";

function Nav() {
  return (
    <Flex
      alignItems="center"
      py={6}
      my={{ base: 0, md: 12 }}
      position="relative"
      flexDir={{ base: "column", md: "row" }}
    >
      <Box
        position="absolute"
        border="2px"
        borderColor="blue.500"
        w={{ base: "100%", md: "65%" }}
        h={{ base: "70%", md: "100%" }}
      />
      <Intro />
      <History />
    </Flex>
  );
}

export default Nav;
