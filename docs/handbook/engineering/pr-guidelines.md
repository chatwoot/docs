---
title: 'Pull Request Guidelines'
---

### Raising a pull request

Points to note when you are raising a PR.
- Try to make the review cycle short.
- Make sure code follows the style guidelines of this project
- Perform a self-review of your code.
- Commented on the code, particularly in hard-to-understand areas.
- Make necessary changes in the documentation.
- Verify that the PR does not generate new warnings. Check rails console as well as browser console.
- Add tests to prove that the fix is effective or that the feature works.
- New and existing unit tests pass with the changes.
- Any dependent changes have been merged and published in downstream modules.

### Ownership

For all external and internal contributions to Chatwoot repositories, the team will triage the pull request and assign a PR owner.

At any point in time, the assignee field in Github shows the PR owner responsible for taking some action. The PR owner will work with the PR author to provide review comments, assist in testing or re-assigning the pull request to another owner when required.

#### PR raised by a team member

The ownership of the PR is on the person who creates the PR. The PT author's responsibility is to get it reviewed, QA'ed, and merge it to production. When a PR is ready for review, the PR author can assign the PR to people from whom they would like to get a review. Once the review is done, the reviewer can un-assign themselves from the ticket. The last reviewer would un-assign themselves and assign it back to the author.

#### PR raised by a community member

The on-call person would triage the PR and add an assignee to the PR. Ownership is on reviewers to get it merged.

### Commit message

Please ensure that the commit message is a proper sentence before merging a pull request and has full context about the PR in the description. Here is a guide on writing good commit messages. (https://chris.beams.io/posts/git-commit/)

- A properly formed git commit subject line should always be able to complete the following sentence

> If applied, this commit will <ins>your subject line here</ins>

- Capitalize the subject line


#### Commit Message Structure

A commit message should be structured as follows. 

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Type should follow Conventional Commit Specification. You can read more about the type and conventional commit specification here. https://www.conventionalcommits.org/en/v1.0.0-beta.2/#summary

### Update product documentation

Please make sure that product docs are updated before merging the PR. In addition, the PR owner should check the requirement of any documentation changes related to the raised PR.

- Add the `docs-needed` label to the PR.
- Add the content to the [docs](https://github.com/chatwoot/docs),
- Add `docs-done label` to the PR after completing the documentation.

### Add co-authors if applicable

It is essential to add attribution to people who have contributed to the pull request. Please use `Co-authored-by:` at the end of the description.

### Commits in branches

We use [commit squashing](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/managing-commits/squashing-commits#squashing-a-commit) to merge a PR to `develop` or release branches.

### Use rebase to avoid merge commits

A merge commit is created if the local and remote branches have different commits when you pull without the `--rebase` flag. Therefore, it is good to rebase your local commits.

To avoid typing `--rebase` every time you can configure git to use it as default:

```
git config --global pull.rebase true
```
