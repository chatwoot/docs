---
sidebar_label: "Pre Chat Form"
title: "Collect the contact/conversation information through a form"
---

Pre chat form is used to collect information about contact/conversation before initiating a conversation. The Pre chat form is available only in website live chat.

There are two types of fields that come under the pre-chat form.

1. **Standard fields**: These are the primary contact fields. E.g., Email, Phone number and Full name.

2. **Custom fields**: These are the fields that are created via [custom attributes](/docs/user-guide/features/custom-attributes)

All the fields would be displayed under the pre-chat form settings by default. The admin will be able to do the following.

- Enable/disable fields
- Change the order of fields
- Update label/placeholder
- Enable/Disable validation

<img src={require('./images/pre-chat-form/pre-chat-settings.png').default} alt="pre-chat-settings" />

The fields shown in the table are described below.

| Field Name  | Description                                                   |
| ----------- | ------------------------------------------------------------- |
| Key         | Field unique identifier                                       |
| Type        | Type of the field (Text, List, Number, Date, Link, Boolean)   |
| Required    | Is the field required or not                                  |
| Label       | The label that will be displayed to the visitor on the widget |
| Placeholder | The placeholder value                                         |

Once the pre-chat form is enabled, it would show a form like the one below when someone starts a conversation.

<img src={require('./images/pre-chat-form/widget-pre-chat-form.png').default} alt="widget-pre-chat-form" width="300" />
