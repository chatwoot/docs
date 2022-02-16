---
title: "Contacts"
---

Contacts section in Chatwoot contains the details of End Users/Customers that you have interacted with using Chatwoot Widget. 
You can consider it as Customer Data Base. 

Click on Contacts on Home Screen.

<div align="center">

<img src={require('./images/homecontacts.png').default} width="800" alt="Chatwoot Home Screen" />

</div>

A Screen will open which will have Contacts(if already added). Or else a blank screen where Contacts can be added.

<div align="center">

<img src={require('./images/emptycontacts.png').default} width="800" alt="Contacts Home Screen" />

</div>

Contacts can be added to the list in 3 ways. One is to add the contact yourself by clicking the New Contact button on the right hand side.

<div align="center">

<img src={require('./images/createnewcontact.png').default} width="800" alt="Add Contact Button Screen" />

</div>

Second way is to collect the contact information through [Pre chat forms](add-inbox-settings.md#pre-chat-form). 

<div align="center">

<img src={require('./images/prechatform1.png').default} width="800" alt="Chatwoot Widget Pre Chat Form" />

</div>

Third way is when the customer enters the email id in the Channel Greeting message. 

<div align="center">

<img src={require('./images/howconversationhappens1.png').default} width="800" alt="Chatwoot Widget Channel Greeting Message screen" />

</div>

Once the contacts are available in your contact list, you can edit the details as and when needed.

### Outbound conversations

You can send outbound conversations from your contact page to the following conversation channels.

- Website ( only to HMAC identified contacts )
- Email
- SMS
- Whatsapp

#### How to send outbound conversation?

1. Click on the outbound conversation icon on the contact page
2. Select the conversation Inbox
3. Fill in the message contents 
4. Click send

<div align="center">

<img src={require('./images/send-outbound-conversations.gif').default} width="800" alt="Sending outbound conversations" />

</div>


### Contacts Notes

Chatwoot has a dedicated page for adding notes to each contact in your directory. This allows you to add notes and important information to a specific contact. You can use this to manually log a call, email, or meeting you had with the customer.

#### How to add a note to a contact?

1. Click on Contacts menu item from the Chatwoot Dashboard.
2. Select a Contact from the list. (Click on the contact name)
3. Write down your note.
4. Click on the "Add" button or press `Cmd + Enter`.

<div align="center">

<img src={require('./images/contact-add-note.gif').default} width="800" alt="Adding notes to your contacts" />

</div>

Chatwoot allows you to format and highlight your notes with Bold, italic and all other other basic formatting options. You can even add numbered or unordered lists.

#### How to delete a contact note?

Simply click on the delete icon on the right side of the note.

<div align="center">

<img src={require('./images/contact-note-delete.png').default} width="800" alt="Delete notes from your contact" />

</div>

### Import Contacts

Chatwoot allows you to bulk import contacts from a CSV file. To import contacts

1. Navigate to Contacts page from the sidebar.
2. Click on the Import button on the top right corner.
3. Select the CSV file you would like to import to chatwoot, here's a sample [CSV file](https://staging.chatwoot.com/downloads/import-contacts-sample.csv) for reference.
4. Click on the Import button to upload the csv file to complete the process.

Here's a quick demo of how the import works.

<div align="center">

<img src={require('./images/contacts-import.gif').default} width="800" alt="Import contacts to chatwoot from a csv file" />

</div>

### Search Contacts

You can search all contacts by entering the name, email id or phone number in the search on top in the Chatwoot contacts screen.

Search currently filters the contacts based on the name, email id or phone number. 

<div align="center">

<img src={require('./images/search-contacts.gif').default} width="800" alt="Search all chatwoot contacts" />

</div>

### Filtering Contacts

Chatwoot let's you apply advanced filters for your contacts. You will have the ability to filter contacts with multiple attributes at once and even query them with AND and OR operators.

Chatwoot offers filtering contacts by the below attributes:

1. Contact Name
2. Contact Email
3. Phone number
4. Contact Identifier
5. Country
6. City

To filter contacts, click on the Filter button on the top right corner of the Chatwoot contacts screen.

<div align="center">

<img src={require('./images/contact-filters.png').default} width="800" alt="Filter all chatwoot contacts" />

</div>


<u>Example</u>

To get all contacts who are not from "USA" and have name containing "John"

1. Set the 1st filter type as "Name", the operator as "Contains" and the value as "John"
2. Click on "Add Filter" button
2. Set the 2nd filter type as "Country" as the filter type, "Not Equal to" as the operator and "United States of America" as the value.
3. Hit Submit, and the contacts list will now be filtered by the above criteria.

<div align="center">

<img src={require('./images/contact-filters-example.png').default} width="800" alt="Filter all chatwoot contacts example" />

</div>

You can apply as many filters as you want, by combining them with AND and OR operators to create complex queries and funnel you list to specific needs.

To clear the filters and go back to the original list, simply click on the "Clear Filters" button in the filters popup.
