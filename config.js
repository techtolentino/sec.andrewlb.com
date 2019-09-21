const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "https://sec.andrewlb.com",
    gaTrackingId: null
  },
  header: {
    logo: "https://andrewlb.com/images/author.png",
    logoLink: "https://sec.andrewlb.com",
    title: "Study Log",
    githubUrl: "https://github.com/andrewlb/sec.andrewlb.com",
    helpUrl: "",
    tweetText: "",
    links: [{ text: "", link: "" }],
    search: {
      enabled: false,
      indexName: "",
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY
    }
  },
  sidebar: {
    forcedNavOrder: ["/introduction", "/codeblock"],
    links: [
      { text: "andrewlb.com", link: "https://andrewlb.com" },
      { text: "Stupid Systems", link: "https://stupidsystems.com" },
      { text: "Knowsi", link: "https://knowsi.com" }
    ],
    frontline: false,
    ignoreIndex: true
  },
  siteMetadata: {
    title: "Study Log",
    description: "Andrew's study log for his masters program",
    ogImage: null,
    docsLocation: "https://github.com/readywater/sec.andrewlb.com/"
  }
};

module.exports = config;
