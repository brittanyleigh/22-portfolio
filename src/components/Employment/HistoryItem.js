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
  useColorMode,
  Text,
  Flex,
} from "@chakra-ui/react";

function HistoryItem({ heading, body, title, dates, icon }) {
  const borderColor = useColorModeValue("green.200", "purple.700");

  const { colorMode } = useColorMode();

  const badgeColor = colorMode == "light" ? "green" : "purple";

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
            colorScheme={badgeColor}
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
