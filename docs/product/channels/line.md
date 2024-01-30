---
sidebar_label: "Line"
title: "How to create a Line channel?"
---

**Step 1**. Go to Settings → Inboxes → “Add Inbox”.

![add-inbox.png](images/line/add-inbox.png)

**Step 2**. Click on "Line" icon.

![list_of_channels](images/line/list_of_channels.png)

**Step 3**. Go to [Line Developer Console](https://developers.line.biz/console) and create a line account.

**Step 4**. Create a "Provider" in developer console.

![line_provider](images/line/line_provider.png)


**Step 5**. Create a new "Messaging API" channel(Bot) under the provider channels.

![line_messaging_channel](images/line/line_messaging_channel.png)

**Step 6**. Fill up below fields from line developer console( Messaging API Channel ).

1. Channel Name
2. LINE Channel ID
3. LINE Channel Secret
4. LINE Channel Token

LINE Channel ID

![line_channel_id](images/line/line_channel_id.png)

LINE Channel Secret

![line_channel_secret](images/line/line_channel_secret.png)


LINE Channel Token

![line_channel_token](images/line/line_channel_token.png)


 Click on "Create LINE Channel".

![create_line_channel](images/line/create_line_channel.png)

**Step 8**. "Add agents" to your Line inbox.

![add_agents](images/telegram/add_agents.png)

**Step 9**. Hooray! You have successfully created a Line inbox. Copy the Chatwoot Webhook URL.

![finish_inbox](images/line/finish_inbox.png)

**Step 10**. Go to "Messaging API" channel in developer console and configure webhook.

1. Verify Chatwoot webhook URL
2. Enable "Use webhook"

![configure_webhook](images/line/configure_webhook.png)

**Step 11**. Send a message to the Line bot.

**Step 12**. Check Chatwoot Line inbox for the new message.