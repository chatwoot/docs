---
sidebar_label: "Twilio Whatsapp/SMS"
title: 'How to create a Whatsapp/SMS channel with Twilio?'
---

**Step 1**. Click on "Add Inbox" button from Settings > Inboxes page.

![sms_create](./images/twilio/inbox_create.png)

**Step 2**. Click on "Twilio" icon.

![list_of_channels](./images/twilio/list_of_channels.png)

**Step 3**. Configure the inbox.

These are the inputs required to create this channel:

<div class="table table-striped">

| Input        | Description                                                                                                           | Where can I find it                                                                            |
| ------------ | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Channel Name | This is the name inbox, this will be used across the application.                                                     | N/A                                                                                            |
| Channel Type | Select SMS, if you are integrating an SMS channel. Select Whatsapp, if you have a verified Whatsapp number in Twilio. | N/A                                                                                            |
| Phone Number | This is the number you will be using to communicate with your customer. This has to be verified in Twilio.            | Enter your number as in the Twilio Dashboard                                                   |
| Account SID  | Account SID in Twilio Console                                                                                         | Login to Twilio Console. Here, you would be able to see the Account SID and the Auth Token     |
| Auth Token   | Auth token for the account                                                                                            | Login to the Twilio Console. Here, you would be able to see the Account SID and the Auth Token |

</div>

![create_twilio](./images/twilio/create_twilio_inbox.png)

**Step 4**. "Add agents" to your inbox.

![add_agents](./images/twilio/add_agents.png)

**Step 6**. Hooray! You have successfully created a whatsapp/sms inbox.

![finish_inbox](./images/twilio/finish_inbox.png)

If it is an SMS Channel, then you don't need to do anything else. You will start receiving the messages in the dashboard whenever a customer sends you one.

If you are connecting a **Whatsapp** channel, you have to configure a callback URL in the Twilio inbox:

- Login to your Twilio Console.
- Go to `Programmable SMS > Whatsapp > Senders`.
- You will be able to see your phone number. Click on it, it will display a field like the one shown below.

![twilio_console](./images/twilio/twilio_console.png)

- Provide `https://app.chatwoot.com/twilio/callback` as the value for `WHEN A MESSAGE COMES IN` input.

**Step 7**. If you want to update the agents who have access to the inbox, you can go to Settings > Inboxes.

![inbox_settings](./images/twilio/inbox_settings.png)


## Configuring Chatwoot with Twilio Studio 

If you are using twilio studio for a custom conversation flow, Updating the webhook url directly will break your exising Integration. 

For such cases you can follow the given steps. 

1. Identify the step in your flow where you want the `agent handoff` to happen.
2. Add a `make http request widget` as shown below with the give values

![twilio_studio](./images/twilio/twilio_studio.png)

**REQUEST METHOD** : POST

**REQUEST URL**: https://app.chatwoot.com/twilio/callback

**CONTENT TYPE**: Application/JSON

**REQUEST BODY**: `{{trigger.message | to_json }}` ( make changes as required based on your flow variables)

> HTTP request widget will forward the message body to Chatwoot. This will create a conversation in Chatwoot from where the agent can reply. 

3. Make sure that your flow can handle the user reponses to Agent Replies. 
