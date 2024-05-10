import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";

import "@fontsource/catamaran";
import "@fontsource/just-me-again-down-here";

import BackgroundImage from "gatsby-background-image";

function BackgroundWrapper({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        light: file(relativePath: { eq: "day-2024.jpeg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        dark: file(relativePath: { eq: "dark-2024.jpeg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const lightImageData = data.light.childImageSharp.fluid;
  const darkImageData = data.dark.childImageSharp.fluid;
  const { colorMode } = useColorMode();
  const backgroundColor = useColorModeValue("blue.300", "blue.900");

  const imageData = colorMode == "light" ? lightImageData : darkImageData;

  return (
    <BackgroundImage
      Tag="section"
      fluid={imageData}
      backgroundColor={backgroundColor}
    >
      {children}
    </BackgroundImage>
  );
}

export default BackgroundWrapper;
