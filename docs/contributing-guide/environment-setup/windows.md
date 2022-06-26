---
sidebar_label: "Windows 10"
title: "Windows 10 setup"
---

### Requirements

You need to install the Linux Subsystem for Windows.

1. Enable Developer Mode in Windows. Go to **Settings > Update & Security > For Developers** and select **Developer mode**.

   <img src={require('./img/developer-mode.jpg').default} width="500" alt="Enable Developer Mode" />

2. Go to **Control Panel > Programs and Features > Turn Windows features on or off** and select **Windows Subsystem for Linux**.

   <img src={require('./img/enable-wsl.jpg').default} width="500" alt="Enable WSL" />

3. In the Start menu, search for **Bash**. This time it will have the Ubuntu logo.

### Install RVM and Ruby

1. Install core Linux dependencies.

   ```bash
   sudo apt-get update
   sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev software-properties-common libffi-dev
   ```

2. Install RVM and Ruby version 3.0.4.

```bash
sudo apt-get install libgdbm-dev libncurses5-dev automake libtool bison libffi-dev
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
curl -sSL https://get.rvm.io | bash -s stable
source ~/.rvm/scripts/rvm
rvm install 3.0.4
rvm use 3.0.4 --default
ruby -v
```

### Install Node.js

Install `Node.js` from NodeSource.

```bash
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Install yarn

We use `yarn` as the package manager.

```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

```bash
sudo apt-get update && sudo apt-get install yarn
```

### Install postgres

Chatwoot uses PostgreSQL database.

Install postgres.

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
sudo service postgresql start
```

### Install redis-server

Chatwoot uses Redis server in agent assignments and reporting.

1. Install `redis-server`.

   ```bash
   sudo apt-get install redis-server
   ```

2. Enable Redis to start on system boot.

   ```bash
   sudo systemctl enable redis-server.service
   ```

### Install imagemagick

Chatwoot uses `imagemagick` library to resize images for showing previews and smaller size based on context.

```bash
sudo apt-get install imagemagick
```
