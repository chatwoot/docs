/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Chatwoot',
  tagline: 'Open-source customer engangement suite, an alternative to Intercom & Zendesk',
  url: 'https://www.chatwoot.com',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'chatwoot',
  projectName: 'docs',
  themeConfig: {
    image: 'https://www.chatwoot.com/images/preview.png',
    navbar: {
      logo: {
        href: "https://www.chatwoot.com",
        alt: 'Chatwoot',
        src: 'img/logo.png',
        srcDark: 'img/logo-white.png', // Default to `logo.src`.
        target: '_self',
      },
      items: [
        {
          to: 'self-hosted',
          activeBasePath: 'self-hosted',
          label: 'Self Hosted',
          position: 'right',
        },
        {
          to: 'product',
          activeBasePath: 'product',
          label: 'Product',
          position: 'right',
        },
        {
          to: 'user-guide/configure-chatwoot-account',
          activeBasePath: 'user-guide',
          label: 'User Guide',
          position: 'right',
        },
        {
          to: 'contributing-guide',
          activeBasePath: 'contributing-guide',
          label: 'Contributing Guide',
          position: 'right',
        },
        {
          to: 'handbook/about-chatwoot/history',
          activeBasePath: 'handbook',
          label: 'Handbook',
          position: 'right',
        },
        {
          href: 'https://github.com/chatwoot/chatwoot',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    googleAnalytics: {
      trackingID: 'UA-96794837-1',
      anonymizeIP: true,
    },
    algolia: {
      apiKey: 'a818a66f3f73dab1a061d8437c290067',
      indexName: 'chatwoot',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarCollapsible: false,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/chatwoot/docs/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/chatwoot/docs/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
