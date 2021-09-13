---
title: "Add Inbox"
---

An Inbox shows the connection of a website or a Facebook page to Chatwoot. You can have unlimited inboxes in your Chatwoot account.

Inbox can be added to your account in any of the 3 ways as below.  

One way is to click on 'Click here to create an inbox' like in the picutre given below.

<div align="center">

<img src={require('./images/addinboxsettings1.png').default} width="800" alt="Chatwoot Home Screen" />

</div>

Second way to create Inbox is to click on Settings on Chatwoot Dashboard home page and then to Click on Inboxes.  

<div align="center">

<img src={require('./images/addinboxsettings2.png').default} width="800" alt="Chatwoot Home Screen" />

</div>
Click on Inboxes to reach the Inbox screen. Here you can add Inboxes and once added can be viewed here.

<div align="center">

<img src={require('./images/addinboxsettings2a.png').default} width="800" alt="Chatwoot Inbox Screen" />

</div>  

Third way to create Inbox is to click on the '+' button near the Inboxes link on Chatwoot Home Screen itself. 

<div align="center">

<img src={require('./images/addinboxsettings3.png').default} width="800" alt="Chatwoot Home Screen" />

</div>

Click on Add Inbox Button on Top Right Hand Corner of the page.  

<div align="center">

<img src={require('./images/addinboxsettings4.png').default} width="800" alt="Chatwoot Inbox Screen" />

</div>

A screen as given below opens, where Inbox can be added for various Channels. Eg: Website, Facebook, Twitter, Whatsapp, SMS, Email, API, Telegram, and Line. Inboxes would be connected to the front end Widgets placed in Website or other channels. Creation of adding Widget is given in [Setting up Widget](setting-up-chatwootwidget.md).  


<div align="center">

<img src={require('./images/addinboxsettings5.png').default} width="800" alt="Chatwoot Inbox Screen" />

</div>

## Inbox for a Website

Here is an example of how to add an Inbox for a Website.
Click on Website Button.  

<div align="center">

<img src={require('./images/addinboxsettings6.png').default} width="800" alt="Chatwoot Website Inbox" />

</div>

| Field Name               | Value                                                                | Remarks                                                           |
|--------------------------|----------------------------------------------------------------------|-------------------------------------------------------------------|
| Website Name             | Enter Name of your Website                                           | eg: Hopkins Inc.                                                  |
| Website Domain           | Enter the link to your Website                                       | eg: www.hopkins.com                                               |
| Widget Colour            | Select the colour by clicking the pallet                             |                                                                   |
| Welcome Heading          | Give a Greeting with which you  would like to address the customer   | eg: Welcome !                                                     |
| Welcome Tagline          | Give a Tagline representing your  company                            | eg: Welcome to Hopkins !  We are at your service 24x7             |
| Enable Channel Greeting  | Select Enabled or Disabled                                           | Enable to Send Greeting message when customer starts conversation |
| Channel Greeting Message | Give a greeting with which you would  like to start the conversation | eg: Hi. How can we help you?                                       |

Once all details are entered, click on Create Inbox Button.

The Next session will open up to Assign Agents to the Inbox. Only if an Agent is associated with the Inbox, the conversations will be directed to the agent. Even if you are an Administrator, you need to add your name as agent to the Inbox to see the Inbox on your screen.
Select the Agents from the drop-down(if agents have not been added go to [Add Agent](add-agent-settings.md)) and click on Add agents.


<div align="center">

<img src={require('./images/addinboxsettings7.png').default} width="800" alt="Chatwoot Inbox Select Agent Screen" />

</div>


The below screen will open. This screen has the code snippet which can be directly used to install the widget. You can click on Copy button to copy and then [paste in the root code](setting-up-chatwootwidget.md#root-file-of-website) of your website.

<div align="center">

<img src={require('./images/addinboxsettings10.png').default} width="800" alt="Chatwoot Inbox Select Agent Screen" />

</div>  

If you click on 'More settings' Button, you will be taken to Additional Settings for Inbox. If you click on 'Take me there' button you will be taken to the newly created Inbox directly.  

Now if you click on Inboxes link on the home screen, you can see that the new Inbox has been created for use.


<div align="center">

<img src={require('./images/addinboxsettings8.png').default} width="800" alt="Chatwoot Inbox Screen" />

</div>


## Additional Inbox Settings

Click on Settings. Below Session will open up.

<div align="center">

<img src={require('./images/addinboxsettings8a.png').default} width="800" alt="Chatwoot Inbox Details Screen" />

</div>

Do a scroll down to reach the below screen where you can set up the various notifications you would like to recieve when your inbox starts functioning.

<div align="center">

<img src={require('./images/addinboxsettings9.png').default} width="800" alt="Chatwoot Inbox Details Scroll Down Screen" />

</div>

Here, Enable email collect box is Enabled by default. This means an automatic message to collect the e-mail id will be displayed once the customer starts a conversation. Customer/End user will recieve a prompt to enter e-mail id.

Also, there is an option to Enable CSAT. Once you enable this Customer Satisfaction survey will be launched on Resolving each ticket. The CSAT results can be viewed later in Reports section. Click on 'Update' button to save the changes you have made.



### Collaborators

Click on Collaborators. You can add Agents to the Inbox or delete Agents who have been already added in the Inbox in this section.

<div align="center">

<img src={require('./images/collaborators1.png').default} width="800" alt="Chatwoot Inbox Collaborators screen" />

</div>

Click on Update to save the changes.

### Campaigns

Now click on Campaigns tab on the Inbox Settings. In this section you can create 'Campaigns'. Campaigns are similar to advertisements or one liners which will be automatically displayed to the customer or end user. Once the customer visits your site and has not initiated the conversation through the widget for the specified time (say 10 seconds), an automatic message will be displayed to the customer, prompting to begin the conversation. 

<div align="center">

<img src={require('./images/campaigns1.png').default} width="800" alt="Chatwoot Inbox Campaigns screen" />

</div>  

Click on Create a Campaign on the right hand side. Details of the Campaign can be given in the screen which opens up as below.

<div align="center">

<img src={require('./images/campaigns2.png').default} width="800" alt="Chatwoot Campaign details screen" />

</div>

| Field Name            | Value                                                                                        | Remarks                                                                            |
|-----------------------|----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| Title                 | Give a name or Title for your campaign                                                       | Initiate Campaign                                                                  |
| Message               | Give a message to initiate conversation with the customer                                    | We are just a click away                                                           |
| Sent by               | Select the value from the drop down. Bot or agent name can be selcted                        | Whatever is selected here will  be displayed on screen along with campaign message |
| URL                   | Give the URL of the site for which the widget is configured                                  | eg: www.hopkins.com                                                                |
| Time on page(Seconds) | Give the number of seconds after which the campaign message should  be displayed to customer | by default it is 10                                                                |
| Enable campaign       | click on check box if the message needs to be sent on screen after the set time              | if this is disabled, message will  not be sent                                     |

Click on update. The campaign that you have created will appear in the campaign seciton. You can edit or delete the Campaign as per your wish.

<div align="center">

<img src={require('./images/campaigns3.png').default} width="800" alt="Chatwoot campaign created screen" />

</div>

### Pre Chat Form

In the Inbox Settings, click on the tab Pre Chat Form. This is an option to display message to the Customer when the customer clicks on the widget. We can use this to collect name and e-mail address before beginning the chat.

<div align="center">

<img src={require('./images/prechatform2.png').default} width="800" alt="Chatwoot Pre chat form screen" />

</div>

| Field Name                                                                     | Value                                                                     | Remarks                                                            |
|--------------------------------------------------------------------------------|---------------------------------------------------------------------------|--------------------------------------------------------------------|
| Enable pre chat form                                                           | Select Yes or No                                                          | Yes if you want to use the prechat  form. No if you do not want to |
| Pre Chat Message                                                               | Give a message to start conversation  with the customer                   | Hi ..We need some information to serve you better                  |
| Visitors should provide their name  and email address before starting the chat | Tick on the check box if you need the  name and email address mandatorily | This will help us maintain our  contact list better                |

Click on update. Pre Chat Form is enabled now. 

### Business Hours

Click on Business Hours Tab. In this section, you can set working hours of your firm, or working hours when your agents are available online. 


<div align="center">

<img src={require('./images/businesshour1.png').default} width="800" alt="Chatwoot Inbox Business Hours screen" />

</div>

Click on the check box for 'Enable business availability for this inbox' if you have well defined busines hours.
Once the check box is ticked, the below section opens up where you can give your message to the customer during OFF business hours. You can also select the available business hours for each day of the week, along with proper time zone.

<div align="center">

<img src={require('./images/businesshour2.png').default} width="800" alt="Chatwoot Inbox Business Hours Details" />

</div>

Click on Update Business Hour Setting Button.

### Configuration

Click on Configuration. The code snippet to be copied to the website will appear here.

<div align="center">

<img src={require('./images/settingupchatwootwidgeta.png').default} width="800" alt="Chatwoot Inbox Code Snippet for Widget" />

</div>

You can click on 'Copy' button to copy the code and [paste in the root code](setting-up-chatwootwidget.md#root-file-of-website) of your website.  