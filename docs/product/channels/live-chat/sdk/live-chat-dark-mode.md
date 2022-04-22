---
sidebar_label: "Dark Mode"
title: "Enable dark mode on live-chat widget"
---

Modern websites supports dark mode theme along with the light mode theme. It is essential to have a live-chat that works with both themes. This guide helps you to setup dark mode for the Chatwoot live-chat widget on your website.

Here is quick glimpse of how dark mode functions on the live-chat widget.

<img src={require('./images/live-chat-dark-mode/dark-mode-docs.gif').default} alt="dark-mode-widget" width="400" />

### Enable Dark Mode on your website

To enable dark mode on Chatwoot widget, use the `darkMode` parameter along with the chatwootSettings as defined [here](/docs/product/channels/live-chat/sdk/setup).

`darkMode` parameter supports two values.

1. `light` - Enable only light mode, this is the default value.
2. `auto` - Enable dark mode based on the operating system preference.

```js
window.chatwootSettings = {
  //... other Settings
  darkMode: "auto",
};
```
