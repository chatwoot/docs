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
- [pnpm](https://pnpm.io/installation)

To learn more about the most up-to-date instructions, please refer to the guide available [here](https://reactnative.dev/docs/environment-setup?guide=native).

#### Clone the repository

`$ git clone git@github.com:chatwoot/chatwoot-mobile-app.git`

#### Install dependencies

`$ yarn`

### Environment Variables

Create `.env` file under root folder

```
SENTRY_DSN=
CHATWOOT_WEBSITE_TOKEN=
CHATWOOT_BASE_URL=https://app.chatwoot.com
JUNE_SDK_KEY=
MINIMUM_CHATWOOT_VERSION=2.16.0
```

- CHATWOOT_WEBSITE_TOKEN: Web widget token. Add this token only if you want to add in app support.
- CHATWOOT_BASE_URL: Replace with your self-hosted installation url.
- SENTRY_DSN: Sentry DSN URL.
- JUNE_SDK_KEY: June SDK key. We use June for analytics.
- MINIMUM_CHATWOOT_VERSION: Minimum supported Chatwoot version.

### Push notification

If you are using the community edition of Chatwoot, you would now be able use the [Official mobile app](https://www.chatwoot.com/mobile-apps) with push notifications without any additional configuration.

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

- `yarn android`


If you face any issues while setting up, please post on our [GitHub](https://github.com/chatwoot/chatwoot) or on our developer forum at [Discord](https://discord.gg/cJXdrwS). Someone from the team will definitely help you.