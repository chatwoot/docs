---
sidebar_label: "How to upgrade to Chatwoot v4?"
title: "Chatwoot v4 migration"
---


Chatwoot v4 requires postgres with `pgvector` support. You need to ensure that the version of postgres you are running can support pgvector before upgrading.

### type of deployment
- linux
    - if you are using managed postgres, refer the managed postgres section below.
    - if you are using selfhosted postgres, read along.
- docker
    - if you are using managed postgres, refer the managed postgres section below.
    - if you are using selfhosted postgres, read along.
- k8s via helm
  - if you are using managed postgres, refer the managed postgres section below.
    - if you are using selfhosted postgres, read along.
- heroku
    - no action needed if you are using heroku postgres.
    - if you are using another managed postgres, refer the managed postgres section below.


### postgres

The section is divided into parts based on how you are running postgres.
1. Managed Postgres from cloud vendors like AWS, GCP, Azure, Heroku and the likes.
2. Selfhosted postgres on linux, postgres docker or postgres via helm charts.

#### managed postgres
- AWS RDS- No action is need if you are on a latest version of RDS. 
Learn more at https://aws.amazon.com/about-aws/whats-new/2023/10/amazon-rds-postgresql-pgvector-hnsw-indexing/
- Google Cloud (CloudSQL)  - No action is needed 
Learn more at https://cloud.google.com/blog/products/databases/using-pgvector-llms-and-langchain-with-google-cloud-databases
-  Heroku postgres
if you are using heroku postgres, `pg-vector` extension is supported. No action is needed from your end.
    Learn more at  https://devcenter.heroku.com/articles/pgvector-heroku-postgres
-  Azure Postgres
    - Before you can enable pgvector on your Azure Database for PostgreSQL flexible server instance, you need to add it to your allowlist as described in how to use PostgreSQL extensions, and check if correctly added by running SHOW azure.extensions;.
    - https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-use-pgvector#enable-extension



## selfhosted postgres on a linux VM
    - existing installation 
    install pg-vector-extension for their version of postgres and run upgrade.
    ```
    # find your postgres version
    psql --version
    # if its 16, proceed with the below command
    # replace 16 with your version of postgres
    sudo apt install postgresql-16-pgvector
    ```
    - new installation - handled by cwctl
- seflhosted postgres docker container
    - existing installation - replace the postgres image with pgvector image 
    The pgvector image is a drop in replacement and able to work with your existing data.
    ```
    docker compose down
    # edit and replace the postgres image in docker-compose.yaml
    vi docker-compose.yaml
    # replace postsgres image tag
    # if  the image tag is image: postgres:12
    # replace with image: pgvector/pgvector:pg12
    # change the pg tag number according to your postgres version
    docker compose pull
    # verify 
    docker compose up -d
    ```
    - Once you have verified your existing installation is working with pgvector image, proceed with the regular upgrade steps. Learn more at https://www.chatwoot.com/docs/self-hosted/deployment/upgrade#docker

    
- selfhosted postgres in k8s via helm chart
    -  If you are using the builtin postgres via the official helm chart, there is no upgrade path to 4.0 yet. The bitnami packaged postgres we are using does not support pgvector extension. We are working on this.
