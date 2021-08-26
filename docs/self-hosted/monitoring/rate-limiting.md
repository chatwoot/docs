---
title: "Rate Limiting"
---

To protect the system from abusive requests, Chatwoot make use of [`rack_attack`](https://github.com/rack/rack-attack) gem.
You could customize the configuration to suit your needs by updating, [`config/initializers/rack_attack.rb`](https://github.com/chatwoot/chatwoot/blob/develop/config/initializers/rack_attack.rb)

## Default Rate Limits

- Chatwoot will throttles requests by IP at `60rpm`, Unless the request is from an allowed IP `['127.0.0.1', '::1']`
- Signup Requests are limited by IP at 5 requests per 5 minutes.
- SignIn Requests are limited by IP at 5 requests per 20 seconds.
- SignIn Requests are limited by email address at 20 requests per 5 minutes for a specific email.
- Reset Password Requests are limited at 5 requests per 1 hour for a specific email.
