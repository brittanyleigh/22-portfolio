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
        <Heading
          size="2xl"
          fontWeight="500"
          fontFamily="Just Me Again Down Here"
        >
          Brittany Howard
        </Heading>
      </Box>
      <Spacer />
      <IconButton
        display="flex"
        onClick={toggleColorMode}
        aria-label={ariaLabel}
        icon={icon}
        variant="unstyled"
        colorScheme="blue"
        color={toggleColor}
        _hover={{ color: "blue.500" }}
      />
    </Flex>
  );
}

export default Nav;
