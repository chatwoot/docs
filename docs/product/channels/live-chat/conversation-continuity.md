---
sidebar_label: "Conversation Continuity"
title: 'Conversation Continuity through Email'
---

Your customers can continue their chat conversations with your agents via email threads. This may be required under the following circumstances.

- No agents are available and the customer leaves a message in the chat.
- The customer leaves the chat before the agent replies.

For this to work, the contact should have an email address associated with it in the Chatwoot CRM.

## Obtaining email address of contacts

You can prompt/update customer emails into chatwoot through the following ways.

### 1.via Chatwoot SDK

If customer email is already known, you can supply it into chatwoot via the `setUser` method in our [SDK](/product/channels/live-chat/sdk/setup)

### 2.via PreChat Form

If you enable a mandatory pre-chat form, the conversation starts with a screen as shown below: 

<img alt="chatwoot-prechat-form" src={require('./images/conversation-continuity/chatwoot-prechat-form.png').default} class="mw-25" />

You can find more details about configuring pre-chat form in this [guide](user-guide/features/pre-chat-form.md).

### 3.via Email Collect Prompt

When the pre-chat form is disabled and the customer's email is unknown, Chatwoot starts a conversation with an email collect prompt.

<img alt="chatwoot-email-collect" src={require('./images/conversation-continuity/chatwoot-email-collect.png').default} class="mw-25" />

## Conversation Continuity

_Note_: Enable conversation continuity in self-hosted installations with the help of this [guide](/self-hosted/configuration/features/email-channel/conversation-continuity)

As a result, if the customer's email address is updated through any of the options mentioned above and they leave the chat while their agent has replied, the following will occur:

- The customer receives an email thread with a conversation summary. They can reply to that email and continue the conversation.
- The agent receives the customer replies from email in their Chatwoot dashboard, continued over the existing conversation thread.

<img alt="chatwoot-dashboard-email-reply" src={require('./images/conversation-continuity/chatwoot-dashboard-email-reply.png').default} class="mw-50" />

The email icon in the chat bubble indicates that the customer reply arrived via email.
