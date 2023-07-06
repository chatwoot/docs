---
sidebar_label: "How to enable IP identification in Chatwoot?"
title: "How to enable IP identification in Chatwoot?"
---

Chatwoot lets you identify the user's location by geocoding the IP address. For IP Address geocoding, we support MaxmindDB services. This lookup provides methods for geocoding IP addresses without calling a remote API every time. You can follow the steps below to set up your self-hosted instance with the geocoding.

**Step 1:** Create an account at [MaxmindDB](https://www.maxmind.com) and create an API key.

**Step 2:** Add the following environment variables.

```bash
IP_LOOKUP_API_KEY=your-api-key
```

With this step, Chatwoot would automatically download the [MaxmindDB downloadable databases](https://dev.maxmind.com/geoip/geoip2/downloadable/) and cache it locally.

**Step 3:** Enable IP Lookup on your account. You can do this in two ways.

- Method 1 via Superadmin console UI

  Log into the super admin and select accounts. Select your account, click edit, and toggle the `ip_lookup` feature.

-  Method 2 via  Rails console

```
RAILS_ENV=production bundle exec rails console
```

```rb
account_id = 1 // Please fill your account id instead of 1
account = Account.find(account_id)
account.enable_features('ip_lookup')
account.save!
```
