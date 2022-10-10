---
sidebar_label: "Next.js"
title: "Integrate Chatwoot with Next.js"
---

To integrate Chatwoot with your Next.js application, you would need a component that loads the Chatwoot script. 

You can do this in two quick steps. Let us illustrate this with the help of an example below. This example shows a React component which loads the Chatwoot script asynchronously.

## 1. Copy and Create!

Copy the following code and create a file in your `components` folder with the name `ChatwootWidget.js`.


```js
import React from 'react';

class ChatwootWidget extends React.Component {
  componentDidMount () {
    // Add Chatwoot Settings
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: 'right', // This can be left or right
      locale: 'en', // Language to be set
      type: 'standard', // [standard, expanded_bubble]
    };

    // Paste the script from inbox settings except the <script> tag
    (function(d,t) {
      var BASE_URL="<your-installation-url>";
      var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
      g.src=BASE_URL+"/packs/js/sdk.js";
      s.parentNode.insertBefore(g,s);
      g.async=!0;
      g.onload=function(){
        window.chatwootSDK.run({
          websiteToken: '<your-website-token>',
          baseUrl: BASE_URL
        })
      }
    })(document,"script");
  }

  render () {
    return null;
  }
}

export default ChatwootWidget
```

## 2. Import

Import the component in your pages or layout component as shown below.

```js
import React, { Fragment } from 'react'
// ...

import ChatwootWidget from '../components/ChatwootWidget'

const Page = () => (
  <Fragment>
    <ChatwootWidget />
    <Component {...}>
  </Fragment>
)

export default Page
```

You would be able to see the Chatwoot widget on the page now.
