---
sidebar_label: "Client APIs"
title: 'Create Interfaces using client APIs'
---

> Note: These APIs are still in alpha, and there might be changes in the implementation in future.

Client APIs available for the API channel will help you build customer-facing interfaces for Chatwoot.

These APIs are useful for cases similar to the ones described below.

1. Use a custom chat interface instead of the Chatwoot chat widget
2. Build conversational interfaces into your mobile apps
3. Add Chatwoot to other platforms for which Chatwoot doesn't have an official SDK

## Creating customer objects

You can create and retrieve customer data objects using the `inbox_identifier` and `customer_identifier`.

### Inbox Identifier
The `inbox_identifier` for the API channel can be obtained by running the following command in your rails console.

```
# replace api_inbox_id with your inbox id
Inbox.find(api_inbox_id).channel.identifier
```
### Customer Identifier 
The `customer_identifier` or the `source_id` can be obtained when creating the customer using the [create](https://www.chatwoot.com/developers/api#operation/create-a-contact) API.
You will need to store this identifier on your client-side to make further requests on behalf of the customer. 
This can be done in cookies, local storage etc.

### Available APIs

The Available Client APIs are documented [here](https://www.chatwoot.com/developers/api#tag/Contacts-API).
Some of the things you can do via the APIs are 

- Create, View and Update Contact
- Create and List Conversations
- Create, List and Update Messages

### HMAC Authentication
The Client APIs also support [HMAC Authentication](/docs/product/channels/live-chat/sdk/identity-validation). 
The HMAC token for the Channel can be obtained via running the following on your rails console. 

```
# replace api_inbox_id with your inbox id
Inbox.find(api_inbox_id).channel.hmac_token
```

## Connecting to the Chatwoot WebSockets

To receive the real-time updates from the agent dashboard, You can connect to the Chatwoot WebSockets. 
Chatwoot WebSockets connecting can be made at the following URL
```
<your installation url>/cable
```

### Authenticating your WebSocket connection 
You will start receiving the events directed towards your customer object after subscribing using the customer `pubsub_token`.
`pubsub_token` is provided during the customer create API call. 



#### Example
```js
const connection = new WebSocket('ws://localhost:3000/cable');
connection.send(JSON.stringify({ command:"subscribe", identifier: "{\"channel\":\"RoomChannel\",\"pubsub_token\":\""+ customer_pubsub_token+"\"}" }));
```
Find the full list of events supported by the websockets [here](/docs/product/others/websocket-events).

## Implementation

You can find an example chat interface build over the Client APIs over [here](https://github.com/chatwoot/client-api-demo)
