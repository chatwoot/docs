---
sidebar_label: "Setup guide"
title: "Project setup"
---

This guide will help you set up and run Chatwoot in development mode.

:::note

Before you begin, set up the environment based on your operating system.

:::

## Cloning the repo

```bash
# change location to the path you want chatwoot to be installed
cd ~

# clone the repo and cd to chatwoot dir
git clone https://github.com/chatwoot/chatwoot.git
cd chatwoot
```

## Installing Ruby dependencies

```bash
bundle
```

If you face issues with pg gem, refer to [Common Errors](/docs/contributing-guide/common-errors#pg-gem-installation-error) to troubleshoot.

## Installing JavaScript dependencies

This command installs all required dependencies for Chatwoot application.

```bash
yarn
```

## Setting up environment variables

```
cp .env.example .env
```

For more information on setting environment variables, see [here](/contributing-guide/environment-variables).

## Setting up Rails server

```bash
# run db migrations
bundle exec rake db:create
bundle exec rake db:reset

# fireup the server
foreman start -f Procfile.dev
```

## Logging in with credentials

```bash
http://localhost:3000
user name: john@acme.inc
password: Password1!
```

## Testing the chat widget

When running Chatwoot in the development environment, the chat widget can be accessed via:

```
http://localhost:3000/widget_tests
```

You can also test the `setUser` method by using:

```
http://localhost:3000/widget_tests?setUser=true
```

## Docker for development

:::note

Follow this section only if you're trying to set up Chatwoot via Docker.

:::

The first time you start your development environment, run the following commands:

```bash
# build and start the services
docker-compose up --build
# prepare the database
docker-compose exec server bundle exec rails db:prepare
```

Then browse `http://localhost:3000`

```bash
# To stop your environment use Control+C (on Mac) CTRL+C (on Win) or
docker-compose down
# start the services
docker-compose up
```

When you change the service’s Dockerfile or the contents of the build directory, run stop then build. (For example after modifying package.json or Gemfile)

```bash
docker-compose stop
docker-compose build
```

The docker-compose environment consists of:

- chatwoot server
- postgres
- redis
- webpacker-dev-server

If in case you encounter a seeding issue or you want reset the database you can do it using the following command :

```bash
docker-compose run -rm server bundle exec rake db:reset
```

This command essentially runs postgres and redis containers and then run the rake command inside the chatwoot server container.

## Running Cypress Tests

To learn how to write Cypress specs, refer the following:

- https://github.com/shakacode/cypress-on-rails
- https://docs.cypress.io/guides/overview/why-cypress.html

```
# in terminal tab1
overmind start -f Procfile.test
# in terminal tab2
yarn cypress open --project ./test
```

## Debugging Docker for production

You can use our official Docker image from [https://hub.docker.com/r/chatwoot/chatwoot](https://hub.docker.com/r/chatwoot/chatwoot)

```bash
docker pull chatwoot/chatwoot
```

To create an image, run the following command on the root directory:

```bash
docker-compose -f docker-compose.production.yaml build
```

This builds the image that you can deploy in Kubernetes (GCP, Openshift, AWS, Azure, or anywhere), Amazon ECS, or Docker Swarm. You can tag this image and push it to a Docker registry of your choice.

:::note

Remember to make the required environment variables available during the deployment.

:::
