---
sidebar_label: "Upgrade "
title: "Upgrading your Chatwoot installation"
---

## Linux VM

Whenever a new version of Chatwoot is released, use the following steps to upgrade your instance.

> **Note** To install `cwctl`, refer [this](#install-or-upgrade-chatwoot-cli) section below.

```
cwctl --upgrade
```

This upgrade method is applicable for all manual linux installations including installation using aws marketplace.

## Docker

Update the images using the latest image from chatwoot.

```
docker-compose down
docker pull
docker-compose up -d
```

Run the `rails db:chatwoot_prepare` option after accessing the console from one of the containers running the latest image.

```
docker exec -it $(basename $(pwd))_rails_1 sh -c 'RAILS_ENV=production bundle exec rails db:chatwoot_prepare'
```

## Helm(Kubernetes)

This upgrade guide is applicable for Chatwoot DigitalOcean 1-click k8s app and any other Kubernetes deployment using `charts`.

Do `helm repo update` and check the version of charts that is going to be installed. Helm charts follows semantic versioning and so if the MAJOR version is different from your installed version, there might be breaking changes. Please refer to the changelog before upgrading.

```
# update helm repositories
helm repo update
# list your current installed version
helm list
# show the latest version of charts that is going to be installed
helm search repo chatwoot
```

```
#if it is major version update, refer to the changelog before proceeding
helm upgrade chatwoot chatwoot/chatwoot -f <your-custom-values>.yaml
```

## Heroku

1. Pull the latest changes from Chatwoot github repo to your fork. Use the fetch upstream changes feature on Github.
2. Deploy the latest branch to your heroku app.
