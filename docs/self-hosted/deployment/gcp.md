---
sidebar_label: "GCP"
title: "GCP Chatwoot deployment guide"
---

This guide will deploy chatwoot on a single VM in GCP.  For a cloud native deployment, use our [helm charts](https://github.com/chatwoot/charts) with Google Kubernetes Engine(GKE).

> **NOTE**: This guide is a work in progress and your mileage may vary.

## Create Compute Engine (VM)

1. Navigate to VM > Compute Engine window. 
2. Create an instance with a minimum of 4vCPU and 8GB RAM.(N2 General-Purpose)
3. Make sure to select the correct region you want to deploy.
4. Choose `Ubuntu 20.04` as your OS with a 120GB disk.
5. Click create.

![gcp-create-compute-engine](./images/gcp.png)

## Install Chatwoot

1. SSH into the instance created.
2. Follow the linux VM instructions at https://www.chatwoot.com/docs/self-hosted/deployment/linux-vm.
3. Woot! Woot! Your Chatwoot Instance is ready and can be accessed at `http://<your-instance-ip>:3000`. Or if you completed the domain setup during the installation, chatwoot should be available at `https://<your-domain>`


## Configure Chatwoot

1. Follow the Chatwoot docs to configure your domain, email and other parameters you need.
https://www.chatwoot.com/docs/self-hosted/deployment/linux-vm#configure-the-required-environment-variables
