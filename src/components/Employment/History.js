import React from "react";
import { Box, Accordion, Link, useColorModeValue } from "@chakra-ui/react";
import HistoryItem from "./HistoryItem";

import { BsSignpost2 } from "react-icons/bs";
import { PiBabyCarriage } from "react-icons/pi";
import { IoRocketOutline, IoTicketOutline } from "react-icons/io5";
import { LiaBabyCarriageSolid } from "react-icons/lia";

function History() {
  const borderColor = useColorModeValue("green.200", "purple.700");
  const backgroundColor = useColorModeValue("white", "purple.800");

  const historyItems = [
    {
      heading: "Maternity Leave",
      body: (
        <>
          Laid off just a month after my daughter was born, I took the
          opportunity to enjoy an extended maternity leave. As I look to reenter
          the workforce, my priority is doing meaningful work that fosters
          community, leaves a positive impact, and helps others thrive.
        </>
      ),
      title: "Stay at Home Mom",
      dates: "April 2023 - Present",
      icon: <LiaBabyCarriageSolid size="1.5em" />,
    },
    {
      heading: "Astronomer",
      body: (
        <>
          <Link href="https://www.astronomer.io/" isExternal>
            Astronomer
          </Link>{" "}
          is a growing startup on a mission to transform data orchestration and
          make it easy for companies of any size to adopt Apache Airflow. I work
          on building the frontend UI/UX in React for the Astro application, and
          I'm the lead frontend engineer for the internal Astro management
          application.
        </>
      ),
      title: "Frontend Software Engineer",
      dates: "January 2021 - April 2023",
      icon: <IoRocketOutline size="1.5em" />,
    },
    {
      heading: "Bandwagon FanClub",
      body: (
        <>
          With a focus on live event ticket sales,{" "}
          <Link href="https://bandwagonfanclub.com/" isExternal>
            Bandwagon
          </Link>{" "}
          is a startup using blockchain technology to help event organizers
          transparently manage their customers' identity information. I designed
          and built the frontend for a ticket marketplace application as well as
          a blockchain demo application, both in React with Redux. I also
          designed and developed several marketing websites using Gatsby.
        </>
      ),
      /*

      */
      title: "Senior Software Engineer & UX Lead",
      dates: "September 2019 - December 2020",
      icon: <IoTicketOutline size="1.5em" />,
    },
    {
      heading: "OnCell (now STQRY)",
      body: (
        <>
          <Link href="https://stqry.com/" isExternal>
            OnCell/STQRY
          </Link>{" "}
          provides destinations like museums, parks, and schools with an
          easy-to-use solution for building their own apps. In my time there, I
          worked on building new features for the application in Django,
          Cordova, and Javascript. I also improved the overall style for our
          product and designed custom app themes.
        </>
      ),
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
      <Accordion allowToggle borderX="solid 1px" borderColor={borderColor}>
        {historyItems.map((item) => {
          return <HistoryItem key={item.heading} {...item} />;
        })}
      </Accordion>
    </Box>
  );
}

export default History;
