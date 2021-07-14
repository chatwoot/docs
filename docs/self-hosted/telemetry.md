---
sidebar_label: "Telemetry"
title: "Telemetry"
---

Chatwoot tracks usage of its products which helps the team to improve and deliver better software. You can opt-out of this telemetry at any time.

## **What data is collected**

None of your customer data is ever transmitted by Chatwoot installation. The telemetry data collected by our products are purely usage statics of various software features. 

### On-boarding

Our software onboarding screens may contain optional forms to subscribe to our product newsletters or a callback request. These inputs are completely optional and the user preferences updated in these onboarding steps are completely adhered to.

### Self hosted installations

Chatwoot sends anonymised metadata to our telemetry instance at a defined interval. The following list contains the various attributes in this metadata. 

- Aggregated number various data models like users, accounts, labels, canned responses etc.
- Distribution of inboxes by type.
- Distribution of conversations by inbox type.
- The list of enabled integrations

### Mobile Apps

- Usage events on various feature interactions.

## **How is the data used**

This data will only be used by Chatwoot team for:

- Directly improving the product and identifying the parts of product which are popular.
- Identifying areas with limited usage or where our users get stuck.
- Prioritizing the next set of features to be developed.

## **How is the data collected and who has access**

The telemetry data is stored securely on Chatwoot systems, with appropriate encryptions and access controls in place.

The self-hosted installation interacts with the URLs (hub.chatwoot.com, hub.2.chatwoot.com) every day. Both the URLs are hosted and owned by Chatwoot.

The data can only be accessed by Chatwoot employees who have the appropriate training and access permissions. The data is not shared with any 3rd parties.

## How to opt-out of data collection

If you want to disable telemetry you can do the following.

- **Disable data collection:** Use the environment variable 'DISABLE_TELEMETRY' in the installation. Set it to true to disable the data collection.
- **Disable update email subscription:** While you signup, you have to option to disable the subscription to update emails. If the option is disabled, Chatwoot won't collect the emails.