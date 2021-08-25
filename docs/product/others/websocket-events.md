---
title: "Websocket Events"
---

To subscribe to various events happening in your chatwoot installation in realtime, You can connect to the Chatwoot WebSockets. 
Chatwoot WebSockets connection can be made at the following URL

```
<your installation url>/cable
```

## Authenticating your WebSocket connection 
You will start receiving the events directed towards your customer after subscribing using the customer `pubsub_token`.
You will start receiving the events directed towards your agents after subscribing using the user `pubsub_token`.

Also refer [Client APIs](/docs/product/channels/api/client-apis) to build real time customer facing integrations using chatwoot.

### Example
```js
const connection = new WebSocket('ws://localhost:3000/cable');
connection.send(JSON.stringify({ command:"subscribe", identifier: "{\"channel\":\"RoomChannel\",\"pubsub_token\":\""+ customer_pubsub_token+"\"}" }));
```

## Publishing Presence to the websocket server

Publish the appropriate payloads back to the websocket server at `30 second` intervals to keep the online presence updated in chatwoot.

### Agent presence
```json
{
	"command": "message",
	"identifier": "{\"channel\":\"RoomChannel\",\"pubsub_token\":\"token\",\"account_id\":1,\"user_id\":1}",
	"data": "{\"action\":\"update_presence\"}"
}
```

### Contact Presence
```json
 {
	"command": "message",
	"identifier": "{\"channel\":\"RoomChannel\",\"pubsub_token\":\"token\"}",
	"data": "{\"action\":\"update_presence\"}"
}
```

## Websocket Event payload samples

Here are example payloads of various websocket events in chatwoot

### conversation_created
> Available for: Agents

```json
{
	"identifier": "{\"channel\":\"RoomChannel\",\"pubsub_token\":\"token\",\"account_id\":1,\"user_id\":1}",
	"message": {
		"event": "conversation.created",
		"data": {
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
					"timestamp": "Fri Jul 23 2021 22:43:14 GMT+0530 (India Standard Time)"
				}
			},
			"can_reply": true,
			"channel": "Channel::WebWidget",
			"id": 7,
			"inbox_id": 1,
			"contact_inbox": {
				"id": 8,
				"contact_id": 10,
				"inbox_id": 1,
				"source_id": "4f5c785e-abba-4527-82a9-bbdb2117c167",
				"created_at": "2021-07-23T17:08:53.771Z",
				"updated_at": "2021-07-23T17:08:53.771Z",
				"hmac_verified": false
			},
			"messages": [],
			"meta": {
				"sender": {
					"additional_attributes": {},
					"custom_attributes": {},
					"email": null,
					"id": 10,
					"identifier": null,
					"name": "white-shadow-394",
					"phone_number": null,
					"pubsub_token": "token",
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
			"unread_count": 0,
			"agent_last_seen_at": 0,
			"contact_last_seen_at": 0,
			"timestamp": 1627060394,
			"account_id": 1
		}
	}
}
```

### conversation_read
> Available for: Agents

```json
{
	"identifier": "{\"channel\":\"RoomChannel\",\"pubsub_token\":\"token\",\"account_id\":1,\"user_id\":1}",
	"message": {
		"event": "conversation.read",
		"data": {
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
					"timestamp": "Fri Jul 23 2021 22:58:28 GMT+0530 (India Standard Time)"
				}
			},
			"can_reply": true,
			"channel": "Channel::WebWidget",
			"id": 9,
			"inbox_id": 1,
			"contact_inbox": {
				"id": 11,
				"contact_id": 12,
				"inbox_id": 1,
				"source_id": "d45c0005-2429-4079-bbc2-6ade8bdb2866",
				"created_at": "2021-07-23T17:28:24.996Z",
				"updated_at": "2021-07-23T17:28:40.864Z",
				"hmac_verified": false
			},
			"messages": [{
				"id": 117,
				"content": "helllo",
				"account_id": 1,
				"inbox_id": 1,
				"conversation_id": 9,
				"message_type": 1,
				"created_at": 1627061456,
				"updated_at": "2021-07-23T17:30:56.000Z",
				"private": false,
				"status": "sent",
				"source_id": null,
				"content_type": null,
				"content_attributes": {},
				"sender_type": "User",
				"sender_id": 1,
				"external_source_ids": {},
				"sender": {
					"id": 1,
					"name": "John",
					"available_name": "John",
					"avatar_url": "https://www.gravatar.com/avatar/0d722ac7bc3b3c92c030d0da9690d981?d=404",
					"type": "user",
					"availability_status": "online"
				}
			}],
			"meta": {
				"sender": {
					"additional_attributes": {},
					"custom_attributes": {},
					"email": "jane@acme.inc",
					"id": 12,
					"identifier": null,
					"name": "jane",
					"phone_number": null,
					"pubsub_token": "token",
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
			"agent_last_seen_at": 1627061456,
			"contact_last_seen_at": 1627061467,
			"timestamp": 1627061456,
			"account_id": 1
		}
	}
}
```

### message_created
> Available for: Agents & Contacts

```json
{
	"identifier": "{\"channel\":\"RoomChannel\",\"pubsub_token\":\"token\",\"account_id\":1,\"user_id\":1}",
	"message": {
		"event": "message.created",
		"data": {
			"id": 106,
			"content": "hi",
			"account_id": 1,
			"inbox_id": 1,
			"conversation_id": 7,
			"message_type": 0,
			"created_at": 1627060394,
			"updated_at": "2021-07-23T17:13:14.000Z",
			"private": false,
			"status": "sent",
			"source_id": null,
			"content_type": "text",
			"content_attributes": {},
			"sender_type": "Contact",
			"sender_id": 10,
			"external_source_ids": {},
			"sender": {
				"additional_attributes": {},
				"custom_attributes": {},
				"email": null,
				"id": 10,
				"identifier": null,
				"name": "white-shadow-394",
				"phone_number": null,
				"pubsub_token": "token",
				"thumbnail": "",
				"type": "contact"
			}
		}
	}
}
```

### message_updated
> Available for: Agents & Contacts

```json
{
	"identifier": "{\"channel\":\"RoomChannel\",\"pubsub_token\":\"token\",\"account_id\":1,\"user_id\":1}",
	"message": {
		"event": "message.updated",
		"data": {
			"id": 111,
			"content_type": "input_email",
			"content_attributes": {
				"submitted_email": "jane@acme.inc"
			},
			"account_id": 1,
			"inbox_id": 1,
			"conversation_id": 8,
			"content": "Get notified by email",
			"message_type": 3,
			"created_at": 1627060984,
			"updated_at": "2021-07-23T17:23:14.000Z",
			"private": false,
			"status": "sent",
			"source_id": null,
			"sender_type": null,
			"sender_id": null,
			"external_source_ids": {}
		}
	}
}
```


### conversation_status_changed
> Available for: Agents & Contacts

```json
{
	"identifier": "{\"channel\":\"RoomChannel\",\"pubsub_token\":\"token\",\"account_id\":1,\"user_id\":1}",
	"message": {
		"event": "conversation.status_changed",
		"data": {
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
					"timestamp": "Fri Jul 23 2021 22:43:14 GMT+0530 (India Standard Time)"
				}
			},
			"can_reply": true,
			"channel": "Channel::WebWidget",
			"id": 7,
			"inbox_id": 1,
			"contact_inbox": {
				"id": 8,
				"contact_id": 10,
				"inbox_id": 1,
				"source_id": "4f5c785e-abba-4527-82a9-bbdb2117c167",
				"created_at": "2021-07-23T17:08:53.771Z",
				"updated_at": "2021-07-23T17:08:53.771Z",
				"hmac_verified": false
			},
			"messages": [{
				"id": 107,
				"content": "sfdfd",
				"account_id": 1,
				"inbox_id": 1,
				"conversation_id": 7,
				"message_type": 0,
				"created_at": 1627060756,
				"updated_at": "2021-07-23T17:19:16.000Z",
				"private": false,
				"status": "sent",
				"source_id": null,
				"content_type": "text",
				"content_attributes": {},
				"sender_type": "Contact",
				"sender_id": 10,
				"external_source_ids": {},
				"sender": {
					"additional_attributes": {},
					"custom_attributes": {},
					"email": null,
					"id": 10,
					"identifier": null,
					"name": "white-shadow-394",
					"phone_number": null,
					"pubsub_token": "token",
					"thumbnail": "",
					"type": "contact"
				}
			}],
			"meta": {
				"sender": {
					"additional_attributes": {},
					"custom_attributes": {},
					"email": null,
					"id": 10,
					"identifier": null,
					"name": "white-shadow-394",
					"phone_number": null,
					"pubsub_token": "token",
					"thumbnail": "",
					"type": "contact"
				},
				"assignee": {
					"id": 1,
					"name": "John",
					"available_name": "John",
					"avatar_url": "https://www.gravatar.com/avatar/0d722ac7bc3b3c92c030d0da9690d981?d=404",
					"type": "user",
					"availability_status": "offline"
				}
			},
			"status": "pending",
			"unread_count": 0,
			"agent_last_seen_at": 1627060756,
			"contact_last_seen_at": 0,
			"timestamp": 1627060756,
			"account_id": 1
		}
	}
}
```

### conversation_typing_on
> Available for: Agents & Contacts

```json
{
	"identifier": "{\"channel\":\"RoomChannel\",\"pubsub_token\":\"token\",\"account_id\":1,\"user_id\":1}",
	"message": {
		"event": "conversation.typing_on",
		"data": {
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
						"timestamp": "Fri Jul 23 2021 22:43:14 GMT+0530 (India Standard Time)"
					}
				},
				"can_reply": true,
				"channel": "Channel::WebWidget",
				"id": 7,
				"inbox_id": 1,
				"contact_inbox": {
					"id": 8,
					"contact_id": 10,
					"inbox_id": 1,
					"source_id": "4f5c785e-abba-4527-82a9-bbdb2117c167",
					"created_at": "2021-07-23T17:08:53.771Z",
					"updated_at": "2021-07-23T17:08:53.771Z",
					"hmac_verified": false
				},
				"messages": [{
					"id": 106,
					"content": "hi",
					"account_id": 1,
					"inbox_id": 1,
					"conversation_id": 7,
					"message_type": 0,
					"created_at": 1627060394,
					"updated_at": "2021-07-23T17:13:14.000Z",
					"private": false,
					"status": "sent",
					"source_id": null,
					"content_type": "text",
					"content_attributes": {},
					"sender_type": "Contact",
					"sender_id": 10,
					"external_source_ids": {},
					"sender": {
						"additional_attributes": {},
						"custom_attributes": {},
						"email": null,
						"id": 10,
						"identifier": null,
						"name": "white-shadow-394",
						"phone_number": null,
						"pubsub_token": "token",
						"thumbnail": "",
						"type": "contact"
					}
				}],
				"meta": {
					"sender": {
						"additional_attributes": {},
						"custom_attributes": {},
						"email": null,
						"id": 10,
						"identifier": null,
						"name": "white-shadow-394",
						"phone_number": null,
						"pubsub_token": "token",
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
				"unread_count": 0,
				"agent_last_seen_at": 1627060549,
				"contact_last_seen_at": 0,
				"timestamp": 1627060394
			},
			"user": {
				"additional_attributes": {},
				"custom_attributes": {},
				"email": null,
				"id": 10,
				"identifier": null,
				"name": "white-shadow-394",
				"phone_number": null,
				"pubsub_token": "token",
				"thumbnail": "",
				"type": "contact"
			},
			"account_id": 1
		}
	}
}
```

### conversation_typing_off
> Available for: Agents & Contacts

```json
{
	"identifier": "{\"channel\":\"RoomChannel\",\"pubsub_token\":\"token\",\"account_id\":1,\"user_id\":1}",
	"message": {
		"event": "conversation.typing_off",
		"data": {
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
						"timestamp": "Fri Jul 23 2021 22:43:14 GMT+0530 (India Standard Time)"
					}
				},
				"can_reply": true,
				"channel": "Channel::WebWidget",
				"id": 7,
				"inbox_id": 1,
				"contact_inbox": {
					"id": 8,
					"contact_id": 10,
					"inbox_id": 1,
					"source_id": "4f5c785e-abba-4527-82a9-bbdb2117c167",
					"created_at": "2021-07-23T17:08:53.771Z",
					"updated_at": "2021-07-23T17:08:53.771Z",
					"hmac_verified": false
				},
				"messages": [{
					"id": 106,
					"content": "hi",
					"account_id": 1,
					"inbox_id": 1,
					"conversation_id": 7,
					"message_type": 0,
					"created_at": 1627060394,
					"updated_at": "2021-07-23T17:13:14.000Z",
					"private": false,
					"status": "sent",
					"source_id": null,
					"content_type": "text",
					"content_attributes": {},
					"sender_type": "Contact",
					"sender_id": 10,
					"external_source_ids": {},
					"sender": {
						"additional_attributes": {},
						"custom_attributes": {},
						"email": null,
						"id": 10,
						"identifier": null,
						"name": "white-shadow-394",
						"phone_number": null,
						"pubsub_token": "token",
						"thumbnail": "",
						"type": "contact"
					}
				}],
				"meta": {
					"sender": {
						"additional_attributes": {},
						"custom_attributes": {},
						"email": null,
						"id": 10,
						"identifier": null,
						"name": "white-shadow-394",
						"phone_number": null,
						"pubsub_token": "token",
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
				"unread_count": 0,
				"agent_last_seen_at": 1627060549,
				"contact_last_seen_at": 0,
				"timestamp": 1627060394
			},
			"user": {
				"additional_attributes": {},
				"custom_attributes": {},
				"email": null,
				"id": 10,
				"identifier": null,
				"name": "white-shadow-394",
				"phone_number": null,
				"pubsub_token": "token",
				"thumbnail": "",
				"type": "contact"
			},
			"account_id": 1
		}
	}
}
```

### assignee_changed
> Available for: Agents

```json
{
	"identifier": "{\"channel\":\"RoomChannel\",\"pubsub_token\":\"token\",\"account_id\":1,\"user_id\":1}",
	"message": {
		"event": "assignee.changed",
		"data": {
			"additional_attributes": {
				"browser": {
					"browser_name": "Chrome",
					"browser_version": "92.0.4515.107",
					"device_name": "Unknown",
					"platform_name": "macOS",
					"platform_version": "10.15.7"
				},
				"referer": "http://localhost:3000/widget_tests",
				"initiated_at": {
					"timestamp": "Fri Jul 23 2021 22:43:14 GMT+0530 (India Standard Time)"
				}
			},
			"can_reply": true,
			"channel": "Channel::WebWidget",
			"id": null,
			"inbox_id": 1,
			"contact_inbox": {
				"id": 8,
				"contact_id": 10,
				"inbox_id": 1,
				"source_id": "4f5c785e-abba-4527-82a9-bbdb2117c167",
				"created_at": "2021-07-23T17:08:53.771Z",
				"updated_at": "2021-07-23T17:08:53.771Z",
				"hmac_verified": false
			},
			"messages": [],
			"meta": {
				"sender": {
					"additional_attributes": {},
					"custom_attributes": {},
					"email": null,
					"id": 10,
					"identifier": null,
					"name": "white-shadow-394",
					"phone_number": null,
					"pubsub_token": "token",
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
			"unread_count": 0,
			"agent_last_seen_at": 0,
			"contact_last_seen_at": 0,
			"timestamp": 0,
			"account_id": 1
		}
	}
}
```

### team_changed
> Available for: Agents

```json
{
	"identifier": "{\"channel\":\"RoomChannel\",\"pubsub_token\":\"token\",\"account_id\":1,\"user_id\":1}",
	"message": {
		"event": "team.changed",
		"data": {
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
					"timestamp": "Fri Jul 23 2021 22:53:04 GMT+0530 (India Standard Time)"
				}
			},
			"can_reply": true,
			"channel": "Channel::WebWidget",
			"id": 8,
			"inbox_id": 1,
			"contact_inbox": {
				"id": 10,
				"contact_id": 12,
				"inbox_id": 1,
				"source_id": "0538243e-1223-49e8-a381-a5a8ce250f60",
				"created_at": "2021-07-23T17:22:48.744Z",
				"updated_at": "2021-07-23T17:22:48.744Z",
				"hmac_verified": false
			},
			"messages": [{
				"id": 111,
				"content": "Get notified by email",
				"account_id": 1,
				"inbox_id": 1,
				"conversation_id": 8,
				"message_type": 3,
				"created_at": 1627060984,
				"updated_at": "2021-07-23T17:23:14.000Z",
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
			}],
			"meta": {
				"sender": {
					"additional_attributes": {},
					"custom_attributes": {},
					"email": "jane@acme.inc",
					"id": 12,
					"identifier": null,
					"name": "jane",
					"phone_number": null,
					"pubsub_token": "token",
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
			"agent_last_seen_at": 1627061159,
			"contact_last_seen_at": 0,
			"timestamp": 1627060984,
			"account_id": 1
		}
	}
}
```

### conversation_contact_changed
> Available for: Agents

```json
{
	"identifier": "{\"channel\":\"RoomChannel\",\"pubsub_token\":\"token\",\"account_id\":1,\"user_id\":1}",
	"message": {
		"event": "conversation.contact_changed",
		"data": {
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
					"timestamp": "Fri Jul 23 2021 22:58:28 GMT+0530 (India Standard Time)"
				}
			},
			"can_reply": true,
			"channel": "Channel::WebWidget",
			"id": 9,
			"inbox_id": 1,
			"contact_inbox": {
				"id": 11,
				"contact_id": 13,
				"inbox_id": 1,
				"source_id": "d45c0005-2429-4079-bbc2-6ade8bdb2866",
				"created_at": "2021-07-23T17:28:24.996Z",
				"updated_at": "2021-07-23T17:28:24.996Z",
				"hmac_verified": false
			},
			"messages": [{
				"id": 115,
				"content": "Get notified by email",
				"account_id": 1,
				"inbox_id": 1,
				"conversation_id": 9,
				"message_type": 3,
				"created_at": 1627061309,
				"updated_at": "2021-07-23T17:28:40.000Z",
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
			}],
			"meta": {
				"sender": {
					"additional_attributes": {},
					"custom_attributes": {},
					"email": "jane@acme.inc",
					"id": 12,
					"identifier": null,
					"name": "jane",
					"phone_number": null,
					"pubsub_token": "token",
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
			"agent_last_seen_at": 1627061313,
			"contact_last_seen_at": 0,
			"timestamp": 1627061309,
			"account_id": 1
		}
	}
}
```

### contact_created
> Available for: Agents

```json
{
	"identifier": "{\"channel\":\"RoomChannel\",\"pubsub_token\":\"token\",\"account_id\":1,\"user_id\":1}",
	"message": {
		"event": "contact.created",
		"data": {
			"additional_attributes": {},
			"custom_attributes": {},
			"email": null,
			"id": 1,
			"identifier": null,
			"name": "white-shadow-394",
			"phone_number": null,
			"pubsub_token": "token",
			"thumbnail": "",
			"type": "contact",
			"account_id": 1
		}
	}
}
```

### contact_updated
> Available for: Agents

```json
{
	"identifier": "{\"channel\":\"RoomChannel\",\"pubsub_token\":\"token\",\"account_id\":1,\"user_id\":1}",
	"message": {
		"event": "contact.updated",
		"data": {
			"additional_attributes": {},
			"custom_attributes": {},
			"email": "jane@acme.inc",
			"id": 12,
			"identifier": null,
			"name": "jane",
			"phone_number": null,
			"pubsub_token": "token",
			"thumbnail": "https://www.gravatar.com/avatar/526692031d4bb623b36ae4e340260f13?d=404",
			"type": "contact",
			"account_id": 1
		}
	}
}
```

### presence_update
> Available for: Agents & Contact

```json
# presence event delivered to contacts won't have information about other contacts
{
	"identifier": "{\"channel\":\"RoomChannel\",\"pubsub_token\":\"token\",\"account_id\":1,\"user_id\":1}",
	"message": {
		"event": "presence.update",
		"data": {
			"account_id": 1,
			"users": {
				"1": "online"
			},
			"contacts": {
				"1": "online"
			}
		}
	}
}
```