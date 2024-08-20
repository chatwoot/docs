---
title: "Chatwoot Platform APIs"
---

# Chatwoot Platform APIs

The Chatwoot Platform APIs allow you to integrate a conversation management interface into your existing software stack. Installation admins can use these APIs to manage users, accounts, and roles. Additionally, these APIs can be used to sync authentication information from external systems into Chatwoot.

> **Note:** These APIs are available only on `self-hosted` Chatwoot installations.

## Creating a Platform App

To create a platform app, follow these steps:

1. Go to the super admin portal and navigate to `super_admin/platform_apps`.

   ![Super Admin Portal](./images/platform-app/super_admin.png)

2. Click on the "New platform app" button.

   ![Platform Apps Home](./images/platform-app/platform-home.png)

3. Fill in the platform app name and click the "Create" button.

   ![Create Platform App](./images/platform-app/platform-create.png)

4. After creating the platform app, open it to view and copy the access token.

   ![Platform App Access Token](./images/platform-app/platform-access-token.png)

## Using the Access Token

The `access_token` is required to authenticate all API requests. Please use the Postman collection to test these APIs.

### Testing the APIs

To test the APIs:

1. Copy the access token from the platform app.
2. Use it in the `Authorization` header of your API requests.

Here's an example of creating a user using the API:

![Create User API](./images/platform-app/create-user.png)

Similarly, you can create `Account` and `Role` entities using the APIs.

## Reference

For more detailed information and to test the APIs, refer to our [Postman Collection](https://www.postman.com/chatwoot/workspace/chatwoot-apis/collection/162770-e5451b69-9f97-489b-b352-4ca7d8d82aff).
