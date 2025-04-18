---
sidebar_label: 'Instagram App Review'
title: 'Instagram App Review'
---

# Instagram App Review Submission Template

This document provides a customizable template for brands requesting advanced Instagram permissions, Use this template to submit an Instagram App Review request and demonstrate how your app uses advanced messaging permissions to provide real-time customer support through Instagram.

**Permissions requested:**

- `instagram_business_basic` – Retrieve account metadata (username, ID, profile picture)
- `instagram_business_manage_messages` – Receive and respond to direct messages
- `human_agent` – Enable human responses beyond the standard 24-hour window


Please replace all placeholder values such as `[BRAND_NAME]`, `[DASHBOARD_URL]`, `[EMAIL]`, and `[PASSWORD]` before submitting.


## `instagram_business_basic` permission

### Why You Are Requesting This Permission

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

## `instagram_business_manage_messages` permission

### Why You Are Requesting This Permission

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

## `human_agent` permission

### Why You Are Requesting This Permission

This permission allows human agents to respond to customer messages **within 7 days** of the last message, instead of the standard 24-hour window.

Meta’s policy dictates that businesses can only respond to messages within a 24-hour window unless the `human_agent` tag is applied. This tag is triggered programmatically when the last message from the customer is older than 24 hours but less than 7 days. This flexibility aligns with real-world customer support scenarios — such as weekends, holidays, or escalated issues requiring additional time.

With the `human_agent` tag, businesses can maintain responsiveness while complying with Meta’s messaging policies.

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

---

## Access Token Scopes Required

Ensure your Instagram Login flow requests the following scopes:

- `instagram_business_basic`
- `instagram_business_manage_messages`

---

## Notes

- ❌ Do not include Instagram account credentials.
- ✅ Only share test dashboard credentials (non-super admin access recommended).
- 🎥 Ensure your screencast clearly shows the platform UI and relevant workflows.
- 📋 Keep your permission usage aligned with Meta’s policy for message tags and user privacy.
- 🧠 Speak aloud or add captions in your video for reviewer clarity.

> 💡 **Tip:** Use a screen recorder that captures mouse interactions, popups, and browser activity to clearly demonstrate authentication flows and inbox interactions.