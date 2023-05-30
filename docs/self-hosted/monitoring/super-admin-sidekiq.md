---
title: "Super admin Console"
---

To access super admin console and Sidekiq console, you will need an account with super admin privileges. The first user created during onboarding is a superadmin.

## Access superadmin console

- Access `<chatwoot-installation-url>/super_admin`. 

## Creating new superadmins

- Use the superadmin console and navigate to users section
- Click on newuser button, fill in the details and select the type to be `superadmin`

## Access Sidekiq via the superadmin console

- Access `<chatwoot-installation-url>/super_admin`.
- Authenticate using the admin credentials created during the installation.
- You can access Sidekiq option on the sidebar.

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

