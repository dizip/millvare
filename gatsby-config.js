module.exports = {
  siteMetadata: {
    title: "Millvare",
    author: "Mariusz Rozanski",
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Millvare`,
        start_url: `/`,
        background_color: `#02254f`,
        theme_color: `#02254f`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/assets/images/icon.png`,
      },
    },
  ],
};
