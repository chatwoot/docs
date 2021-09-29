---
sidebar_label: "Telegram App"
title: "Telegram App Setup in Local"
---

If you are trying to work with the telegram integration in your local installation please follow the steps. 

- Start an ngork at port `3000` or which ever port you will be running Chatwoot installation on
- Update the .env variable FRONTEND_URL in chatwoot with the `https` version of the ngrok url 
- Start the Chatwoot server and create a new telegram channel with the token obtained from telegram botfather 

While creating the channel, Chatwoot should have registered a webhook callback url in telegram for your Bot. You can verify whether this url registration was done successfully by calling the API.

```
GET https://api.telegram.org/bot{my_bot_token}/getWebhookInfo
```

If the webhook is registered correctly with telegram, your ngork should be receiving events for new telegram messages and there should be new conversations created in chatwoot