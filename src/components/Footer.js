import React from "react";
import { Flex, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

function Footer() {
  const iconColor = useColorModeValue("black", "white");
  const items = [
    {
      icon: <FiGithub size="1.5em" color={iconColor} />,
      link: "https://github.com/brittanyleigh",
      label: "View GitHub profile",
    },
    {
      icon: <FiLinkedin size="1.5em" color={iconColor} />,
      link: "https://www.linkedin.com/in/brittanyisenberg/",
      label: "View LinkedIn profile",
    },
    {
      icon: <FiMail size="1.5em" color={iconColor} />,
      link: "mailto:brittany.isenberg@gmail.com",
      label: "Send Email",
    },
  ];

  return (
    <Flex alignItems="center" justifyContent="center" py={6}>
      {items.map((item) => {
        return (
          <IconButton
            key={item.link}
            as="a"
            aria-label={item.label}
            icon={item.icon}
            variant="ghost"
            colorScheme="blue"
            href={item.link}
            target="_blank"
            color="black"
            p={4}
          />
        );
      })}
    </Flex>
  );
}

export default Footer;
