---
sidebar_label: "How to migrate Chatwoot database?"
title: "Chatwoot database migration"
---

## Chatwoot database migration

Follow along If you started out with a bundled install of postgres, redis and chatwoot in a single instance
and now wants to migrate to managed database service.

In this guide, we assume you want to migrate to AWS RDS. This guide should be equally applicable to any other
managed database service or even migrating data between different Chatwoot installations.

1. Stop Chatwoot service to stop database activity.
```
sudo systemctl stop chatwoot.target
```

2. Back up the database using `pg_dump` tool.
```
pg_dump -Fc --no-acl --no-owner  -U postgres chatwoot_production > /tmp/cw.dump
```

3. Create an RDS Postgres instance in your aws account. Refer https://aws.amazon.com/getting-started/hands-on/create-connect-postgresql-db/.

4. Verify connectivity to the new RDS instance from your Chatwoot installation.
```
psql -h <hostname> -u <username> -d postgres
```

5. Restore the database from the backup file.
```
 pg_restore --verbose --clean --no-acl --no-owner --create -U postgres -d postgres /tmp/cw.dump
```

6.  Modify the Postgres related environment variables to use the new RDS credentials.
```
sudo -i -u chatwoot
cd chatwoot
vi .env
```

7. Start the Chatwoot service.
```
sudo systemctl start chatwoot.target
```

