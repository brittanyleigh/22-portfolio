import React from "react";
import { Box, Text, ChakraProvider, Container, VStack } from "@chakra-ui/react";

import Nav from "../components/Nav";
import Employment from "../components/Employment";
import Footer from "../components/Footer";

function Home() {
  return (
    <ChakraProvider>
      <Box bgGradient="linear(to-b, #e8faff,#c1d9f1)">
        <Container
          minH="100vh"
          maxW="container.xl"
          display="flex"
          flexDir="column"
          justifyContent="space-between"
        >
          <Nav />
          <Employment />
          <Footer />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default Home;
