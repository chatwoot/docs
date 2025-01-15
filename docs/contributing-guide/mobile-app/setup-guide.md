---
sidebar_label: "Mobile App"
title: "Setup guide for mobile app"
---


### Installation and setup

#### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Account](https://expo.dev/signup)

To learn more about the most up-to-date instructions, please refer to the guide available [here](https://docs.expo.dev/get-started/set-up-your-environment/).

#### Clone the repository

```bash
git clone git@github.com:chatwoot/chatwoot-mobile-app.git
```

#### Install dependencies

```bash
pnpm install
```

#### Install Expo CLI

```bash
pnpm install -g expo-cli
```

### Environment Variables

```bash
cp .env.example .env
```

| Name                                     | Description                                 | Default Value            | Required |
| ---------------------------------------- | ------------------------------------------- | ------------------------ | -------- |
| EXPO_PUBLIC_CHATWOOT_WEBSITE_TOKEN       | Web widget token for in-app support         | -                        | No       |
| EXPO_PUBLIC_CHATWOOT_BASE_URL            | Self-hosted installation URL                | https://app.chatwoot.com | Yes      |
| EXPO_PUBLIC_JUNE_SDK_KEY                 | June analytics SDK key                      | -                        | No       |
| EXPO_PUBLIC_MINIMUM_CHATWOOT_VERSION     | Minimum supported Chatwoot version          | -                        | Yes      |
| EXPO_PUBLIC_SENTRY_DSN                   | Sentry DSN URL for error reporting          | -                        | No       |
| EXPO_PUBLIC_PROJECT_ID                   | Expo project identifier                     | -                        | Yes      |
| EXPO_PUBLIC_APP_SLUG                     | Application slug for Expo                   | -                        | Yes      |
| EXPO_PUBLIC_SENTRY_PROJECT_NAME          | Project name in Sentry                      | -                        | No       |
| EXPO_PUBLIC_SENTRY_ORG_NAME              | Organization name in Sentry                 | -                        | No       |
| EXPO_PUBLIC_IOS_GOOGLE_SERVICES_FILE     | Path to iOS Google Services config file     | -                        | No       |
| EXPO_PUBLIC_ANDROID_GOOGLE_SERVICES_FILE | Path to Android Google Services config file | -                        | No       |
| EXPO_APPLE_ID                            | Apple Developer account ID                  | -                        | No       |
| EXPO_APPLE_TEAM_ID                       | Apple Developer team ID                     | -                        | No       |
| EXPO_STORYBOOK_ENABLED                   | Enable/disable Storybook                    | false                    | No       |

### Generate the native code

```bash
pnpm generate
```

Generates native Android and iOS directories using [Prebuild](https://docs.expo.dev/workflow/continuous-native-generation/).

Note: You need to run pre-build if you add a new native dependency to your project or change the project configuration in Expo app config (app.config.ts).

### How to run the app

Connect your iPhone/Android device and run the following command to install the app on your device.

```bash
## iOS
pnpm run:ios

## Android
pnpm run:android
```

### How to install the packages

Please always to install the packages using the command `npx expo install package-name` instead of `pnpm install package-name`.

This is crucial for native dependencies because the expo will automatically install the correct compatible version while pnpm/yarn/npm will install the latest version which may or may not be compatible.

### Push notification

If you are using the community edition of Chatwoot, you would now be able use the [Official mobile app](https://www.chatwoot.com/mobile-apps) with push notifications without any additional configuration. Please refer to the [documentation](https://www.chatwoot.com/hc/handbook/articles/1687935909-push-notification) for more details.


### Build & Submit using EAS

We use Expo Application Services (EAS) for building, deploying, and submitting the app to app stores. EAS Build and Submit is available to anyone with an Expo account, regardless of whether you pay for EAS or use our Free plan. You can sign up at [Expo EAS](https://expo.dev/eas).

#### Build the app

```bash
## iOS
pnpm run build:ios:local

## Android
pnpm run build:android:local
```


#### Submit the app

```bash
## iOS
pnpm submit:ios

## Android
pnpm submit:android
```


When you run the above command, you will be prompted to provide a path to a local app binary file. Please select the file that you built in the previous step. It is `.ipa` for iOS and `.aab` for Android.

It may take a while to complete the submission process. You will see the status of the submission on your terminal.