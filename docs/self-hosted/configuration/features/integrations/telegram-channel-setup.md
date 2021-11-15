---
sidebar_label: "Telegram App"
title: "Telegram App Setup on your local machine"
---

Please follow the steps if you are trying to work with the Telegram integration on your local machine. 

- Start a Ngrok server listening at port `3000` or whichever port you will be running Chatwoot installation.
- Update the .env variable FRONTEND_URL in chatwoot with the `https` version of the Ngrok URL.
- Start the Chatwoot server and create a new telegram channel with the token obtained from telegram botfather.

While creating the channel, Chatwoot should have registered a webhook callback url in Telegram for your Bot. You can verify whether this url registration was done successfully by calling the API.

```
GET https://api.telegram.org/bot{my_bot_token}/getWebhookInfo
```

If the webhook is registered correctly with Telegram, your Ngork server should receive events for new Telegram messages, and new conversations will be created in Chatwoot.
