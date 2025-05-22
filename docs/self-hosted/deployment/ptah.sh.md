---
sidebar_label: "Ptah.sh"
title: "Ptah.sh Production deployment guide"
help_discord: "https://r.ptah.sh/chat"
help_github_discussions: "https://github.com/chatwoot/chatwoot/discussions/categories/self-hosted"
---

## Ptah.sh Overview

Ptah.sh is an easy-to-use Docker container management tool. It uses a Docker Swarm under the hood, so it is ready for any small and medium business workloads. The service has been made available as a [Chatwoot one-click app in Ptah.sh](https://ptah.sh/marketplace/customer-support/chatwoot/), and the deployment process is straightforward.

**Note:** This is a community-contributed installation setup. This will only have community support for any issues in the future.

## Setup Chatwoot Using Ptah.sh
### 1. Pick your Ptah.sh Panel Option

Finish your Ptah.sh installation by referring to [Tutorial](https://ptah.sh/tutorial/vps/). You can choose either the self-hosted or cloud option of Ptah.sh - both work the same way.

### 2. Install Chatwoot

Chatwoot is available in the one-click apps option in Ptah.sh.

Once you configure your VM, navigate to the "Services" page and create a new one. 

Click "Use Template" and pick Chatwoot. You'll have to enter the domain name where you want to run your Chatwoot installation (make sure the domain name points to your server) and the E-Mail credentials that will be used for communications. 

Redis, Postgresql, Backups, and HTTPS will be configured automagically. 

You can adjust any of the settings via environment variables or custom configs at any time (before or after service initialization). 

The installation process is fully automatic and takes a few minutes.

### 3. Check the Installation

Once the process is completed, please navigate to your Chatwoot installation, create a user and disable user registration by changing the `ENABLE_ACCOUNT_SIGNUP` environment variable to `false`.

## Upgrading Chatwoot installation

To update your Chatwoot installation to the latest version in Ptah.sh, you can just go to your service and change the versions of the corresponding docker images - Ptah.sh will take care of the rest. Check the [Chatwoot changelog](https://www.chatwoot.com/changelog/) to watch after the releases and possible breaking changes.

