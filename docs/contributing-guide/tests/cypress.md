---
sidebar_label: "Cypress"
title: "End-to-end testing with Cypress"
---

Chatwoot uses [Cypress](https://www.cypress.io/) for end-to-end testing. Use the following steps to run the tests on your local machine.

### Create a fresh test database

```bash
RAILS_ENV=test bin/rake db:drop
RAILS_ENV=test bin/rake db:create
RAILS_ENV=test bin/rake db:schema:load
```

### Start Chatwoot in test environment

```bash
RAILS_ENV=test foreman start  -f Procfile.test
```

### Run Cypress

Load `localhost:5050` on your browser and ensure that Chatwoot is working. Execute the following command to run the specs.

```bash
yarn cypress open --project ./spec
```
