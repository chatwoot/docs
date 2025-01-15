---
sidebar_label: "Line App"
title: "Setup Line app integration on your local machine"
---

Please follow the steps if you are trying to work with the Line integration on your local machine.

- Start a Ngrok server listening at port `3000` or the port you will be running the Chatwoot installation.
- Update the .env variable FRONTEND_URL in Chatwoot with the `https` version of the Ngrok URL.
- Start the Chatwoot server and create a new Line channel with the below values obtained from [Line Developer Console](https://developers.line.biz/console) under the "Messaging API" channel.

1. Channel Name
2. LINE Channel ID
3. LINE Channel Secret
4. LINE Channel Token

After creating the channel, Chatwoot will provide a webhook URL for the channel. You can configure this webhook url in the [Line Developer Console](https://developers.line.biz/console) under the "Messaging API" channel.

If the webhook is registered correctly with Line, your Ngork server should receive events for new Line messages, and new conversations will be created in Chatwoot.
