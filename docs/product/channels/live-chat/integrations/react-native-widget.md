---
sidebar_label: "React Native"
title: "Integrate Chatwoot with React Native app"
---

Add Chatwoot live chat widget to react native app and talk to your visitors in real time. Chatwoot helps you to chat with your visitors and provide exceptional support in real time. To use Chatwoot in your react native app, follow the steps described below.

## 1. Create a website inbox in Chatwoot

Refer to [Website Channel](/docs/product/channels/live-chat/create-website-channel) document.

## 2. Add the plugin to your project

```bash
yarn add @chatwoot/react-native-widget
```

or

```bash
npm install --save @chatwoot/react-native-widget --save
```

This library depends on [react-native-webview](https://www.npmjs.com/package/react-native-webview) and [async-storage](https://github.com/react-native-async-storage/async-storage). Please follow the instructions provided in the docs.

### iOS Installation

If you're using React Native versions > 60.0, it's relatively straightforward.

```sh
cd ios && pod install
```

## 3. How to use

Replace `websiteToken` and `baseUrl` with approriate values.

```js
import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import ChatWootWidget from '@chatwoot/react-native-widget';

const App = () => {
  const [showWidget, toggleWidget] = useState(false);
  const user = {
    identifier: 'john@gmail.com',
    name: 'John Samuel',
    avatar_url: '',
    email: 'john@gmail.com',
    identifier_hash: '',
  };
  const customAttributes = { accountId: 1, pricingPlan: 'paid', status: 'active' };
  const websiteToken = 'WEBSITE_TOKEN';
  const baseUrl = 'CHATWOOT_INSTALLATION_URL';
  const locale = 'en';

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity style={styles.button} onPress={() => toggleWidget(true)}>
          <Text style={styles.buttonText}>Open widget</Text>
        </TouchableOpacity>
      </View>
      {
        showWidget&&
          <ChatWootWidget
            websiteToken={websiteToken}
            locale={locale}
            baseUrl={baseUrl}
            closeModal={() => toggleWidget(false)}
            isModalVisible={showWidget}
            user={user}
            customAttributes={customAttributes}
          />
      }

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    height: 48,
    marginTop: 32,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#1F93FF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    fontWeight: '600',
    fontSize: 16,
    paddingRight: 10,
  },
});

export default App;
```

Horray! You're done!

The whole example can be found [here](https://github.com/chatwoot/chatwoot-react-native-widget/tree/develop/examples).

### Props

| Name | Default | Type | Description |
| -- | -- | -- | -- |
| baseUrl | - | String | Chatwoot Installation URL |
| websiteToken | - | String | Website Channel Token |
| locale | en | String | Locale to be used in the widget. Chatwoot support 25+ language. See [Langauge Config](https://github.com/chatwoot/chatwoot/blob/develop/config/initializers/languages.rb) to see the supported ISO 639-1 codes |
| isModalVisible | false | Boolean | Flag used to set the display of the widget modal |
| closeModal | - | Function | Handler method for the callback when the modal is closed |
| user | {} | Object | Pass the information about the user like email, name and avatar_url |
| customAttributes | {} | Object | If you want to set additional information about user, pass the key value pair here |
