---
sidebar_label: "Caprover"
title: "Caprover Chatwoot Production deployment guide"
---

## Caprover Overview

Caprover is an extremely easy to use application server management tool. It is blazing fast and uses Docker under the hood. Chatwoot has been made available as a one-click app in Caprover, and the deployment process is straightforward.


## Setup Chatwoot Using Caprover
### 1. Install Caprover on your VM

Finish your Caprover installation by referring to [Getting started guide](https://caprover.com/docs/get-started.html).

### 2. Install Chatwoot 

Chatwoot is available in the one-click apps option in Caprover. Search for Chatwoot in the list of one-click apps. Replace the default `version` with the latest `version` of chatwoot. Use appropriate values for the Postgres and Redis passwords and click install. It should only take a few minutes.

### 3. Finish the setup

Head over to the `web` service in the Caprover applications and enable `Websocket Support` in the HTTP settings to true. You could also enable `https` for the application.

### 4. Configure environment variables

Caprover will take care of Postgres and Redis installation, along with the app and worker servers. We would advise you to replace the Database/Redis services with managed/standalone servers once you start scaling.

Also, ensure to set the appropriate environment variables for email, Object Store service etc. using our [Environment variables guide](/docs/self-hosted/configuration/environment-variables)

## Upgrading Chatwoot installation

To update your chatwoot installation to the latest version in Caprover, Run the following command in the deployment tab for web and worker in `method 5: deploy captain-definition`

### web

```json
{
  "schemaVersion": 2,
  "dockerfileLines": [
    "FROM chatwoot/chatwoot:latest",
    "RUN chmod +x docker/entrypoints/rails.sh",
    "ENTRYPOINT [\"docker/entrypoints/rails.sh\"]",
    "CMD bundle exec rake db:chatwoot_prepare; bundle exec rails s -b 0.0.0.0 -p 3000"
  ]
}
```

### worker
```json
{
  "schemaVersion": 2,
  "dockerfileLines": [
    "FROM chatwoot/chatwoot:latest",
    "RUN chmod +x docker/entrypoints/rails.sh",
    "ENTRYPOINT [\"docker/entrypoints/rails.sh\"]",
    "CMD bundle exec sidekiq -C config/sidekiq.yml"
  ]
}
```

## Accessing Rails Console

Login to the server where you have caprover installed and execute the following commands.

```
# access the shell inside the container
docker exec -it $(docker ps --filter name=srv-captain--chatwoot-web -q) /bin/sh
# start rails console
RAILS_ENV=production bundle exec rails c
```

## Common Errors

### API requests failing with "You need to sign in or sign up before continuing."

Nginx by default strip of headers with `_` . head over to the Nginx configuration option in caprover under the chatwoot web and add the following directive.

```
  # Nginx strips out underscore in headers by default
  # Chatwoot relies on underscore in headers for API
  # Make sure that the config is set to on.
  underscores_in_headers on;
  ```


## Further references

- https://isotropic.co/how-to-install-chatwoot-to-a-digitalocean-droplet/
