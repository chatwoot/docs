---
title: "Webhook Events"
---

Chatwoot publishes various events to the configured webhook endpoints. If you want to configure a webhook, refer to the guide [here](/docs/product/features/webhooks).

Each event has its payload structure based on the type of model they are acting on. The following section describes the main objects we use in Chatwoot and their attributes.

## Objects

An event can contain any of the following objects as a payload. Different types of objects supported in Chatwoot are as follows.

### Account

The following payload will be returned for an account.

```json
{
  "id": "integer",
  "name": "string"
}
```

### Inbox

The following payload will be returned for an inbox.

```json
{
  "id": "integer",
  "name": "string"
}
```

### Contact

The following payload will be returned for a contact.

```json
{
  "id": "integer",
  "name": "string",
  "avatar": "string",
  "type": "contact",
  "account": {
    // <...Account Object>
  }
}
```

### User

The following payload will be returned for an agent/admin.

```json
{
  "id": "integer",
  "name": "string",
  "email": "string",
  "type": "user"
}
```

### Conversation

The following payload will be returned for a conversation.

```json
{
  "additional_attributes": {
    "browser": {
      "device_name": "string",
      "browser_name": "string",
      "platform_name": "string",
      "browser_version": "string",
      "platform_version": "string"
    },
    "referer": "string",
    "initiated_at": {
      "timestamp": "iso-datetime"
    }
  },
  "can_reply": "boolean",
  "channel": "string",
  "id": "integer",
  "inbox_id": "integer",
  "contact_inbox": {
    "id": "integer",
    "contact_id": "integer",
    "inbox_id": "integer",
    "source_id": "string",
    "created_at": "datetime",
    "updated_at": "datetime",
    "hmac_verified": "boolean"
  },
  "messages": ["Array of message objects"],
  "meta": {
    "sender": {
      // Contact Object
    },
    "assignee": {
      // User Object
    }
  },
  "status": "string",
  "unread_count": "integer",
  "agent_last_seen_at": "unix-timestamp",
  "contact_last_seen_at": "unix-timestamp",
  "timestamp": "unix-timestamp",
  "account_id": "integer"
}
```

### Message

```json
{
  "id": "integer",
  "content": "string",
  "message_type": "integer",
  "created_at": "unix-timestamp",
  "private": "boolean",
  "source_id": "string / null",
  "content_type": "string",
  "content_attributes": "object",
  "sender": {
    "type": "string - contact/user"
    // User or Contact Object
  },
  "account": {
    // Account Object
  },
  "conversation": {
    // Conversation Object
  },
  "inbox": {
    // Inbox Object
  }
}
```

### A sample webhook payload

```json
{
  "event": "event_name"
  // Attributes related to the event
}
```

## Webhook Events

Chatwoot supports the following webhook events. You can subscribe to them while configuring a webhook in the dashboard or using the API.

### conversation_created

This event will be triggered when a new conversation is created in the account. The payload for the event is as follows.

```json
{
  "event": "conversation_created"
  // <...Conversation Attributes>
}
```

### conversation_updated

This event will be triggered when there is a change in any of the attributes in the conversation.

```json
{
  "event": "conversation_updated",
  "changed_attributes": [
    {
      "<attribute_name>": {
        "current_value": "",
        "previous_value": ""
      }
    }
  ]
  // <...Conversation Attributes>
}
```

### conversation_status_changed

This event will be triggered when the status of the conversation is changed.

Note: If you are using agent bot APIs instead of webhooks, this event is not supported yet.

```json
{
  "event": "conversation_status_changed"
  // <...Conversation Attributes>
}
```

### message_created

This event will be triggered when a message is created in a conversation. The payload for the event is as follows.

```json
{
  "event": "message_created"
  // <...Message Attributes>
}
```

### message_updated

This event will be triggered when a message is updated in a conversation. The payload for the event is as follows.

```json
{
  "event": "message_updated"
  // <...Message Attributes>
}
```

### webwidget_triggered

This event will be triggered when the end-user opens the live-chat widget.

```json
{
  "id": ,
  "contact": {
    // <...Contact Object>
  },
  "inbox": {
    // <...Inbox Object>
  },
  "account": {
    // <...Account Object>
  },
  "current_conversation": {
    // <...Conversation Object>
  },
  "source_id": "string",
  "event": "webwidget_triggered",
  "event_info": {
    "initiated_at": {
      "timestamp": "date-string"
    },
    "referer": "string",
    "widget_language": "string",
    "browser_language": "string",
    "browser": {
      "browser_name": "string",
      "browser_version": "string",
      "device_name": "string",
      "platform_name": "string",
      "platform_version": "string"
    }
  }
}
```
