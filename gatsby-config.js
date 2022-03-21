/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "360 Vacations",
    description: "Nice and clean vacations site",
    author: "@mihaiArion",
    person: { name: "Mihai", age: 32 },
    simpleData: ["item1", "item2"],
    complexData: [
      { name: "Mihai", age: 32 },
      { name: "John", age: 16 },
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/Assets`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `th19ko7q5efs`,
        // Learn about environment variables: https://gatsby.dev/env-vars

        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400"],
            },
            {
              family: "Inconsolata",
              variants: ["400", "500", "600", "700"],
            },
          ],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
