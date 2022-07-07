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

You can generate `SECRET_KEY_BASE` using `rake secret` command from the project root folder.

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

``` bash
SMTP_ADDRESS=
SMTP_USERNAME=
SMTP_PASSWORD=
SMTP_TLS=
SMTP_SSL=
```

#### Amazon SES
```bash
SMTP_ADDRESS=email-smtp.<region>.amazonaws.com
SMTP_AUTHENTICATION=plain
SMTP_ENABLE_STARTTLS_AUTO=true
SMTP_USERNAME=<Your SMTP username>
SMTP_PASSWORD=<Your SMTP password>
```

#### SendGrid
```bash
SMTP_ADDRESS=smtp.sendgrid.net
SMTP_AUTHENTICATION=plain
SMTP_DOMAIN=<your verified domain>
SMTP_ENABLE_STARTTLS_AUTO=true
SMTP_PORT=587
SMTP_USERNAME=apikey
SMTP_PASSWORD=<your Sendgrid API key>
```

#### MailGun
```bash
SMTP_ADDRESS=smtp.mailgun.org
SMTP_AUTHENTICATION=plain
SMTP_DOMAIN=<Your domain, this has to be verified in Mailgun>
SMTP_ENABLE_STARTTLS_AUTO=true
SMTP_PORT=587
SMTP_USERNAME=<Your SMTP username, view under Domains tab>
SMTP_PASSWORD=<Your SMTP password, view under Domains tab>
```


#### Mandrill
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

When `local` storage is used the files are stored under `public/uploads` directory in the chatwoot root folder.

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
