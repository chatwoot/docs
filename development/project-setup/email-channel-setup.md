---
path: "/docs/email-setup"
title: "Setting up Email Channel"
---

### Configuring Email Channel

*Email channels require [conversation continuity configured](/docs/conversation-continuity)*

1. Enable `channel_email` (Login to rails console and execute the following)

```
account = Account.find(1)
account.enabled_features // This would list enabled features.
account.enable_features('channel_email')
account.save!
```

2. Set up a support email.

```
account = Account.find(1)
account.support_email = 'care@your-domain.com'
account.save!
```

3. Now head over to inboxes page and create an email inbox with the support email as care@your-domain.com
4. Send an email from your personal email to care@your-domain.com You should be able to receive that email in your newly created email inbox as new conversation. Replying to that email should send out the email as a reply to your personal email


#### Sendgrid

You can send out emails only from a verified email address in SendGrid. care@your-domain.com is a verified FROM ADDRESS in this SendGrid account. 
