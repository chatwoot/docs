---
sidebar_label: "AWS with Restack"
title: "Restack Chatwoot production deployment guide"
---

## Getting Started

To deploy Chatwoot with Restack:

  - [Sign up for a Restack account](#sign-up-for-a-restack-account).
  - [Add AWS credentials with AdministratorAccess](#add-aws-credentials-with-administratoraccess).
  - [One-click cluster creation with Restack](#one-click-cluster-creation-with-restack).
  - [Deploy Chatwoot on Restack](#deploy-chatwoot-on-restack).
  - [Start using Chatwoot](#start-using-chatwoot).
  - [Deploy multiple instances of Chatwoot](#deploy-multiple-instances-of-chatwoot).

## Sign up for a Restack account

To Sign up for a Restack account, visit [www.restack.io/signup](https://www.restack.io/signup). You can sign up with your corporate email address or your GitHub profile. You do not need a credit card to sign up.
![restack-signup](./images/restack-sign-up.png)
If you already have an account, go ahead and login to Restack at [www.restack.io/login](https://www.restack.io/login).

## Add AWS credentials with AdministratorAccess

To deploy Chatwoot in your own AWS infrastructure with Restack, you will need to add your credentials as the next step. 

Make sure that this account has *AdministratorAccess*. This is how Restack can ensure an end-to-end cluster creation and cluster management process.

1. Navigate to *Clusters* in the left-hand navigation menu.
2. Select the *Credentials* tab.
3. Click *Add credential*.
    ![add-credentials](./images/Add_credentials.png)
4. Give a suitable title to your credentials for managing them later.
5. Enter your *AWS Access Key ID* and *AWS Secret Access key*.
6. Click *Add credential*.
    ![add-aws-credentials](./images/Add_AWS_Creds.png)


>[How to get your AWS Access key ID and AWS Secret Access Key](https://docs.aws.amazon.com/accounts/latest/reference/root-user-access-key.html)
## One-click cluster creation with Restack

:::tip
Why do I need a cluster?<br/>
Running your application on a Kubernetes cluster lets you deploy, scale and monitor the application reliably. 
:::
Once you have added your credentials, 
1. Navigate to the *Clusters* tab on the same page and click on *Create cluster*.
    ![create-cluster](./images/Create_cluster.png)
2. Give a suitable name to your cluster.
3. Select the region you want to deploy the cluster in.
4. Select the AWS credentials you added in the previous step.
    ![cluster-details](./images/Cluster_details.png)

The cluster creation process will start automatically. Once the cluster is ready, you will get an email on the email id connected with your account. <br/>Creating a cluster is a one-time process. From here you can add other open source tools or multiple instances of Chatwoot in the same cluster.

![creating-cluster](./images/Creating_cluster.png)
![cluster-created](./images/Cluster_created.png)

Any application you deploy in your cluster will be accessible via a free **restack domain**.<br/>Contact the Restack team via chat to set a custom domain for your Chatwoot instances. 

## Deploy Chatwoot on Restack
1. Click *Add application* from the Cluster description or go to the Applications tab in the left hand side navigation.
2. Click *Chatwoot*.
    ![select-chatwoot](./images/Select_Chatwoot.png)
3. Select the cluster you have already provisioned.
4. Click *Add application*.

## Start using Chatwoot
Chatwoot will be deployed on your cluster and you can access it using the link under the *URL* tab.
![chatwoot-deployed](./images/Chatwoot_deployed.png)
You can also check the workloads and volumes that are deployed within Chatwoot.
![access-chatwoot](./images/Chatwoot_access.png)

## Deploy multiple instances of Chatwoot
Restack makes it easier to deploy multiple instances of Chatwoot on the same or multiple clusters. <br/>So you can test the latest version before upgrading or have a dedicated instance for development and for production.