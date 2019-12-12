/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Jón Gabríel Lorange`,
    subtitle: `Web developer`,
    siteurl: `https://www.jongalor.com`,
    menuitems: [
      { title: `Heim`, url: `/`, rotation: `-180deg`, position: `bottom` },
      {
        title: `Um mig`,
        url: `/um-mig/`,
        rotation: `-90deg`,
        position: `right`,
      },
      {
        title: `Valin verk`,
        url: `/valin-verk/`,
        rotation: `0deg`,
        position: `center`,
      },
      {
        title: `Uppáhalds stakkur`,
        url: `/stakkur/`,
        rotation: `90deg`,
        position: `left`,
      },
    ],
    selectedWorks: [
      {
        name: `Borgarlínan`,
        url: `https://www.borgarlinan.is/`,
        live: true,
        year: `2019`,
      },
      {
        name: `Jól í hjarta`,
        url: `https://www.jolihjarta.is/`,
        live: true,
        year: `2019`,
      },
      {
        name: `TVIST - auglýsingastofa`,
        url: `https://tvist.is/radio/`,
        live: true,
        year: `2018-2019`,
      },
      {
        name: `Emma Heiðarsdóttir - visual artist`,
        url: `https://emmaheidarsdottir.info/`,
        live: true,
        year: `2018-2019`,
      },
      {
        name: `Listvitinn`,
        url: `https://listvitinn.art/`,
        live: false,
        year: `2019`,
      },
      {
        name: `Katrín Agnes Klar - visual artist`,
        url: `https://katrinagnes.com/prufa/`,
        live: false,
        year: `2019`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `verkefni`,
        path: `${__dirname}/static/content/verkefni`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: ["gatsby-remark-relative-images", "gatsby-remark-images"],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-layout`,
  ],
}
