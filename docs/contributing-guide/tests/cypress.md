---
sidebar_label: "Cypress"
title: "End-to-end testing with Cypress"
---

Chatwoot uses [Cypress](https://www.cypress.io/) for end-to-end testing. Use the following steps to run the tests on your local machine.

## Prepare the Test Server

### Using Docker

Navigate to your chatwoot codebase in your local machine and update your `docker-compose.yaml`


### Using Local Chatwoot Installation
> Note: You have to install the necessary dependencies as described in setup guide for this method to work.

Navigate to chatwoot codebase in your local machine and execute the following steps

#### Create a fresh test database

```bash
RAILS_ENV=test bin/rake db:drop
RAILS_ENV=test bin/rake db:create
RAILS_ENV=test bin/rake db:schema:load
```

#### Start Chatwoot in test environment

```bash
RAILS_ENV=test foreman start  -f Procfile.test
```

## Run Cypress

Load `localhost:5050` on your browser and ensure that Chatwoot server is running.

Naviage to your chatwoot local directory and Execute the following command to run the cypress tests.


```bash
yarn cypress open --project ./spec
```
