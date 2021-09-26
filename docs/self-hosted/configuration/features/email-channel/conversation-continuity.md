---
sidebar_label: "Conversation Continuity"
title: "Configure Conversation Continuity with Email"
---

### Conversation continuity

![101382999-9b0abf00-38de-11eb-845d-1bb1f52306df@2x](https://user-images.githubusercontent.com/73185/109548415-a1ca5c00-7af2-11eb-9b1d-fd636cf5189c.png)

### Configuring inbound reply emails

*Conversation Continuity requires your chatwoot installation to have a [cloud storage configured](/docs/self-hosted/deployment/storage/supported-providers)*

There are a couple of email infrastructure service providers to handle the incoming emails that we support at the moment. They are
Sendgrid, Mandrill, Mailgun, Exim, Postfix, Qmail and Postmark.

Step 1 : We have to set the inbound email service used as an environment variable.

```bash
# Set this to appropriate ingress service for which the options are :
# "relay" for Exim, Postfix, Qmail
# "mailgun" for Mailgun
# "mandrill" for Mandrill
# "postmark" for Postmark
# "sendgrid" for Sendgrid
RAILS_INBOUND_EMAIL_SERVICE=relay
```
If you wish to use the same local relaying server (for example postfix) to send outbound mail as you are using to relay inbound messages and you opt not to use an external authentication mechanism like SASL which may be the case if the server is handling it own emails only. The upstream SMTP platform Action Mailer attempts to use a default authentication method if the configuration options SMTP_AUTHENTICATION, SMTP_USERNAME and SMTP_PASSWORD are present in your .env file. To disable this behaviour either comment out or delete these lines from your configuration. This will allow you to send outbound messages from the same server without a premium service. Please note many ISP's do not allow email servers to be run from their networks. It is your responsibility to ensure adequate access control preventing yourself becoming an open relay and ensuring your server is able to get past your recipients spam filters for example SPF, DKIM & DMARC dns records.

This configures the ingress service for the app. Now we have to set the password for the ingress service that we use.

```bash
# Use one of the following based on the email ingress service

# Set this if you are using Sendgrid, Exim, Postfix, Qmail or Postmark
RAILS_INBOUND_EMAIL_PASSWORD=
# Set this if you are Mailgun
MAILGUN_INGRESS_API_KEY=
# Set this if you are Mandrill
MANDRILL_INGRESS_API_KEY=
```

#### Mailgun
If you are using Mailgun as your email service, in the Mailgun dashboard configure it to forward your inbound emails to `https://example.com/rails/action_mailbox/mailgun/inbound_emails/mime` if `example.com` is where you have hosted the application.

#### Sendgrid

Ensure to set up the proper MX records for `your-domain.com` pointed towards Sendgrid

Configure SendGrid Inbound Parse to forward inbound emails to forward your inbound emails to `/rails/action_mailbox/sendgrid/inbound_emails` with the username `actionmailbox` and the password you previously generated. If the deployed application was hosted at `example.com`, you can configure the following URL as the forward route.

```bash
https://actionmailbox:PASSWORD@example.com/rails/action_mailbox/sendgrid/inbound_emails
```

When configuring your SendGrid Inbound Parse webhook, be sure to check the box labeled “Post the raw, full MIME message.” Action Mailbox needs the raw MIME message to work.

#### Mandrill
If you are configuring Mandrill as your email service, configure Mandrill to route your inbound emails to `https://example.com/rails/action_mailbox/mandrill/inbound_emails` if `example.com` is where you have hosted the application.

If you want to know more about configuring other services visit [Action Mailbox Basics](https://edgeguides.rubyonrails.org/action_mailbox_basics.html#configuration)

### Configure inbound email domain environment variable

Add the following environment variable with the value `your-domain.com`, where `your-domain.com` is the domain for which you set up MX records in the previous step.

```bash
MAILER_INBOUND_EMAIL_DOMAIN=
```


After finishing the set up, the mail sent from Chatwoot will have a `replyto:` in the following format `reply+<random-hex>@<your-domain.com>` and reply to those would get appended to your conversation.
