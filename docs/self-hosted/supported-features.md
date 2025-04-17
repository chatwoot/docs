---
sidebar_label: "Supported features"
title: "Supported features on channels"
---

### Supported message type

<div class="table table-striped">

| Channel   | Incoming/Outgoing message | Activity message |
| --------- | ------------------------- | ---------------- |
| Website   | Yes                       | Yes              |
| Facebook  | Yes                       | Yes              |
| Instagram | Yes                       | Yes              |
| SMS       | Yes                       | Yes              |
| Whatsapp  | Yes                       | Yes              |
| Email     | Yes                       | Yes              |
| Telegram  | Yes                       | Yes              |
| Line      | Yes                       | Yes              |
| API       | Yes                       | Yes              |

</div>

### Maximum message size (number of characters)

<div class="table table-striped">

| Channel            | Maximum message size |
| ------------------ | -------------------- |
| Website            | 10,000               |
| Facebook           | 2000                 |
| Instagram          | 1000                 |
| Twilio SMS         | 320                  |
| Twilio WhatsApp    | 1600                 |
| Whatsapp Cloud     | 4096                 |
| 360Dialog WhatsApp | 1600                 |
| Bandwidth SMS      | 160                  |
| Email              | 25,000               |
| Telegram           | 4096                 |
| Line               | 2000                 |
| API                | 10,000               |

</div>

### Outbound conversation restriction

<div class="table table-striped">

| Channel   | Restriction                                                                                                     |
| --------- | --------------------------------------------------------------------------------------------------------------- |
| Website   | You can create outbound conversations to verified contacts                                                      |
| Facebook  | Cannot create outbound conversations. First message should be from the contact                                  |
| Instagram | Cannot create outbound conversations. First message should be from the contact                                  |
| SMS       | No restriction                                                                                                  |
| Whatsapp  | Cannot send any message other than Whatsapp approved template messages 24 hours after the last incoming message |
| Email     | No restriction                                                                                                  |
| Telegram  | Cannot create outbound conversations. First message should be from the contact                                  |
| Line      | Cannot create outbound conversations. First message should be from the contact                                  |
| API       | No restriction                                                                                                  |

</div>

### Outgoing message restriction

<div class="table table-striped">

| Channel   | Restriction                                                                                                     |
| --------- | --------------------------------------------------------------------------------------------------------------- |
| Website   | No restriction                                                                                                  |
| Facebook  | Cannot send promotional messages 24 hours after the last incoming message (7 days if Human agent enabled)       |
| Instagram | Cannot send promotional messages 24 hours after the last incoming message (7 days if Human agent enabled)       |
| Whatsapp  | Cannot send any message other than Whatsapp approved template messages 24 hours after the last incoming message |
| SMS       | No restriction                                                                                                  |
| Email     | No restriction                                                                                                  |
| Telegram  | No restriction                                                                                                  |
| Line      | No restriction                                                                                                  |
| API       | Custom time depends on Agent reply time window                                                                  |

</div>

### Outgoing message delivery status

<div class="table table-striped">

| Channel            | Sent status | Read status   | Delivered status | Failed status |
| ------------------ | ----------- | ------------- | ---------------- | ------------- |
| Website            | Yes         | Yes           | Yes              | Yes           |
| API                | Yes         | Yes           | Yes              | Yes           |
| Official WhatsApp  | Yes         | Yes           | Yes              | Yes           |
| Twilio WhatsApp    | Yes         | Yes           | Yes              | Yes           |
| 360Dialog WhatsApp | Yes         | Yes           | Yes              | Yes           |
| Twilio SMS         | Yes         | Yes           | Not supported    | Yes           |
| Bandwidth SMS      | Yes         | Yes           | Not supported    | Yes           |
| Facebook           | Yes         | Yes           | Yes              | Yes           |
| Instagram          | Yes         | Not supported | Yes              | Yes           |
| Line               | Yes         | Not supported | Not supported    | Yes           |
| Telegram           | Yes         | Not supported | Not supported    | Yes           |
| Email              | Yes         | Not supported | Not supported    | Not supported |

</div>

### Reply to message

<div class="table table-striped">

| Channel         | Reply to incoming message | Reply to outgoing message |
| --------------- | ------------------------- | ------------------------- |
| Website         | Yes                       | Yes                       |
| Facebook        | Yes                       | No                        |
| Instagram       | Yes                       | No                        |
| SMS             | No                        | No                        |
| Whatsapp Cloud  | Yes                       | Yes                       |
| Twilio WhatsApp | No                        | No                        |
| Email           | No                        | No                        |
| Telegram        | Yes                       | Yes                       |
| Line            | No                        | No                        |
| API             | Yes                       | Yes                       |

</div>

### Outgoing attachments supported file types

<div class="table table-striped">

| Channel             | Audio                          | Image | Video | Document |
| ------------------- | ------------------------------ | ----- | ----- | -------- |
| Website            | All | All  | All | All |
| Facebook            | All | All  | All | All |
| Instagram           | aac, m4a, wav, mp4 (25mb)       | png, jpeg, gif (8mb) | mp4, ogg, avi, mov, web (25mb) | Not supported |
| WhatsApp Cloud          | All | All  | All | All |
| WhatsApp Twilio          | mpeg, opus, ogg, amr(5mb)  | png, jpeg (5mb) | mp4 (5mb) | pdf (5mb) |
| Email             | All | All  | All | All |
| Telegram          | All | All  | All | All |
| Line             | Not supported      | png, jpeg | mp4 | Not supported |
| API            | All | All  | All | All |

> Note: The default maximum file size limit is 40MB.

</div>

### Available features

<div class="table table-striped">

| Channel   | Channel greeting | Attachments | Agent Auto assignment | Slack |
| --------- | ---------------- | ----------- | --------------------- | ----- |
| Website   | Yes              | Yes         | Yes                   | Yes   |
| Facebook  | Yes              | Yes         | Yes                   | Yes   |
| Instagram | Yes              | Yes         | Yes                   | Yes   |
| SMS       | Yes              | No          | Yes                   | Yes   |
| Whatsapp  | Yes              | Yes         | Yes                   | Yes   |
| Email     | Yes              | Yes         | Yes                   | Yes   |
| Telegram  | Yes              | Yes         | Yes                   | Yes   |
| Line      | Yes              | No          | Yes                   | Yes   |
| API       | Yes              | Yes         | Yes                   | Yes   |

</div>
