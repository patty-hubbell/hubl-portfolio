/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hubl.dev`,
        short_name: `Hubl`,
        start_url: `/`,
        background_color: `##003d5b`,
        theme_color: `#202020`,
        display: `standalone`,
        icon: "./static/favicon.ico",
      },
    },
  ],
}
