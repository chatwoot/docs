---
path: "/docs/deployment/deploy-chatwoot-with-caprover"
title: "Caprover Chatwoot Production deployment guide"
---

### Caprover Overview

Caprover is an extremely easy to use application server management tool. It is blazing fast and uses Docker under the hood. Chatwoot has been made available as a one-click app in Chatwoot, and the deployment process is straightforward.

### Install Caprover on your VM

Finish your Caprover installation by referring to [Getting started guide](https://caprover.com/docs/get-started.html).

### Installing Chatwoot in Caprover

Chatwoot is available in the one-click apps option in Caprover. Search for Chatwoot in the list of one-click apps. Replace the default `version` with the latest `version` of chatwoot. Use appropriate values for the Postgres and Redis passwords and click install. It should only take a few minutes.

### Finishing the setup

Head over to the `web` service in the Caprover applications and enable `Websocket Support` in the HTTP settings to true. You could also enable `https` for the application.

### Configure the necessary environment variables

Caprover will take care of Postgres and Redis installation, along with the app and worker servers. We would advise you to replace the Database/Redis services with managed/standalone servers once you start scaling.

Also, ensure to set the appropriate environment variables for email, Object Store service etc. using our [Environment variables guide](./environment-variables)

### Upgrading Chatwoot installation

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

### Further references

- https://isotropic.co/how-to-install-chatwoot-to-a-digitalocean-droplet/
