---
sidebar_label: "Cypress"
title: "End-to-end testing with Cypress"
---

Chatwoot uses [Cypress](https://www.cypress.io/) for end-to-end testing. Follow the steps below to run the tests on your local machine.

## Prepare the test server

You can run the Chatwoot test server using one of the following methods:

### Method 1—Using local Chatwoot installation

> _For this method to work, you must install the necessary dependencies described in the [setup guide](/docs/contributing-guide/project-setup)._

Go to the Chatwoot codebase in your local machine and do the following:

1. Create a fresh test database.

  ```bash
  RAILS_ENV=test bin/rake db:drop
  RAILS_ENV=test bin/rake db:create
  RAILS_ENV=test bin/rake db:schema:load
  ```

2. Start Chatwoot in the test environment.

  ```bash
  RAILS_ENV=test foreman start  -f Procfile.test
  ### load the url in the browser and wait for it to start up
  http://localhost:5050/app/login
  ```


### Method 2—Using Docker

1. Ensure that you match the [pre-requisites](/docs/contributing-guide/environment-setup/docker#pre-requisites) before you set up Docker. Follow _steps 1 and 2_ of setting up the [development environment](/docs/contributing-guide/environment-setup/docker#development-environment).

2. Open `docker-compose.yaml` and update all the `RAILS_ENV` values from `development` to `test`.

3. Update the port value under the rails section in `docker-compose.yaml`.

  ```
  ports:
    - 5050:3000
  ```

4. Reset the database.

  ```
  docker-compose run --rm rails bundle exec rails db:reset
  ```

5. Start Chatwoot Docker in the test environment.

  ```
  docker-compose up
  ### load the url in the browser and wait for it to start up
  http://localhost:5050/app/login
  ```

## Run Cypress

1. Load `localhost:5050` on your browser while the Chatwoot server is running.

2. Go to your chatwoot local directory and run the following command.
    
    ```bash
    yarn cypress open --project ./spec
    ```
