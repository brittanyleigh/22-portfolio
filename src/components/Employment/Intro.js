import React from "react";
import { Box, Heading } from "@chakra-ui/react";

function Intro() {
  return (
    <Box p={4} w="100%" zIndex={1}>
      <Heading px={6} size="lg">
        I'm a self-taught frontend software engineer building intuitive web
        applications. I live in Greenville, SC and I'm currently on my way to
        the moon with Astronomer.
      </Heading>
    </Box>
  );
}

export default Intro;
