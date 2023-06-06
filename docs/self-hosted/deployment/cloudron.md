---
sidebar_label: "Cloudron"
title: "Cloudron Chatwoot deployment guide"
help_discord: "https://discord.gg/jypY57m"
help_github_discussions: "https://github.com/chatwoot/chatwoot/discussions/categories/self-hosted"
---

## Cloudron Overview

[Cloudron](https://cloudron.io) is a platform that makes it easy to install, manage and secure web apps on your server. Chatwoot is now available as a 1-click app in the Cloudron app store and the installation is blazing fast.

**Note:** This is a community contributed installation setup. This will only have community support for any issues in future.


## Setup Chatwoot using Cloudron

### 1. Install Cloudron on your server

Finish your Cloudron installation by following the instructions at [Get Cloudron](https://www.cloudron.io/get.html).

### 2. Install Chatwoot

Once Cloudron installation is complete, login to your cloudron web portal and click on the appstore icon. Search for `Chatwoot` and click install. That's it. Chatwoot should be up and running in a minute or two.

Direct link to the cloudron app store listing --> https://www.cloudron.io/store/com.chatwoot.cloudronapp.html

### 3. Finish the setup

Navigate to your chatwoot domain and complete the onboarding setup.

### 4. Configure environment variables

Cloudron will take care of Postgres and Redis installation, along with the app and worker processes. We would advise you to replace the Database/Redis services with managed/standalone servers once you start scaling.

Also, ensure to set the appropriate environment variables for email, Object Store service etc. using our [Environment variables guide](/docs/self-hosted/configuration/environment-variables). 

Custom environment variables can be set in `/app/data/env` using the Cloudron File manager. Be sure to reboot the app after making any changes.

## Upgrading Chatwoot installation

Chatwoot follows a monthly release pattern with a new release every 15th of the month. Use the built in [Cloudron app updates](https://docs.cloudron.io/updates/) to stay on the latest version. Read about the changelog [here](https://www.chatwoot.com/changelog/).
