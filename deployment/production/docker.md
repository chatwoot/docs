---
path: "/docs/deployment/deploy-chatwoot-with-docker"
title: "Docker Chatwoot Production deployment guide"
---

### Deploying with docker

We publish our base images to docker hub. You should be able to build your chatwoot web/worker images from these base images

### Web

```
FROM chatwoot/chatwoot:latest
RUN chmod +x docker/entrypoints/rails.sh
ENTRYPOINT ["docker/entrypoints/rails.sh"]
CMD bundle exec bundle exec rails s -b 0.0.0.0 -p 3000
```

### worker

```
FROM chatwoot/chatwoot:latest
RUN chmod +x docker/entrypoints/rails.sh
ENTRYPOINT ["docker/entrypoints/rails.sh"]
CMD bundle exec sidekiq -C config/sidekiq.yml
```

The app servers will available on port `3000`. Ensure the images are connected to the same database and Redis servers. Provide the configuration for these services via [environment variables](https://www.chatwoot.com/docs/environment-variables).

### Initial database setup

To setup the database for the first time, you must run `rails db:chatwoot_prepare`. You may get errors if you try to run `rails db:migrate` at this point.

### Upgrading

Update the images using the latest image from chatwoot. Run the `rails db:chatwoot_prepare` option after accessing console from one of the containers running latest image.

### Deploy Chatwoot with Docker on your VM

1) Ensure Docker is installed on your VM
```
# example in ubuntu
apt-get update
apt  install docker-compose
```

2) Download the required files
```
# Download the env file template
wget -O .env https://raw.githubusercontent.com/chatwoot/chatwoot/develop/.env.example
# Download the docker compose template
wget -O docker-compose.yml https://raw.githubusercontent.com/chatwoot/chatwoot/develop/docker-compose.production.yaml
```

3) Tweak the `.env/docker-compose.yml` according to your preferences. Refer the available [environment variables](https://www.chatwoot.com/docs/environment-variables). You could also remove the dependant services like `postgres`, `redis` etc in favor of managed services which can be configured via environment variables.
> update the `POSTGRES_PASSWORD` in both `docker-compose.yml` and `.env`

4) Prepare the database by migration and seeding
```
docker-compose run --rm rails bundle exec rails db:chatwoot_prepare
```

5) Get the service up and running
```
docker-compose up -d
```

6) You chatwoot installation should be accessible with `http://{your_ip_address}:3000`

### Additional Steps

1) Have an `nginx` webserver acting as a reverse proxy for chatwoot installation. So that you can access chatwoot from `https://chat.yourdomain.com`
2) Run `docker-compose run --rm rails bundle exec rails db:chatwoot_prepare` when ever you decide to update the chatwoot images to handle the migrations.

