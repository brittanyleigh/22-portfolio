import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useColorMode } from "@chakra-ui/react";

import "@fontsource/catamaran";
import "@fontsource/just-me-again-down-here";

import BackgroundImage from "gatsby-background-image";

function BackgroundWrapper({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        light: file(relativePath: { eq: "sky-clouds.jpeg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        dark: file(relativePath: { eq: "night-sky.jpeg" }) {
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
  const imageData = colorMode == "light" ? lightImageData : darkImageData;

  return (
    <BackgroundImage
      Tag="section"
      fluid={imageData}
      backgroundColor={colorMode == "light" ? "blue.300" : "blue.900"}
    >
      {children}
    </BackgroundImage>
  );
}

export default BackgroundWrapper;
