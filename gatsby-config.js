module.exports = {
  siteMetadata: {
    title: `Brittany Howard | Frontend Software Engineer`,
    siteUrl: `https://www.brittanyisenberg.com`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "@chakra-ui/gatsby-plugin",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
