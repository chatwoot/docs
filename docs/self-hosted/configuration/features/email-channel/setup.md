---
sidebar_label: "Channel Setup"
title: "Setting up Email Channel"
---

### Configure Email Channel

*Email channels require [conversation continuity configured](/docs/self-hosted/configuration/features/email-channel/conversation-continuity)*

1. Enable `channel_email` (Login to rails console and execute the following)

```
account = Account.find(1)
account.enabled_features // This would list enabled features.
account.enable_features('channel_email')
account.save!
```

2. Now head over to inboxes page and create an email inbox with the support email as care@your-domain.com
![mail-channel-step1](./images/mail-channel-step1.png)
3. Now Add Agents who can have access to the email channel box.
4. Now you will get the email channel box address in the last step.
![mail-channel-step2](./images/mail-channel-step2.png)
5. Now create a forward rule in your care@your-domain.com inbox to forward emails to the address obtained at inbox creation step.
![set-forwarder-email](./images/set-forwarder-email.png)
6. You should be able to receive emails in your newly created email inbox in chatwoot.
![mail-channel-box](./images/mail-channel-box.png)

#### Sendgrid

You can send out emails only from a verified email address in SendGrid. For sending emails from wildcard domain, do verification at domain level instead of individual email.

#### Testing On Local

You can visit `http://localhost:3000/rails/conductor/action_mailbox/inbound_emails/new` to send inbound mails from local to chatwoot inbox.
