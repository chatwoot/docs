---
sidebar_label: "SDK Setup"
title: 'Sending Information into Chatwoot'
---

Additional information about a contact is always useful. The Chatwoot Website SDK ensures that you can send additional information that you have about the user.

If you have installed our code on your website, the SDK would expose `window.$chatwoot` object.

In order to make sure that the SDK has been loaded completely, please make sure that you listen to `chatwoot:ready` event as follows:

```js
window.addEventListener('chatwoot:ready', function () {
  // Use window.$chatwoot here
  // ...
});
```

### SDK settings

To hide the bubble, you can use the setting mentioned below.

**Note**: If you use this, then you have to trigger the widget by yourself.

```js
window.chatwootSettings = {
  hideMessageBubble: false,
  position: 'left', // This can be left or right
  locale: 'en', // Language to be set
  type: 'standard', // [standard, expanded_bubble]
};
```

### Widget designs

Chatwoot support 2 designs for for the widget

1. Standard (default)

![Standard-bubble](./images/standard-bubble.gif)

2. Expanded bubble

![Expanded-bubble](./images/expanded-bubble.gif)

If you are using expanded bubble, you can customize the text used in the bubble by setting `launcherTitle` parameter on chatwootSettings as described below.

```js
window.chatwootSettings = {
  type: 'expanded_bubble',
  launcherTitle: 'Chat with us'
}
```

### Enable popout window

Inorder to enable the popout window, add the following configuration to `chatwootSettings`. This option is disabled by default.

```js
window.chatwootSettings = {
  // ...Other Config
  showPopoutButton: true,
}
```

### Trigger widget without displaying bubble

```js
window.$chatwoot.toggle();

// Toggle widget by passing state
window.$chatwoot.toggle('open'); // To open widget
window.$chatwoot.toggle('close'); // To close widget
```

### Set the user in the widget

```js
window.$chatwoot.setUser('<unique-identifier-key-of-the-user>', {
  email: '<email-address-of-the-user@your-domain.com>',
  name: '<name-of-the-user>',
  avatar_url: '<avatar-url-of-the-user>',
  phone_number: '<phone-number-of-the-user>',
});
```

`setUser` accepts an identifier which can be a `user_id` in your database or any unique parameter which represents a user. You can pass email, name, avatar_url, phone_number as params. Support for additional parameters is in progress.

Make sure that you reset the session when the user logs out of your app.

### Identity validation using HMAC

To disallow impersonation and to keep the conversation with your customers private, we recommend setting up the identity validation in Chatwoot. Identity validation is enabled by generating an HMAC(hash based message authentication code) based on the `identifier` attribute, using SHA256. Along with the `identifier` you can pass `identifier_hash` also as shown below to make sure that the user is correct one.

```js
window.$chatwoot.setUser(`<unique-identifier-key-of-the-user>`, {
  name: '', // Name of the user
  avatar_url: '', // Avatar URL
  email: '', // Email of the user
  identifier_hash: '', // Identifier Hash generated based on the webwidget hmac_token
  phone_number: '', // Phone Number of the user
})
```

To generate HMAC, read [identity validation](/docs/product/channels/live-chat/sdk/identity-validation)

Note that implementing HMAC authentication will allow chat history to persist across sessions.

### Set custom attributes

Inorder to set additional information about the customer you can use customer custom attributes field. Read more about custom attributes [here](/user-guide/features/custom-attributes)

To set a custom attributes call `setCustomAttributes` as follows

```js
window.$chatwoot.setCustomAttributes({
  accountId: 1,
  pricingPlan: 'paid',

  // Here the key which is already defined in custom attribute
  // Value should be based on type (Currently support Number, Date, String and Number)
});
```

You can view these information in the sidepanel of a conversation.

To delete a custom attribute, use `deleteCustomAttribute` as follows

```js
window.$chatwoot.deleteCustomAttribute('attribute-key');
```

### Set language manually

```js
window.$chatwoot.setLocale('en');
```

To set the language manually, use the `setLocale` function.

### Set labels on the conversation

Please note that the labels will be set on a conversation if the user has not started a conversation. In that case, the following items will not have any effect:

```js
window.$chatwoot.setLabel('support-ticket');

window.$chatwoot.removeLabel('support-ticket');
```

### Refresh the session (use this while you logout the user from your app)

```js
window.$chatwoot.reset();
```


### Widget errors

In order to see any errors in the widget, please make sure that you listen to `chatwoot:event` event as follows:

```js
window.addEventListener('chatwoot:error', function () {
  // ...
});
```

Note: This feature is available in v2.3.0 or later.
