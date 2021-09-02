---
title: "Conversation Workflow"
---

The customer initiates a conversation from the website front end - through the widget.

For example: Customer types in 'hi'

<div align="center">

<img src={require('./images/howconversationhappens1.png').default} width="800" alt="Chatwoot Widget Screen" />

</div>

Automated response set in [channel greeting message](add-inbox-settings.md) will immediately be displayed on the screen as a reply.
In addition, two more automated messages will be sent by 'bot' to collect customer's information - email id - for further communication and [record](contacts.md).

### Campaigns

If the customer does not initiate conversation and you have enabled [Campaign message](add-inbox-settings.md#campaigns), the message will be displayed on the screen just above the widget to attract customer attention.

<div align="center">

<img src={require('./images/campaign4.png').default} width="800" alt="Campaign Message Display to End User" />

</div>


### Pre Chat Forms

If we have enabled [Pre Chat forms](add-inbox-settings.md#pre-chat-form) in Inbox, as soon as the customer clicks on chat widget, the message requesting for name and e-mail id will appear on screen as below.

<div align="center">

<img src={require('./images/prechatform.png').default} width="800" alt="Chatwoot Widget Pre Chat Form " />

</div>


Now let us look at how this message is captured in the Agent Dashboard.

### Conversations

Go to the home screen of Chatwoot Agent Dashboard

<div align="center">

<img src={require('./images/howconversationhappens2.png').default} width="800" alt="Chatwoot Dashboard Home Screen" />

</div>

Click on Conversations. Then click on All. The conversation which the customer has initiated can be seen here.

<div align="center">

<img src={require('./images/howconversationhappens3.png').default} width="800" alt="Conversations Screen" />

</div>

The details of the conversation open up in the right-hand side panel.

### Assign Agent

If the inbox has been created with 'auto assign' not clicked, the conversation will not be automatically assigned to any agent.
Click on the drop-box below Assigned Agent and select the Agent name. You can change the agents assigned here at any time.

<div align="center">

<img src={require('./images/howconversationhappens5.png').default} width="800" alt="Assign Agent to Conversation Drop Down" />

</div>

### Assign Team

Click on the drop-box below Assigned Team and select the team to which this conversation belongs.

<div align="center">

<img src={require('./images/howconversationhappens6.png').default} width="800" alt="Assign Team to Conversation Drop Down " />

</div>

### Assign Labels

Click on Add Labels below Conversation Labels and select the category to which this conversation belongs.

<div align="center">

<img src={require('./images/howconversationhappens7.png').default} width="800" alt="Assign Lable to Converesation Drop Down" />

</div>


You can see in the below screenshot that all actions done by you are seen in the chat window in Agent Dashboard.

<div align="center">

<img src={require('./images/howconversationhappens4.png').default} width="800" alt="Actions done are recorded Chat screen" />

</div>

### Reply for the Conversation

You can reply to the customer's conversation by typing in the Reply area. Shift+enter will enable you to start typing in a new line.

<div align="center">

<img src={require('./images/howconversationhappens8.png').default} width="800" alt="Chat Reply Window" />

</div>

Click on the Send button to send your message to the customer.

Various options are there in the Reply area to enhance the messages.
 <img src={require('./images/howconversationhappens9.png').default} width="50" alt="Emoji Button" /> This Button is to select and include Emoji in the message.
  <img src={require('./images/howconversationhappens10.png').default} width="50" alt="Attachment Button" /> This Button is to select and include attachments in the message.
    <img src={require('./images/howconversationhappens12.png').default} width="50" alt="Rich Text Editor Button" /> This Button enables to use the Rich Text Editor. Additional options appear on the Reply screen as shown below.

<div align="center">

<img src={require('./images/howconversationhappens11.png').default} width="800" alt="Chat Reply Window" />

</div>

Once the message is typed and edited, you need to tick the checkbox to send the message to the customer. Below is an example of how the message will look like when a Rich text editor is used. If you want to go back to normal text, click on the rich text editor button again.


<div align="center">

<img src={require('./images/howconversationhappens13.png').default} width="800" alt="Rich Text Edite Message Screen" />

</div>

###  How to Send Canned Responses

Suppose you wish to include already prepared[[canned responses]](canned-response-settings.md) responses as reply, type '/' and give the short name of the message. An example is given below. Once you type '/', available canned responses will be listed and you can select from these.

<div align="center">

<img src={require('./images/howconversationhappens14.png').default} width="800" alt="Canned Response Selection Window" />

</div>

## Private Chat with Agents

There is an option to discuss the customer's conversation with another fellow agent if you need some more clarification. This option is available just beside the Reply tab, named Private Note.

<div align="center">

<img src={require('./images/howconversationhappens15.png').default} width="800" alt="Private Note Window " />

</div>

Type '@' in the Private Note Window and all agents who have been added to this team will be listed. Select the agent and type in the message that you want to consult with this agent.

<div align="center">

<img src={require('./images/howconversationhappens16.png').default} width="800" alt="Agent Selection Screen" />

</div>

Click on Add Note to send the message. You can see a locked sign on the message that you sent. This message will not be visible to the customer.

<div align="center">

<img src={require('./images/howconversationhappens17.png').default} width="800" alt="Message to Agent Window" />

</div>

The second agent to whom the private chat is addressed, will recieve a notification in his account.

<div align="center">

<img src={require('./images/howconversationhappens18.png').default} width="800" alt="Chatwoot Home Screen" />

</div>

Replies sent by second agent will be visible in your private chat window.
<!-- TODO need to add screen shot here -->
## Delete Message
There is an option to delete the message which you have already sent. Click on the 3 dots(...) beside the sent message.
Option is available to copy or delete the message.
Click on Delete. The message will be deleted.

<div align="center">

<img src={require('./images/howconversationhappens18a.png').default} width="800" alt="Delete Option for Chat Screen" />

</div>

## Sending E-mails

Once the End user has provided their e-mail id through the conversation, Agent can send the chat conversation in email to the customer.
The email ID will be listed against the name of the Customer in the details window. The email ID will be automatically added to the Contacts also.
<div align="center">

<img src={require('./images/howconversationhappens18b.png').default} width="800" alt="Customer email ID display screen" />

</div>

Click on the 3 dots on the top right hand side of the screen. There is an option to send transcript. Click on it.

<div align="center">

<img src={require('./images/howconversationhappens18c.png').default} width="800" alt="Customer email ID display screen" />

</div>

A screen opens up with first option as 'Send the transcript to assinged agent' and second option as 'Send the transcript to another email address'.  

<div align="center">

<img src={require('./images/howconversationhappens18d.png').default} width="800" alt="Send Transcript options" />

</div>

An email can be send to agents in the team by selecting the first option. By selecting second option, and giving the email Id of the end user, the chat transcript can be send to the customer.

<div align="center">

<img src={require('./images/howconversationhappens18e.png').default} width="800" alt="Send Transcript to Customer Option" />

</div>

Click on Submit. A message will be displayed "The chat transcript was sent successfully". The End user will recieve the chat transcript in his email inbox.

## Sending Emails from Widget  

Once the conversation has been marked as 'Resolved' by the agent, an option will appear on the Chatwoot Widget as 'Request a conversation transcript'. Customer can click on this and record the conversation in email. 

<div align="center">

<img src={require('./images/sendingemailsfromwidget.png').default} width="800" alt="Chatwoot widget Send Transcript to Customer Option" />

</div>

If the Customer clicks on this, an email will be sent to Customer and a message will be displayed on top of the Widget as 'The chat transcript was sent successfully' 

<div align="center">

<img src={require('./images/sendingemailsfromwidget1.png').default} width="800" alt="Chatwoot widget email sent message screen" />

</div>

## Transfering Agents

You can transfer the ticket/issue to another agent by selecting a different agent from [Assign Agent option](conversation-workflow.md#assign-agent). The whole conversation will be visible to the newly selected agent.

## Setting Reminders and Status

The status can be changed to 'Resolved' once the solution is conveyed to the customer.

<div align="center">

<img src={require('./images/howconversationhappens19.png').default} width="800" alt="Chatwoot Conversation Screen" />

</div>

The options are given below

| Options                 | Actions                                                                                        |
|-------------------------|------------------------------------------------------------------------------------------------|
| Mark as Pending         | Change the issue to Pending status                                                             |
| Resolve                 | Change the issue to Close status                                                               |
| Reopen                  | Change the issue to Open status                                                                |
| Open                    | Change the pending issue to Open status                                                        |
| Snooze Until Next Reply | The issue will be set aside for now and status will change to open on next reply from customer |
| Snooze Until Tomorrow   | The issue will be set aside for now and status will change to open on next day                 |
| Snooze Until Next Week  | The issue will be set aside for now and status will change to open on next week                |

The Conversations can be selected and viewed as per their status on the Conversation section as below.

<div align="center">

<img src={require('./images/howconversationhappens20.png').default} width="800" alt="Conversation Status Section " />

</div>


## CSAT

Once the ticket or conversation is marked as 'Resolved', if the [CSAT option ](reports.md#csat) is enabled, the survey will be sent to customer in the widget as below

<div align="center">

<img src={require('./images/csat1.png').default} width="800" alt="Chatwoot Widget CSAT Screen" />

</div>

The response from the customer can be viewed in CSAT section in Reports.

## Previous Conversations

Once the conversation has been marked as resolved and CSAT has already been obtained - next time the same customer starts a new conversation, the Previous conversation associated with the customer will be shown on the screen. This will help the agent to understand the history of the customer's issue.

<div align="center">

<img src={require('./images/previousconversation1.png').default} width="800" alt="Chatwoot Conversation Window" />

</div>

Click on the name below the Previous Conversation and the details of the past conversation opens up as below. This can be used as reference for the agent.

<div align="center">

<img src={require('./images/previousconversation2.png').default} width="800" alt="Chatwoot Conversation Window" />

</div>

If there has been more than one conversation from the same customer, all will be listed under Previous Conversations. Agent can select which ones to view.
