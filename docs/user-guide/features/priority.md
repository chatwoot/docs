---
sidebar_label: "Priority"
title: "Assigning a priority"
---

Prioritizing conversations is essential for managing your workload effectively, ensuring that you address urgent issues promptly while still handling less critical matters efficiently. Chatwoot's priority feature allows you to assign a priority level to each conversation, making it easy to identify which conversations require immediate attention and which ones can wait.

There are four options available to you:

- Low
- Medium
- High
- Urgent

You can quickly assign a priority to each conversation based on its importance and urgency.

## Setting a priority

You can assign a priority from the sidebar, just like you assign teams and labels, see the screenshot below for the steps.

<img src={require('./images/priority/priority.png').default} alt="A screenshot with numbered steps showing how to assign a priority" />

Once assigned you can see the priority in the conversation list, as well as an activity in your conversation area as shown below

<img src={require('./images/priority/priority-done.png').default} alt="A screenshot highlighting how priority is visible in the Chatwoot UI" />

You can also set the priority from the context menu, just right click on the conversation and set the priority.

<img src={require('./images/priority/context-menu-priority.png').default} alt="A screenshot show how priority can be assigned from the context menu" />

You can also set the priority from the command palette. Open the command palette using CMD + K or Ctrl + K and type "Assign priority" and hit enter. You will find the list of options, select the one that is most relevant and hit enter again.

<img src={require('./images/priority/cmd-k-priority.png').default} alt="A screenshot show how priority can be assigned using the command palette" />

## Tips to make the most out of the feature

1. Use the "Urgent" priority judiciously. It should be assigned to the most pressing issues where it is supposed to be handled over everything else.

1. Use automation rules to assign priority based on conditions. For example, you can automatically mark any conversation as urgent if an email subject contains the word security

## FAQs

#### Do you support custom priorities?

Chatwoot does not allow for customized or overly specific priorities. We intentionally designed it this way to avoid the pitfalls of excessive complexity, which can make it more challenging to establish priorities effectively and ultimately lead to lesser or no extra value over the current system. The best workaround this is to use labels or custom attributes.

#### Does conversation priority work with automation rules?

Yes, it is possible to assign a priority via automation rules, a priority change condition also exists on the automation rules.

#### Can I create a macro with priority?

Yes, just create a new one or edit an existing macro, and add the step "Change Priority" and save it.
