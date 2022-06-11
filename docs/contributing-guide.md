---
title: "Contributor Guide"
sidebar_label: "Introduction"
help_discord: "https://discord.gg/fBMuQ7FcG6"
help_github_discussion: "https://github.com/chatwoot/chatwoot/discussions/categories/contributors"
---

Thank you for your interest in contributing to Chatwoot. Please take a moment to read through our guidelines before you contribute.

### Get started

1. If you've noticed something that needs to be updated, go through our existing [issues](https://github.com/chatwoot/chatwoot/issues) before you create an issue to help avoid duplicate issues.
Also, look for [good first issues](https://github.com/chatwoot/chatwoot/issues?q=is%3Aopen+is%3Aissue+label%3A%22Good+first+issue%22) that can help you get started on easier issues. 
2. Add a comment to the issue and wait for the issue to be assigned before you can start working on it. This helps avoid multiple people working on similar issues.
3. For complex solutions, propose the solution on the issue and wait for one of the core contributors to approve it before it can be implemented. This helps in shorter turnaround time in merging pull requests (PRs).
4. Raise your PRs against the base branch `develop`. We use the [git-flow](https://nvie.com/posts/a-successful-git-branching-model/) branching model.
Multiple smaller commits are encouraged as you work on a PR as they will be squashed before merging.

Microcopy added to the product must be i18n-translatable. Only add the `English` version of the strings. We pull in the other language translations from our contributors on Crowdin. To learn more, see [Translation guidelines](https://www.chatwoot.com/docs/contributing-guide/translation-guidelines).

### Bug fixes or chores

If you're resolving an issue, name the PR title as `fix: Fixes xxxx` (#xxxx is the issue) and provide a detailed description of the bug in the PR. If applicable, also add appropriate test coverage.

### New features

For new feature requests, provide a convincing reason to add them; real-life business use cases will be super helpful. If you need to discuss further with the core team, join our [Discord community](https://discord.gg/cJXdrwS).

Create a branch in this format: `feature/<issue-id>-<issue-name>` (for example, `feature/235-contact-panel`) and add accompanying test cases.

For guidelines, read [Issue triage](/docs/handbook/engineering/issue-triage) and [Pull Request Guidelines](/docs/handbook/engineering/pr-guidelines).

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
