---
sidebar_label: 'Enterprise Edition'
title: 'Managing Enterprise Edition Features'
---

Chatwoot Enterprise Edition is a proprietary version of Chatwoot software designed for larger organizations that require advanced features such as Whitelabeling, SLA Management, Audit Logs, Agent Capacity Managment, etc. It is developed from the same GitHub repository as the Community Edition but includes additional, proprietary features aimed at supporting commercial business needs.

The Enterprise Edition offers direct support options and an easy upgrade path to paid features, ensuring that businesses can scale their operations efficiently without needing to reinstall the software. For more detailed information, you can visit the [Chatwoot Enterprise Edition User Guide](https://www.chatwoot.com/hc/user-guide/articles/1677776492-enterprise-edition).

## Managing Enterprise Edition Plan

To activate the Enterprise Plan, head over to the `Settings` tab in your Super Admin panel. It displays your current plan; clicking on the manage button will let you access the portal where you can purchase the appropriate number of licenses.

Our pricing plans start at $19 per agent per month. For more detailed information, please refer to the [self-hosted pricing plans](https://chatwoot.com/pricing/self-hosted-plans).

### Settings Overview
<img src={require('./img/superadmin-settings.png').default} width="100%" alt="Manage Enterprise Plan" />

- `Installation Identifier`: This is the unique identifier used to identify an installation and associate a license with that installation.
- `Manage Plan`: Redirects to the Stripe portal where you can purchase the appropriate number of licenses.
- `Refresh`: Refresh button next to plan details helps to sync your server with the license server in cases where a license purchase is not yet reflected in the system.
- `Feature Config`: You can configure settings for enterprise features like `Whitelabeling` by clicking on the gear icon next to the feature name under feature settings.
- `Support Options`: Based on your plan, applicable support options will be displayed.

## FAQ

### Do you have Instance level plans?

No, at the moment Chatwoot only offers per agent per month plans. If you are looking at a large number of agents, you can reach out to us at `sales@chatwoot.com` for custom plans.

### Transferring licenses?
If you are moving the installation between servers and doing so with a database backup, the original installation identifier is retained, and you don't need to activate the license again.

If for some reason you decide to delete an existing licensed installation and want to do a new installation, please reach out to Chatwoot support, and our team can help you transfer the license to your new installation.
