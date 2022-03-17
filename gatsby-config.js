/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

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
  ],
}
