import React from "react";
import { Box, Accordion, useColorModeValue } from "@chakra-ui/react";
import HistoryItem from "./HistoryItem";

function History() {
  const borderColor = useColorModeValue("blue.200", "blue.900");
  const backgroundColor = useColorModeValue("white", "blue.1000");

  const historyItems = [
    {
      heading: "Astronomer",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      heading: "Bandwagon FanClub",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      heading: "OnCell (now STQRY)",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <Box
      background={backgroundColor}
      w={{ base: "90%", md: "100%" }}
      zIndex={1}
    >
      <Accordion
        allowMultiple
        allowToggle
        borderX="solid 1px"
        borderColor={borderColor}
      >
        {historyItems.map((item) => {
          return (
            <HistoryItem
              key={item.heading}
              heading={item.heading}
              body={item.body}
            />
          );
        })}
      </Accordion>
    </Box>
  );
}

export default History;
