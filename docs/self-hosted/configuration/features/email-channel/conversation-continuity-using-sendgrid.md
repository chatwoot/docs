---
title: Guide to setting up Conversation Continuity with SendGrid
sidebar_label: Sendgrid
---

This doc will help you set up [Conversation continuity](https://www.chatwoot.com/docs/self-hosted/configuration/features/email-channel/conversation-continuity) with SendGrid.

## Installation

This example is based on a Heroku installation of Chatwoot, and using SendGrid for outgoing email. For more information about installing Chatwoot, go [here](https://www.chatwoot.com/docs/self-hosted#deployment).

## Configuring inbound reply emails

Firstly, we need to tell our Chatwoot instance what mailer we're using to handle incoming emails. We do that with a config var. Go to your Heroku dashboard, click on your Chatwoot instance and click settings.

![Screenshot_95](https://user-images.githubusercontent.com/34171640/128574548-7f2d6521-e79d-47bc-8f8d-6e8d7ca28ae1.png)

Then scroll until you see two blank fields with an add button. There, enter:

```javascript
RAILS_INBOUND_EMAIL_SERVICE=sendgrid
```

![Screenshot_96](https://user-images.githubusercontent.com/34171640/128575349-493efe35-86b9-48ea-84ff-cab7020fd832.jpg)

Next, we're going to set a password. We'll use this later on with SendGrid. For this example, we'll use something simple - like ```potatosalad```, but like all passwords - you should always use a secure mixture of letters, numbers and symbols.

![Screenshot_97](https://user-images.githubusercontent.com/34171640/128575151-9a3fe484-7f1d-43f9-968f-c9841c4d10d1.jpg)

## SendGrid

Now we're going to set up the domain we're using for inbound emails. Because you're most likely going to have an email service like Google Workspace or Microsoft 365 for Business, you should use a subdomain for your inbound emails to Chatwoot.

For example, let's say we used support.example.com as our domain. In this instance, we'd add an MX record pointing support.example.com to ```mx.sendgrid.net``` with a priority of ```10```.

You should wait a while (usually an hour will do). You can use [mxtoolbox.com](https://mxtoolbox.com) to check if the MX record has been propogated. If you see something like this, you can move onto the next step:

![Screenshot_98](https://user-images.githubusercontent.com/34171640/128576943-7f8267b5-d81a-4583-8a40-4941c7700d2b.png)

Now, go to the SendGrid dashboard at [app.sendgrid.com](https://app.sendgrid.com). Select Settings, and Inbound Parse.

![Screenshot_99](https://user-images.githubusercontent.com/34171640/128578295-f62fed61-3401-4a4b-a564-f61f282b8c07.png)

Then click "Add Host & URL".

![Screenshot_100](https://user-images.githubusercontent.com/34171640/128581269-2728e8d4-9c5f-4361-ba4f-3543a0f9a9d8.png)

**Receiving Subdomain** should be the domain you set up the MX record for earlier.

![Screenshot_101](https://user-images.githubusercontent.com/34171640/128581298-1271781f-6985-48b2-9ef9-e210ed5b6ecb.png)

Then add your **Destination URL**. Your Destination URL should look something like this:

```https://actionmailbox:potatosalad@chatwoot.example.com/rails/action_mailbox/sendgrid/inbound_emails```

``potatosalad`` is the password we set earlier, and ``chatwoot.example.com`` is the URL of our Chatwoot instance. Everything else should stay the same.

![Screenshot_102](https://user-images.githubusercontent.com/34171640/128581410-52834258-e826-4c2f-9868-a6c21c9a1ff9.png)

:::important

Make sure to check "POST the raw, full MIME message". In order to function correctly, Action Mailbox needs the raw MIME message.

![Screenshot_103](https://user-images.githubusercontent.com/34171640/128581457-ff5e385c-4d7e-4ebb-8f87-28fd5a243798.png)

:::

## Setting the inbound domain variable in Heroku

Finally, we need to tell our Chatwoot installation what domain we're using with SendGrid.

Your variable should look like this:

```javascript
MAILER_INBOUND_EMAIL_DOMAIN=support.example.com
```

You should change ``support.example.com`` to the domain you used with SendGrid.

![Screenshot_104](https://user-images.githubusercontent.com/34171640/128582096-766a2835-04b9-47f0-8662-c602742e11f9.jpg)

## Next steps

You're done! Next, you should [enable the email channel](https://www.chatwoot.com/docs/self-hosted/configuration/features/email-channel/setup).
