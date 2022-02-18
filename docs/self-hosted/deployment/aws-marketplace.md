---
sidebar_label: "AWS marketplace AMI "
title: "AWS Chatwoot deployment guide"
---

The following is re guide for deploying Chatwoot on AWS using the marketplace listing. For a cloud native deployment, use our [helm charts](https://github.com/chatwoot/charts) with AWS Elastic Kubernetes Service(EKS).

## Install Chatwot via AWS marketplace ami

1. Go to Chatwoot [aws marketplace listing](https://aws.amazon.com/marketplace/pp/prodview-tolblk4kmdqd4) and subcribe.
2. Choose an instance type that works for you and click next.
3. Verify the defaults and modify if needed according to your setup.
4. Click launch. This should bring up an ec2 instance with the latest Chatwoot ami in your selected aws region.
5. Once ec2 completes provisioning, ssh into the instance and configure the necessary environment variables. Refer **[Environment variables](/docs/self-hosted/configuration/environment-variables)** for the full list.
6. It is recommended to configure a proxy server like Nginx and set up SSL.


## Updating the instance

1. Please follow the Chatwoot update process in standard linux vm setup. 
