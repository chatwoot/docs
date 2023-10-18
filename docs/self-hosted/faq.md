---
sidebar_label: 'FAQ'
title: 'Frequently asked questions'
---

This document is a place to search for frequently asked questions in the Chatwoot community about the processes, support and best practices.


## How to get support?

The chatwoot team provides support over the following channels. Please choose the appropriate medium based on the type of your query and resolution expectations.

**Business Enquiries**: Questions related to the pricing and commercial partnerships.

**Developer Support**: Questions related to Self-hosting Chatwoot, Extending/Contributing to Chatwoot and leveraging Chatwoot APIs

**Product Support**: Bug Reports, Feature Requests and Support related to Chatwoot Cloud Version.

**Premium Support**: Available for customers having a commerical contract with Chatwoot or subscribers of a paid plan. This includes both Chatwoot Cloud Customers and Self-hosted Customers.


|  Channel Type   |  Response Expectations | Query Types
|----------|-------------|------|
| Chat Wiget |   Real-time responses based on online agent availability. Cloud customers can use the in-product Support option for priority resolutions. <br />  Email follow-ups in 2 Business Days or per SLA  |  Business Enquiries, Premium Support |
| [Email](mailto:hello@chatwoot.com)   | Responses in 2 Business Days or as per SLA |  Business Enquiries, Premium Support |
| [Github](https://github.com/chatwoot/chatwoot) |  Responses in 5 Business Days or per SLA |  Developer Support, Product Support, Premium Support|
| [Discord](https://discord.gg/cJXdrwS) |  Community Support Based on availability. Contributors support based on availability  | Developer Support, Product Support, Premium Support |

> Notes: The Chatwoot team tries to resolve queries in public forums. So please avoid DMing, the contributors unless sensitive information is involved.

- Chatwoot team doesn't provide one-time installation services at the moment due to limited resources.
- Chatwoot team doesn't provide bug fixes and support for older/modified versions of the software. Therefore, please ensure that you have the latest version of software running when reporting bugs.


## How to promote Chatwoot Services?

We encourage the community to build and promote Chatwoot related services. You can use the following Channels for that.

1. [General (Github Discussions)](https://github.com/chatwoot/chatwoot/discussions/categories/general): Use the Channel to advertise Chatwoot related Hiring Posts and Opportunities.
2. [Show and tell - (GitHub Discussions)](https://github.com/chatwoot/chatwoot/discussions/categories/show-and-tell): Use the Channel to showcase a Chatwoot related service / Custom Integrations that you have built. Examples include Chatwoot Hosting services, Services built on top of Chatwoot etc
3. [Discord Channels](https://discord.gg/cJXdrwS) : Use appropriate discord Channels like `#intro` , `#general`.

> Note: spamming channels with repetitive messages, Hijacking threads with unrelated promotional messages isn't allowed and will be handled according to the [Code of Conduct](/contributing-guide/code-of-conduct#3-temporary-ban).


## How can I customise the Chatwoot Branding ?

In `Community Edition` of Chatwoot, you can customise the branding by modifying the source code.
In `Enterprise Edition` of Chatwoot, Custom Branding is available as a premium feature as a part of the paid plans.

## Can I run a SaaS using Chatwoot?

Ref: [Are there any restrictions in using Chatwoot?](#are-there-any-restrictions-on-using-chatwoot)

## Are there any restrictions on using Chatwoot?

When using the `Enterprise` edition of Chatwoot, you must adhere to the [Enterprise License](https://github.com/chatwoot/chatwoot/blob/develop/enterprise/LICENSE). Additionally, distributing or selling the `enterprise` edition of Chatwoot requires a valid Chatwoot Enterprise subscription with the correct number of user seats.

The Community edition of Chatwoot comes under an [MIT License](https://github.com/chatwoot/chatwoot/blob/develop/LICENSE), which lets you use the software without any restrictions. This also allows you to build and resell derivatives of Chatwoot Community edition. For the Community edition, the team trusts the users to use the software fairly and encourages the following use cases:

- Leveraging Chatwoot as a Customer Support/Data Platform in your organization.
- Building Custom Conversational interfaces over the Chatwoot Platform.
- Leveraging Chatwoot to add conversational capabilities to your existing software.
- Enhancing Community Edition software to cater to specific business niches.

Chatwoot team doesn't encourage the following cases:

- Leveraging the software for any usage that isn't permitted by applicable law.
- Use cases that directly compete with Chatwoot Business offerings. <br/>
  examples: clones of Chatwoot Cloud (SaaS), Rebranding Services, etc


## How to debug SMTP Email errors in Chatwoot?

Suppose you run into issues with the agent mailers ( account confirmation, password reset, etc.) and email Channels in Chatwoot. Then, you can go through the following steps to debug your SMTP configurations.

### Step 1: Check your SMTP configuration
Ensure that the intended config matches what is configured in the system. If there are discrepancies, you should double-check your environment variables.

#### Viewing the SMTP config for the Installation
Run the following command from the [Rails Console](/docs/self-hosted/monitoring/super-admin-sidekiq/).
```
ActionMailer::Base.smtp_settings
```

#### Viewing the SMTP config for an Inbox
Run the following command from the [Rails Console](/docs/self-hosted/monitoring/super-admin-sidekiq/).
```
# replace `inbox_id` with your Inbox Id
Inbox.find(inbox_id).channel
```

### Step 2: Validate your SMTP config by sending an Email
If you find the config is as intended, Try sending an email from the Rails Console using your config.

Run the following script from the [Rails Console](/docs/self-hosted/monitoring/super-admin-sidekiq/).
```

# Fill values for appropriate settings
# Remove the keys which aren't relevant to your use case
smtp_settings = {
  address: '',
  port: '',
  user_name: '',
  password: '',
  domain: '',
  tls: '',
  enable_starttls_auto: '',
  openssl_verify_mode: '',
  authentication: '',
}

mailer = ActionMailer::Base.new
# check settings:
mailer.delivery_method = :smtp
mailer.smtp_settings = smtp_settings

# replace with your values for the mail
mailer.mail(from: 'sender@example.com', to: 'recipient@example.com', subject: 'test', body: "Hello, you've got mail!").deliver

```
If the configuration is correct, You should receive the email in the recipient's Inbox. In other cases, Fix the config as per the returned error and reconfigure the values in Chatwoot Environment variables with the correct values. 

> Note: If you are still facing errors, Please check your Sidekiq worker logs or [Sidekiq UI](/docs/self-hosted/monitoring/super-admin-sidekiq/) for any errors. 
