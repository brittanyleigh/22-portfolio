import React from "react";
import { Flex, Box, Spacer, Heading } from "@chakra-ui/react";

import Sun from "../assets/Sun";

function Nav() {
  return (
    <Flex alignItems="center" py={6}>
      <Box py="2">
        <Heading size="xl">Brittany Isenberg</Heading>
      </Box>
      <Spacer />
      <Box>Toggle</Box>
    </Flex>
  );
}

export default Nav;
