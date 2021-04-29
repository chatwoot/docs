/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Chatwoot',
  tagline: 'Open-source customer engangement suite, an alternative to Intercom & Zendesk',
  url: 'https://chatwoot.com',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'chatwoot',
  projectName: 'handbook',
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      logo: {
        href: "https://chatwoot.com",
        alt: 'Chatwoot',
        src: 'img/logo.png',
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/chatwoot/docs/edit/main/',
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
  plugins: ['@docusaurus/plugin-google-analytics'],
};
