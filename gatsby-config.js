require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: "The Daily Dose"
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-youtube-v2`,
      options: {
        channelId: ['UCuYZAnKoZYXAKKpsi_-90Tg'],
        apiKey: 'AIzaSyAiQm1hmTg3a8R9zluP-l7VnBzbJ7OH3S0',
        maxVideos: 50
      }
    },
    //`gatsby-theme-youtube`
  ]
}