---
sidebar_label: "Outlook & Microsoft 365 Email"
title: "Configure an OAuth app for Outlook & Microsoft 365 emails"
---

Microsoft no longer permits the use of username and password to retrieve emails from Outlook & Microsoft 365 accounts. They have deprecated the basic auth option. To enable the Outlook/Microsoft 365 email channel in your self-hosted instance, you must configure an OAuth app.

This guide helps you set up an Entra ID App (formerly Azure Active Directory) and use the credentials in Chatwoot. By doing so, you can authenticate your Outlook/Microsoft 365 account as an email channel.

## Register the app

Note: For a more detailed guide on how to set up the Microsoft Identity platform, please refer to the [here](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app).

To access the Microsoft Entra Admin Center, go to [entra.microsoft.com](https://entra.microsoft.com/) and log in with your Microsoft account. Once logged in, navigate to the Identity section on the left-hand sidebar. In the Identity section, locate the "Applications" menu and click on "App Registrations" from the submenu. On the "App Registrations" page, click on the "New Registration" option. You will be able to see a page as shown below.

![register-an-app](./images/entra/register-an-app.png)

There are three options for supported account types. Ideally, you only need to select "Accounts in any organizational directory" as Chatwoot is generally used for business emails only. However, if you are connecting a personal account, select the second option. If you are using the applications outside your organization, you would need to register your account as a verified publisher.

To configure a redirect URI with the Web platform, use the following URL: `https://<your-instance-url>/microsoft/callback`. Click on register, and your app will be created. You will see a screen as shown below.

![registration-complete](./images/entra/registration-complete.png)

Save the Application (Client) ID. We will configure this as `AZURE_APP_ID` in Chatwoot later.

## Configure the application

To ensure proper functionality of Chatwoot, we need to configure the permissions and update the token configuration as follows.

### API permissions

Click on the "API Permissions" menu under the "Manage" section. By default, this will have [User.Read](http://user.read/) permission.

Click on the "Add permissions" button and add the following permissions from the Delegated permissions menu on Microsoft Graph APIs.

- **email**: To view the user’s email address.
- **profile**: To view the name and picture etc.
- **offline_access**: To retrieve the emails even when you are not using the application.
- **SMTP.Send, Mail.Send:** Send emails using the SMTP AUTH when you reply to customers from the Chatwoot dashboard.
- **IMAP.AccessAsUser.All, Mail.ReadWrite:** Read and write access to mailboxes via IMAP.
- **openid:** Sign users in

![permissions](./images/entra/permissions.png)

### Token Configuration

Now, let's proceed to the Token Configuration to set up "optional claims". Optional claims are a feature in Entra ID that enables you to specify additional pieces of information (claims) to include in the security tokens issued to the application.

In Chatwoot, we use optional claims to minimize duplicate calls and retrieve some information in advance. Click on “Add optional claim” and add the following claims to the application.

![optional-claims.png](./images/entra/optional-claims.png)

### Configure Client Secret

Go to the Certificates & Secrets section to create a Client Secret. Click on the "New Client Secret" button and provide a description. You can also select an expiry time.

*Remember that you will need to regenerate the secret and update it in the Chatwoot environment variables once it expires.*

![add-client-secret](./images/entra/add-client-secret.png)

After clicking on the Add button, a client secret will be generated as shown below.

![client-secret-value](./images/entra/client-secret-value.png)

Save the value somewhere save as you cannot see it after refreshing the page. This would be used `AZURE_APP_SECRET` in Chatwoot.

## Configure environment variables in Chatwoot

After creating the Entra application, you need to configure the application credentials in Chatwoot. There are 2 variables that you need to configure, as shown in the steps above.

- **AZURE_APP_ID:** As seen in the register the app step, use the Application (Client) ID here.
- **AZURE_APP_SECRET:** Use the value obtained in the step configuring the client secret.

After updating the environment variables, restart the Chatwoot service for the changes to take effect. Now, verify if the channel is enabled in the Inbox creation flow. If everything is configured properly, you will see "Microsoft" listed as an email provider in the flow.

![microsoft-channel](./images/entra/microsoft-channel.png)

Voila! That’s it you can now receive the emails in your Chatwoot instance.

## Thoughts on multi-tenancy and going for production

Note that the setup will not work for other emails under a different tenant until you have completed the Microsoft publisher verification process. During the authorization prompt, you will see "unverified" until the application is verified for production.

To test the changes before the app is verified for production, use the Entra ID app registration email address in the Chatwoot channel.

Publisher verification provides app users and organization admins with information about the authenticity of the developer's organization that publishes an app integrating with the Microsoft identity platform. If an app has a verified publisher, it means that Microsoft has verified the authenticity of the organization that publishes the app.

Read the publishing guidelines [here](https://learn.microsoft.com/en-us/entra/identity-platform/howto-convert-app-to-be-multi-tenant).
