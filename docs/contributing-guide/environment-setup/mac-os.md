---
sidebar_label: "macOS"
title: "macOS setup"
---

Run the following commands in the terminal.

### Install standalone Command Line Tools

```bash
xcode-select --install
```

### Install Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

### Install Git

```bash
brew update
brew install git
```

### Install RVM

```bash
curl -L https://get.rvm.io | bash -s stable
```

### Install Ruby

Chatwoot APIs are built on Ruby on Rails.

Install Ruby verision 3.0.2.

- If you're using `rvm`, run:

    ```bash
    rvm install ruby-3.0.2
    rvm use 3.0.2
    source ~/.rvm/scripts/rvm
    ```

- If you're using `rbenv` to manage Ruby versions, run:

    ```bash
    rbenv install 3.0.2
    ```

    `rbenv` identifies the Ruby version from the _.ruby-version_ file on the root of the project and loads it automatically.

### Install Node.js

Install Node.js from NodeSoure.

```bash
brew install node
```

### Install yarn

We use `yarn` as the package manager.

```bash
brew install yarn
```

### Install postgres

Chatwoot uses PostgreSQL database. The easiest way to get started with PostgreSQL on mac is by installing [PostgresApp](https://postgresapp.com). 

You can also install postgres by running the following commands:

```bash
brew install postgresql
```

The installation creates a user account called postgres that is associated with the default Postgres role. You can log in to the account to use Postgres.

```bash
sudo -u postgres psql
```

### Install redis-server

Chatwoot uses Redis server in agent assignments and reporting.

1. Install `redis-server`.

    ```bash
    brew install redis
    ```

2. Start the redis service.

    ```bash
    brew services start redis
    ```

### Install imagemagick

Chatwoot uses `imagemagick` library to resize images for showing previews and smaller size based on context.

```bash
brew install imagemagick
```

For information on installing imagemagick from source, see [here](https://imagemagick.org/script/download.php).

### Install Docker

This is optional. Those who are doing development can install docker from [Docker Desktop](https://www.docker.com/products/docker-desktop).
