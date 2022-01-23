import React from "react";
import { Flex, Icon } from "@chakra-ui/react";
import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr";

function Footer() {
  return (
    <Flex alignItems="center" justifyContent="center" py={6}>
      <Icon as={GrGithub} boxSize={8} m={2} />
      <Icon as={GrLinkedin} boxSize={8} m={2} />
      <Icon as={GrMail} boxSize={8} m={2} />
    </Flex>
  );
}

export default Footer;
