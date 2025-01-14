---
sidebar_label: "How to upgrade to Chatwoot v4?"
title: "Chatwoot v4 migration"
---

## Chatwoot v4 migration


# pgvector upgrade

Chatwoot v4 requires postgres with pgvector support. You need to ensure the version of postgres you are running can support pgvector before upgrading.

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
    - no action needed if you are using heroku postgres supports
    -  if you are using another managed postgres, refer the managed postgres section below.


### postgres
## selfhosted postgres
    - existing users - install pg-vector-extension for their version of postgres and run upgrade.
    ```
    # find your postgres version
    psql --version
    # if its 16, proceed with the below command
    # replace 16 with your version of postgres
    sudo apt install postgresql-16-pgvector
    ```
    - new users - handled by cwctl
- seflhosted postgres docker container
    - existing user - migrate data to version of postgres docker container supporrting pg-vector
    ```
    TODO 
    ```
    - new user - move from official postgres image to one with pgvector support
- selfhosted postgres via helm chart
    -  
    ```
    TODO
    ```



 ## managed postgres
    - AWS - No action is need if you are on a latest version of RDS. https://aws.amazon.com/about-aws/whats-new/2023/10/amazon-rds-postgresql-pgvector-hnsw-indexing/
- Google Cloud - managed cloudsql
    - https://cloud.google.com/blog/products/databases/using-pgvector-llms-and-langchain-with-google-cloud-databases
-  Heroku postgres
    -  if you are using heroku postgres, `pg-vector` extension is supported. No action is needed from your end.
    ref: https://devcenter.heroku.com/articles/pgvector-heroku-postgres
-  Azure Postgres
    - Before you can enable pgvector on your Azure Database for PostgreSQL flexible server instance, you need to add it to your allowlist as described in how to use PostgreSQL extensions, and check if correctly added by running SHOW azure.extensions;.
    - https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-use-pgvector#enable-extension
