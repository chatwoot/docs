/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Chatwoot',
  tagline: 'Open-source customer engangement suite, an alternative to Intercom & Zendesk',
  url: 'https://chatwoot.com/',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'chatwoot',
  projectName: 'handbook',
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: 'Chatwoot',
      logo: {
        alt: 'Chatwoot',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'self-hosted',
          activeBasePath: 'self-hosted',
          label: 'Self Hosted',
          position: 'left',
        },
        {
          to: 'product',
          activeBasePath: 'product',
          label: 'Product',
          position: 'left',
        },
        {
          to: 'contributing-guide',
          activeBasePath: 'contributing-guide',
          label: 'Contributing Guide',
          position: 'left',
        },
        {
          to: 'handbook/about-chatwoot/history',
          activeBasePath: 'handbook',
          label: 'Handbook',
          position: 'left',
        },
        {
          href: 'https://github.com/chatwoot/chatwoot',
          label: 'GitHub',
          position: 'right',
        },
      ],
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
};
