---
sidebar_label: "Backup"
title: "Backing Up Your Chatwoot Installation"
---

Backups are crucial for any software system, including Chatwoot, for several reasons:

1. **Disaster Recovery**: Backups serve as your safety net in the event of catastrophic incidents like hardware failure, data center outage, or natural disasters. They allow you to restore your application to its previous state quickly.

2. **Data Loss Prevention**: Accidental data deletion or alteration due to human errors, software bugs, or malicious attacks can lead to significant losses. Backups provide a way to recover such lost or corrupted data.

3. **Audit and Compliance**: Certain regulations require businesses to maintain backups for a specific period. These backups may serve as reference points for audits or compliance checks.

4. **Business Continuity**: In situations where your primary data source becomes unavailable, having a backup allows your business to continue its operations with minimal disruption.

In short, backups are an essential part of risk management and ensure the smooth operation of your software system.

## What Data Should Be Backed Up?

- [Postgres Database](#postgres-database)
- [Storage (File uploads/Other Assets in Your Installation)](#storage)
- [Configuration Variables](#configuration)
- [Code Customisations](#code-customisations)


### Postgres Database

If you are managing the Postgres service yourself, you can use the `pg_dump` tool provided by PostgreSQL for this purpose.

```bash
pg_dump -U postgres -W -F t chatwoot_production > backup.tar
```

If you are using a managed provider like AWS, Google Cloud, or Azure, enable backups using the options provided by your provider.

### Storage

Based on your [storage configuration](/docs/self-hosted/configuration/environment-variables#configure-storage), you should take the appropriate steps. 

If you are using a managed provider like `S3`, `GCS`, etc., ensure backups using the options available with the provider.
If you are using the `local` storage provider, ensure to take a disk backup of the `storage` folder in the root of your Chatwoot Installation.

### Configuration

Important configuration might be stored in environment variables. You should back these up as well.
Make a copy of the `.env` file or keep a backup of these configurations based on your setup.

### Code Customisations

Official Chatwoot updates using tools like `cwctl` assume that there are no customisations done to the Chatwoot installation. We don't provide support for custom modifications of the Chatwoot codebase. If you are planning any such modifications, please ensure that you back up these customisations using `git` or other appropriate tooling.

## Guidelines

The frequency of backups largely depends on the nature of your application and the amount of data you generate and can afford to lose. You can opt for `continuous` or `daily` backups as per your need.

> Remember, these backups should be stored in a different physical location to protect against hardware failures. Using a cloud storage provider could be a good solution. Please ensure that access to these backups is tightly controlled, as they contain sensitive data.

## Restoring a Backup

To restore a backup into a new Chatwoot installation, please follow these steps:

- Set up a new Chatwoot installation and finish the onboarding flow.
- Ensure that the [configuration](#configuration) values match the ones in your backup.
- Purge the database of this installation and replace it with the data from your [postgres](#postgres-database) backup.
- Restore [Storage](#storage) with your backup data.
- Restore any [Code Customisations](#code-customisations).
- Restart Chatwoot services and you are good to go.
