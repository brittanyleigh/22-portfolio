module.exports = {
  siteMetadata: {
    title: `Brittany Howard | Frontend Software Engineer`,
    siteUrl: `https://www.brittany-howard.com`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `brittany-howard`,
        short_name: `bhoward`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/B-blue-favicon.png`,
      },
    },
  ],
};
