---
sidebar_label: "Custom Release Guide"
title: "Custom release guide for mobile app"
---

### Set up Firebase for Push Notifications

Note: If you're using the official mobile app, you can skip this step. Push notifications should work correctly as long as the `ENABLE_PUSH_RELAY_SERVER` environment variable is set to true in the Chatwoot environment variables.

- Start by creating a new project in the [Firebase console](https://console.firebase.google.com/).
- Next, generate [Android credentials](https://rnfirebase.io/#generating-android-credentials) from the Firebase console. Download the `google-services.json` file and place it within your project at the following location: `android/app/`.
- Generate [iOS credentials](https://rnfirebase.io/#generating-ios-credentials) from the Firebase console. Download the `GoogleService-Info.plist` file and add it to your project using `Xcode`. More details are available [here](https://rnfirebase.io/#3-ios-setup).
- Follow the [guide](https://firebase.google.com/docs/cloud-messaging/migrate-v1) to generate GOOGLE_APPLICATION_CREDENTIALS.
- Visit `<your-installation_url>/super_admin/app_config`. Add the `Firebase Project ID` and GOOGLE_APPLICATION_CREDENTIALS as `Firebase Credentials`.
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
