---
sidebar_label: "Dark Mode"
title: "Enable dark mode on live-chat widget"
---

Modern websites enable users to switch between light and dark modes. Therefore, a live chat that works with both themes is important. 

This guide helps you to set up dark mode for the Chatwoot live-chat widget on your website.

Here is a quick glimpse of how dark mode functions on the live chat widget.

<img src={require('./images/live-chat-dark-mode/dark-mode-docs.gif').default} alt="dark-mode-widget" width="400" />

To enable dark mode on Chatwoot widget, use the `darkMode` parameter along with the [chatwootSettings](/docs/product/channels/live-chat/sdk/setup).

`darkMode` parameter supports two values.

1. `light` - Enable only light mode. This is the default value.
2. `auto` - Enable dark mode based on the operating system preference.

```js
window.chatwootSettings = {
  //... other Settings
  darkMode: "auto",
};
```

Note: `dark` only is not supported now. We will add the support in future releases.
