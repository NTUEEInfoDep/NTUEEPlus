module.exports = {
  siteMetadata: {
    title: 'NTUEE+',
    description: 'NTUEE+',
    author: '@NTUEE Info Dep.'
  },
  plugins: [
    'gatsby-plugin-react-helmet', // 在<head>加資料
    {
      resolve: 'gatsby-source-filesystem', // 讓graphql能夠從images連到/src/images
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem', // 讓graphql能夠從images連到/src/markdown
      options: {
        name: 'markdown',
        path: `${__dirname}/src/markdown`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest', // 感覺不需要這個
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-transformer-remark', // 把markdown換成html
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-component',
            options: { components: ['presenter'] } // 在markdown使用react component: https://using-remark.gatsbyjs.org/custom-components/
          }
        ]
      }
    }
    // 預計使用的plugin
    // gatsby-remark-unwrap-image // 把markdown裡面<img>外層多餘的<p>去掉
    // sass

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ]
};
