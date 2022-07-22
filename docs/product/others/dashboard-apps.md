---
title: "Dashboard Apps"
---

Dashboard Apps allow organizations to embed an application inside the Chatwoot dashboard to provide the context for customer support agents. This feature allows you to create an application independently and embed that inside to provide user information, their orders, or their previous payment history.

When you embed your application using the dashboard in Chatwoot, your application will get the context of the conversation and contact as a window event. Implement a listener for the message event on your page to receive the context.

![interactive_messages](./images/dapps.gif)

### How to create a dashboard app

1. Navigate to Settings > Integrations > Dashboard apps
2. Click on "Add new dashboard app"
3. Add your app name and the URL of your app.

### Receiving data from Chatwoot into your app.

Chatwoot will send you the context of the conversation and the contact as a window event. You can listen to it in your app as described below.

```js
window.addEventListener("message", function (event) {
  if (!isJSONValid(event.data)) {
    return;
  }

  const eventData = JSON.parse(event.data);
});
```

## Event Payload

### conversation object

```json
{
  "meta": {
    "sender": {
      "additional_attributes": {
        "description": "string",
        "company_name": "string",
        "social_profiles": {
          "github": "string",
          "twitter": "string",
          "facebook": "string",
          "linkedin": "string"
        }
      },
      "availability_status": "string",
      "email": "string",
      "id": "integer",
      "name": "string",
      "phone_number": "string",
      "identifier": "string",
      "thumbnail": "string",
      "custom_attributes": "object",
      "last_activity_at": "integer"
    },
    "channel": "string",
    "assignee": {
      "id": "integer",
      "account_id": "integer",
      "availability_status": "string",
      "auto_offline": "boolean",
      "confirmed": "boolean",
      "email": "string",
      "available_name": "string",
      "name": "string",
      "role": "string",
      "thumbnail": "string"
    },
    "hmac_verified": "boolean"
  },
  "id": "integer",
  "messages": [
    {
      "id": "integer",
      "content": "Hello",
      "inbox_id": "integer",
      "conversation_id": "integer",
      "message_type": "integer",
      "content_type": "string",
      "content_attributes": {},
      "created_at": "integer",
      "private": "boolean",
      "source_id": "string",
      "sender": {
        "additional_attributes": {
          "description": "string",
          "company_name": "string",
          "social_profiles": {
            "github": "string",
            "twitter": "string",
            "facebook": "string",
            "linkedin": "string"
          }
        },
        "custom_attributes": "object",
        "email": "string",
        "id": "integer",
        "identifier": "string",
        "name": "string",
        "phone_number": "string",
        "thumbnail": "string",
        "type": "string"
      }
    }
  ],
  "account_id": "integer",
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
      "timestamp": "string"
    }
  },
  "agent_last_seen_at": "integer",
  "assignee_last_seen_at": "integer",
  "can_reply": "boolean",
  "contact_last_seen_at": "integer",
  "custom_attributes": "object",
  "inbox_id": "integer",
  "labels": "array",
  "muted": "boolean",
  "snoozed_until": null,
  "status": "string",
  "timestamp": "integer",
  "unread_count": "integer",
  "allMessagesLoaded": "boolean",
  "dataFetched": "boolean"
}
```

### contact object

```json
{
  "additional_attributes": {
    "description": "string",
    "company_name": "string",
    "social_profiles": {
      "github": "string",
      "twitter": "string",
      "facebook": "string",
      "linkedin": "string"
    }
  },
  "availability_status": "string",
  "email": "string",
  "id": "integer",
  "name": "string",
  "phone_number": "+91 9000000001",
  "identifier": "string || null",
  "thumbnail": "+91 9000000001",
  "custom_attributes": {},
  "last_activity_at": "integer"
}
```

### Final Payload
```json
{
  "event": "appContext",
  "data": {
    "conversation": {
      // <...Conversation Attributes>
    },
    "contact": {
      // <...Contact Attributes>
    }
  }
}
```
