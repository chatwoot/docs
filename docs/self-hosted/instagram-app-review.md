---
sidebar_label: "Instagram App Review"
title: "Instagram App Review"
---

# Instagram App Review Submission Template

This document provides a customizable template for brands requesting advanced Instagram permissions, Use this template to submit an Instagram App Review request and demonstrate how your app uses advanced messaging permissions to provide real-time customer support through Instagram.

**Permissions needed to be requested:**

- `instagram_business_basic` – Retrieve connected Instagram Business account metadata (username, ID, profile picture)
- `instagram_business_manage_messages` – Receive and respond to direct messages
- `human_agent` – Enable human responses beyond the standard 24-hour window

Please replace all placeholder values such as `[BRAND_NAME]`, `[DASHBOARD_URL]`, `[EMAIL]`, and `[PASSWORD]` before submitting.

## Start the review process

### Add the `website` platform 

Add the `website` platform from the basic settings and fill the frontend URL.

![i.g-add-platform](./img/instagram-review/i.g-add-platform.png)

### Go to the app review section

Go to Instagram product and click on "Go to app review"

![i.g-review-1](./img/instagram-review/i.g-review-1.png)

### Confirm the documentation

Click on "Continue" to confirm the documentation.

![i.g-review-2](./img/instagram-review/i.g-review-2.png)

### Select the permissions

Select the permissions `instagram_business_basic`, `instagram_business_manage_messages` and `human_agent` and click on "Continue to app review"

![i.g-review-3](./img/instagram-review/i-g-review-3.png)

### Configure app review requests

After clicking on "Continue to app review", you will be redirected to the app review requests page.

![i.g-review-4](./img/instagram-review/i.g-review-requests.png)

Click on "Edit" button to edit the review request.

![i.g-review-5](./img/instagram-review/i.g-review-edit.png)

### Business account

You **must** have a business account to be able to request these permissions. Please make sure you have a business account before requesting the permissions. Submit business account details.

![i.g-review-6](./img/instagram-review/i.g-business-review.png)

### Data handling

Please answer all the questions in the data handling section and add all the pre-processing steps you do on the data.

![i.g-review-7](./img/instagram-review/i.g-data-handling-questions.png)



![i.g-review-8](./img/instagram-review/i.g-data-handling.png)

### Complete app settings

Make sure you have app icon, privacy policy URL and app category. You can update this via the basic settings.

![i.g-app-settings](./img/instagram-review/i.g-app-settings.png)

### Review instructions

Provide the review instructions to the reviewer for the app review. Basically you need to provide the steps to login to the dashboard and send a message to the connected Instagram account.

![i.g-review-instructions](./img/instagram-review/i.g-review-instructions.png)

You can use the following template to provide the review instructions:

1. Go to `DASHBOARD_URL`
2. Login with the following credentials, please ensure you paste these exact credentials without any extra spaces.
   email: `EMAIL`
   password: `PASSWORD`
3. Once you log-in you will be greeted with the dashboard with an empty chat screen. On the left most sidebar, you will find the settings (gear like) icon
4. Click on Settings > Inboxes > Add inbox. You can also find the settings page on this URL: `[DASHBOARD_URL]/app/accounts/[ACCOUNT_ID]/settings/inboxes/new`
5. On the first step "Choose a channel" you can select Instagram, this will take you to the second step, where you will find the "Continue with Instagram" button.
6. Once the setup is done, you can send a message to the Connected Instagram account
7. The message should show up on the dashboard. `[DASHBOARD_URL]/app/accounts/[ACCOUNT_ID]/dashboard`

![i.g-review-instructions-1](./img/instagram-review/i.g-review-instructions-2.png)


## Permissions

It is time to request the permissions. Please click on each permission and fill the details. Once you are done, please click on "Submit for review". We have provided sample permission requests below which you can use as a reference.

![i.g-permission-requests](./img/instagram-review/i.g-permission-requests.png)

## `instagram_business_basic`

### Why you are requesting this permission

[BRAND_NAME] is a customer support platform that allows businesses to manage conversations across multiple messaging platforms — including Instagram, WhatsApp, Facebook, and more — through a unified inbox.

This permission is used to:

- Retrieve basic metadata (username, user ID, and profile picture) of connected Instagram Business accounts during onboarding.
- Display sender information (username and ID) when customers message the business through Instagram.

This metadata is essential for correct routing of messages to the appropriate agent, identification of the agent handling the conversation, and accurate profile display in the chat UI, ensuring a seamless customer experience.

- **App URL:** [DASHBOARD_URL]
- **Test Account:**
  - Email: [EMAIL]
  - Password: [PASSWORD]

---

### Screencast Walkthrough

**Please include a video showing the following steps:**

1. Log in to the app using the provided credentials.
2. Navigate to the dashboard.
3. Add a new inbox by selecting Instagram as the channel.
4. Authenticate an Instagram Business account.
5. Show that the platform uses the `instagram_business_basic` permission to display:
   - Instagram username
   - User ID
   - Profile picture
6. Simulate receiving a message and show how this metadata appears in the inbox.

---

## `instagram_business_manage_messages`

### Why you are requesting this permission

[BRAND_NAME] is a customer support platform that allows businesses to manage conversations across multiple messaging platforms — including Instagram, WhatsApp, Facebook, and more — through a unified inbox.

This permission allows the platform to manage and respond to Instagram messages on behalf of the connected Instagram Business account.

It is used to:

- Receive messages via the Instagram webhook.
- Display conversations in the agent inbox.
- Allow agents to reply from within the platform.
- Keep conversations synced in real time.

The webhook setup works by configuring a URL endpoint on the platform to receive incoming messages from Instagram. When a message is sent to the connected Instagram Business account, it triggers a webhook event that delivers the message to the specified endpoint. The backend processes this message, stores it in the database, and updates the agent's inbox in real time.

Without this permission, users would not be able to communicate with their Instagram audience via the support platform.

- **App URL:** [DASHBOARD_URL]
- **Test Account:**
  - Email: [EMAIL]
  - Password: [PASSWORD]

---

### Screencast Walkthrough

**Please include a video showing the following steps:**

1. Log in to the dashboard.
2. Connect an Instagram Business account as described in the previous section.
3. From another Instagram user account, send a direct message to the connected business.
4. Show that the message appears in the inbox UI.
5. Reply from the inbox.
6. Switch back to Instagram to show that the user received the reply.
7. Demonstrate real-time syncing.

---

## `human_agent`

### Why you are requesting this permission

[BRAND_NAME] is a customer support platform that allows businesses to manage conversations across multiple messaging platforms — including Instagram, WhatsApp, Facebook, and more — through a unified inbox.

We are requesting the Human Agent permission to allow support agents to follow up on customer conversations beyond the 24-hour window, especially when customers reach out after business hours or over the weekend.

Example use case:

- A customer sends a message Friday night.
- The business is closed on weekends.
- On Monday morning, the agent cannot reply because the 24h window has expired.
- With the Human Agent tag, the agent can now follow up on Monday morning and resolve the query.

This enhances customer experience and ensures critical messages are not left unresolved due to timing limitations.

This permission is essential to allow human agents to continue conversations in a natural, respectful, and supportive way without forcing customers to message again just to reopen the window.

- **App URL:** [DASHBOARD_URL]
- **Test Account:**
  - Email: [EMAIL]
  - Password: [PASSWORD]

---

### Screencast Walkthrough

**Please include a video showing the following steps:**

1. Log in to the platform.
2. Open an existing Instagram conversation that is **older than 24 hours**.
3. Attempt to respond to the message and explain how current Meta policy restricts the reply.
4. Explain why a response is still needed — for example, the support agent was unavailable during a weekend or the issue required escalation.
5. Describe how the `human_agent` tag will be used to allow the response within the extended 7-day window.

## Notes

- Do not include Instagram account credentials.
- Only share test dashboard credentials (non-super admin access recommended).
- Ensure your screencast clearly shows the platform UI and relevant workflows.
- Keep your permission usage aligned with Meta’s policy for message tags and user privacy.
- Speak aloud or add captions in your video for reviewer clarity.
- Video should be as much as detailed as possible.

> 💡 **Tip:** Use a screen recorder that captures mouse interactions, popups, and browser activity to clearly demonstrate authentication flows and inbox interactions.
