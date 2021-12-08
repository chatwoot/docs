---
sidebar_label: "Facebook App"
title: "Setting Up Facebook"
---

### Register A Facebook App

To use Facebook Channel, you have to create a Facebook app in the developer portal. You can find more details about creating Facebook channels [here](https://developers.facebook.com/docs/apps/#register)

1. In the select an app type, choose business

Once you register your Facebook App, you will have to obtain the `App Id` and `App Secret`. These values will be available in the app settings and will be required while setting up Chatwoot environment variables.

### Configuring the Environment Variables in Chatwoot

Configure the following Chatwoot environment variables with the values you have obtained during the Facebook app setup.
`FB_VERIFY_TOKEN` should be a unique secure string that should be provided when configuring the Facebook app.

Restart the chatwoot server after updating the environment variables

```bash
FB_VERIFY_TOKEN=
FB_APP_SECRET=
FB_APP_ID=
```

> **NOTE**: Right now, Chatwoot is trying to simplify this setup and have this configuration be done from the UI. If you are using a Chatwoot version latest than v1.22.1, set the above FB credentials in Chatwoot super admin panel under InstallationConfig. The url to access super_admin panel is `<your-chatwoot-domain.com>/super_admin`. If you were using an older version of Chatwoot, your existing environment variable setting would be automatically migrated to the InstallationConfig setting.

### Configure the Facebook App

1. In the app settings, add your `Chatwoot installation domain` as your app domain.
2. In the products section in your app settings page, Add Messenger
3. Go to the Messenger settings and configure the callBack URL with `{your_chatwoot_url}/bot`
4. provide the `FB_VERIFY_TOKEN` value from your environment variables for `verify token`
5. Head over to chatwoot and create a Facebook inbox. Choose a page for which your Facebook developer account has admin access to

### Testing the Facebook channel

Until the application is approved for production, Facebook wouldn't send the new messages on your page to chatwoot.
To test the changes until the app is approved for production. Follow the steps

1. Head over to the messenger section in your app settings page, in Facebook developers
2. Under the pages table in the webhooks section, you will see the page you choose while creating the chatwoot Facebook inbox
3. Click on add subscriptions and subscribe to the following
```
messages
messaging_postbacks
message_deliveries
message_reads
message_echoes
```
4. Send a message to the connected page from your Facebook account and it should appear in chatwoot now

### Going into production.

Before you can start using your Facebook app in production, you will have to get it verified by Facebook. Refer to the [docs](https://developers.facebook.com/docs/apps/review/) on getting your app verified.

Obtain advanced access to the required permissions mentioned below for your Facebook app
```
pages_messaging
Business Asset User Profile Access
pages_show_list
pages_manage_metadata
```
### NOTE
If your facebook app's version is more than 7.0 then you will need extra permission according to facebook's updated policy. Make sure you get permission for.
```
pages_read_engagement
```
Make sure your facebook app subscription version is 12.0, we have updated the FB subscription with the latest version, so change the permission subscription version uder the facebook app webhooks option.

### Developing or Testing Facebook Integration in your machine

Install [ngrok](https://ngrok.com/docs) on your machine. This will be required since Facebook Messenger API's will only communicate via https.

```bash
brew cask install ngrok
```

Configure ngrok to route to your Rails server port.

```bash
ngrok http 3000
```

Go to the Facebook developers page and navigate into your app settings. In the app settings, add `localhost` as your app domain.
In the Messenger settings page, configure the callback url with the following value.

```bash
{your_ngrok_url}/bot
```

Update verify token in your Chatwoot environment variables.

You will also have to add a Facebook page to your `Access Tokens` section in your Messenger settings page.
Restart the Chatwoot local server. Your Chatwoot setup will be ready to receive Facebook messages.

### Test your local Setup

1. After finishing the set-up above, [create a Facebook inbox](/docs/product/channels/facebook) after logging in to your Chatwoot Installation.
2. Send a message to your page from Facebook.
3. Wait and confirm incoming requests to `/bot` endpoint in your ngrok screen.

