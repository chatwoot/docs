---
sidebar_label: "WordPress"
title: "Install Chatwoot live-chat on WordPress websites"
---

[WordPress]([url](https://wordpress.com/)) is a popular Content Management System. If you are hosting your website on WordPress, you can add a Chatwoot live chat widget to it and talk to your visitors in real-time.  

To achieve this, use Chatwoot’s native integration with WordPress. To use Chatwoot live-chat on the WordPress website, follow the steps explained below.

## 1. Download the plugin

Download the Zip file of the latest Chatwoot WordPress plugin from [GitHub]([url](https://github.com/chatwoot/wp-plugin/tags)) as shown below.

![download-zip](./images/wordpress/wordPress-plugin-zip.png)

## 2. Upload the plugin to your WordPress website

Log in to your WordPress account. Navigate to the Admin panel and click on “Plugins” from the sidebar. You will be able to see the "Add New" button.

![add-new-plugin](./images/wordpress/add-new-plugin.png)

You will see an option to upload the plugin, as shown in the screenshot below. Click on “Upload” and select the Zip file downloaded in step 1.

![upload-plugin-zip-file](./images/wordpress/upload-plugin-zip-file.png)

Once the plugin is uploaded, you will see a Success screen with the "Activate Plugin" option, as shown below. Click on "Activate Plugin.”

![activate-plugin](./images/wordpress/activate-plugin.png)

Congrats! The plugin is now installed. To complete the configuration, you need to share the credentials from the Chatwoot app, as shown in the steps below.

![wordpress-plugin-installed](./images/wordpress/wordpress-plugin-installed.png)

## 3. Configure the plugin

Now, you will be able to see “Chatwoot Settings” under your "Settings" menu. Click on that to update the live-chat configuration.

<img src={require('./images/wordpress/chatwoot-settings.png').default} width="300" alt="Chatwoot Settings" />

You will be presented with the Settings screen as shown below. Configure your Chatwoot plugin here to make it work. 

You need to create a Website inbox on your Chatwoot installation. Please refer to this [guide](https://www.chatwoot.com/docs/product/channels/live-chat/create-website-channel) to create a website channel inbox.

<img src={require('./images/wordpress/chatwoot-options.png').default} width="300" alt="Chatwoot options" />

Available website settings are as follows:

| Option | Description |
| -- | -- |
| Chatwoot Website Token / Installation URL | Once you create a website channel inbox in your Chatwoot installation, you will get a script. Token and the URL can be copied as shown below. <img src={require('./images/wordpress/website-inbox.png').default} width="350" alt="Chatwoot Website Settings" /> |
| Widget Design | Chatwoot supports two designs for the live-chat widget, Standard Design, and Expanded Bubble design. You can see the details about it [here](/docs/product/channels/live-chat/sdk/setup#widget-designs). |
| Widget Position | Based on your preference, you can select where to place the live-chat widget on the website. The available options are Left & Right |
| Language | Chatwoot support 30+ languages. The default language is English. |
| Launcher text | This is an optional field. If you use the expanded bubble design, you can use the launcher text to customize the text displayed on the bubble. |

## 4. Verify that the plugin is working correctly

Once you provide the correct values, click on "Save Changes." Then, visit your website and see if the widget appears on the website.

![widget-on-website](./images/wordpress/widget-on-website.png)
