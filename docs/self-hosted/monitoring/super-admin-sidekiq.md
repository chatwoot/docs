---
title: "Super admin Console"
---

To access super admin console and Sidekiq console, you have to create a super admin.

## Access Rails console

Run the following command in your console from the root folder of your Chatwoot Rails app.

```bash
RAILS_ENV=production bundle exec rails c
```

- If you running Chatwoot in a Docker container, you would need to access the shell inside your container first.*
- If you are running Chatwoot on Caprover, use the following command to access the command line.
```
docker exec -it $(docker ps --filter name=srv-captain--chatwoot-web -q) /bin/sh
```


## Access super admin console

- Execure the following command to create a super admin in your Rails console.
```rb
s = SuperAdmin.create!(email: "admin@xyc.com", password: "yourpassword")
```
- Access `<chatwoot-installation-url>/super_admin`.
- Authenticate and you can find Sidekiq option on the sidebar.
