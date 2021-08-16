---
sidebar_label: "Setup Guide"
title: "Setup guide for mobile app"
---

- [Installation and setup](#installation-and-setup)
  - [Prerequisites](#prerequisites)
  - [Environment Variables](#environment-variables)
  - [Setup firebase for push notification](#setup-firebase-for-push-notification)
  - [Setup Sentry for error reporting](#setup-sentry-for-error-reporting) 
- [Running](#running)
    - [iOS](#ios) - **Mac is required if you wish to develop for iOS.**
    - [Android](#android)
- [Configure and run tests](#configure-and-run-tests)

## Installation and setup

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Watchman](https://facebook.github.io/watchman/docs/install.html)
- [Yarn](https://yarnpkg.com/en/docs/install)
- React Native CLI - Use `$ yarn global add react-native-cli` to install the CLI.

More information on getting started can be found [here](https://reactnative.dev/docs/environment-setup)

Clone the repository

`$ git clone git@github.com:chatwoot/chatwoot-mobile-app.git`

And install dependencies

`$ yarn`

### Environment Variables

Create `.env` file under root folder


```
SENTRY_DSN=
CHATWOOT_WEBSITE_TOKEN=
CHATWOOT_BASE_URL=
POSTHOG_API_KEY=
POSTHOG_API_HOST=
MINIMUM_CHATWOOT_VERSION=1.15.0
```
### Setup firebase for push notification

- Create a new project in [firebase console](https://console.firebase.google.com/).
- Generate [android credentials](https://rnfirebase.io/#generating-android-credentials) from firebase console. Then download the `google-services.json` file and place it inside of your project at the following location: `android/app/`.
- Generate [iOS credentials](https://rnfirebase.io/#generating-ios-credentials) from firebase console. Then download the `GoogleService-Info.plist` file . Then add this file to project using `Xcode`. More details can be found [here](https://rnfirebase.io/#3-ios-setup). 

### Setup Sentry for error reporting

Create a new project in [Sentry](https://sentry.io/for/react-native/)

Add `SENTRY_DSN` value in `.env` file. If you want to supports native crashes, link the sentry SDK to your native projects.

Run the following command to generate the Sentry configuration.

```bash
yarn sentry-wizard -i reactNative -p ios android
cd ios && pod install
```



## Running

### iOS

- `cd ios && pod install`

- `yarn ios`

OR

Open `Chatwoot.xcworkspace` file under `ios` folder. Choose your target device and click playbutton.

### Android

- Create `gradle.properties` file with following contents under `android/app` folder

```
android.useAndroidX=true
android.enableJetifier=true
FLIPPER_VERSION=0.54.0
org.gradle.jvmargs=-Xmx4608m
```

- `yarn android`

## Configure and run tests

Add a new brew formula

```
brew tap wix/brew
```

Install simulators

```
brew install wix/applesimutils
```

Build application:

```
detox build --configuration ios
```

Run tests:

```
detox test --configuration ios --loglevel trace
```

Manage simulators:

```
/usr/bin/xcrun simctl list
```
