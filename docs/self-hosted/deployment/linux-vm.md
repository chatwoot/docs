---
sidebar_label: "Linux VM"
title: "Production deployment guide for Linux VM"
---

## Deploying to Linux VM

This guide will help you to install **Chatwoot** on **Ubuntu 20.04 LTS**. We have prepared a deployment script for you to run. Refer to the script and feel free to make changes accordingly to the operating system if you are on a non-Ubuntu system.

<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"width="100%" height="443" type="text/html" src="https://www.youtube.com/embed/srolHJskK5Q?autoplay=0&fs=0&iv_load_policy=3&showinfo=1&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"></iframe>


## Steps to install

> **Note**: If you plan to use a domain with chatwoot, please add an A record before proceeding.
> Refer the `Configuring the installation domain` section below.


1. Create an **install.sh** file using the following commands.

```bash
wget https://get.chatwoot.app/linux/install.sh
chmod +x install.sh
```

2. Execute the script, and it will take care of the initial **Chatwoot** setup.

```bash
./install.sh -i master
```

3. **Chatwoot** Installation will now be accessible at `http://{your_ip_address}:3000` or if you opted
for domain setup, it will be at https://chatwoot.mydomain.com.

> **Note** This will also install the Chatwoot CLI(`cwctl`) starting with Chatwoot v2.7.0, use `cwctl --help` to learn more.

## Configuring The installation Domain

1. Create an `A` record for `chatwoot.mydomain.com` on your domain management system and point it towards the installation IP address.
2. Continue with the installation script by entering `yes` when prompted about domain setup.
4. Enter your domain, and the script will take care of configuring Nginx and SSL via LetsEncrypt.
4. Your Chatwoot installation should be accessible from `https://chatwoot.mydomain.com` now.

## Configure the required environment variables

For your Chatwoot installation to properly function, you would need to configure the essential environment variables like `FRONTEND_URL`, Mailer and a cloud storage config. Refer **[Environment variables](/docs/self-hosted/configuration/environment-variables)** for the full list.

1. Login as **chatwoot** user and edit the .env file.

```bash
# Login as chatwoot user

sudo -i -u chatwoot
cd chatwoot
nano .env
```

2. Refer **[Environment variables](/docs/self-hosted/configuration/environment-variables)** and update the required variables. Save the `.env` file.

3. Restart the **Chatwoot** server and enjoy using your self hosted Chatwoot.

> **Note** If you have Chatwoot CLI(`cwctl`) intalled, use `cwctl -r`.

```bash
sudo systemctl restart chatwoot.target
```

## Upgrading to a newer version of Chatwoot

Whenever a new version of Chatwoot is released, use the following steps to upgrade your instance.

> **Note** If you have Chatwoot CLI(`cwctl`) intalled, use `cwctl --upgrade` to upgrade your chatwoot installation.

To install `cwctl`, refer [this](#install-or-upgrade-chatwoot-cli) section below.

Run the following steps on your VM. Make changes based on your OS if you are on a non-Ubuntu system.

```bash
# Login as Chatwoot user
sudo -i -u chatwoot

# Navigate to the Chatwoot directory
cd chatwoot

# Pull the latest version of the master branch
git checkout master && git pull

# Ensure the ruby version is upto date
rvm install "ruby-3.0.4"
rvm use 3.0.4 --default

# Update dependencies
bundle
yarn

# Recompile the assets
rake assets:precompile RAILS_ENV=production

# Migrate the database schema
RAILS_ENV=production bundle exec rake db:migrate

# Switch back to root user
exit

# Copy the updated targets
cp /home/chatwoot/chatwoot/deployment/chatwoot-web.1.service /etc/systemd/system/chatwoot-web.1.service
cp /home/chatwoot/chatwoot/deployment/chatwoot-worker.1.service /etc/systemd/system/chatwoot-worker.1.service
cp /home/chatwoot/chatwoot/deployment/chatwoot.target /etc/systemd/system/chatwoot.target

# Reload systemd files
systemctl daemon-reload

# Restart the chatwoot server
systemctl restart chatwoot.target
```

## Running Rails Console

> **Note** If you have Chatwoot CLI(`cwctl`) intalled, use `cwctl -c`.

```
# Login as Chatwoot user
sudo -i -u chatwoot

# Navigate to the Chatwoot directory
cd chatwoot

# start rails console
RAILS_ENV=production bundle exec rails c
```

## Viewing Logs

> **Note** If you have Chatwoot CLI(`cwctl`) intalled, use `cwctl -l web` or `cwctl -l worker`.

Run the following commands in your ubuntu shell

```
# logs from the rails server
journalctl -u chatwoot-web.1.service -f

# logs from sidekiq
journalctl -u chatwoot-worker.1.service -f

```

## Install or Upgrade Chatwoot CLI

If you used an older version of install script(<2.0), you will not have `cwctl` in your PATH. To install/upgrade Chatwoot CLI,

```
wget https://get.chatwoot.app/linux/install.sh -O /usr/local/bin/cwctl && chmod +x /usr/local/bin/cwctl
cwctl --help
```

> **Note**: The above command requires root access to install `cwctl` to `/usr/local/bin`.


## Troubleshooting
### If precompile fails

If the asset precompilation step fails with `ActionView::Template::Error (Webpacker can't find application.css in /home/chatwoot/chatwoot/public/packs/manifest.json)` or if you face issues while restarting the server, try the following command and restart the server.

```
RAILS_ENV=production rake assets:clean assets:clobber assets:precompile
```

This command would clear the existing compiled assets and would recompile all the assets. Read more about it [here](https://edgeguides.rubyonrails.org/command_line.html#bin-rails-assets)
