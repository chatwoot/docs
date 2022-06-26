---
sidebar_label: "Ubuntu"
title: "Ubuntu setup"
---

Run the following commands in the terminal.

```bash
sudo apt-get update
```

### Installing Git

```bash
sudo apt-get install git
```

### Installing RVM

1. To add PPA repositories, install `software-properties-common`.

   ```bash
   sudo apt-get install software-properties-common
   ```

   ```bash
   sudo apt-add-repository -y ppa:rael-gc/rvm
   sudo apt-get update
   sudo apt-get install rvm
   ```

2. Enable `Run command as a login shell` in terminal **Preferences**.

3. Restart your computer.

### Installing Ruby

Chatwoot APIs are built on Ruby on Rails. You need to install Ruby 3.0.4.

```bash
rvm install ruby-3.0.4
```

Use Ruby 3.0.4 as default.

```bash
rvm use 3.0.4 --default
```

### Installing Node.js

Install Node.js from NodeSoure.

```bash
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Installing yarn

Install `yarn` package manager.

```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

```bash
sudo apt-get update && sudo apt-get install yarn
```

### Installing postgres

Chatwoot uses PostgreSQL database.

Install postgres by running the following command:

```bash
sudo apt install postgresql postgresql-contrib
```

The installation creates a user account called postgres that is associated with the default Postgres role. You can log in to the account to use Postgres.

```bash
sudo -u postgres psql
```

Install `libpg-dev` dependencies for Ubuntu.

```bash
sudo apt-get install libpq-dev
```

### Installing redis-server

Chatwoot uses Redis server in agent assignments and reporting.

1. Install `redis-server`.

   ```bash
   sudo apt-get install redis-server
   ```

2. Enable Redis to start on system boot.

   ```bash
   sudo systemctl enable redis-server.service
   ```

### Installing imagemagick

Chatwoot uses `imagemagick` library to resize images for showing previews and smaller size based on context.

```bash
sudo apt-get install imagemagick
```
