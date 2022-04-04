---
title: "Use websocket events to get real-time updates"
sidebar_label: "Websocket Events"
---

Websockets creates a persistent connection between the client and the server allowing bi-directional communication. Chatwoot supports a websocket connection to get real-time updates about the events happening on the platform. Any client can connect to the websocket URL in Chatwoot and authorize themselves by providing the token and start receiving the updates. This guide will help you set up a websocket connection with Chatwoot and integrate available events.

**Note:** This is an experimental feature. Documentation can change on every release, and there is no guarantee of backward compatibility. Please make sure that you are using the updated version of the implementation.

## Why should I use a websocket connection?

Suppose you are building a client for Chatwoot. For example, in An Android or iOS Client SDK, where you would need to listen to the latest messages to update the UI without a reload or An extension to the dashboard, if you want to improve an agent's productivity, you might need data in real-time.

## Setup a websocket connection with Chatwoot

To set up a websocket connection with Chatwoot, you need to initiate a connection with the authentication pubsub token provided by Chatwoot. The URL for the connection is `wss://<your-installation-url>/cable`. E.g.: `wss://app.chatwoot.com/cable`.

There are two types of pubsub tokens available in Chatwoot.

1. **User PubSub Token**: This token has the privileges of an agent/admin and would receive all of the events documented below. You can get the pubsub token by calling the [Profile API](https://www.chatwoot.com/developers/api/#operation/fetchProfile).

2. **Contact PubSub Token**: For every contact, Chatwoot would generate a pubsub token for every session they had. You can connect to the websocket using this token to get the updates of the current session. When you create a [contact using the public APIs](https://www.chatwoot.com/developers/api/#tag/Contacts-API), you will receive the `pubsub_token` in the payload. This token only have access to the current session related events, you would only receive the events `conversation.created`, `conversation.status_changed`, `message.created`, `message.updated`, `conversation_typing_on`, `conversation_typing_off` and `presence.update`.

Please refer [Client APIs](/docs/product/channels/api/client-apis) to build real time customer facing integrations using Chatwoot.

Note: This token may be rotated regularly based on your installation type, make sure that you are using the latest token.

### Connect to Chatwoot Websocket

You need to send a command "subscribe" to connect to Chatwoot. It expects a pubSub token, accountId and userId (if using a user token).
Here is an example on how you can connect with Chatwoot.

```js
// Add a helper method to convert JSON to a string
const stringify = (payload = {}) => JSON.stringify(payload);

const pubSubToken = "<contact/user-pub-sub-token>";
const accountId = "<your-account-id-in-integer>";
const userId = "<user-id-in-integer-if-using-user-token>";
const connection = new WebSocket(
  "wss://<your-Chatwoot-installation-host-url>/cable"
);

connection.send(
  stringify({
    command: "subscribe",
    identifier: stringify({
      channel: "RoomChannel",
      pubsub_token: pubSubToken,
      account_id: accountId,
      user_id: userId,
    }),
  })
);

// The expected string in connection.send is of the format:
// {"command":"subscribe","identifier":"{\"channel\":\"RoomChannel\",\"pubsub_token\":\"your-pubsub-token\",\"account_id\": account_id_integer,\"user_id\":user_id_integer }"}
```

### Publishing Presence to the websocket server

To keep your users online is Chatwoot, you can send a presence update event to Chatwoot every 30 seconds. This action would keep the status of the agent/contact to online.

#### Update presence of an agent/admin user

The payload that should be sent to the server for updating the presence of an agent/admin is as follows.

```js
const userPayload = stringify({
  command: "message",
  identifier: stringify({
    channel: "RoomChannel",
    pubsub_token: "<user-pubsub-token>",
    account_id: accountId,
    user_id: userId,
  }),
  data: stringify({ action: "update_presence" }),
});

connection.send(userPayload);
// The expected string in connection.send is of the format:
// {"command":"message","identifier":"{\"channel\":\"RoomChannel\",\"pubsub_token\":\"your-pubsub-token\",\"account_id\": account_id_integer,\"user_id\":user_id_integer ","data":"{\"action\":\"update_presence\"}"}
```

#### Update presence of a contact

The payload that should be sent to the server for updating the presence of a contact is as follows.

```js
const agentPayload = stringify({
  command: "message",
  identifier: stringify({
    channel: "RoomChannel",
    pubsub_token: "<user-pubsub-token>",
  }),
  data: stringify({ action: "update_presence" }),
});

connection.send(agentPayload);
// The expected string in connection.send is of the format:
// {"command":"message","identifier":"{\"channel\":\"RoomChannel\",\"pubsub_token\":\"your-pubsub-token\","data":"{\"action\":\"update_presence\"}"}
```

## Websocket Payload

### Objects

An event can contain any of the following objects as a payload. Different type of objects supported in Chatwoot are as follows.

#### Conversation

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

#### Contact

The following payload will be returned for a contact.

```json
{
  "additional_attributes": "object",
  "custom_attributes": "object",
  "email": "string",
  "id": "integer",
  "identifier": "string or null",
  "name": "string",
  "phone_number": "string or null",
  "thumbnail": "string"
}
```

#### User

The following payload will be returned for an agent/admin.

```json
{
  "id": "integer",
  "name": "string",
  "available_name": "string",
  "avatar_url": "string",
  "availability_status": "string",
  "thumbnail": "string"
}
```

#### Message

```json
{
  "id": "integer",
  "content": "string",
  "account_id": "integer",
  "inbox_id": "integer",
  "message_type": "integer",
  "created_at": "unix-timestamp",
  "updated_at": "datetime",
  "private": "boolean",
  "status": "string",
  "source_id": "string / null",
  "content_type": "string",
  "content_attributes": "object",
  "sender_type": "string",
  "sender_id": "integer",
  "external_source_ids": "object",
  "sender": {
    "type": "string - contact/user"
    // User or Contact Object
  }
}
```

### Identifier

Each event will have an `identifier` attribute which would be of the following format.

```json
{
  "identifier": "{\"channel\":\"RoomChannel\",\"pubsub_token\":\"token\",\"account_id\":id,\"user_id\":user_id}"
}
```

### Message

Each event will have a `message` attribute which we return the event name as well as the data associated with it. To see the list of events, see the documentation below.

## Events

### conversation.created

This event is sent when a new conversation is created. For contact pubsub token subscription, it sends only the events related to the session which pubsub token is associated to.

**Available to**: agent/admin, contact

```json
{
  "message": {
    "event": "conversation.created",
    "data": {
      // Conversation object will be available here
    }
  }
}
```

### conversation.read

This event is sent to the agents/admins who access to the inbox when a message is read by a contact.

**Available to**: agent/admin

```json
{
  "message": {
    "event": "conversation.read",
    "data": {
      // Conversation object will be available here
    }
  }
}
```

### message.created

This event is sent to the agents,admins/contact when a new message is created in a conversation they have access to.

**Available to**: agent/admin, contact

```json
{
  "message": {
    "event": "message.created",
    "data": {
      // Message object will be available here
    }
  }
}
```

### message.updated

This event is sent to the agents,admins/contact when a message is updated in a conversation they have access to.

**Available to**: agent/admin, contact

```json
{
  "message": {
    "event": "message.updated",
    "data": {
      // Message object will be available here
    }
  }
}
```

### conversation.status_changed

This event is sent to the agents,admins/contact when a conversation status is updated.

**Available to**: agent/admin, contact

```json
{
  "message": {
    "event": "conversation.status_changed",
    "data": {
      // Conversation object will be available here
    }
  }
}
```

### conversation.typing_on

This event is sent to the agents,admins/contact when a contact or an agent start typing a response.

**Available to**: agent/admin, contact

```json
{
  "message": {
    "event": "conversation.typing_on",
    "data": {
      "conversation": {
        // Conversation object will be available here
      },
      "user": {
        // Contact / Agent,Admin User object will be available here.
      },
      "is_private": "boolean", // Shows whether the agent is typing a private note or not.
      "account_id": "integer"
    }
  }
}
```

### conversation.typing_off

This event is sent to the agents,admins/contact when a contact or an agent ends typing a response.

**Available to**: agent/admin, contact

```json
{
  "message": {
    "event": "conversation.typing_off",
    "data": {
      "conversation": {
        // Conversation object will be available here
      },
      "user": {
        // Contact / User object will be available here.
      },
      "account_id": "integer"
    }
  }
}
```

### assignee.changed

This event is sent to the agents/admins who have access to the inbox when the assigned is changed.

**Available to**: agent/admin

```json
{
  "message": {
    "event": "assignee.changed",
    "data": {
      // Conversation object will be available here
    }
  }
}
```

### team.changed

This event is sent to the agents/admins who have access to the inbox when the team assignment is changed.

**Available to**: agent/admin

```json
{
  "message": {
    "event": "team.changed",
    "data": {
      // Conversation object will be available here
    }
  }
}
```

### conversation.contact_changed

This event is sent to the agents/admins when a contact is merged. Conversation object will have the new contact reference.

**Available to**: agent/admin

```json
{
  "message": {
    "event": "conversation.contact_changed",
    "data": {
      // Conversation object will be available here
    }
  }
}
```

### contact.created

This event is sent to the agents/admins when a contact is created.

**Available to**: agent/admin

```json
{
  "message": {
    "event": "contact.created",
    "data": {
      // Contact object will be available here
    }
  }
}
```

### contact.updated

This event is sent to the agents/admins when a contact is updated.

**Available to**: agent/admin

```json
{
  "message": {
    "event": "contact.updated",
    "data": {
      // Contact object will be available here
    }
  }
}
```

### presence.update

This event would be available for both agent and the contact, it returns the availability status of the users in the system. The presence event delivered to contacts won't have information about other contacts.

**Available to**: agent/admin

```json
{
  "message": {
    "event": "presence.update",
    "data": {
      "account_id": "integer",
      "users": {
        "user-id": "string"
      },
      "contacts": {
        "contact-id": "string"
      }
    }
  }
}
```

### notification_created

> Available for: Agents

```json
{
	"identifier": "{\"channel\":\"RoomChannel\",\"pubsub_token\":\"token\",\"account_id\":1,\"user_id\":1}",
	"message": {
		"event": "notification.created",
		"data": {
			"notification": {
              // notification object will be available here
			},
			"unread_count": "integer",
			"count": "integer",
		}
	}
}
```
