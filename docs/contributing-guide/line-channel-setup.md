---
title: "Line integration"
---

To work with the Line integration on your local machine:

1. Start a Ngrok server listening on port `3000` or the port you will be running the Chatwoot installation.
2. Update the .env variable `FRONTEND_URL` in Chatwoot with the `https` version of the Ngrok URL.
3. Start the Chatwoot server and create a new Line channel with the below values obtained from [Line Developer Console](https://developers.line.biz/console) under the **Messaging API** channel.

   - Channel Name
   - LINE Channel ID
   - LINE Channel Secret
   - LINE Channel Token

After creating the channel, Chatwoot will provide a webhook URL for the channel. You can configure this webhook URL in the [Line Developer Console](https://developers.line.biz/console) under the **Messaging API** channel.

If the webhook is registered correctly with Line, your Ngork server will receive events for new Line messages, and new conversations will be created in Chatwoot.
