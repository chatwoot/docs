---
sidebar_label: "Slack"
title: "Setting Up Slack Integration"
---

Setting up Chatwoot Slack integration involves 5 steps.

1. Create a slack app in the developer portal.
2. Add necessary permissions for the slack app.
3. Configure Chatwoot with the `client ID` and `client Secret` obtained from the slack app.
4. Open Chatwoot UI, navigate to integrations, Slack and click connect.
5. Voila! You should be receiving new conversations in the #customer-conversations channel in Slack.

## Register a Slack app

To use Slack Integration, you have to create a Slack app in the developer portal. You can find more details about creating Slack apps at the [Slack developer portal](https://api.slack.com/).

Once you register your Slack App, you will have to obtain the `Client Id` and `Client Secret`. These values will be available in the app settings and will be required while setting up Chatwoot environment variables.

## Configure the Slack app

1. Create a Slack app and add it to your development workspace.
2. Obtain the `Client Id` and `Client Secret` for the app and configure it in your Chatwoot [environment variables](/docs/self-hosted/configuration/environment-variables).
3. Head over to the `OAuth & permissions` section under `features` tab.
4. In the redirect URLs, Add your Chatwoot installation base URL.
5. In the scopes section configure the given scopes for bot token scopes:
  - `channels:history`
  - `channels:join`
  - `channels:manage`
  - `channels:read`
  - `chat:write`
  - `chat:write.customize`
  - `commands`
  - `files:read`
  - `files:write`
  - `groups:history`
  - `groups:write`
  - `im:history`
  - `im:write`
  - `links:read`
  - `links:write`
  - `mpim:history`
  - `mpim:write`
  - `users:read`
  - `users:read.email`
7. In the user access token section subscribe to: `files:read`, `files:write`, `remote_files:share`
8. Head over to the `Events Subscriptions` section in the `Features` tab.
9. Enable events and configure the given request url `{Chatwoot installation url}/api/v1/integrations/webhooks`
10. Subscribe to the following bot events: `link_shared`, `message.channels`, `message.groups`, `message.im`, `message.mpim`.
11. Add the installation URL as `domain` under the `App unfurl domains section` to display meta information about the conversation when the conversation URL is shared.
12. Connect Slack integration on Chatwoot app and get productive.


## Configure the environment variables in Chatwoot

Obtain the `Client ID` and `Client Secret` for the app and configure it in your Chatwoot [environment variables](/docs/self-hosted/configuration/environment-variables).These values will be available under `Settings` > `Basic Information`.

```bash
SLACK_CLIENT_ID=
SLACK_CLIENT_SECRET=
```

Restart the Chatwoot server.


> **Note**: Slack will only show up in the integrations section once you have configured these values and restarted the server.

## Connect Chatwoot with your Slack workspace

Follow this [guide](/docs/product/features/slack) to complete the Slack integration.

## Testing your setup

1. Create a new conversation.
2. Ensure that you are receiving the Chatwoot messages in the connected slack channel.
3. Add a message to that thread and ensure that it is coming back on to Chatwoot.
4. Add `note:` or `private:` in front of the Slack message to see if it is coming out as private notes.
5. If your Slack member's email matches their email on Chatwoot, the messages will be associated with their Chatwoot user account.
