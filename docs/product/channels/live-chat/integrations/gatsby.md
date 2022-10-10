---
sidebar_label: "Gatsby"
title: "Integrate Chatwoot with Gatsby"
---

If you have a website created on Gatsby, you can add a Chatwoot live chat widget to it and talk to your visitors in real-time. 

This can be done in 3 simple steps using Chatwoot’s Gatsby plugin.

## 1. Add the Gatsby plugin to your project 

Add gatsby-plugin-chatwoot to your Gatsby project.

```shell
npm install --save gatsby-plugin-chatwoot
```

If you are using yarn, use:

```shell
yarn add gatsby-plugin-chatwoot
```

## 2. Add the plguin to your Gatsby config file

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

You can get your Website token and base URL from your Inbox settings in your Chatwoot account. 

If you need to create a new website channel, follow the procedure illustrated [here](https://www.chatwoot.com/docs/product/channels/live-chat/create-website-channel).

## 3. Start your sever 

You would be able to see the Chatwoot widget on the page now.
