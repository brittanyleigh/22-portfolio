import React from "react";
import { Box, Text, ChakraProvider, Container } from "@chakra-ui/react";

import Nav from "../components/Nav";
import Employment from "../components/Employment";

function Home() {
  return (
    <ChakraProvider>
      <Box h="100vh" bgGradient="linear(to-b, #e8faff,#c1d9f1)">
        <Container maxW="container.xl">
          <Nav />
          {/*
        Nav - Name & light/dark toggle
        Intro box
        Employment tabs
        Projects section
        Social - linkedin, github
      */}
          <Employment />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default Home;
