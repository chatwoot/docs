---
path: "/docs/environment-variables"
title: "Environment Variables"
---

## The .env File

We use the `dotenv-rails` gem to manage the environment variables. There is a file called `env.example` in the root directory of this project with all the environment variables set to empty values. You can set the correct values as per the following options. Once you set the values, you should rename the file to `.env` before you start the server.

## Configure frontend URL (domain)

Provide your chatwoot domain as frontend URL.

```bash
FRONTEND_URL='https://your-chatwoot-domain.tld'
```

## Rails production variables

For production deployment, you have to set the following variables

```bash
RAILS_ENV=production
SECRET_KEY_BASE=replace_with_your_own_secret_string
```

You can generate `SECRET_KEY_BASE` using `rake secret` command from the project root folder. If you dont have rails installed, use `head /dev/urandom | tr -dc A-Za-z0-9 | head -c 63 ; echo ''`.

Note: SECRET_KEY_BASE should be alphanumeric. Avoid special characters or symbols. 

## Database configuration

Postgres can be configured in two ways: via `DATABASE_URL` or setting up independent Postgres variables.

### Configure Postgres

Set the `DATABASE_URL` variable with value as Postgres connection URI to connect to the database.

The URI is of the format

```bash
postgresql://[user[:password]@][netloc][:port][,...][/dbname][?param1=value1&...]
```

Or you can set the following environment variables to configure Postgres. Replace the values here with yours. Skip this
if you have configured `DATABASE_URL`.

```bash
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DATABASE=chatwoot_production
POSTGRES_USERNAME=admin
POSTGRES_PASSWORD=password
```

### Configure Redis

For development, you can use the following URL to connect to Redis. For production, configure your Redis URL.

```bash
REDIS_URL='redis://127.0.0.1:6379'
```

To authenticate Redis connections made by the app server and sidekick, if it's protected by a password, use the following environment variable to set the password.

```bash
REDIS_PASSWORD=
```

## Configure emails

For development, you don't need an email provider. Chatwoot uses the [letter-opener](https://github.com/ryanb/letter_opener) gem to test emails locally

For production use, please configure the following variables.

```bash
# could user either `email@yourdomain.com` or `BrandName <email@yourdomain.com>`
MAILER_SENDER_EMAIL=
```

and based on your SMTP server the following variables

```bash
SMTP_ADDRESS=
SMTP_USERNAME=
SMTP_PASSWORD=
SMTP_TLS=
SMTP_SSL=
```

### Postfix

Follow these steps if you want to use a selfhosted mail server with Chatwoot. This is the default behavior starting from `v2.12.0` and relies on `SMTP_ADDRESS` environment variable not being set.

```
sudo apt install -y postfix
```

Choose internet-site when prompted and enter the domain name you used with Chatwoot setup for `System mail name`.

> **Note: ** By default, all major cloud provider have blocked port 25 used for sending emails as part of their spam combat effects. Please raise a
> support ticket with your cloud provider to enable outbound access on port 25 for this to work. Refer [AWS](https://aws.amazon.com/premiumsupport/knowledge-center/ec2-port-25-throttle),
> [GCP](https://cloud.google.com/compute/docs/tutorials/sending-mail), [Azure](https://learn.microsoft.com/en-us/azure/virtual-network/troubleshoot-outbound-smtp-connectivity) and [DigitalOcean](https://www.digitalocean.com/blog/smtp-restricted-by-default) for more details.

Also please add MX and PTR records for your domain. If your emails are being flagged by `Gmail` and `Outlook`, setup [SPF and DKIM records](https://www.linuxbabe.com/mail-server/setting-up-dkim-and-spf) for your domain as well. This should improve your email reputation.

### Amazon SES

```bash
SMTP_ADDRESS=email-smtp.<region>.amazonaws.com
SMTP_AUTHENTICATION=plain
SMTP_ENABLE_STARTTLS_AUTO=true
SMTP_USERNAME=<Your SMTP username>
SMTP_PASSWORD=<Your SMTP password>
```

### SendGrid

ℹ️ For clarification, the `SMTP_USERNAME` should be set to the literal text apikey—this is not the actual API key. SendGrid uses 'apikey' as the standard username for its services.

```bash
SMTP_ADDRESS=smtp.sendgrid.com
SMTP_AUTHENTICATION=plain
SMTP_DOMAIN=<your verified domain>
SMTP_ENABLE_STARTTLS_AUTO=true
SMTP_PORT=587
SMTP_USERNAME=apikey
SMTP_PASSWORD=<your Sendgrid API key>
```

### MailGun

```bash
SMTP_ADDRESS=smtp.mailgun.org
SMTP_AUTHENTICATION=plain
SMTP_DOMAIN=<Your domain, this has to be verified in Mailgun>
SMTP_ENABLE_STARTTLS_AUTO=true
SMTP_PORT=587
SMTP_USERNAME=<Your SMTP username, view under Domains tab>
SMTP_PASSWORD=<Your SMTP password, view under Domains tab>
```

### Mandrill

If you would like to use Mailchimp to send your emails, use the following environment variables:
Note: Mandrill is the transactional email service for Mailchimp. You need to enable transactional email and login to mandrillapp.com.

```bash
SMTP_ADDRESS=smtp.mandrillapp.com
SMTP_AUTHENTICATION=plain
SMTP_DOMAIN=<Your verified domain in Mailchimp>
SMTP_ENABLE_STARTTLS_AUTO=true
SMTP_PORT=587
SMTP_USERNAME=<Your SMTP username displayed under Settings -> SMTP & API info>
SMTP_PASSWORD=<Any valid API key, create an API key under Settings -> SMTP & API Info>
```

## Configure default language

```bash
DEFAULT_LOCALE='en'
```

## Configure storage

Chatwoot uses [active storage](https://edgeguides.rubyonrails.org/active_storage_overview.html) for storing attachments. The default storage option is the local storage on your server.

But you can change it to use any of the cloud providers like amazon s3, microsoft azure, google gcs etc. Refer [configuring cloud storage](/docs/self-hosted/deployment/storage/supported-providers) for additional environment variables required.

```bash
ACTIVE_STORAGE_SERVICE=local
```

When `local` storage is used the files are stored under `/storage` directory in the chatwoot root folder.

> It is recommended to use a cloud provider for your chatwoot storage to ensure proper backup of the stored attachments and prevent data loss.

## Rails Logging Variables

By default, Chatwoot will capture `info` level logs in production. Ref [rails docs](https://guides.rubyonrails.org/debugging_rails_applications.html#log-levels) for the additional log-level options.
We will also retain 1 GB of your recent logs and your last shifted log file.
You can fine-tune these settings using the following environment variables

```bash
# possible values: 'debug', 'info', 'warn', 'error', 'fatal' and 'unknown'
LOG_LEVEL=
# value in megabytes
LOG_SIZE= 1024
```

## Configure FB Channel

To use FB Channel, you have to create a Facebook app in the developer portal. You can find more details about creating FB channels [here](https://developers.facebook.com/docs/apps/#register)

```bash
FB_VERIFY_TOKEN=
FB_APP_SECRET=
FB_APP_ID=
```

## Using CDN for asset delivery

With the release v1.8.0, we are enabling CDN support for Chatwoot. If you have a high traffic website, we recommend to setup a CDN for your asset delivery. Read setting up [CloudFront as your CDN](/docs/self-hosted/deployment/performance/cloudfront-cdn) guide.

## Enable new account signup

By default, Chatwoot will not allow users to create an account[multi-tenancy] from the login page. However, if you are setting up a public server, you can enable signup using:

```bash
ENABLE_ACCOUNT_SIGNUP=true
```

## Enable direct upload to storage cloud

By default, Chatwoot will upload the files to the application server and then it will push them to the cloud storage. We have introduced the direct upload functionality so that we can upload the file directly to the cloud storage. This has been built according to rails new direct upload functionality documented [here](https://edgeguides.rubyonrails.org/active_storage_overview.html#direct-uploads). Set below environment variable to true to use the direct upload feature.

Make sure to follow [this guide](https://edgeguides.rubyonrails.org/active_storage_overview.html#cross-origin-resource-sharing-cors-configuration) and set the appropriate CORS configuration on your cloud storage after setting `DIRECT_UPLOADS_ENABLED` to true.

```bash
DIRECT_UPLOADS_ENABLED=true
```

## Google OAuth

To enable Google OAuth in Chatwoot, you need to provide the client ID, client secret, and callback URL. You can find the instructions to generate the details [here](https://support.google.com/cloud/answer/6158849).

Set the `GOOGLE_OAUTH_CLIENT_ID` and `GOOGLE_OAUTH_CLIENT_SECRET` environment variables in your Chatwoot installation using the values you copied from the Google API Console. Set the `GOOGLE_OAUTH_CALLBACK_URL` environment variable to the callback URL you used in the Google API Console. Here's an example of the same

```bash
GOOGLE_OAUTH_CLIENT_ID=369777777777-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com
GOOGLE_OAUTH_CLIENT_SECRET=ABCDEF-GHijklmnoPqrstuvwX-yz1234567
GOOGLE_OAUTH_CALLBACK_URL=https://<your-server-domain>/omniauth/google_oauth2/callback
```

**_The callback URL should comply with the format in the example above. This endpoint cannot be changed at the moment._**

After setting these environment variables, restart your Chatwoot server to apply the changes. Now, users will be able to sign in using their Google accounts.

## LogRocket

To enable LogRocket in Chatwoot, you need to provide the project ID from LogRocket. Here are the steps to follow:

1. Open the LogRocket [website](https://logrocket.com/) and create an account or sign in to your existing account. 
2. After signing in, create a new project in LogRocket by clicking on "Create new project". 
3. Enter a name for your project, and save the project ID.
4. Set the `LOG_ROCKET_PROJECT_ID` environment variable in your `.env` file with the project ID you copied from LogRocket. 

```bash
LOG_ROCKET_PROJECT_ID=abcd12/pineapple-on-pizza
```

After setting this environment variable, restart your Chatwoot server to apply the changes. Now, LogRocket will start capturing user sessions on your Chatwoot installation.
