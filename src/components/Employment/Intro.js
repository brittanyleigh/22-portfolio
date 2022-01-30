import React from "react";
import { Box, Heading } from "@chakra-ui/react";

function Intro() {
  return (
    <Box p={4} w="100%" zIndex={1}>
      <Heading px={6} size="lg">
        I'm a self-taught frontend software engineer. I build clean, intuitive,
        and responsive web applications.
      </Heading>
    </Box>
  );
}

export default Intro;
