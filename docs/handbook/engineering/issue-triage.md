---
title: 'Issue triage'
---

Issue triage is essential. Keeping a low number of un-triaged issues is a collective responsibility. Any Chatwoot team member can triage an issue. The Github labels, projects and milestonse are used to indicate the current state of the issue and whether it is triaged or not.

## Using labels

The following are the labels we use right now.

1. `need-more-info`: The issue does not have enough information to start working on it. This state requires input from a person outside the Chatwoot organization. If there is no further response from the person after 7 days, close the issue with the reply - "The issue does not contain enough information for us to debug. Please re-open the issue with relevant details."

2. `investigation` - An issue can be created with the label `bug`. If it is not an obvious one, tag it with the `investigation` and label it correctly after finding the results.

3. `bug` - Some of the features are not working. Before adding this label, please ensure that the functionality is not working as per the spec defined while building the feature.
If an issue is created with the label `bug` without the product screenshots/ruby server logs/Linux machine logs etc., please move it `need-info` and ask for further details.
Please ensure that you have added a severity label for each bug as described in the following section.

4. `enhancement` - This label is used to track minor improvements requested for a product feature. Please don't use this label for code improvements/tech debt issues.

5. `feature` - This label is used to track new features, which is a significant change to the existing product.

6. `chore` - This label is used to track the tech debt and regular dependency updates. If the end customer does not have a say in the changes, these issues should be tagged as chores.

7. `Good First Issue` - This label is used when the issue is easy to pickup. Start with these issues if you are a new contributor.

8. `open-for-prs` - These are the issues that are not in the immediate milestone and are open to community members if they are willing to.

9. `accessibility` - As we are building a global product catering to a broad set of users, it is crucial to make sure that the software is accessible to everyone. This label can be used to track accessibility specific issues.

10. `documentation` - The documentation issues should be in [docs](https://github.com/chatwoot/docs) repository. If there is a significant reason to have it on the [main repository](https://github.com/chatwoot/chatwoot), mark it with the label `documentation`

11. `devops` - The issues that are related to installation and devops.

### Severity

Each bug can be divided into 4 different categories.

1. `severity: 1` - These are critical issues. Apply this label if a feature is broken and there is no workaround for this.

2. `severity: 2` - Apply this label if a feature is broken, but there is an unacceptably complex workaround for the same.

3. `severity: 3` - Apply this label if a feature is broken, but there is a workaround.

4. `severity: 4` - Apply this label if it is a UI glitch or an inconvenience.

| Type | Time to address the issue | Time to resolve the issue |
| - | - | - |
| severity: 1 | 7 days | 30 days / next release |
| severity: 2 | 30 days | 45 days |
| severity: 3 | 30 days | 60 days |
| severity: 4 | 90 days | 180 days |


### Process labels

Every issue goes through multiple stages from idea to development, and each stage is identified using the labels defined for the process.

1. `need-spec` - This issue needs a detailed product spec from the product owner.

2. `need-design` - The spec for this issue is complete. Need Balsamiq mockup / Figma design to get started.

3. `PR: unreviewed` - A pull request is raised, but it is not reviewed by anyone.

4. `PR: reviewed-changes-requested` - There are requested changes in the pull request. The person who has raised the PR should address those comments.

5. `PR: partially-approved` - Some of the reviewers have approved the PR. In most cases, the QA process can be started once a PR have this label.

6. `PR: reviewed-approved` - All of the reviewers have approved the PR, and the PR is good to be reviewed.

7. `in-QA` - The review of the work done is completed. It should be QA'ed by another team member.


### Specialization labels

1. `frontend` - If the issue requires a frontend implementation, apply this label
2. `backend` - If the issue has changes in the backend, apply this label.
3. `infrastructure` - Everything related to infra/deployment can be labelled as `infrastructure`

## Use projects to identify the features

High-level features can be added as a project in the Github repository. To track and monitor the request coming in a particular feature, add a project in each issue. E.g., Facebook Inbox is a high-level feature. Any request for Facebook Inbox changes can be marked as an issue in the project "Facebook Inbox".

// TODO: Decide the criteria for projects

## Use milestone to complete the triage

An issue triage is complete when it has a milestone assigned to it. In most cases, we would have issues that have labels, severity and project assigned to it. Adding milestone is the last step and indicates the prioritization of the issue.


## Use Github discussion for questions

If there is a question about the project, it should ideally be a discussion. Before using Github discussions, we used the label `question` to mark the issues.
If the issue is created with a question, please move it to the Github Discussion and try to answer it from there. If there is a bug/suggestion, create a new issue with a context.
