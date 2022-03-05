---
sidebar_label: "Twitter App"
title: "Twitter App Setup"
---

Twitter channel with Chatwoot requires access to Twitter APIs. We are using Account Activity API. If you don't have an access to Twitter Business APIs, apply for one at [Twitter developer portal](https://developer.twitter.com/en/apply-for-access).

Once your application is approved, you will be able to add Twitter Apps and dev environments. If you have applied for a team account, you will able to invite more team members. Inorder for the channel to work you will have to set the following environment variables. We will describe what it means in the following sections.

```bash
TWITTER_APP_ID=
TWITTER_CONSUMER_KEY=
TWITTER_CONSUMER_SECRET=
TWITTER_ENVIRONMENT=
```

## 1. Twitter standalone App

One way to handle twitter api is through standlone app, for this we don't have to add any project to create this app,

### Create a Twitter App

Go to [Projects & Apps Overview Console](https://developer.twitter.com/en/portal/projects-and-apps) in Twitter Developer Portal. Go to "Standalone Apps" section. Click on "Create App" button.

<img src={require('./images/twitter/standalone-app.png').default} width="400" alt="standalone" border="1px, 1px, 1px, 1px" />

Provide an app name and click on "Next".

<img src={require('./images/twitter/name-your-app.png').default} width="450" alt="name-your-app" border="1px, 1px, 1px, 1px" />

You will be able to see the `API Key` and `API Secret Key` in the next step. Save this information as it would not available again.

- Use `API Key` as `TWITTER_CONSUMER_KEY` in Chatwoot.
- Use `API Secret Key` as `TWITTER_CONSUMER_SECRET` in Chatwoot.

<img src={require('./images/twitter/add-api-keys.png').default} width="450" alt="add-api-keys" border="1px, 1px, 1px, 1px" />

Hooray! The app is created now. Next step is to enable "Sign in with Twitter" permission.

### Complete profile information

Complete the application profile. See the "App Details" section as shown below. Update the name, logo and description. Use the "APP ID" displayed in the screenshot as `TWITTER_APP_ID` in Chatwoot.

![app-details](./images/twitter/app-details.png)

### Select authentication settings

Currently we have integrated chatwoot API with Twitter API OAuth 1.0, select OAuth 1.0a from the authentication settings page.

<img src={require('./images/twitter/app-oauth-info.png').default} width="450" alt="app-oauth-info" border="1px, 1px, 1px, 1px" />


#### Add app permissions

Head over to the "App Permissions" section by clicking set up button above. Update the permission to "Read and Write and Direct Messages".

<img src={require('./images/twitter/app-permission.png').default} width="450" alt="app-permission" border="1px, 1px, 1px, 1px" />

#### Update general authentication settings

Add the callback url as `{your_chatwoot_installation_url}/twitter/callback`.

<img src={require('./images/twitter/callback-url.png').default} width="450" alt="callback-url" border="1px, 1px, 1px, 1px" />

Complete the rest of the details in the authentication settings and click on "Save".
And it's ready to use. Use all the api keys in your setup.

## 2. Create Twitter api project

There is one more way to create twitter app. instead of standalone app create a project and add the app in the project.

### Add a project details

Add project name, select project type, add project description

#### Click on create project

<img src={require('./images/twitter/create-project.png').default} width="450" alt="create-project" border="1px, 1px, 1px, 1px" />

#### Add project name

<img src={require('./images/twitter/add-project-name.png').default} width="450" alt="add-project-name" border="1px, 1px, 1px, 1px" />

#### Select project type

<img src={require('./images/twitter/select-project-type.png').default} width="450" alt="select-project-type" border="1px, 1px, 1px, 1px" />

#### Add project description

<img src={require('./images/twitter/add-project-details.png').default} width="450" alt="add-project-details" border="1px, 1px, 1px, 1px" />


### App setup

Once you setup the project you move on to the app setup. Select appropriate environment for your self-hosted app according to the status of your application.
Please note this is not the same environment as we setup in chatwoot, we are going to see about `TWITTER_ENVIRONMENT` in later point.

<img src={require('./images/twitter/project-app-name.png').default} width="450" alt="project-app-name" border="1px, 1px, 1px, 1px" />

After this step you should follow the similar step for api key and secret in the step 1, set the app name and go to the next step you will get the api key and api secret keys, save those keys.

- Use `API Key` as `TWITTER_CONSUMER_KEY` in Chatwoot.
- Use `API Secret Key` as `TWITTER_CONSUMER_SECRET` in Chatwoot.


`PS: After you complete Step 1 or Step 2 (both steps are alternative to each other) then move on to the below step to setup the dev environment.`


## Create a dev environment (required)

In order for the DMs and Tweets to work in realtime, you need to set up Account Activity API dev environment as follows. A Twitter development environment is required for **all** installations of Chatwoot.

URL: https://developer.twitter.com/en/account/environments

Head over to Products -> Premium -> Dev Environments. Click on `Set up dev environment`. You will be able to see a form as follows.

<img src={require('./images/twitter/setup-dev-env.jpg').default} width="450" alt="setup-dev-env" border="1px, 1px, 1px, 1px" />

Provide a `Dev Environment Label`, this should be an alphanumeric string. Use the same string as `TWITTER_ENVIRONMENT` in Chatwoot.

![dev-env](./images/twitter/dev-env.png)

Once you do this, you will ready to use Twitter Channels. To connect your Twitter Account, follow this [guide](/docs/product/channels/twitter).
