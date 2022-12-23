---
title: "Wildcard URL support in website live-chat campaigns"
---

The website live-chat campaigns support wild card URL patterns. While building a URL pattern, consider the following behavior in mind.

In Chatwoot, every URL pattern should start with `http://` or `https://`.

### Running the campaign on the exact URL

If you add an exact URL like `https://chatwoot.com/app`, then the URLs with trailing slashes or the URL params or the hash params would not match. Some examples for exact match definitions are as follows.
  - `https://chatwoot.com/app` would match `https://chatwoot.com/app/` or ``https://chatwoot.com/app?test_param=1`
  - `https://chatwoot.com/app?test_param=test_value` would not match `https://chatwoot.com/app` or `https://chatwoot.com/app#test_hash_param`

### Running the campaign ignoring the URL parameters

To ignore the URL params or hash params, you can add a trailing slash in the URL. For eg: `https://chatwoot.com/app/` would match all the following URLs.
  - `https://chatwoot.com/app/`
  - `https://chatwoot.com/app`
  - `https://chatwoot.com/app/?test=1`
  - `https://chatwoot.com/app/#test`

### Running the campaign in all sub-directories

You can use the `*` character in the URL if you want to match all the sub-directories. For eg: `https://chatwoot.com/*` would match to the following URLs
 - `https://chatwoot.com/`
 - `https://chatwoot.com/app`
 - `https://chatwoot.com/app/subdirectory`

### Running the campaign in all subdomains

To match the current domain and subdomains, you can use the pattern `{*.}?` in the URL. For eg: `https://{*.}?chatwoot.com/` would match to the following URLs
 - `https://chatwoot.com`
 - `https://app.chatwoot.com`
 - `https://www.chatwoot.com`
