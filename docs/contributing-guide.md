---
title: "Contributor Guide"
sidebar_label: "Introduction"
help_discord: "https://discord.gg/fBMuQ7FcG6"
help_github_discussion: "https://github.com/chatwoot/chatwoot/discussions/categories/contributors"
---

This guide will help you get started with Chatwoot! Thank you for taking an interest in contributing to Chatwoot. Before submitting your contribution, please make sure to take a moment and read through the following guidelines:

### Getting Started

- Before starting your work, ensure an [issue](https://github.com/chatwoot/chatwoot/issues) exist for it. If not feel free to create one. You can also take a look into the issues tagged [Good first issues](https://github.com/chatwoot/chatwoot/issues?q=is%3Aopen+is%3Aissue+label%3A%22Good+first+issue%22).
- Add a comment on the issue and wait for the issue to be assigned before you start working on it.
  - This helps to avoid multiple people working on similar issues.
- If the solution is complex, propose the solution on the issue and wait for one of the core contributors to approve before going into the implementation.
  - This helps in shorter turn around times in merging PRs
- For new feature requests, Provide a convincing reason to add this feature. Real-life business use-cases will be super helpful.
- Feel free to join our [discord community](https://discord.gg/cJXdrwS), if you need further discussions with the core team.

### Pull Request Guidelines

- Please make sure that you have read the [issue triage guidelines](/docs/handbook/engineering/issue-triage) before you make a contribution.
- We use [git-flow](https://nvie.com/posts/a-successful-git-branching-model/) branching model. The base branch is `develop`
- Please raise your PRs against `develop` branch
- It's okay and encouraged to have multiple small commits as you work on the PR - we will squash the commits before merging.
- For other guidelines, please refer to [PR Guidelines](/docs/handbook/engineering/pr-guidelines)
- Ensure that all the text copies that you add into the product are i18n translatable. You are only required to add the `English` version of the strings. We pull in the other language translations from our contributors on crowdin. Ref [Translation guidelines](https://www.chatwoot.com/docs/contributing-guide/translation-guidelines) to learn more.

### Developing a new feature:

- Please create the branch in the format `feature/<issue-id>-<issue-name>` (eg: `feature/235-contact-panel`)
- Add accompanying test cases.

### Bug fixes or chores:
- If you are resolving a particular issue, add `fix: Fixes xxxx` (#xxxx is the issue) in your PR title.
- Provide a detailed description of the bug in the PR.
- Add appropriate test coverage if applicable.

### Environment Setup for local development

These guides will help you to setup the environment required for Chatwoot. Follow the guide based on the operating system you use.

* [Mac](/docs/contributing-guide/environment-setup/mac-os)
* [Ubuntu](/docs/contributing-guide/environment-setup/ubuntu)
* [Windows](/docs/contributing-guide/environment-setup/windows)
* [Docker](/docs/contributing-guide/environment-setup/docker)

### Project Setup

Now, that you have completed the environment as mentioned above, use the following guides to setup Chatwoot on your local machine.

* [Quick Setup](/docs/contributing-guide/project-setup)
* [Environment Variables](/docs/contributing-guide/environment-variables)
* [Common Errors](/docs/contributing-guide/common-errors)


### Others

* [Code of conduct](/docs/contributing-guide/code-of-conduct)
* [Translation guidelines](/docs/contributing-guide/translation-guidelines)
* [Contributors](/docs/contributing-guide/contributors)
