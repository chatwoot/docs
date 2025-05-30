---
sidebar_label: "Ubuntu"
title: "Ubuntu installation guide"
---

Open a terminal and run the following commands:

```bash
sudo apt-get update
```

### Install Git

```bash
sudo apt-get install git
```

### Install RVM

You need software-properties-common installed in order to add PPA repositories.

```bash
sudo apt-get install software-properties-common
```

```bash
sudo apt-add-repository -y ppa:rael-gc/rvm
sudo apt-get update
sudo apt-get install rvm
sudo usermod -a -G rvm $USER
```

Enable `Run command as a login shell` in terminal `Preferences`. Restart your computer.

### Install Ruby

Chatwoot APIs are built on Ruby on Rails. You need to install ruby 3.3.3:

```bash
rvm install ruby-3.3.3
```

Use ruby 3.3.3 as default:

```bash
rvm use 3.3.3 --default
```

### Install Node.js

Chatwoot requires `node` version `20`. Install Node.js from NodeSource using the following commands:

```bash
curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Install pnpm

We use `pnpm` as the package manager:

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

### Install postgres

The database used in Chatwoot is PostgreSQL. Use the following commands to install postgres:

```bash
sudo apt install postgresql postgresql-contrib
```

The installation procedure creates a user account called postgres that is associated with the default Postgres role. In order to use Postgres, you can log into that account:

```bash
sudo -u postgres psql
```

Install `libpg-dev` dependencies for ubuntu:

```bash
sudo apt-get install libpq-dev
```

### Install redis-server

Chatwoot uses Redis server in agent assignments and reporting. You need to install `redis-server`:

```bash
sudo apt-get install redis-server
```

Next, enable Redis to start on system boot:

```bash
sudo systemctl enable redis-server.service
```

### Install imagemagick

```bash
sudo apt-get install imagemagick
```
