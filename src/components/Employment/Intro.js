import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function Intro() {
  return (
    <Box p={4} w="100%" zIndex={1}>
      <Text pl={6} fontSize="3xl" fontWeight="bold">
        Self-taught frontend software engineer building intuitive web
        applications at innovative startups.
      </Text>
    </Box>
  );
}

export default Intro;
