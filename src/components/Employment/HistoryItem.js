import React from "react";
import {
  Box,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

function HistoryItem({ heading, body }) {
  const borderColor = useColorModeValue("blue.200", "blue.900");

  return (
    <AccordionItem borderColor={borderColor}>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          <Heading as="h3" size="md" py={2}>
            {heading}
          </Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>

      <AccordionPanel pb={4}>{body}</AccordionPanel>
    </AccordionItem>
  );
}

export default HistoryItem;
