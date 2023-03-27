/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Chatwoot",
  tagline:
    "Open-source customer engangement suite, an alternative to Intercom & Zendesk",
  url: "https://www.chatwoot.com",
  baseUrl: "/docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "chatwoot",
  projectName: "docs",
  themeConfig: {
    announcementBar: {
      id: "star_us",
      content:
        '⭐️ If you like Chatwoot, give it a star on <a href="https://github.com/chatwoot/chatwoot">GitHub</a> and follow us on <a href="https://twitter.com/chatwootapp">Twitter</a>!',
      isCloseable: true,
    },
    image: "https://www.chatwoot.com/images/preview.png",
    navbar: {
      logo: {
        href: "https://www.chatwoot.com",
        alt: "Chatwoot",
        src: "img/logo.png",
        srcDark: "img/logo-white.png", // Default to `logo.src`.
        target: "_self",
      },
      items: [
        {
          to: "self-hosted",
          activeBasePath: "self-hosted",
          label: "Self Hosted",
          position: "right",
        },
        {
          to: "product",
          activeBaseRegex: "product|user-guide",
          label: "User Guide",
          position: "right",
        },
        {
          to: "contributing-guide",
          activeBasePath: "contributing-guide",
          label: "Contributing Guide",
          position: "right",
        },
        {
          to: "https://www.chatwoot.com/hc/handbook/en",
          activeBasePath: "handbook",
          label: "Handbook",
          position: "right",
        },
        {
          href: "https://www.chatwoot.com/developers/api/",
          label: "API",
          position: "right",
        },
        {
          href: "https://github.com/chatwoot/chatwoot",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    algolia: {
      appId: "J9H34SLMKO",
      apiKey: "6034d7c5310911e20c3fbb3b88111235",
      indexName: "chatwoot",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        googleAnalytics: {
          trackingID: "G-DFH8WSE67F",
          anonymizeIP: true,
        },
        docs: {
          routeBasePath: "/",
          sidebarCollapsible: true,
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/chatwoot/docs/edit/main/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/chatwoot/docs/edit/main/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
