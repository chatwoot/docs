---
title: "Webhook Events"
---

Chatwoot Publishes Various events to Webhook Endpoints if any of the following are configured:

1. [Webhook Integration](/docs/product/features/webhooks)
2. [API Channel](/docs/product/channels/api/create-channel)
3. [Agent Bots](https://github.com/chatwoot/chatwoot/wiki/Building-on-Top-of-Chatwoot:-Agent-Bots)

### A sample webhook payload

```json
{

  "event": "message_created", // The name of the event
  "id": "1", // Message ID
  "content": "Hi", // Content of the message
  "created_at": "2020-03-03 13:05:57 UTC", // Time at which the message was sent
  "message_type": "incoming", // This will have a type incoming, outgoing or template. Incoming messages are sent by the user from the widget, Outgoing messages are sent by the agent to the user.
  "content_type": "enum", // This is an enum, it can be input_select, cards, form or text. The message_type will be template if content_type is one og these. Default value is text
  "content_attributes": {} // This will an object, different values are defined below
  "source_id": "", // This would the external id if the inbox is a Twitter or Facebook integration.
  "sender": { // This would provide the details of the agent who sent this message
    "id": "1",
    "name": "Agent",
    "email": "agent@example.com"
  },
  "contact": { // This would provide the details of the user who sent this message
    "id": "1",
    "name": "contact-name"
  },
  "conversation": { // This would provide the details of the conversation
    "display_id": "1", // This is the ID of the conversation which you can see in the dashboard.
    "additional_attributes": {
      "browser": {
        "device_name": "Macbook",
        "browser_name": "Chrome",
        "platform_name": "Macintosh",
        "browser_version": "80.0.3987.122",
        "platform_version": "10.15.2"
      },
      "referer": "http://www.chatwoot.com",
      "initiated_at": "Tue Mar 03 2020 18:37:38 GMT-0700 (Mountain Standard Time)"
    }
  },
  "account": { // This would provide the details of the account
    "id": "1",
    "name": "Chatwoot",
  }
}
```

## Webhook Event payload samples

### conversation_resolved
> To be deprecated in favor of `conversation_status_changed`

```json
{
  "additional_attributes": {
    "browser": {
      "device_name": "Unknown",
      "browser_name": "Chrome",
      "platform_name": "macOS",
      "browser_version": "92.0.4515.107",
      "platform_version": "10.15.7"
    },
    "referer": "http://localhost:3000/widget_tests",
    "initiated_at": {
      "timestamp": "Fri Jul 23 2021 23:32:48 GMT+0530 (India Standard Time)"
    }
  },
  "can_reply": true,
  "channel": "Channel::WebWidget",
  "id": 10,
  "inbox_id": 1,
  "contact_inbox": {
    "id": 12,
    "contact_id": 12,
    "inbox_id": 1,
    "source_id": "405f1d30-1af3-4fa0-8ffd-11ea3f86101e",
    "created_at": "2021-07-23T18:01:48.739Z",
    "updated_at": "2021-07-23T18:02:59.053Z",
    "hmac_verified": false
  },
  "messages": [
    {
      "id": 120,
      "content": "Get notified by email",
      "account_id": 1,
      "inbox_id": 1,
      "conversation_id": 10,
      "message_type": 3,
      "created_at": 1627063369,
      "updated_at": "2021-07-23T18:02:58.000Z",
      "private": false,
      "status": "sent",
      "source_id": null,
      "content_type": "input_email",
      "content_attributes": {
        "submitted_email": "jane@acme.inc"
      },
      "sender_type": null,
      "sender_id": null,
      "external_source_ids": {}
    }
  ],
  "meta": {
    "sender": {
      "additional_attributes": {},
      "custom_attributes": {},
      "email": "jane@acme.inc",
      "id": 12,
      "identifier": null,
      "name": "jane",
      "phone_number": null,
      "pubsub_token": "s76CptSuowp4BDcBom2q7aNX",
      "thumbnail": "https://www.gravatar.com/avatar/526692031d4bb623b36ae4e340260f13?d=404",
      "type": "contact"
    },
    "assignee": {
      "id": 1,
      "name": "John",
      "available_name": "John",
      "avatar_url": "https://www.gravatar.com/avatar/0d722ac7bc3b3c92c030d0da9690d981?d=404",
      "type": "user",
      "availability_status": "online"
    }
  },
  "status": "open",
  "unread_count": 0,
  "agent_last_seen_at": 1627063520,
  "contact_last_seen_at": 0,
  "timestamp": 1627063520,
  "event": "conversation_resolved"
}
```


### conversation_opened
> To be deprecated in favor of `conversation_status_changed`

```json
{
  "additional_attributes": {
    "browser": {
      "device_name": "Unknown",
      "browser_name": "Chrome",
      "platform_name": "macOS",
      "browser_version": "92.0.4515.107",
      "platform_version": "10.15.7"
    },
    "referer": "http://localhost:3000/widget_tests",
    "initiated_at": {
      "timestamp": "Fri Jul 23 2021 23:32:48 GMT+0530 (India Standard Time)"
    }
  },
  "can_reply": true,
  "channel": "Channel::WebWidget",
  "id": 10,
  "inbox_id": 1,
  "contact_inbox": {
    "id": 12,
    "contact_id": 12,
    "inbox_id": 1,
    "source_id": "405f1d30-1af3-4fa0-8ffd-11ea3f86101e",
    "created_at": "2021-07-23T18:01:48.739Z",
    "updated_at": "2021-07-23T18:02:59.053Z",
    "hmac_verified": false
  },
  "messages": [
    {
      "id": 120,
      "content": "Get notified by email",
      "account_id": 1,
      "inbox_id": 1,
      "conversation_id": 10,
      "message_type": 3,
      "created_at": 1627063369,
      "updated_at": "2021-07-23T18:02:58.000Z",
      "private": false,
      "status": "sent",
      "source_id": null,
      "content_type": "input_email",
      "content_attributes": {
        "submitted_email": "jane@acme.inc"
      },
      "sender_type": null,
      "sender_id": null,
      "external_source_ids": {}
    }
  ],
  "meta": {
    "sender": {
      "additional_attributes": {},
      "custom_attributes": {},
      "email": "jane@acme.inc",
      "id": 12,
      "identifier": null,
      "name": "jane",
      "phone_number": null,
      "pubsub_token": "s76CptSuowp4BDcBom2q7aNX",
      "thumbnail": "https://www.gravatar.com/avatar/526692031d4bb623b36ae4e340260f13?d=404",
      "type": "contact"
    },
    "assignee": {
      "id": 1,
      "name": "John",
      "available_name": "John",
      "avatar_url": "https://www.gravatar.com/avatar/0d722ac7bc3b3c92c030d0da9690d981?d=404",
      "type": "user",
      "availability_status": "online"
    }
  },
  "status": "pending",
  "unread_count": 0,
  "agent_last_seen_at": 1627063459,
  "contact_last_seen_at": 0,
  "timestamp": 1627063459,
  "event": "conversation_opened"
}
```


### conversation_status_changed
> Not Available for Agent Bots yet

```json
{
  "additional_attributes": {
    "browser": {
      "device_name": "Unknown",
      "browser_name": "Chrome",
      "platform_name": "macOS",
      "browser_version": "92.0.4515.107",
      "platform_version": "10.15.7"
    },
    "referer": "http://localhost:3000/widget_tests",
    "initiated_at": {
      "timestamp": "Fri Jul 23 2021 23:32:48 GMT+0530 (India Standard Time)"
    }
  },
  "can_reply": true,
  "channel": "Channel::WebWidget",
  "id": 10,
  "inbox_id": 1,
  "contact_inbox": {
    "id": 12,
    "contact_id": 12,
    "inbox_id": 1,
    "source_id": "405f1d30-1af3-4fa0-8ffd-11ea3f86101e",
    "created_at": "2021-07-23T18:01:48.739Z",
    "updated_at": "2021-07-23T18:02:59.053Z",
    "hmac_verified": false
  },
  "messages": [
    {
      "id": 120,
      "content": "Get notified by email",
      "account_id": 1,
      "inbox_id": 1,
      "conversation_id": 10,
      "message_type": 3,
      "created_at": 1627063369,
      "updated_at": "2021-07-23T18:02:58.000Z",
      "private": false,
      "status": "sent",
      "source_id": null,
      "content_type": "input_email",
      "content_attributes": {
        "submitted_email": "jane@acme.inc"
      },
      "sender_type": null,
      "sender_id": null,
      "external_source_ids": {}
    }
  ],
  "meta": {
    "sender": {
      "additional_attributes": {},
      "custom_attributes": {},
      "email": "jane@acme.inc",
      "id": 12,
      "identifier": null,
      "name": "jane",
      "phone_number": null,
      "pubsub_token": "s76CptSuowp4BDcBom2q7aNX",
      "thumbnail": "https://www.gravatar.com/avatar/526692031d4bb623b36ae4e340260f13?d=404",
      "type": "contact"
    },
    "assignee": {
      "id": 1,
      "name": "John",
      "available_name": "John",
      "avatar_url": "https://www.gravatar.com/avatar/0d722ac7bc3b3c92c030d0da9690d981?d=404",
      "type": "user",
      "availability_status": "online"
    }
  },
  "status": "open",
  "unread_count": 0,
  "agent_last_seen_at": 1627063451,
  "contact_last_seen_at": 0,
  "timestamp": 1627063369,
  "event": "conversation_status_changed"
}
```

### message_created

```json
{
  "id": 118,
  "content": "hi",
  "created_at": "2021-07-23T18:02:48.000Z",
  "message_type": "incoming",
  "content_type": "text",
  "private": false,
  "content_attributes": {},
  "source_id": null,
  "sender": {
    "id": 14,
    "name": "little-haze-776",
    "avatar": "",
    "type": "contact"
  },
  "inbox": {
    "id": 1,
    "name": "Acme Support"
  },
  "conversation": {
    "additional_attributes": {
      "browser": {
        "device_name": "Unknown",
        "browser_name": "Chrome",
        "platform_name": "macOS",
        "browser_version": "92.0.4515.107",
        "platform_version": "10.15.7"
      },
      "referer": "http://localhost:3000/widget_tests",
      "initiated_at": {
        "timestamp": "Fri Jul 23 2021 23:32:48 GMT+0530 (India Standard Time)"
      }
    },
    "can_reply": true,
    "channel": "Channel::WebWidget",
    "id": 10,
    "inbox_id": 1,
    "contact_inbox": {
      "id": 12,
      "contact_id": 14,
      "inbox_id": 1,
      "source_id": "405f1d30-1af3-4fa0-8ffd-11ea3f86101e",
      "created_at": "2021-07-23T18:01:48.739Z",
      "updated_at": "2021-07-23T18:01:48.739Z",
      "hmac_verified": false
    },
    "messages": [
      {
        "id": 120,
        "content": "Get notified by email",
        "account_id": 1,
        "inbox_id": 1,
        "conversation_id": 10,
        "message_type": 3,
        "created_at": 1627063369,
        "updated_at": "2021-07-23T18:02:49.000Z",
        "private": false,
        "status": "sent",
        "source_id": null,
        "content_type": "input_email",
        "content_attributes": {},
        "sender_type": null,
        "sender_id": null,
        "external_source_ids": {}
      }
    ],
    "meta": {
      "sender": {
        "additional_attributes": {},
        "custom_attributes": {},
        "email": null,
        "id": 14,
        "identifier": null,
        "name": "little-haze-776",
        "phone_number": null,
        "pubsub_token": "baRUMaAnAB6geeGXUXBsJwDS",
        "thumbnail": "",
        "type": "contact"
      },
      "assignee": {
        "id": 1,
        "name": "John",
        "available_name": "John",
        "avatar_url": "https://www.gravatar.com/avatar/0d722ac7bc3b3c92c030d0da9690d981?d=404",
        "type": "user",
        "availability_status": "online"
      }
    },
    "status": "open",
    "unread_count": 1,
    "agent_last_seen_at": 0,
    "contact_last_seen_at": 0,
    "timestamp": 1627063369
  },
  "account": {
    "id": 1,
    "name": "Acme Inc"
  },
  "event": "message_created"
}
```


### message_updated

```json
{
  "id": 118,
  "content": "hi",
  "created_at": "2021-07-23T18:02:48.000Z",
  "message_type": "incoming",
  "content_type": "text",
  "private": false,
  "content_attributes": {},
  "source_id": null,
  "sender": {
    "id": 12,
    "name": "jane",
    "avatar": "https://www.gravatar.com/avatar/526692031d4bb623b36ae4e340260f13?d=404",
    "type": "contact"
  },
  "inbox": {
    "id": 1,
    "name": "Acme Support"
  },
  "conversation": {
    "additional_attributes": {
      "browser": {
        "device_name": "Unknown",
        "browser_name": "Chrome",
        "platform_name": "macOS",
        "browser_version": "92.0.4515.107",
        "platform_version": "10.15.7"
      },
      "referer": "http://localhost:3000/widget_tests",
      "initiated_at": {
        "timestamp": "Fri Jul 23 2021 23:32:48 GMT+0530 (India Standard Time)"
      }
    },
    "can_reply": true,
    "channel": "Channel::WebWidget",
    "id": 10,
    "inbox_id": 1,
    "contact_inbox": {
      "id": 12,
      "contact_id": 12,
      "inbox_id": 1,
      "source_id": "405f1d30-1af3-4fa0-8ffd-11ea3f86101e",
      "created_at": "2021-07-23T18:01:48.739Z",
      "updated_at": "2021-07-23T18:02:59.053Z",
      "hmac_verified": false
    },
    "messages": [
      {
        "id": 120,
        "content": "Get notified by email",
        "account_id": 1,
        "inbox_id": 1,
        "conversation_id": 10,
        "message_type": 3,
        "created_at": 1627063369,
        "updated_at": "2021-07-23T18:02:58.000Z",
        "private": false,
        "status": "sent",
        "source_id": null,
        "content_type": "input_email",
        "content_attributes": {
          "submitted_email": "jane@acme.inc"
        },
        "sender_type": null,
        "sender_id": null,
        "external_source_ids": {}
      }
    ],
    "meta": {
      "sender": {
        "additional_attributes": {},
        "custom_attributes": {},
        "email": "jane@acme.inc",
        "id": 12,
        "identifier": null,
        "name": "jane",
        "phone_number": null,
        "pubsub_token": "s76CptSuowp4BDcBom2q7aNX",
        "thumbnail": "https://www.gravatar.com/avatar/526692031d4bb623b36ae4e340260f13?d=404",
        "type": "contact"
      },
      "assignee": {
        "id": 1,
        "name": "John",
        "available_name": "John",
        "avatar_url": "https://www.gravatar.com/avatar/0d722ac7bc3b3c92c030d0da9690d981?d=404",
        "type": "user",
        "availability_status": "online"
      }
    },
    "status": "open",
    "unread_count": 1,
    "agent_last_seen_at": 0,
    "contact_last_seen_at": 0,
    "timestamp": 1627063369
  },
  "account": {
    "id": 1,
    "name": "Acme Inc"
  },
  "event": "message_updated"
}
```

### webwidget_triggered

```json
{
  "id": 12,
  "contact": {
    "id": 14,
    "name": "little-haze-776",
    "avatar": "",
    "type": "contact"
  },
  "inbox": {
    "id": 1,
    "name": "Acme Support"
  },
  "account": {
    "id": 1,
    "name": "Acme Inc"
  },
  "current_conversation": null,
  "source_id": "405f1d30-1af3-4fa0-8ffd-11ea3f86101e",
  "event": "webwidget_triggered",
  "event_info": {
    "widget_language": "en",
    "browser_language": "en",
    "browser": {
      "browser_name": "Chrome",
      "browser_version": "92.0.4515.107",
      "device_name": "Unknown",
      "platform_name": "macOS",
      "platform_version": "10.15.7"
    }
  }
}
```

