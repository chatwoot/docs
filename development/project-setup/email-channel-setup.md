---
path: "/docs/self-hosted/email-setup"
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

2. Now head over to inboxes page and create an email inbox with the support email as care@your-domain.com
3. Now create a forward rule in your care@your-domain.com inbox to forward emails to the address obtained at inbox creation step
4. You should be able to receive emails in your newly created email inbox in chatwoot. 

#### Sendgrid

You can send out emails only from a verified email address in SendGrid. For sending emails from wildcard domain, do verification at domain level instead of individual email.   
