---
sidebar_label: "Instagram via Instagram Business Login"
title: "Instagram via Instagram Business Login"
---


> **Note**: Please ensure you have installed version v4.0.5 or above. If not, please refer to this [guide](./instagram-channel-setup.md)


1. A valid facebook account.
2. A valid instagram professional account.


### Register A Facebook App

To use Instagram Channel, you have to create a Facebook app in the developer portal. You can find more details about creating Facebook apps [here](./facebook-channel-setup.md).


1. Click on the "Create App" button

![facebook_create_app](./images/facebook/facebook-create-app.png)

2. Select the option "Other".


![facebook_other_app](./images/facebook/facebook_other_app.png)

3. For the app type, choose "Business"

![facebook_business](./images/facebook/facebook_business.png)

4. Add app name and connect business account

![facebook_business_details](./images/facebook/facebook_business_details.png)


5. Add Instagram product from the Home page.

![instagram_product](./images/instagram/instagram_product.png)

### Configure Instagram settings for Chatwoot

1. Copy Instagram app ID and Instagram app secret

![instagram_app_id](./images/instagram/instagram_app_id.png)

2. Add the Instagram app ID and Instagram app secret to your app config via `{Chatwoot installation url}/super_admin/app_config?config=instagram`

![instagram_app_config](./images/instagram/instagram_app_config.png)


3. Configure Webhooks

Set the callback URL to `{your_chatwoot_url}/webhooks/instagram`. The verify token should match your `INSTAGRAM_VERIFY_TOKEN`, which can be configured through `app_config`

![instagram_webhooks](./images/instagram/instagram_webhook.png)


Subscribe to `messages`, `messaging_seen`, and `message_reactions` events.

![instagram_webhooks_subscribe](./images/instagram/instagram_webhooks_subscribe.png)


> **Note**: To receive web hooks, app mode should be set to "Live".


4. Set up Instagram business login

Set Redirect URL as `{your_chatwoot_url}/instagram/callback`

![instagram_business_login](./images/instagram/instagram_business_login.png)


5. Create a new Instagram tester account


### Create Instagram Inbox


Head over to Chatwoot and create a Instagram inbox. Please refer to this [guide](https://www.chatwoot.com/hc/user-guide/articles/1677829420-how-to-setup-an-instagram-channel) for more details on creating a Instagram inbox in Chatwoot.



### How to test the Instagram before going to live


1. Add Instagram Testers by clicking "Add People" button.

![facebook_instagram_test](./images/instagram/instagram-testers-list.png)

2. Make sure that you have selected the role Instagram Tester while creating a new tester.

![instagram_tester_list](./images/instagram/instagram-add-tester.png)

### Going into production.

Before you can start using your Facebook app in production, you will have to get it verified by Facebook. Refer to the [docs](https://developers.facebook.com/docs/messenger-platform/instagram/app-review) on getting your app verified.


### Troubleshooting & Common Errors

**1/ Insufficient Developer Role Error**

- Ensure the Instagram user is added as a developer:
    - **Meta Dashboard → App Roles → Roles → Add People → Enter Instagram ID**

**2/ API Access Deactivated**

- Ensure the **Privacy Policy URL** is valid and correctly set.

**3/ Invalid request: Request parameters are invalid: Invalid redirect_uri**

- Please configure the Frontend URL. The Frontend URL does not match the authorization URL.