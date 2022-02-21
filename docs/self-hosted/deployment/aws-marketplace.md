---
sidebar_label: "AWS marketplace AMI "
title: "AWS Chatwoot deployment guide"
---

	 
The following is the guide for deploying Chatwoot on AWS using the marketplace listing. Use our helm charts with AWS Elastic Kubernetes Service(EKS) for a cloud-native deployment.

### Install Chatwoot via AWS marketplace AMI

1. Go to Chatwoot AWS marketplace listing and subscribe.
2. Choose an instance type that works for you and click next.
3. Verify the defaults and modify if needed according to your setup.
4. Click launch, and it should bring up an ec2 instance with the latest Chatwoot AMI in your selected AWS region.
5. Once ec2 completes provisioning, ssh into the instance and configure the necessary environment variables. Refer [Environment variables](https://www.chatwoot.com/docs/self-hosted/configuration/environment-variables) document for the complete list.
6. It is recommended to configure a proxy server like Nginx and set up SSL.

### Updating the instance
Please follow the Chatwoot update process in standard Linux VM setup.
