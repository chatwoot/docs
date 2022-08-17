---
title: "Chatwoot APIs"
---

Chatwoot provides three types of APIs. This distinction is primarily based on the specific use cases for which these APIs are designed.

1. [Application APIs](#application-apis)
2. [Client APIs](#client-apis)
3. [Platform APIs](#platform-apis)

Ref: [Chatwoot API Docs](https://www.chatwoot.com/developers/api/)

## Application APIs

Application APIs are designed to interact with a Chatwoot account from a user's perspective. These APIs will help in building integrations for the support agents, 
bulk import/export of data into a Chatwoot account etc.

To authenticate to this API, you will require a user `access_token`, which can be obtained from `profile_settings` after logging into your Chatwoot account.
These APIs are available on both `cloud` and `self-hosted` Chatwoot Accounts.

Ref: [Postman Collection](https://www.postman.com/chatwoot/workspace/chatwoot-apis/collection/162770-a7462388-50fd-4035-9bfc-5750f91c00cd)

### Example Implementations
- https://github.com/chatwoot/google-cloud-functions-demo

## Client APIs

The client APIs allow users to build custom conversational interfaces over Chatwoot. Not happy with the native Chatwoot Website widget? Want to create a customer Chat support option right into your mobile app? Client APIs are here to help.

Client APIs use a combination of `inbox_identifier` and `contact_identifier` for authentication. The `inbox_identifier` can be obtained from the Settings->Configuration of API inboxes in Chatwoot. The `contact_identifier` can be obtained from the server on successful contact Create API requests, which can be cached to perform subsequent requests on behalf of the contact.

These APIs are available on both `cloud` and `self-hosted` Chatwoot Accounts.

Ref: [Postman Collection](https://www.postman.com/chatwoot/workspace/chatwoot-apis/collection/162770-9b283c34-96a9-494f-bb52-c5c6ab864a4a)

### Example Implementations
- https://github.com/chatwoot/client-api-demo
- https://github.com/chatwoot/chatwoot-flutter-sdk

## Platform APIs 

The installation admin can use these APIs to manage users, accounts, and roles. These APIs could also be used to sync auth information from external systems into chatwoot. These APIs are particularly helpful if you plan to build a conversation management interface into your existing software stack.

To authenticate these APIs, you must have an `access_token` issued on behalf of a `Platform app`. You can create a Platform App from [Super Admin Console](/docs/self-hosted/monitoring/super-admin-sidekiq/). The access_token can also be obtained from the `Access Tokens` tab in [Super Admin Console](/docs/self-hosted/monitoring/super-admin-sidekiq/).

These APIs are available on `self-hosted` Chatwoot installations.

Ref: [Postman Collection](https://www.postman.com/chatwoot/workspace/chatwoot-apis/collection/162770-e5451b69-9f97-489b-b352-4ca7d8d82aff)
