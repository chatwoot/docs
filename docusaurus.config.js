/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Chatwoot',
  tagline: 'Open-source customer engangement suite, an alternative to Intercom & Zendesk',
  url: 'https://chatwoot.com/docs',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'chatwoot',
  projectName: 'handbook',
  noIndex: true,
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: 'Chatwoot',
      logo: {
        alt: 'Chatwoot',
        href: 'https://chatwoot.com/',
        src: 'img/logo.png',
        target: '_self',
      },
      items: [
        {
          to: 'docs/self-hosted',
          activeBasePath: 'docs/self-hosted',
          label: 'Self Hosted',
          position: 'left',
        },
        {
          to: 'docs/product',
          activeBasePath: 'docs/product',
          label: 'Product',
          position: 'left',
        },
        {
          to: 'docs/contributing-guide',
          activeBasePath: 'docs/contributing-guide',
          label: 'Contributing Guide',
          position: 'left',
        },
        {
          to: 'docs/handbook/about-chatwoot/history',
          activeBasePath: 'docs/handbook',
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
