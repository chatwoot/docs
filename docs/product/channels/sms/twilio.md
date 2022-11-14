---
sidebar_label: "Twilio"
title: 'Setup your SMS channel with Twilio'
---

**Step 1**. Open your Chatwoot dashboard. Go to Settings → Inboxes → Add Inbox.

![dashboard](../images/whatsapp/adding-inbox-in-chatwoot.png)

**Step 2**. Click on the "SMS" icon.

![inbox_settings](../images/sms/select_sms.png)

**Step 3**. Choose "Twilio" as the API provider and configure the inbox. Fill in the appropriate details. 

![create_twilio](../images/sms/sms-inbox-configuration-screen-chatwoot.png)

These are the inputs required to create this channel:

<div class="table table-striped">

| Input        | Description                                                                                                           | Where can I find it                                                                            |
| ------------ | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Channel Name | This is the name inbox, this will be used across the application.                                                     | N/A                                                                                            | 
| Phone Number | This is the number you will be using to communicate with your customer. This has to be verified in Twilio.            | Enter your number as in the Twilio Dashboard                                                   |
| Account SID  | Account SID in Twilio Console                                                                                         | Login to Twilio Console. Here, you would be able to see the Account SID and the Auth Token     |
| Auth Token   | Auth token for the account                                                                                            | Login to the Twilio Console. Here, you would be able to see the Account SID and the Auth Token |

</div>

Click `Create Twilio Channel` after filling in the information.


**Step 4**. "Add agents" to your inbox.

![add_agents](../images/sms/add-agents-to-sms-channel.png)

Hooray! You have successfully created an SMS inbox.

![finish_inbox](../images/sms/sms-inbox-is-ready-message-in-chatwoot.png)

You will start receiving the messages in your Chatwoot dashboard.

## Configuring Chatwoot with Twilio Studio 

If you are using Twilio Studio for a custom conversation flow, updating the webhook URL directly will break your existing integration.

For such cases, you can [follow the steps given here](https://www.chatwoot.com/docs/product/channels/whatsapp/twilio#configuring-chatwoot-with-twilio-studio).
