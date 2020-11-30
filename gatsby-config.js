module.exports = {
  siteMetadata: {
    title: `David Velez`,
    description: `David Velez is a software engineer based in the Baltimore-Washington DC metro area specializing in building exceptional websites, applications, and everything in between.`,
    siteUrl: 'https://davidvelez.io',
    author: `David Velez`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Orbitron']
        },
      },
    },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`,// This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-181646392-1`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
