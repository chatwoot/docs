---
sidebar_label: "Cypress"
title: "End-to-end testing with Cypress"
---

Chatwoot uses [Cypress](https://www.cypress.io/) for end-to-end testing. Use the following steps to run the tests on your local machine.

## Prepare the Test Server

Choose any of the given methods to run your chatwoot test server.

### Using Local Chatwoot Installation (option 1)
> Note: You have to install the necessary dependencies as described in [setup guide](/docs/contributing-guide/project-setup) for this method to work.

Navigate to chatwoot codebase in your local machine and execute the following steps

#### Create a fresh test database

```bash
RAILS_ENV=test bin/rake db:drop
RAILS_ENV=test bin/rake db:create
RAILS_ENV=test bin/rake db:schema:load
```

#### Start Chatwoot in the test environment

```bash
RAILS_ENV=test foreman start  -f Procfile.test
### load the url in the browser and wait for it to start up
http://localhost:5050/app/login
```


### Using Docker (option 2)

Follow the [docker set up guide](/docs/contributing-guide/environment-setup/docker) until you the build images.

#### Change the Rails Environment
Open `docker-compose.yaml` and update all the `RAILS_ENV` values from `development` to `test`

#### Update the Port
Under rails section in your `docker-compose.yaml` update the port value as given below.
```
ports:
  - 5050:3000
```

#### Reset the Database
```
docker-compose run --rm rails bundle exec rails db:reset
```

#### Start Chatwoot Docker in the test environment

```
docker-compose up
### load the url in the browser and wait for it to start up
http://localhost:5050/app/login
```

## Run Cypress

Load `localhost:5050` on your browser and ensure that the Chatwoot server is running.

Navigate to your chatwoot local directory and Execute the following command to run the cypress tests.


```bash
pnpm cypress open --project ./spec
```
