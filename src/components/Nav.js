import React from "react";
import {
  Flex,
  Box,
  Spacer,
  Heading,
  useColorMode,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";

import { FiSun, FiMoon } from "react-icons/fi";

function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const toggleColor = useColorModeValue("black", "white");
  const ariaLabel = colorMode == "light" ? "Toggle Dark" : "Toggle Light";
  const icon =
    colorMode == "light" ? <FiMoon size="1.5em" /> : <FiSun size="1.5em" />;

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
        colorScheme="blue"
        color={toggleColor}
      />
    </Flex>
  );
}

export default Nav;
