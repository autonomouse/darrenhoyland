module.exports = {
  siteMetadata: {
    siteTitle: 'Darren Hoyland',
    siteDescription: "Darren Hoyland's personal website",
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://autonomouse.github.io/darrenhoyland/',
    pathPrefix: '/darrenhoyland',
    siteLanguage: 'en',
    ogLanguage: `en_GB`,
    author: 'Darren Hoyland',
    authorDescription: 'Full-stack developer, specialising in Python and occasional author', // short text about the author
    avatar: '/avatar.jpg',
    twitterSite: 'https://twitter.com/darrenhoyland', // website account on twitter
    twitterCreator: 'https://twitter.com/darrenhoyland', // creator account on twitter
    social: [
      {
        icon: `creative-commons-share`,
        url: `/cv`
      },
      {
        icon: `linkedin`,
        url: `https://www.linkedin.com/in/darrenhoyland`
      },
      {
        icon: `gitlab`,
        url: `https://gitlab.com/autonomouse`
      },
      {
        icon: `github`,
        url: `https://github.com/autonomouse`
      },
      {
        icon: `twitter`,
        url: `https://twitter.com/darrenhoyland`
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags'
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: false,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 '
            }
          }
        },
        feedSearch: {
          symbol: '🔍'
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X'
      }
    }
  ]
};
