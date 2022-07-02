---
title: "Telegram integration"
---

To work with the Telegram integration on your local machine:

1. Start a Ngrok server listening on port `3000` or the port you will be running the Chatwoot installation.
2. Update the .env variable `FRONTEND_URL` in Chatwoot with the `https` version of the Ngrok URL.
3. Start the Chatwoot server and create a new Telegram channel with the token obtained from the Telegram botfather.

When creating the channel, Chatwoot should have registered a webhook callback URL in Telegram for your bot. To verify if the URL registration was successfull, call the following API:

```
GET https://api.telegram.org/bot{your_bot_token}/getWebhookInfo
```

If the webhook is registered correctly with Telegram, your Ngork server will receive events for new Telegram messages, and new conversations will be created in Chatwoot.
