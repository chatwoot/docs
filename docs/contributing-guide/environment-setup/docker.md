---
sidebar_label: "Docker"
title: "Docker setup"
---

## Pre-requisites

You must have the latest version of `docker` and `docker-compose` installed. We recommend a version equal to or higher than the following:

```bash
$ docker --version
Docker version 20.10.10, build b485636
$ docker-compose --version
docker-compose version 1.29.2, build 5becea4c
```

## Development environment

1. Clone the repository.

    ```bash
    git clone https://github.com/chatwoot/chatwoot.git
    ```

2. Make a copy of the example environment file and modify it as [required](/docs/self-hosted/configuration/environment-variables).

    ```bash
    cp .env.example .env
    # update redis and postgres passwords
    nano .env
    # update docker-compose.yml with the same postgres password
    nano docker-compose.yml
   ```

3. Build the images.

    ```bash
    docker-compose build
    ```

4. After building the image or destroying the stack, reset the database.

    ```bash
    docker-compose run --rm rails bundle exec rails db:chatwoot_prepare
    ```

5. Run the app.

    ```bash
    docker-compose up
    ```

    * Access Rails app frontend by visiting `http://0.0.0.0:3000/`.
    * Access Mailhog inbox by visiting `http://0.0.0.0:8025/` (You will receive all emails going out of the application here).

6. Log in with your credentials.
    ```
        url: http://localhost:3000
        user_name: john@acme.inc
        password: Password1!
    ````

To stop the app, run the following command:

    ```bash
    docker-compose down
    ```

### Running RSpec tests

Run the following commands:

- for running the complete RSpec tests

    ```bash
    docker-compose run --rm rails bundle exec rspec
    ```

- for running specific test

    ```bash
    docker-compose run --rm rails bundle exec rspec spec/<path-to-file>:<line-number>
    ```

## Production environment

To debug the production build locally, set the `SECRET_KEY_BASE` environment variable in your `.env` file and then run the below commands:

```bash
docker-compose -f docker-compose.production.yaml build
docker-compose -f docker-compose.production.yaml up
```

## Debugging mode

To use debuggers like `byebug` or `binding.pry`, use the following command to bring up the app instead of `docker-compose up`.

```bash
docker-compose run --rm --service-port rails
```

## Troubleshooting

If there is an update to `dockerfile`, `gemfile`, `package.json`, or a schema change, rebuild the containers and run `db:reset`.

```bash
docker-compose down
docker-compose build
docker-compose run --rm rails bundle exec rails db:reset
docker-compose up
```
