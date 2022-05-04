import React from "react";
import { Flex, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

function Footer() {
  const iconColor = useColorModeValue("black", "white");

  const items = [
    {
      icon: <FiGithub size="1.5em" />,
      link: "https://github.com/brittanyleigh",
      label: "View GitHub profile",
    },
    {
      icon: <FiLinkedin size="1.5em" />,
      link: "https://www.linkedin.com/in/brittanyhoward/",
      label: "View LinkedIn profile",
    },
    {
      icon: <FiMail size="1.5em" />,
      link: "mailto:hello@brittany-howard.com",
      label: "Send Email",
    },
  ];

  return (
    <Flex alignItems="center" justifyContent="center" py={6}>
      {items.map((item) => {
        return (
          <IconButton
            display="flex"
            key={item.link}
            as="a"
            aria-label={item.label}
            icon={item.icon}
            variant="unstyled"
            colorScheme="blue"
            href={item.link}
            target="_blank"
            p={4}
            m={2}
            color={iconColor}
            _hover={{ color: "green.500" }}
          />
        );
      })}
    </Flex>
  );
}

export default Footer;
