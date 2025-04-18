---
sidebar_label: "Telegram App"
title: "Setup Telegram app integration on your local machine"
---

To work with the Telegram integration on your local machine, do the following:

- Start a Ngrok server listening at port `3000` or the port you will be running the Chatwoot installation.
- Update the .env variable FRONTEND_URL in Chatwoot with the `https` version of the Ngrok URL.
- Start the Chatwoot server and create a new Telegram channel with the token obtained from Telegram botfather.

While creating the channel, Chatwoot should have registered a webhook callback URL in Telegram for your Bot. You can verify whether this url registration was done successfully by calling the API.

```
GET https://api.telegram.org/bot{your_bot_token}/getWebhookInfo
```

If the webhook is registered correctly with Telegram, your Ngork server should receive events for new Telegram messages, and new conversations will be created in Chatwoot.
