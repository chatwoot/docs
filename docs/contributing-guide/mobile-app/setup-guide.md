---
title: "Setting up an app"
---

:::note

Before you begin, install the following:

- [Node.js](https://nodejs.org/en/download/)
- [Watchman](https://facebook.github.io/watchman/docs/install.html)
- [Yarn](https://yarnpkg.com/en/docs/install)
- [React Native CLI](https://reactnative.dev/docs/environment-setup): To install the CLI, use `$ yarn global add react-native-cli`.

:::

## Installation and setup

After installing the above:

1. Clone the repository using the `$ git clone git@github.com:chatwoot/chatwoot-mobile-app.git` command.
2. Install dependencies using the `$ yarn` command.

### Environment Variables

Create a `.env` file under the root folder.

```
SENTRY_DSN=
CHATWOOT_WEBSITE_TOKEN=
CHATWOOT_BASE_URL=
POSTHOG_API_KEY=
POSTHOG_API_HOST=
MINIMUM_CHATWOOT_VERSION=1.15.0
```

### Setting up Firebase for push notifications

Create a new project in [Firebase](https://console.firebase.google.com/).
  - For Android:
      1. Generate the [Android credentials](https://rnfirebase.io/#generating-android-credentials) from the Firebase console.
      1. Download the `google-services.json` file and place it inside your project under `android/app/`.
  - For iOS:    
    1. Generate the [iOS credentials](https://rnfirebase.io/#generating-ios-credentials) from the Firebase console. 
    1. Download the `GoogleService-Info.plist` file and add it to your project using `Xcode`. For more information, see [here](https://rnfirebase.io/#3-ios-setup).

### Setting up Sentry for error reporting

1. Create a new project in [Sentry](https://sentry.io/for/react-native/).
2. Add `SENTRY_DSN` value in the `.env` file. If you want to support native crashes, link the Sentry SDK to your native projects.
3. Run this command to generate the Sentry configuration.

  ```bash
  yarn sentry-wizard -i reactNative -p ios android
  cd ios && pod install
  ```

## Running

### iOS

- Run the following commands, or

  1. `cd ios && pod install`
  2. `yarn ios`

- Open the `Chatwoot.xcworkspace` file under the `ios` folder, choose your target device, and click **Play**.

### Android

1. In the `android/app` folder, create the `gradle.properties` file with the following:

  ```
  android.useAndroidX=true
  android.enableJetifier=true
  FLIPPER_VERSION=0.54.0
  org.gradle.jvmargs=-Xmx4608m
  ```

2. Run the `yarn android` command.

## Configuring and running tests

1. Add a new brew formula.

  ```
  brew tap wix/brew
  ```

2. Install simulators.

  ```
  brew install wix/applesimutils
  ```

3. Build the application.

  ```
  detox build --configuration ios
  ```

4. Run tests.

  ```
  detox test --configuration ios --loglevel trace
  ```

5. Manage simulators.

  ```
  /usr/bin/xcrun simctl list
  ```
