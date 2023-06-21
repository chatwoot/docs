---
title: "Conversation"
---

Reports of the conversations which has happened over time, can be viewed in the Reports Section.
Click on Reports icon on home page.

<div align="center">

<img src={require('../images/reports/reports1.png').default} width="800" alt="Chatwoot Home Screen" />

</div>

The below window opens up with Overview of the Reports. Click on conversations.

<div align="center">

<img src={require('../images/reports/reports2.png').default} width="775" alt="Chatwoot Report Home Screen" />

</div>

Report can be generated for various durations. This can be done by selecting the time period in the drop-down list as shown below. By default, it is for last 7 days.

<div align="center">

<img src={require('../images/reports/reports3.png').default} width="800" alt="Report Duration selection drop down" />

</div>

Report can be grouped using the group by filter. Each date range has different group by filter. Date range to group by filter mapping given below.

| Date Range        | Group By               |
| ----------------- | ---------------------- |
| Last 7 days       | Day                    |
| Last 30 days      | Day, Week              |
| Last 3 months     | Day, Week, Month       |
| Last 6 months     | Day, Week, Month       |
| Last year         | Day, Week, Month       |
| Custom date range | Day, Week, Month, Year |

<div align="center">

<img src={require('../images/reports/report_group_by_filter.png').default} width="800" alt="Report Duration selection drop down" />

</div>

### Conversations

Click on Conversations tab in Reports. The graph will show the conversation happened on the selected days. On pointing the mouse to a particular graph of the day, the details of the conversations happened on that day can be found out. An example is given below. On May 28, 23 conversations occurred.

<div align="center">

<img src={require('../images/reports/reports4.png').default} width="800" alt="Conversations Report Screen" />

</div>

### Incoming Messages

Click on Incoming Messages tab in Reports. The graph will show the number of incoming messages happened on the selected days. On pointing the mouse to a particular graph of the day, the details of the number of incoming messages happened on that day can be found out. An example is given below. On May 27, 70 incoming messages occurred.

<div align="center">

<img src={require('../images/reports/reports5.png').default} width="800" alt="Incoming Messages Report Screen" />

</div>

### Outgoing Messages

Click on Outgoing Messages tab in Reports. The graph will show the number of outgoing messages happened on the selected days. On pointing the mouse to a particular graph of the day, the details of the number of outgoing messages happened on that day can be found out. An example is given below. On May 27, 31 outgoing messages occurred.

<div align="center">

<img src={require('../images/reports/reports6.png').default} width="800" alt="Outgoing Messages Report Screen" />

</div>

### First Response Time

Click on First Response Time tab in Reports. The graph will show the average time taken to give first response to a conversation with a customer. On pointing the mouse to a particular graph of the day, the average time taken for first response and the number of conversations used for the calculation of first response in that particular day can be found out. For example, on May 29, average First response time was 1 Day 20 Hr based on 4 conversations.

<div align="center">

<img src={require('../images/reports/reports7.png').default} width="800" alt="First Response Time Report Screen" />

</div>

### Resolution Time

Click on Resolution Time tab in Reports. The graph will show the average time taken to resolve a particular conversation with a customer. On pointing the mouse to a particular graph of the day, the average time taken for resolving conversations and the number of conversations used for the calculation of resolution time in that particular day can be found out. For example, on May 29, average First response time was 4 Day 22 Hr based on 8 conversations.

<div align="center">

<img src={require('../images/reports/reports8.png').default} width="800" alt="Resolution Time Report Screen" />

</div>

### Resolution Count

Click on Resolution count tab in Reports. The graph will show the number of conversations resolved on the selected days. On pointing the mouse to a particular graph of the day, the details of the number of conversations resolved on that day can be found out. An example is given below. On May 28, 11 conversation was resolved.

<div align="center">

<img src={require('../images/reports/reports9.png').default} width="800" alt="Resolved Count Report Screen" />

</div>

### Download agent Reports

Details of performance of Agents can be done by clicking the Download agent Reports button given on the right hand top side of the page.
The report will be downloaded in csv format. Example given below.

<div align="center">

<img src={require('../images/reports/reports10.png').default} width="800" alt="Download Report Button " />

</div>

<div align="center">

<img src={require('../images/reports/reports11.png').default} width="800" alt="Downloaded Report in CSV File format " />

</div>

### Business Hours

Business hours are used to configure the availabilty of each channel. If Business hours are configured, report data would be calculated based on the business hours.

Go to Inbox Settings. Choose Business Hours tab and update the availabilty.

<div align="center">

<img src={require('../images/reports/business_hours_configuration.png').default} width="800" alt="Downloaded Report in CSV File format " />

</div>

Toggle Business Hours to see report based on business hours.

<div align="center">

<img src={require('../images/reports/toggle_business_hours.gif').default} width="800" alt="Downloaded Report in CSV File format " />

</div>

Business hours is supported for [Conversation](http://localhost:3001/docs/user-guide/features/reports/conversation), [Agent](http://localhost:3001/docs/user-guide/features/reports/agent), [Inbox](http://localhost:3001/docs/user-guide/features/reports/inbox), [Label](http://localhost:3001/docs/user-guide/features/reports/label) and [Team](http://localhost:3001/docs/user-guide/features/reports/team) Reports.

### Trend

The trend shows the percentage of increase or decrease in the metric data. It compares the current time period with the previous time period to provide valuable insights. For example, when analyzing the number of conversations for a specific week, the Trend metric would compare this week's numbers with the numbers from the previous week.

It is displayed on the right side of each metric in the report. The formula used for calculating the trend is given below.

`trend = ((current - previous)/previous)*100`

<div align="center">

<img src={require('../images/reports/metric_trend.gif').default} width="800" alt="Downloaded Report in CSV File format " />

</div>

Trend is supported for [Conversation](http://localhost:3001/docs/user-guide/features/reports/conversation), [Agent](http://localhost:3001/docs/user-guide/features/reports/agent), [Inbox](http://localhost:3001/docs/user-guide/features/reports/inbox), [Label](http://localhost:3001/docs/user-guide/features/reports/label) and [Team](http://localhost:3001/docs/user-guide/features/reports/team) Reports.
