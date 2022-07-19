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
window.addEventListener('message', function(event) {
  if (!isJSONValid(event.data)) {
    return
  }

  const eventData = JSON.parse(event.data);
})
```

### Event data payload schema

The event data payload is a JSON object with the following properties:

```json
{
  "event": "appContext",
  "data": {
    "conversation": {
      "meta": {
        "sender": {
          "additional_attributes": {
            "description": "",
            "company_name": "",
            "social_profiles": {
              "github": "",
              "twitter": "",
              "facebook": "",
              "linkedin": ""
            }
          },
          "availability_status": "offline",
          "email": "bruce@wayneenterprises.com",
          "id": 113,
          "name": "Bruce Wayne",
          "phone_number": "+91 9000000001",
          "identifier": null,
          "thumbnail": "",
          "custom_attributes": {},
          "last_activity_at": 1653400547
        },
        "channel": "Channel::WebWidget",
        "assignee": {
          "id": 1,
          "account_id": 1,
          "availability_status": "offline",
          "auto_offline": true,
          "confirmed": true,
          "email": "john@acme.inc",
          "available_name": "John",
          "name": "Johhn",
          "role": "administrator",
          "thumbnail": "https://example.com/john.png"
        },
        "hmac_verified": false
      },
      "id": 65,
      "messages": [
        {
          "id": 630,
          "content": "Hello",
          "inbox_id": 1,
          "conversation_id": 65,
          "message_type": 0,
          "content_type": "text",
          "content_attributes": {},
          "created_at": 1653400547,
          "private": false,
          "source_id": null,
          "sender": {
            "additional_attributes": {
              "description": "",
              "company_name": "",
              "social_profiles": {
                "github": "",
                "twitter": "",
                "facebook": "",
                "linkedin": ""
              }
            },
            "custom_attributes": {},
            "email": null,
            "id": 113,
            "identifier": null,
            "name": "Bruce Wayne",
            "phone_number": "",
            "thumbnail": "",
            "type": "contact"
          }
        },
        {
          "id": 631,
          "content": "Give the team a way to reach you.",
          "inbox_id": 1,
          "conversation_id": 65,
          "message_type": 3,
          "content_type": "text",
          "content_attributes": {},
          "created_at": 1653400547,
          "private": false,
          "source_id": null
        }
      ],
      "account_id": 1,
      "additional_attributes": {
        "browser": {
          "device_name": "Unknown",
          "browser_name": "Chrome",
          "platform_name": "macOS",
          "browser_version": "101.0.4951.64",
          "platform_version": "10.15.7"
        },
        "referer": "https://example.com/test",
        "initiated_at": {
          "timestamp": "Tue May 24 2022 19:25:47 GMT+0530 (India Standard Time)"
        }
      },
      "agent_last_seen_at": 1656931524,
      "assignee_last_seen_at": 1656931425,
      "can_reply": true,
      "contact_last_seen_at": 1653400641,
      "custom_attributes": {},
      "inbox_id": 1,
      "labels": [],
      "muted": false,
      "snoozed_until": null,
      "status": "open",
      "timestamp": 1654863629,
      "unread_count": 0,
      "allMessagesLoaded": true,
      "dataFetched": true
    },
    "contact": {
      "additional_attributes": {
        "description": "",
        "company_name": "",
        "social_profiles": {
          "github": "",
          "twitter": "",
          "facebook": "",
          "linkedin": ""
        }
      },
      "availability_status": "offline",
      "email": "bruce@wayneenterprises.com",
      "id": 113,
      "name": "Bruce Wayne",
      "phone_number": "+91 9000000001",
      "identifier": null,
      "thumbnail": "https://example.com/batman.png",
      "custom_attributes": {},
      "last_activity_at": 1653400547
    }
  }
}
```
