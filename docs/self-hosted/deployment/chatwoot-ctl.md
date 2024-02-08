---
sidebar_label: "Chatwoot CTL"
title: "Chatwoot CTL"
---

## Introduction
Chatwoot CTL(`cwctl`) is CLI tool to install and manage a self hosted Chatwoot Linux installation.

`cwctl` aims to abstract away the common bash interactions with a Chatwoot installation and provide an easy to use syntax. This is not intended to be a full replacement.

If you are running a Chatwoot v2.7.0 instance or later, `cwctl` would have been already installed for you as part of installation.

Check if `cwctl` is already installed by

```
cwctl --version
```

If `cwctl` is not present, follow the steps below to install Chatwoot CTL.

### Install or Upgrade Chatwoot CTL

If you used an older version of install script(< 2.0), you will not have `cwctl` in your PATH. To install/upgrade Chatwoot CTL,

```
wget https://get.chatwoot.app/linux/install.sh -O /usr/local/bin/cwctl && chmod +x /usr/local/bin/cwctl
cwctl --help
```

> **Note**: The above command requires root access to install `cwctl` to `/usr/local/bin`.

### Help

To learn more about the options supported by `cwctl`,
```
sudo cwctl --help
```

### Upgrading to a newer version of Chatwoot

Whenever a new version of Chatwoot is released, use the following steps to upgrade your instance.

```
sudo cwctl --upgrade
```

> **Note**: This will upgrade your Chatwoot instance to the latest stable release. If you are running a custom branch in production do not use this to upgrade.

### Setup Nginx with SSL after installation

To set up Nginx with SSL after initial setup(if you answered `no` to webserver/SSL setup during the first install)

> **Note**: Please add an A record pointing to your Chatwoot instance IP before proceeding.

```
sudo cwctl --webserver
```


### Restart Chatwoot

```
sudo cwctl --restart
```

### Running Rails Console

```
sudo cwctl --console
```

### Viewing Logs

For Chatwoot web(rails) server logs use,

```
sudo cwctl --logs web
```

For Chatwoot worker(sidekiq) server logs use,

```
sudo cwctl --logs worker
```

### Version

To check the version of Chatwoot CTL,

```
sudo cwctl --version
```
