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
        Jewelry maker turned self-taught frontend software engineer. Passionate
        about creating elegant and intuitive web applications at innovative
        startups.
      </Text>
    </Box>
  );
}

export default Intro;
