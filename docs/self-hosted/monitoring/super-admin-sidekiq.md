---
title: "Super admin Console"
---


You will need a user account with super admin privileges to access the super admin console and Sidekiq console. 

**Note**: The first user created during onboarding is a `super admin`.

## Access superadmin console

- Access `<chatwoot-installation-url>/super_admin`. 

## Creating new super admins

- Use the super admin console and navigate to the user's section
- Click on the new user button, fill in the details, and select the type to be `super admin`

## Access Sidekiq via the super admin console

- Access `<chatwoot-installation-url>/super_admin`.
- Authenticate using the admin credentials created during the installation.
- You can access the Sidekiq option on the sidebar.

## Access Rails console

Run the following command in your console from the root folder of your Chatwoot Rails app.

```bash
RAILS_ENV=production bundle exec rails c
```
If you have `cwctl`, use `cwctl --console`.

- If you running Chatwoot in a Docker container, you would need to access the shell inside your container first.
- If you are running Chatwoot on Caprover, use the following command to access the command line.
```
docker exec -it $(docker ps --filter name=srv-captain--chatwoot-web -q) /bin/sh
```

