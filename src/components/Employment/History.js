import React from "react";
import { Box, Accordion, useColorModeValue } from "@chakra-ui/react";
import HistoryItem from "./HistoryItem";

import { BsSignpost2 } from "react-icons/bs";
import { IoRocketOutline, IoTicketOutline } from "react-icons/io5";

function History() {
  const borderColor = useColorModeValue("blue.200", "blue.900");
  const backgroundColor = useColorModeValue("white", "blue.1000");

  const historyItems = [
    {
      heading: "Astronomer",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      title: "Frontend Software Engineer",
      dates: "January 2021 - Present",
      icon: <IoRocketOutline size="1.5em" />,
    },
    {
      heading: "Bandwagon FanClub",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      title: "Senior Software Engineer & UX Lead",
      dates: "September 2019 - December 2020",
      icon: <IoTicketOutline size="1.5em" />,
    },
    {
      heading: "OnCell (now STQRY)",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      title: "Software Developer",
      dates: "March 2018 - August 2019",
      icon: <BsSignpost2 size="1.5em" />,
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
          return <HistoryItem key={item.heading} {...item} />;
        })}
      </Accordion>
    </Box>
  );
}

export default History;
