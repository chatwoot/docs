---
sidebar_label: "Slack"
title: "Getting started with slack in Chatwoot"
---

If your account/project is using Slack as medium of communication, you can integrate slack with chatwoot inbox to get all the inbox conversation to your slack **customer-conversations** channel.

To integrate slack with chatwoot follow the steps mentioned below.

**Step 1** Go to chatwoot app click on integration link in the setting sidebar.
![slack_integration](./images/slack_integration.png)

**Step 2** A screen opens up where you can directly give the workspace Slack URL to connect to your Slack account.
![slack_connection](./images/slack_connection.png)

**Step 3** After login to your slack workspace, The screen will pop up to give permission to chatwoot app.
![slack_permission](./images/slack_permission.png)

**Step 4** After you allow the access you will be able to see the chatwoot app in your workspace app section. And when you receive any message to chatwoot inbox you will be able to see the **customer-conversations** channel in your workspace.
![slack_app](./images/slack_app.png)

**Step 5** Check your message under **customer-conversations** channel.

### FAQ

Q: We have integrated slack correctly, but we are not able to see the channel.

A: Press `cmd+k` key and type **customer-conversations** channel name and verify if it's got created. Your message from chatwoot inbox lies under this channel.


Q. I am replying to message but it's not showing up in the chatwoot inbox.

A: When you reply to the message make sure you reply under the same thread. Each thread represents the separate conversation, so to show your reply to the same message you should reply under the thread. We use thread id to verify the separate conversation.
