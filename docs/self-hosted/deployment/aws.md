---
sidebar_label: "Manual Install"
title: "AWS Chatwoot deployment guide"
---

The following is a reference HA architecture guide for deploying Chatwoot on AWS. For a cloud-native deployment, use our [helm charts](https://github.com/chatwoot/charts) with AWS Elastic Kubernetes Service(EKS).

## Introduction

We will use the Linux installation script to get a chatwoot instance running. Also instead of
relying on Redis, Postgres and Nginx installed in the same ec2; we will proceed to make use
of managed AWS services for the same viz Elasticache, RDS, and ALB.

### Prerequisites

1. AWS account
2. Domain to use with Chatwoot

### Architecture

This guide will follow a standard 3-tier architecture on AWS. 

![aws-architecture](./images/aws-01-architecture.png)


## Network

### Create VPC

1. Sign in to the AWS console and pick the region you will deploy.
2. Navigate to the VPC console and create a new vpc for chatwoot. At the `name` tag, enter
   `chatwoot-vpc` and use the CIDR block `10.0.0.0/16`.
3. Leave the rest of the options as default and click on `Create VPC`.

![aws-create-vpc](./images/aws-02-create-vpc.png)

### Subnets
Create two public and private subnets in the vpc we created. Make sure to have them in different AZ's and have non-overlapping CIDR ranges.

1. Navigate to VPC > Subnets.
2. Click on `Create Subnet`. Select the `chatwoot-vpc` we created before, name it as `chatwoot-public-1`, select an availability zone (for example, ap-south-1a), and the CIDR block as
`10.0.0.0/24`.
![aws-create-subnet](./images/aws-03-create-subnet.png)

3. Follow the same to create the remaining subnets.

| Name                | Type     | Availability Zone  | CIDR Block    |
| ------------------- | -------- | ------------------ | ------------- |
| `chatwoot-public-1`  | public  | `ap-south-1a`      | `10.0.0.0/24` |
| `chatwoot-public-2`  | public  | `ap-south-1b`      | `10.0.1.0/24` |
| `chatwoot-private-1` | private | `ap-south-1a`      | `10.0.2.0/24` |
| `chatwoot-private-2` | private | `ap-south-1b`      | `10.0.3.0/24` |

4. After creating all subnets, enable `auto assign public ipv4 address` for public subnets under `Actions` > `Subnet Settings`.

### Internet Gateway

1. Select  `Create Internet Gateway` , name it `chatwoot-igw`, and click create.
3. Select it from the internet gateways list, choose actions and then select `Attach to VPC`.
4. Choose `chatwoot-vpc` and click attach.

![aws-create-igw](./images/aws-04-create-igw.png)

### NAT Gateway

Chatwoot app servers need to be deployed in the private subnet. For them to access the internet, we need to add NAT gateways to our public subnet and add a route from the private subnets.

1. Navigate the VPC dashboard and select `NAT gateways`.
2. Click `Create NAT Gateway`.

    1. Name it `chatwoot-nat-1`.
    2. Select the `chatwoot-public-1` subnet.
    3. Click on `Allocate Elastic IP`.
    4. Add additional tags as per your need.
    5. Click `Create NAT gateway`.

![aws-create-nat](./images/aws-05-create-nat.png)

3. Follow the same to create a second NAT gateway (`chatwoot-nat-2`) and choose the `chatwoot-public-2` subnet.
### Route tables

The route table controls the inbound and outbound access for a subnet.
#### Public Route table

We will create route tables so that our public subnets can reach the internet via the Internet gateway.

Navigate to the VPC dashboard and select `Route Tables`.
1. Click `Create route table`.
2. Use the name `chatwoot-public-rt` and choose `chatwoot-vpc` under VPC.
3. Click `Create`.

![aws-create-rt](./images/aws-06-create-rt.png)

Next, we need to add a route to the internet gateway we created earlier(`chatwoot-igw`).

1. Select the `chatwoot-public-rt` route table from the list and click on `Edit routes` > `Add Route`.
2. Set the destination as `0.0.0.0/0` and choose the target as `chatwoot-igw`. Click on `Save Changes`.

Also,

1. Select the `chatwoot-public-rt` route table from the list and click on `Subnet Associations` > `Edit subnet associations`.
2. Select both the public subnets(`chatwoot-public-1`,`chatwoot-public-2`) and click `save`.

#### Private Route table

We will also create private route tables so that our private subnets can reach the internet via the NAT gateways.

1. Follow the above guide and create two private route tables, namely, `chatwoot-private-a` and `chatwoot-private-b`.
2. Select the route tables and add a route to the NAT gateway in their respective availability zone.
    1. For `chatwoot-private-a`, add a route to `0.0.0.0/0` and target as `chatwoot-nat-1`.
    2. For `chatwoot-private-b`, add a route to `0.0.0.0/0` and target as `chatwoot-nat-2`.

Also,

1. Associate the private route tables with corresponding private subnets.
    1. For `chatwoot-private-a`, associate `chatwoot-private-1` subnet.
    2. For `chatwoot-private-b`, associate `chatwoot-private-2` subnet.

## Application Load Balancer (ALB)

Create an application load balancer to receive traffic on port 80 and 443 and distribute it across Chatwoot instances. 

1. Navigate to the EC2 section and choose the Load Balancer section.
2. Click `Create Load Balancer`.
    1. Choose `Application Load Balancer`.
    2. For the load balancer name, use `chatwoot-loadbalancer`.
    3. Select the scheme as `internet-facing` and IP address type as `IPv4`.
    4. For the network mapping section,
       1. Select `chatwoot-vpc`.
       2. Select the public subnets `chatwoot-public-1` and `chatwoot-public-2` under the mapping section.
   5. For the Security group section,
       1. Create a new security group, `chatwoot-loadbalancer-sg`.
       2. Add rules to allow HTTP and HTTPS traffic from anywhere(`0.0.0.0/0`, `::/0`).
       3. Also, add a rule to allow TCP on port 3000. This rule allows the load balancer health checks to pass since Chatwoot runs on port 3000.
       4. Add a rule to allow SSH traffic from the bastion security group we will create at the latter stage of the guide. Revisit this section after completing the bastion step.
   6. For the Listeners and routing section, create two listeners for 80 and 443. Set the forwarding rule on listener 80 to redirect `http` to `https`.
       1. Also, create a target group, `chatwoot-tg`, that will forward the requests to port `3000`(Chatwoot listens on this port).
       2. Add a health check to the endpoint `/api`. This endpoint is not authenticated and should return the application version.
```
{
  "version": "1.22.1",
  "timestamp": "2021-12-06 16:07:39"
}
```
   7. Add any necessary tags and click create.

Also, add if you have your domain on Route53 and use ACM to generate a certificate to use with ALB.

<!-- TODO: expand more on the ACM part -->

## Postgresql using AWS RDS

<!-- TODO: expand the rds section -->

Chatwoot uses Postgres as a DB layer, and we will use Amazon RDS with a multi-AZ option for reliability.

### RDS security group

1. Navigate to EC2 > Security groups and create a new sg.
2. Name it `chatwoot-rds-sg`.
3. Select the `chatwoot-vpc` and add an inbound rule for postgres port with source `chatwoot-loadbalancer-sg`.

### RDS subnet group

1. Navigate to the RDS section and select subnet groups.
2. Create `chatwoot-rds-group` and choose `chatwoot-vpc`.
3. Select both az's and the private subnets.

### RDS

1. Select create a database.
2. Use standard create and choose the Postgres engine.
3. Use the production template, and create a Postgres master username and password.
4. Enable Multi-AZ deployment.
5. Select `chatwoot-vpc` and select the rds security group we created earlier.
6. Enable password authentication.
7. Click create.
8. After completing the creation, note down the hostname, username, and password. We will need this to configure Chatwoot.
## Redis using AWS Elasticache

<!-- TODO: expand the Redis section -->

1. Follow similar steps like the rds to create Redis security and subnet groups.
2. Create the Redis cluster with a multi-AZ option.


## Creating Bastion servers

Create bastion servers in both public subnets. These servers will be used to ssh into Chatwoot servers in private subnets.

1. Navigate to the EC2 dashboard and click launch instance.
2. Use an `Ubuntu 20.04 image` with a `t3.micro` type.
3. Choose `chatwoot-vpc` and subnet `chatwoot-public-1`.
4. Name it `chatwoot-bastion-a`.
5. Add a new sg, `chatwoot-bastion-sg` and enable ssh access from anywhere.
6. Leave the rest as defaults and click launch.
7. Once the instance is up, try to SSH into the instance.

Repeat and create another bastion, `chatwoot-bastion-b` in the other AZ.

## Install Chatwoot

1. Navigate to the EC2 section, and click on launch instance.
2. Use an `Ubuntu 20.04 image` with a `c5.xlarge` instance type.
3. Choose the chatwoot-vpc and select the private subnet `chatwoot-private-1`.
4. Disable auto-assign public IP and increase the storage of root volume to 60 GB.
5. Add necessary tags. Set the `Name` tag to `chatwoot`.
6. Select the load balancer security group and click launch.
7. SSH into the bastion server and, from there, ssh to the chatwoot instance we created.
8. Switch to the `root` user.
9. Download the chatwoot Linux installation script.

```
wget https://get.chatwoot.app/linux/install.sh
chmod 755 install.sh
```
10. Run the script.

```
./install.sh --install
```

## Configure Chatwoot

<!-- TODO: Expand with S3 for active storage and SES for Email. -->

11. Once the installation is complete, switch to the chatwoot user and navigate to the chatwoot folder. Edit the .env file and replace the Postgres and Redis credentials with RDS and elasticache values.

```
sudo -i -u chatwoot
cd chatwoot
vi .env

```

12. Run the db migration.
```
RAILS_ENV=production bundle exec rake db:prepare
```

13. Also modify the other necessary environment variable for your chatwoot setup. Refer to https://www.chatwoot.com/docs/self-hosted/deployment/linux-vm#configure-the-required-environment-variables

14. Restart the `chatwoot` service.

```
sudo cwctl --restart
```

## Verify login

15. Add this instance to the target group attached to the alb.
16. Navigate to your chatwoot domain to see if everything is working. 

## Create a custom AMI

1. If you are getting the onboarding page, complete the signup and verify the installation.
2. Voila !! Your chatwoot instance is up.
3. If everything looks good, proceed to create an ami from this instance and name it `chatwoot-base-ami`.

## Auto Scaling Groups (ASG)

1. Create a launch configuration using the above base image.
2. Proceed to create an auto-scaling group from this launch config.
3. Set the minimum and desired capacity to 2 and the maximum to 4. Modify this as per your requirement.
4. Create a scaling policy based on CPU utilization.
5. At this point, we are good to terminate the instance we created earlier.
6. Check the load balancer or target group to verify if two new chatwoot instances have come up.
7. That's it.

## Monitoring

1. Refer to https://www.chatwoot.com/docs/self-hosted/monitoring/apm-and-error-monitoring

## Updating Chatwoot

1. log in to one of the application servers and complete the update instructions. Run migrations if needed. Refer to https://www.chatwoot.com/docs/self-hosted/deployment/linux-vm#upgrading-to-a-newer-version-of-chatwoot
2. Create a new ami and update the launch config.

## Conclusion

This document is a reference guideline for an HA chatwoot architecture on AWS. Modify or build upon this to suit your requirements.
