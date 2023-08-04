---
sidebar_label: "Linux VM"
title: "Production deployment guide for Linux VM"
---

## Deploying to Linux VM

This guide will help you to install **Chatwoot** on **Ubuntu 20.04 LTS**. We have prepared a deployment script for you to run. Refer to the script and feel free to make changes accordingly to the operating system if you are on a non-Ubuntu system.

<iframe width="100%" height="443" src="https://www.youtube.com/embed/vu_61D1VFAk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Steps to install

> **Note**: If you plan to use a domain with chatwoot, please add an A record before proceeding.
> Refer to the `Configuring the installation domain` section below.

### Quick/Simplify install
1. Create an **install.sh** file using the following commands.

```bash
wget https://get.chatwoot.app/linux/install.sh
chmod +x install.sh
```

2. Execute the script. The script will take care of the initial **Chatwoot** setup.

```bash
./install.sh --install
```

3. **Chatwoot** Installation will now be accessible at `http://{your_ip_address}:3000` or if you opted
   for domain setup, it will be at `https://chatwoot.mydomain.com`.

> **Note** This will also install the Chatwoot CLI(`cwctl`) starting with Chatwoot v2.7.0. Use `cwctl --help` to learn more.

### Advanced install
For a detailed (but much more complex) installation, follow the [debian](../../contributing-guide/environment-setup/debian.md) or [ubuntu](../../contributing-guide/environment-setup/ubuntu.md), then the [project](../../contributing-guide/project-setup.md) setup instruction...

> **Note** Replace `RAILS_ENV=development` with `RAILS_ENV=production` and `development` with `production` when starting the server.

## Configuring The installation Domain

1. Create an `A` record for `chatwoot.mydomain.com` on your domain management system and point it towards the installation IP address.
2. Continue with the installation script by entering `yes` when prompted about domain setup.
3. Enter your domain. The script will take care of configuring Nginx and SSL via LetsEncrypt.
4. Your Chatwoot installation should be accessible from `https://chatwoot.mydomain.com` now.

## Configure the required environment variables

For your Chatwoot installation to properly function, you would need to configure the essential environment variables like `FRONTEND_URL`, Mailer, and a cloud storage config. Refer **[Environment variables](/docs/self-hosted/configuration/environment-variables)** for the full list.

1. Login as **chatwoot** user and edit the .env file.

```bash
# After the advanced install
## The user must still be created here.

useradd -M -s /usr/sbin/nologin chatwoot

# Login as chatwoot user
sudo -i -u chatwoot
cd chatwoot
nano .env
```

2. Refer **[Environment variables](/docs/self-hosted/configuration/environment-variables)** and update the required variables. Save the `.env` file.

3. Restart the **Chatwoot** server and enjoy using your self-hosted Chatwoot.

> **Note** If you have Chatwoot CLI(`cwctl`) installed, use `cwctl -r`.

```bash
sudo systemctl restart chatwoot.target
```

## Upgrading to a newer version of Chatwoot

Whenever a new version of Chatwoot is released, use the following steps to upgrade your instance.

> **Note** If you have Chatwoot CLI(`cwctl`) installed, use `cwctl --upgrade` to upgrade your Chatwoot installation.

To install `cwctl`, refer [this](#install-or-upgrade-chatwoot-cli) section below.

> **Note** If you are on an older version of Chatwoot({'<'}2.7), follow the manual upgrade steps below if you face errors with `cwctl`.

Run the following steps on your VM. Make changes based on your OS if you are on a non-Ubuntu system.

```bash
# Login as Chatwoot user
sudo -i -u chatwoot

# Navigate to the Chatwoot directory
cd chatwoot

# Pull the latest version of the master branch
git checkout master && git pull

# Ensure the ruby version is upto date
rvm install "ruby-3.2.2"
rvm use 3.2.2 --default

# Update dependencies
bundle
yarn

# Recompile the assets
RAILS_ENV=production rake assets:precompile

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

> **Note** If you have Chatwoot CLI(`cwctl`) installed, use `cwctl -c`.

```
# Login as Chatwoot user
sudo -i -u chatwoot

# Navigate to the Chatwoot directory
cd chatwoot

# start rails console
RAILS_ENV=production bundle exec rails c
```

## Viewing Logs

> **Note** If you have Chatwoot CLI(`cwctl`) installed, use `cwctl -l web` or `cwctl -l worker`.

Run the following commands in your ubuntu shell

```
# logs from the rails server
journalctl -u chatwoot-web.1.service -f

# logs from sidekiq
journalctl -u chatwoot-worker.1.service -f

```

## Install or Upgrade Chatwoot CLI

If you used an older version of install script({'<'}2.0), you will not have `cwctl` in your PATH. To install/upgrade Chatwoot CLI,

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
