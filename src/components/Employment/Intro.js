import React from "react";
import { Box, Text } from "@chakra-ui/react";

function Intro() {
  return (
    <Box p={4} w="100%" zIndex={1}>
      <Text
        pl={{ base: 4, md: 6 }}
        pr={{ base: 4, md: 0 }}
        pt={{ base: 4, md: 0 }}
        fontSize={{ base: "xl", md: "2xl" }}
        fontWeight="bold"
      >
        Hello! I'm a thoughtful, meticulous, and creative frontend software
        engineer with a passion for creating beautiful and intuitive UX that
        brings to life meaningful, impactful products.
      </Text>
    </Box>
  );
}

export default Intro;
