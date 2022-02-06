import React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";

import theme from "../theme.js";

import GradientWrapper from "../containers/gradientWrapper";
import Nav from "../components/Nav";
import Employment from "../components/Employment";
import Footer from "../components/Footer";

function Home() {
  return (
    <ChakraProvider theme={theme}>
      <GradientWrapper>
        <Container
          minH="100vh"
          maxW="container.lg"
          display="flex"
          flexDir="column"
          justifyContent="space-between"
        >
          <Nav />
          <Employment />
          <Footer />
        </Container>
      </GradientWrapper>
    </ChakraProvider>
  );
}

export default Home;
