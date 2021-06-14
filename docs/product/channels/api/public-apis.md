---
sidebar_label: "Public APIs"
title: 'Create Interfaces using public APIs'
---

> note: These APIs are still in alpha and the implementations might change in the future

Public APIs available for the API channel will help you build customer facing interfaces for chatwoot.
These APIs are useful for cases similar to the ones described below.

1. Use a custom chat interface instead of the chatwoot chat widget
2. Build conversational interfaces into your mobile apps
3. Add chatwoot to other platforms for which chatwoot doesn't have an official SDK

## Creating customer objects

You can create and retrieve customer data objects using the `inbox_identifier` and `customer_identifier`.

### Inbox Identifier
The `inbox_identifier` for the API channel can be obtained by running the following command in your rails console.

```
# replace api_inbox_id with your inbox id
Inbox.find(api_inbox_id).channel.identifier
```
### Customer Identifier 
The `customer_identifier` or the `source_id` can be obtained when creating the customer using the [create](#create) API.
You will need to store this identifier on your client side to make further requests on behalf of the customer. 
This can be done in cookies, local storage etc.

### Available APIs
The Available public APIs are documented [here](#docs).
Some of the things you can do via the APIs are 

- Create, View and Update Contact
- Create and List Conversations
- Create, List and Update Messages

### HMAC Authentication
The public APIs also support [HMAC Authentication](docs/product/channels/live-chat/sdk/identity-validation). 
The HMAC token for the Channel can be obtained via running the following on your rails console. 

```
# replace api_inbox_id with your inbox id
Inbox.find(api_inbox_id).channel.hmac_token
```

## Connecting to the Chatwoot websockets

To recieve the realtime updates from the agent dashboard, You can connect to the chatwoot websockets. 
Chatwoot websockets connecting can be made at the following URL
```
<your installation url>/cable
```

### Authenticating your websocket connection 
You will start recieving the events directed towards your customer object after subscribing using the customer `pubsub_token`.
`pubsub_token` is provided during the customer create API call. 

#### Example
```js
var connection = new WebSocket('ws://localhost:3000/cable');
connection.send(JSON.stringify({command:"subscribe", identifier: "{\"channel\":\"RoomChannel\",\"pubsub_token\":\""+ customer_pubsub_token+"\"}" }));
```


## Implementation

You can find an example chat interface build over the public APIs over [here](https://github.com/chatwoot/api_channel_demo)