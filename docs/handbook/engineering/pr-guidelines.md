---
title: 'Pull Request Guidelines'
---

## Merging a pull request

### Ownership 

For all external and internal contributions to Chatwoot repositories, the team will triage the pull request and assign a PR owner. 

At any point in time, the assignee field in Github shows the PR owner who is responsible for taking some action. The PR owner will work with the contributor to provide review comments, assist in testing or re-assigning the pull request to another owner when required.

### Commit message

Please ensure that the commit message is a proper sentence before merging a pull request and has full context about the PR in the description. Here is a guide on writing good commit messages. (https://chris.beams.io/posts/git-commit/)

- A properly formed Git commit subject line should always be able to complete the following sentence

> If applied, this commit will <ins>your subject line here</ins>

- Capitalize the subject line

### Add co-authors if applicable

It is essential to add attribution to people who have contributed to the pull request. Please use `Co-authored-by:` at the end of the description.

### Commits in branches

We use [commit squashing](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/managing-commits/squashing-commits#squashing-a-commit) to merge a PR to `develop` or release branches. 

### git pull --rebase

A merge commit is created if the local and remote branches have different commits when you pull without the `--rebase` flag. Therefore, it is good to rebase your local commits.

To avoid typing `--rebase` everytime you can confirgure git to use it as default:
```
git config --global pull.rebase true
```
