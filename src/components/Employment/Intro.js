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
        Jewelry maker turned frontend software engineer. Passionate
        about creating elegant, polished and intuitive UX for innovative web applications.
      </Text>
    </Box>
  );
}

export default Intro;
