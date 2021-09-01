---
title: "Rate Limiting"
---

To protect the system from abusive requests, Chatwoot makes use of [`rack_attack`](https://github.com/rack/rack-attack) gem.
You could customize the configuration to suit your needs by updating, [`config/initializers/rack_attack.rb`](https://github.com/chatwoot/chatwoot/blob/develop/config/initializers/rack_attack.rb)

## Default Rate Limits

- Chatwoot will throttles requests by IP at `60rpm`, Unless the request is from an allowed IP `['127.0.0.1', '::1']`
- Signup Requests are limited by IP at `5 requests` per `5 minutes`.
- SignIn Requests are limited by IP at `5 requests` per `20 seconds`.
- SignIn Requests are limited by email address at `20 requests` per `5 minutes` for a specific email.
- Reset Password Requests are limited at `5 requests` per `1 hour` for a specific email.

## Attachment Restrictions 

- `Contact/Inbox Avatar` attachment file types are limited to jpeg, gif and png.
- `Contact/Inbox Avatar` attachment file size is limited to 15MB.
- `Website Channel` message attachments are limited to types ['image/png', 'image/jpeg', 'image/gif', 'image/bmp', 'image/tiff', 'application/pdf', 'audio/mpeg', 'video/mp4', 'audio/ogg', 'text/csv']
- `Website Channel` message attachments are limited to 40MB size limit.

