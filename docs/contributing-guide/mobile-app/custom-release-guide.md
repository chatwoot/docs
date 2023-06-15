---
sidebar_label: "Custom Release Guide"
title: "Custom release guide for mobile app"
---

### Setup Firebase for push notification

- Create a new project in [firebase console](https://console.firebase.google.com/).
- Generate [android credentials](https://rnfirebase.io/#generating-android-credentials) from firebase console. Then download the `google-services.json` file and place it inside of your project at the following location: `android/app/`.
- Generate [iOS credentials](https://rnfirebase.io/#generating-ios-credentials) from firebase console. Then download the `GoogleService-Info.plist` file . Then add this file to project using `Xcode`. More details can be found [here](https://rnfirebase.io/#3-ios-setup).

- Add the `FCM_SERVER_KEY` in the chatwoot environment variables. You can find your FCM_SERVER_KEY in your firebase settings (Project Settings > Cloud Messaging > Project Credentials > Server Key).

### Deep linking

#### Android

Open `AndroidManifest.xml` file under `android/app/src/main/` folder.

Replace `android:host` with your installation url

Ex:

```
<data android:scheme="https" android:host="app.chatwoot.com" />
```

In order to test deep linking in local machine run following command in terminal.

```
adb shell am start -W -a android.intent.action.VIEW -d "https://{INSTALLATION_URL}/app/accounts/{ACCOUNT_ID}/conversations/{CONVERSATION_URL} {APP_PACKAGE_NAME}
```

Ex:

```
adb shell am start -W -a android.intent.action.VIEW -d "https://app.chatwoot.com/app/accounts/47/conversations/11” com.chatwoot.app

```

#### iOS

Set `IOS_APP_ID` in chatwoot server

Open `Chatwoot.entitlements` file under `ios/` folder.

Replace `*.chatwoot.com` with your installation url

### Deployment

In order to successfully upload your app to the [Playstore](https://reactnative.dev/docs/signed-apk-android) and [Appstore](https://reactnative.dev/docs/publishing-to-app-store), it is important to follow the official guide closely. You must ensure that you have completed all the necessary steps, including creating a signed APK for Android and publishing to the App Store for iOS. It is also important to make sure that your app meets all the requirements and guidelines set forth by the app stores, such as having appropriate content and adhering to their policies and regulations.
