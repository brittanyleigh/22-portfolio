import React from "react";
import {
  Flex,
  Box,
  Spacer,
  Heading,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";

import { GrSun, GrMoon } from "react-icons/gr";

function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const ariaLabel = colorMode == "light" ? "Toggle Dark" : "Toggle Light";
  const icon = colorMode == "light" ? <GrMoon /> : <GrSun />;

  return (
    <Flex alignItems="center" py={6}>
      <Box py="2">
        <Heading size="xl">Brittany Isenberg</Heading>
      </Box>
      <Spacer />
      <IconButton
        onClick={toggleColorMode}
        aria-label={ariaLabel}
        icon={icon}
        variant="ghost"
      />
    </Flex>
  );
}

export default Nav;
