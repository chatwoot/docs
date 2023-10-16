---
sidebar_label: "Facebook"
title: "Setting Up Facebook"
---

To use Facebook Channel, you have to create a Facebook app in the developer portal. You can find more details about creating Facebook channels [here](https://developers.facebook.com/docs/apps/#register).


### Prerequisites

1. A valid facebook account.
2. A valid facebook page.


### Register A Facebook App

1. Click on the `Create App` button

![facebook_create_app](./images/facebook/facebook-create-app.png)

2. Select the option `Other`.


![facebook_other_app](./images/facebook/facebook_other_app.png)

3. For the app type, choose `Business`.

![facebook_business](./images/facebook/facebook_business.png)

3. Enter basic details like the app name and email.

![facebook_business_details](./images/facebook/facebook_business_details.png)

Once you register your Facebook App, you will have to obtain the `App Id` and `App Secret`. These values will be available in the app settings and will be required while setting up Chatwoot environment variables.


![facebook_app_id](./images/facebook/facebook_app_id.png)




### Configuring the Environment Variables in Chatwoot

Configure the following Chatwoot environment variables with the values you have obtained during the Facebook app setup.
`FB_VERIFY_TOKEN` should be a unique secure string that should be provided when configuring the Facebook app. Generate a
random string and set this as `FB_VERIFY_TOKEN` for now.

Restart the chatwoot server after updating the environment variables

```bash
FB_VERIFY_TOKEN=
FB_APP_SECRET=
FB_APP_ID=
```

### Configure Facebook Login


1. Add the Facebook Login product via the Facebook app dashboard.

![facebook_app_login](./images/facebook/facebook_app_login.png)


2. Enable `Web OAuth Login`, `Login with Javascript SDK` and add your self-hosted domain to the `Allowed Domains for the JavaScript SDK` input.

![facebook_sdk_login](./images/facebook/facebook_sdk_login.png)

### Configure the Facebook App

1. In the app settings, add your `Chatwoot installation domain` as your app domain.

![facebook_app_domain](./images/facebook/facebook_app_domain.png)

2. In the products section in your app settings page, Add Messenger

![facebook_messenger_product](./images/facebook/facebook_messenger_product.png)

3. Go to the Messenger settings and configure the callBack URL 

![Alt text](./images/facebook/facebook_messenger_section.png)

4. Provide the Callback URL as `{your_chatwoot_installation_url}/bot` and the Verify token as `FB_VERIFY_TOKEN` from your environment variable.


![facebook_callback_url](./images/facebook/facebook_callback_url.png)

5. Head over to chatwoot and create a Messenger inbox. Choose a page for which your Facebook developer account has admin access to. Please refer to this [guide](../../../../product/channels/facebook)  for more details on creating a Facebook inbox in Chatwoot.


<!-- [guide](user-guide/features/pre-chat-form.md). -->
### Testing the Facebook channel

Until the application is approved for production, Facebook wouldn't send the new messages on your page to chatwoot.

To test the changes until the app is approved for production. Follow the steps

1. Head over to the messenger section in your app settings page, in Facebook developers.

![facebook_messenger_settings](./images/facebook/facebook_messenger_settings.png)


2. Click `Add or remove pages` and connect the page which you choose while creating the chatwoot Facebook inbox.

![facebook_callback_pages](./images/facebook/facebook_callback_pages.png)


3. After connecting the pages, Click on `Add subscriptions` from the connected page.

![facebook_page_config](./images/facebook/facebook_page_config.png)

4. Subscribe to the following fields and save the subscription.
```
messages
messaging_postbacks
message_deliveries
message_reads
message_echoes
```


![facebook_page_subscription](./images/facebook/facebook_page_subscription.png)

4. Send a message to the connected page from your Facebook account and it should appear in chatwoot now.

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

### Facebook API version

We support facebook API version v13.0 going forward, which you can update in the facebook app advanced settings.
![fb_api_version](./images/facebook/fb_api_version.png)

### Test your local Setup

1. After finishing the set-up above, [create a Facebook inbox](/docs/product/channels/facebook) after logging in to your Chatwoot Installation.
2. Send a message to your page from Facebook.
3. Wait and confirm incoming requests to `/bot` endpoint in your ngrok screen.
