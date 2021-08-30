---
sidebar_label: "Setup Guide"
title: "Project Setup"
---

This guide will help you to setup and run Chatwoot in development mode. Please make sure you have completed the environment setup.

### Clone the repo

```bash
# change location to the path you want chatwoot to be installed
cd ~

# clone the repo and cd to chatwoot dir
git clone https://github.com/chatwoot/chatwoot.git
cd chatwoot
```

### Install Ruby dependencies

Use the following command to install ruby dependencies.

```bash
bundle
```

If you face issue with pg gem, please refer to [Common Errors](/docs/contributing-guide/common-errors#pg-gem-installation-error)

### Install JavaScript dependencies

```bash
yarn
```

This would install all required dependencies for Chatwoot application.

### Setup environment variables.

```
cp .env.example .env
```

Please refer to [environment-variables](/docs/contributing-guide/environment-variables) to read on setting environment variables.

### Setup rails server

```bash
# run db migrations
bundle exec rake db:create
bundle exec rake db:reset

# fireup the server
foreman start -f Procfile.dev
```

### Login with credentials

```bash
http://localhost:3000
user name: john@acme.inc
password: Password1!
```

### Testing chat widget in your local environment 

When running Chatwoot in development environment, the chat widget can be accessed under the following URL.

```
http://localhost:3000/widget_tests
```

You can also test the `setUser` method by using

```
http://localhost:3000/widget_tests?setUser=true
```

### Docker for development

> **Note**: Follow this section only if you are trying to setup Chatwoot via docker. Else skip this.

The first time you start your development environment run the following two commands:

```bash
# build and start the services
docker-compose up --build
# prepare the database
docker-compose exec server bundle exec rails db:prepare
```
Then browse http://localhost:3000

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

### Running Cypress Tests

Refer the docs to learn how to write cypress specs
https://github.com/shakacode/cypress-on-rails
https://docs.cypress.io/guides/overview/why-cypress.html

```
# in terminal tab1
overmind start -f Procfile.test
# in terminal tab2
yarn cypress open --project ./test
```


### Debugging Docker for production

You can use our official Docker image from [https://hub.docker.com/r/chatwoot/chatwoot](https://hub.docker.com/r/chatwoot/chatwoot)

```bash
docker pull chatwoot/chatwoot
```

You can create an image yourselves by running the following command on the root directory.

```bash
docker-compose -f docker-compose.production.yaml build
```

This will build the image which you can depoy in Kubernetes (GCP, Openshift, AWS, Azure or anywhere), Amazon ECS or Docker Swarm. You can tag this image and push this image to docker registry of your choice.

Remember to make the required environment variables available during the deployment.
