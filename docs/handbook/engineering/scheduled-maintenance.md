---
title: 'Scheduled maintenance'
---

Steps to follow when preparing for a planned downtime/scheduled maintenance event.

Communicate. Communicate. Communicate.


## Internal Communication

Make sure all the internal teams are aware of the downtime and possible disruption to their workflow. Once you have confirmation from the internal stakeholders, proceed to let the customers and community know.

## External Communication

### Chatwoot Cloud

Send an email to inform all the Chatwoot cloud customers about the upcoming downtime and ask them to prepare for any impact. Ideally, this should be sent with at least a week's notice.

### Chatwoot Community

Create an issue in the [status repo](https://github.com/chatwoot/status) and tag it with the `maintenance` label. The issue description should follow the format below. 

```
We will be having planned maintenance on Sunday, 20th Feb 2022 IST from 1900-2130 Hours. 

<!--
start: 2022-02-20T13:30:00.220Z
end: 2022-02-20T16:00:00.220Z
expectedDown: chatwoot
-->
```

This will create an incident on [Chatwoot status](https://status.chatwoot.com) page. Share the incident URL on Chatwoot discord and Social media handles.

An example of scheduled maintenance event https://status.chatwoot.com/incident/16.

During the maintenance event, communicate the progress using the github issue created.
