---
sidebar_label: "Gatsby"
title: "Integrate Chatwoot with Gatsby"
---

Chatwoot has an official Gatsby plugin for integrating the widget on your websites

1. Add `gatsby-plugin-chatwoot` to your gatsby project.

```shell
npm install --save gatsby-plugin-chatwoot
```

if you are using yarn, use

```shell
yarn add gatsby-plugin-chatwoot
```

2. Add the plguin to your gatsby config file

```js
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-chatwoot`,
    options: {
      baseUrl: "BASE_URL", // Required
      websiteToken: "WEBSITE_TOKEN", // Required
      includeInDevelopment: false, // Optional
      chatwootSettings: {}, // Optional
    },
  },
];
```

You can get your website token and base url from your inbox settings, or you can create a new inbox from the chatwoot dashboard follwoing this [link](https://www.chatwoot.com/docs/product/channels/live-chat/create-website-channel)

3. Start your sever and You would be able to see the Chatwoot widget on the page now.
