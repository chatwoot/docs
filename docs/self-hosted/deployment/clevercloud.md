---
sidebar_label: "Clever Cloud"
title: "Deploy Chatwoot to Clever Cloud"
---

Clever Cloud is a PaaS platform where you can deploy your applications with ease. To setup Chatwoot on Clever Cloud, you can follow the steps described below.

**Note:** This is a community contributed installation setup. This will only have community support for any issues in future.


### 1. Create CleverCloud application

- Login to Clever Cloud dashboard
- Click on create an application
- Select your deployment type (> 2GB recommended)
- Provide an app name and select the zone

### 2. Select addons

Chatwoot requires PostgreSQL and Redis to function properly. Select Postgres and Redis from CleverCloud addons.

- Copy connection URI from Postgres Addon and set `DATABASE_URL` environment variable
- Make sure you have set REDIS_URL

### 3. Setup Clever cloud origin

- Clone Chatwoot project from Github

```
git clone git@github.com:chatwoot/chatwoot.git
```

- Set Clever Cloud origin
```
git remote add clever git+ssh://git@<id>.clever-cloud.com/<app-name>.git
```

### 4. Setup build hooks

To install the dependencies, you have to setup builds hooks. Set the following in the environment variables of the application.

```
CC_POST_BUILD_HOOK="RAILS_ENV=production rails assets:precompile"
CC_PRE_BUILD_HOOK="yarn install"
CC_PRE_RUN_HOOK="rake db:chatwoot_prepare"
```

### 5. Push the latest changes

Push the latest code from your local machine to Clever Cloud.

```
git push clever master
```

Voila! After the deployment, you would be able to access the application.

**Notes: **

Make sure you have the following environment variables configured in the application.

```
CC_POST_BUILD_HOOK="RAILS_ENV=production rails assets:precompile"
CC_PRE_BUILD_HOOK="yarn install"
CC_PRE_RUN_HOOK="rake db:chatwoot_prepare"
DATABASE_URL="<postgres-addon-url>"
FRONTEND_URL="<clever-cloud-app-url>"
PORT="8080"
RAILS_ENV="production"
REDIS_URL="<redis-addon-url>"
SECRET_KEY_BASE="<long-secret-key>"
```
