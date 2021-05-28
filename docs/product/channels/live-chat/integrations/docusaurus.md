---
sidebar_label: "Docusaurus"
title: "Install Chatwoot live-chat on Docusaurus website"
---

Chatwoot has an official integration with Docusaurus using the plugin [@chatwoot/docusaurus-plugin](https://www.npmjs.com/package/@chatwoot/docusaurus-plugin). This plugin enables Chatwoot live-chat widget in Docusaurus powered websites.

To install the plugin, follow the steps mentioned below.

1. Add the plugin to your project.
```bash
yarn add @chatwoot/docusaurus-plugin
```
or
```bash
npm install @chatwoot/docusaurus-plugin --save
```

2. Configure the plugin in `docusaurus.config.js`

```js
// docusaurus.config.js
module.exports = {
  plugins: ["@chatwoot/docusaurus-plugin"],
  themeConfig: {
    chatwoot: {
      websiteToken: "Your website inbox token",
      baseURL: "https://app.chatwoot.com",  // optional
      enableInDevelopment: false,  // optional
    }
  }
};
```
