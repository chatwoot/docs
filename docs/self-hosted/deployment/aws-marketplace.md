---
sidebar_label: "AWS marketplace AMI "
title: "AWS Chatwoot deployment guide"
---

	 
The following is the guide for deploying Chatwoot on AWS using the marketplace listing. Use our helm charts with AWS Elastic Kubernetes Service(EKS) for a cloud-native deployment.

### Prerequisites
1. AWS account

## Install Chatwoot via AWS marketplace AMI

1. Go to Chatwoot AWS marketplace listing and click on subscribe.
![aws-marketplace-subscribe](./images/awsmp-01-subscribe.png)

2. Sign in with your AWS account.

![aws-marketplace-sign-in](./images/awsmp-02-signin.png)

3. Click on `Continue to Configuration`.
![aws-marketplace-continue](./images/awsmp-03-continue.png)

4. Select the latest version in `Software Version` and pick your aws `region`. Click `Continue to Launch`.
![aws-marketplace-configure](./images/awsmp-04-configure.png)

5. Review the launch configuration. Leave the `Choose Action` field with default value `Launch from Website`. Choose a vpc and subnet as per your aws region preference.
![aws-marketplace-launch](./images/awsmp-05-launch.png)

6. Scroll down to the `security group` section and click create `Create New Based On Seller Settings.`
![aws-marketplace-sg](./images/awsmp-06-sg.png)

7. Save the new security group and choose it after creation.
![aws-marketplace-sg](./images/awsmp-07-sg.png)

8. Pick a key pair you already have or create a new one in the region you are deploying. Click `Launch`.
![aws-marketplace-keypair](./images/awsmp-08-keypair.png)

9. AWS should now display a congraulations screen confirming that Chatwoot instance is launched successfully. Click on the `EC2 Console` link.
![aws-marketplace-launch](./images/awsmp-09-launch.png)

10. Wait for a few minutes to let the instance come up.
![aws-marketplace-ec2](./images/awsmp-10-ec2.png)

11. Select the instance and copy the public IP.
![aws-marketplace-public-ip](./images/awsmp-11-public-ip.png)

11. Visit http://<your-public-ip>:3000. This should bring up the Chatwoot UI.  Congratulations. Woot ! Woot !!
![aws-marketplace-chatwoot](./images/awsmp-12-chatwoot.png)

## Configuring Chatwoot

To configure Chatwoot, we need to ssh into the instance. We will use `AWS console connect` for this.

1. Select the instance and click on `Connect`.
![aws-marketplace-connect2](./images/awsmp-13-connect.png)

2. Change the username from `root` to `ubuntu` and click `Connect`.
![aws-marketplace-connect](./images/awsmp-14-connect.png)

3. Switch to the `chatwoot` user and configure the necessary environment variables. Refer [Environment variables](https://www.chatwoot.com/docs/self-hosted/configuration/environment-variables) document for the complete list.
```bash
sudo -i -u chatwoot
cd chatwoot
vi .env
```

6. Also it is recommended to configure a proxy server like Nginx and set up SSL. Make sure to modify the security group created in `step 6` accordingly.

### Updating the instance
Please follow the Chatwoot update process in standard Linux VM setup.
