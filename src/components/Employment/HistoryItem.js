import React from "react";
import {
  Badge,
  Box,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Heading,
  useColorModeValue,
  Text,
  Flex,
} from "@chakra-ui/react";

function HistoryItem({ heading, body, title, dates, icon }) {
  const borderColor = useColorModeValue("blue.200", "blue.900");

  return (
    <AccordionItem borderColor={borderColor}>
      <AccordionButton _hover={{ background: borderColor }}>
        <Flex flex="1" textAlign="left" alignItems="center">
          <Heading as="h3" size="md" py={2}>
            {heading}
          </Heading>
          <Box ml={2}>{icon}</Box>
        </Flex>
        <AccordionIcon />
      </AccordionButton>

      <AccordionPanel pb={4}>
        <Box mb={4}>
          <Badge
            colorScheme="blue"
            variant="solid"
            fontSize={{ base: ".9rem", sm: "1rem" }}
          >
            {title}
          </Badge>
          <Text fontStyle="italic" fontSize=".9rem" pt={1}>
            {dates}
          </Text>
        </Box>
        {body}
      </AccordionPanel>
    </AccordionItem>
  );
}

export default HistoryItem;
