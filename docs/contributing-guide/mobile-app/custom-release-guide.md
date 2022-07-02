---
title: "Custom release"
---

## Deep linking

### Android

1. Open `AndroidManifest.xml` file under `android/app/src/main/` folder.

2. Replace `android:host` with your installation URL. For example:

   ```
   <data android:scheme="https" android:host="app.chatwoot.com" />
   ```

3. To test deep linking on your local machine, run the below command in the terminal.

   ```
   adb shell am start -W -a android.intent.action.VIEW -d "https://{INSTALLATION_URL}/app/accounts/{ACCOUNT_ID}/conversations/{CONVERSATION_URL} {APP_PACKAGE_NAME}
   ```

   For example:

   ```
   adb shell am start -W -a android.intent.action.VIEW -d "https://app.chatwoot.com/app/accounts/47/conversations/11” com.chatwoot.app
   ```

### iOS

1. Set `IOS_APP_ID` in the Chatwoot server.

2. Open `Chatwoot.entitlements` file under `ios/` folder.

3. Replace `*.chatwoot.com` with your installation URL.

## Deployment

:::info

The official Chatwoot mobile app is deployed using [Fastlane](https://docs.fastlane.tools/getting-started/cross-platform/react-native/).

:::

For a step-by-step guide on how to publish an app to the Apple App Store and Google Play Store, see [here](https://www.reactnativeschool.com/publishing-react-native-app/).

### Android

To distribute your Android application via the Google Play store, it must be signed with a release key that must then be used for all future updates. For more information, see [here](https://reactnative.dev/docs/signed-apk-android).

In the `android/app` folder, update the `gradle.properties` file with the following:

```
android.useAndroidX=true
android.enableJetifier=true
FLIPPER_VERSION=0.33.1
org.gradle.jvmargs=-Xmx4608m
RELEASE_STORE_FILE=<RELEASE_STORE_FILE>
RELEASE_KEY_ALIAS=<RELEASE_KEY_ALIAS>
RELEASE_STORE_PASSWORD=<RELEASE_STORE_PASSWORD>
RELEASE_KEY_PASSWORD=<RELEASE_KEY_PASSWORD>
```

### iOS

For more information, see [here](https://reactnative.dev/docs/publishing-to-app-store).
