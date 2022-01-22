import React from "react";
import { Box, Text, ChakraProvider } from "@chakra-ui/react";

function Home() {
  return (
    <ChakraProvider>
      <Box p={8}>
        {/*
        Nav - Name & light/dark toggle
        Intro box
        Employment tabs
        Projects section
        Social - linkedin, github
      */}
        <Text fontSize="xl">Hello World</Text>
      </Box>
    </ChakraProvider>
  );
}

export default Home;
