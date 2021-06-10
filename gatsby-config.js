module.exports = {
  siteMetadata: {
    title: `David Velez`,
    description: `David Velez is a New York City web developer specializing in building exceptional websites, applications, and everything in between.`,
    siteUrl: 'https://davidvelez.io',
    author: `David Velez`,
  },
  plugins: [
    {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: ['Audiowide: 400,500,600,700,800,900']
      }
    }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
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
      {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.davidvelez.io',
        sitemap: 'https://www.davidvelez.io/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "507199480545714",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
