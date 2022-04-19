---
sidebar_label: "Facebook"
title: 'How to create Facebook channel?'
---

If you are using a self-hosted Chatwoot installation, please configure the Facebook app as described in the [guide to setup Facebook app](/docs/self-hosted/configuration/features/integrations/facebook-channel-setup)

**Step 1**. Click on "Add Inbox" button from Settings > Inboxes page.

![fb_create](./images/facebook/inbox_create.png)

**Step 2**. Click on "Facebook" icon.

![list_of_channels](./images/facebook/list_of_channels.png)

**Step 3**. Click on Facebook login button. It will open a new window for you to login.

![create_fb](./images/facebook/login_with_facebook.png)

**Step 4**. Authenticate with Facebook and select the page you want to connect. Enable all permissions shown in the list, otherwise the app might not work.

![link_account](./images/facebook/link_account.png)

![list_of_pages](./images/facebook/list_of_pages.png)

![list_of_pages](./images/facebook/permissions.png)

![select_page](./images/facebook/select_page.png)

**Step 5**. "Add agents" to your Facebook inbox.

![add_agents](./images/facebook/add_agents.png)

**Step 6**. Hooray! You have successfully created a Facebook inbox. Whenever a customer sends a message to your Facebook page, you will be able to see it here and manage it.

![finish_inbox](./images/facebook/finish_inbox.png)

**Step 7**. If you want to update the agents who have access to the inbox, you can go to Settings > Inboxes.

![inbox_settings](./images/facebook/inbox_settings.png)


### Re-Authorize Facebook
**Step 1**. Go to inbox settings page of your facebook channel inbox.

![fb_settings](./images/facebook/fb_settings.png)

**Step 2**. You will see continue with facebook button, click on that.

![fb_auth](./images/facebook/fb_auth.png)

**Step 3**. Then authorize app to your facebook page by clicking on continue button.

![continue_with_fb](./images/facebook/continue_with_fb.png)


### FAQ:

1. I am not able to see messages received in facebook messenger in the connected chatwoot inbox:

Ans: Please make sure your Facebook page is connected only to the Chatwoot app, as according to Facebook's new app development, all the apps need to build a handover protocol. https://developers.facebook.com/docs/messenger-platform/handover-protocol

We are working on the workaround for the same which would be available in the upcoming releases.
For more information please follow this issue for the update: https://github.com/chatwoot/chatwoot/issues/4489
