---
sidebar_label: "Linux VM"
title: "Production deployment guide for Linux VM"
---

## Deploying to Linux VM

This guide will help you to install **Chatwoot** on **Ubuntu 20.04 LTS / 20.10**. We have prepared a deployment script for you to run. Refer to the script and feel free to make changes accordingly to OS if you are on a non-Ubuntu system.

<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"width="100%" height="443" type="text/html" src="https://www.youtube.com/embed/srolHJskK5Q?autoplay=0&fs=0&iv_load_policy=3&showinfo=1&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"></iframe>


## Steps to install

1. Create a **setup.sh** file and copy the content from the above link or use the following commands.

```bash
wget https://raw.githubusercontent.com/chatwoot/chatwoot/master/deployment/setup_20.04.sh -O setup.sh
chmod 755 setup.sh
./setup.sh master
```

2. Execute the script, and it will take care of the initial **Chatwoot** setup.

3. **Chatwoot** Installation will now be accessible at `http://{your_ip_address}:3000`

Note: If you are running the script on Ubuntu VM on AWS EC2, make sure that you are logged in as `root` user not as the `ubuntu` user. 

## Configuring The installation Domain

1. Create an `A` record for `chatwoot.mydomain.com` on your domain management system and point it towards the installation IP address
2. Continue with the installation script by entering `yes` when prompted about domain setup.
4. Enter your domain, and the script will take care of configuring Nginx and SSL
4. Your Chatwoot installation should be accessible from the `https://chatwoot.mydomain.com` now.

## Configure the required environment variables

For your Chatwoot installation to properly function, you would need to configure the essential environment variables like `FRONTEND_URL`, Mailer and a cloud storage config. Refer **[Environment variables](/docs/self-hosted/configuration/environment-variables)** for the full list.

1. Login as **Chatwoot** and edit the .env file.

```bash
# Login as chatwoot user

sudo -i -u chatwoot
cd chatwoot
nano .env
```

2. Refer **[Environment variables](/docs/self-hosted/configuration/environment-variables)** and update the required variables. Save the `.env` file.

3. Restart the **Chatwoot** server and enjoy using your self hosted Chatwoot.

```bash
systemctl restart chatwoot.target
```

## Upgrading to a newer version of Chatwoot

Whenever a new version of Chatwoot is released, use the following steps to upgrade your instance.

Run the following steps on your VM. Make changes based o your OS if you are on a non-Ubuntu system.

```bash
# Login as Chatwoot user
sudo -i -u chatwoot

# Navigate to the Chatwoot directory
cd chatwoot

# Pull the latest version of the master branch
git checkout master && git pull

# Ensure the ruby version is upto date
rvm install "ruby-3.0.2"
rvm use 3.0.2 --default

# Update dependencies
bundle
yarn

# Recompile the assets
rake assets:precompile RAILS_ENV=production

# Migrate the database schema
RAILS_ENV=production bundle exec rake db:migrate

# Copy the updated targets
cp /home/chatwoot/chatwoot/deployment/chatwoot-web.1.service /etc/systemd/system/chatwoot-web.1.service
cp /home/chatwoot/chatwoot/deployment/chatwoot-worker.1.service /etc/systemd/system/chatwoot-worker.1.service

# Switch back to root user
exit
cp /home/chatwoot/chatwoot/deployment/chatwoot.target /etc/systemd/system/chatwoot.target

# Restart the chatwoot server
systemctl restart chatwoot.target
```

### If precompile fails

If the asset precompilation step fails with `ActionView::Template::Error (Webpacker can't find application.css in /home/chatwoot/chatwoot/public/packs/manifest.json)` or if you face issues while restarting the server, try the following command and restart the server.

```
RAILS_ENV=production rake assets:clean assets:clobber assets:precompile
```

This command would clear the existing compiled assets and would recompile all the assets. Read more about it [here](https://edgeguides.rubyonrails.org/command_line.html#bin-rails-assets)

## Running Rails Console

```
# Login as Chatwoot user
sudo -i -u chatwoot

# Navigate to the Chatwoot directory
cd chatwoot

# start rails console
RAILS_ENV=production bundle exec rails c
```

## Viewing Logs

Run the following commands in your ubuntu shell

```
# logs from the rails server
journalctl -u chatwoot-web.1.service -f

# logs from sidekiq
journalctl -u chatwoot-worker.1.service -f

```

