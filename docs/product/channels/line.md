---
sidebar_label: "Line"
title: "How to create a Line channel?"
---

**Step 1**. Go to "Settings" page by clicking the settings icon in the left sidebar.

![dashboard](images/line/dashboard.png)

**Step 2**. Select "Inboxes" from left side panel and Click on "Add Inbox" button.

![inbox_settings](images/line/inbox_settings.png)

**Step 3**. Click on "Line" icon.

![list_of_channels](images/line/list_of_channels.png)

**Step 4**. Go to [Line Developer Console](https://developers.line.biz/console) and create a line account.

**Step 5**. Create a "Provider" in developer console.

**Step 6**. Create a new "Messaging API" channel(Bot) under the provider.

**Step 7**. Fill up below fields from line developer console( Messaging API Channel ) and click on "Create LINE Channel".

1. Channel Name
2. LINE Channel ID
3. LINE Channel Secret
4. LINE Channel Token

![create_line_channel](images/line/create_line_channel.png)

**Step 8**. "Add agents" to your Line inbox.

![add_agents](images/telegram/add_agents.png)

**Step 9**. Hooray! You have successfully created a Line inbox.

![finish_inbox](images/line/finish_inbox.png)

**Step 10**. Go to "Messaging API" channel in developer console and configure webhook.

1. Verify Chatwoot webhook URL
2. Enable "Use webhook"

![configure_webhook](images/line/configure_webhook.png)

**Step 11**. Send a message to the Line bot.

**Step 12**. Check Chatwoot Line inbox for the new message.

![line_message](images/line/line_message.png)
