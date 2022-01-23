import React from "react";
import { Box, ChakraProvider, Container } from "@chakra-ui/react";

import theme from "../theme.js";

import Nav from "../components/Nav";
import Employment from "../components/Employment";
import Footer from "../components/Footer";

function Home() {
  return (
    <ChakraProvider theme={theme}>
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
