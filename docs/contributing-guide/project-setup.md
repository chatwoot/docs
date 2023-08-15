---
sidebar_label: "Setup Guide"
title: "Project Setup"
---

This guide will help you to setup and run Chatwoot in development mode. Please make sure you have completed the environment setup.
Change PORT to the port, that should used

### Clone the repo

```bash
# Creating a directory for your Chatwoot instance and change into it
mkdir /home/Chatwoot
cd /home/Chatwoot

# Init a git repository and pull Chatwoot
git init
git remote add origin https://github.com/chatwoot/chatwoot.git
git pull origin develop
git branch -m develop

# Remove irrelevant files
rm -r .* *.md LICENSE

# Create the env file
wget https://github.com/chatwoot/chatwoot/raw/develop/.env.example -O .env
```

### Install Ruby & Javascript dependencies

Use the following commands to install ruby and Javascript dependencies.

```bash
bundle
yarn
```


This would install all required dependencies for Chatwoot application.

If you face issue with pg gem, please refer to [Common Errors](/docs/contributing-guide/common-errors#pg-gem-installation-error)

### Setup environment variables.
Go into the file .env and adjust the following variables:

```markdown
- FRONTEND_URL

- POSTGRES_HOST
- POSTGRES_USERNAME
- POSTGRES_PASSWORD
- RAILS_ENV

# If your redis instance use a password
- REDIS_PASSWORD

# If you use a mailserver for sending emails
- SMTP_ADDRESS
- SMTP_PORT
- SMTP_USERNAME
- SMTP_PASSWORD
- SMTP_AUTHENTICATION
```

Please refer to [environment-variables](/docs/contributing-guide/environment-variables) to read on setting environment variables.

### Setup rails server

```bash
# Create the databases
RAILS_ENV=development rake db:setup

# Migrate the databases
RAILS_ENV=development rake db:migrate
RAILS_ENV=development rake db:seed

# Compile the assets (this will take a while, ca 5-10 minutes)
RAILS_ENV=development rails assets:precompile

# Run the server
rails server -e development -b 0.0.0.0 -p PORT

# To run the server as deamon (in background)
rails server -e development -d -b 0.0.0.0 -p PORT
```

### Login with credentials

Adress   = http://localhost:PORT
Username = john@acme.inc
Password = Password1!

### Testing chat widget in your local environment 

When running Chatwoot in development environment, the chat widget can be accessed under the following URL.

```
http://localhost:PORT/widget_tests
```

You can also test the `setUser` method by using

```
http://localhost:PORT/widget_tests?setUser=true
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
