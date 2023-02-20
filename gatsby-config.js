/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `1st Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `My first Gatsby site description...`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
  ],
}
