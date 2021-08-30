---
title: "Release Process"
---

At Chatwoot, we follow a monthly release schedule. On 15th of every month, we will release a new version of the software. To release the version of the software, use the following guide.

## Github release process

We use [git-flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) as our branching strategy.

### 1. Pull the latest changes

Pull latest develop branch and master branch in your local machine.

```bash
git checkout master
git pull
git checkout develop
git pull
git fetch --tags
```

### 2. Commit new version

- Bump up the version numbers in the following files.

  - `config/app.yml`
  - `package.json`

- Commit the changes to develop branch with a title `Bump version to #{version_number}`
  See this commit for example:
[Bump version to 1.11.1 · chatwoot/chatwoot@a214372](https://github.com/chatwoot/chatwoot/commit/a214372c7cc7cf305d6cba53663708b34a4752d0)


### 3. Prepare release

```bash
git flow release start '1.12.0' # replace your version number
git flow release finish '1.12.0' # replace your version number

# Leave default merge messages as it is
# prepare the tag message as 'v1.12.0' # replace your version number
```

### 4. Reverse merge master

Reverse merge master branch to develop branch.


```bash
git checkout develop
git merge master
```

### 5. Push changes to remote

Push master branch, develop branch and the tags.

```bash
# Push develop
git checkout develop
git push --no-verify

# Push master
git checkout master
git push --no-verify

# Push tags
git checkout develop
git push --tags --no-verify
```

### 6. Prepare release notes

- Compare the current version to the previous version using the tag compare feature in Github. [https://github.com/chatwoot/chatwoot/compare/v1.11.1...v1.12.0](https://github.com/chatwoot/chatwoot/compare/v1.11.1...v1.12.0)
- Create a new release on Github from existing tags and update release notes.
- Ensure that the milestones exist for the subsequent 2 versions.
- Close the current milestone and move issues to the next milestone.

**Release note format**:

```
- Describe the changes in the current release
- List the new languages that are added in the new release
- Gratitudes towards who have contributed to the project.

```

**Release note example**:

```bash
## Changelog

- Ability to detect contact location
- Ability to download Agent reports
- Search contacts using the phone number
- Set up dev environments with GitHub codespaces
- Ability to set Installation wide default language
- Improved alerts on agent/user typing
- Limit file types that can be attached
- Ability for external systems to authenticate users into Chatwoot using tokens
- Numerous bug fixes and enhancements

- New Languages
  - Danish
  - Korean
  - Czech
  - Turkish
  - Finnish
  - Indonesian

###
Thanks to @azyzio, @hiaselhans, @vishal-pandey, @troscoe, @timcowlishaw, @mike9011 for the contributions

```

## Todos after Github release

- Create release notes in Changelog (https://chatwoot.com/changelog). If you don't have access to the blog, please contact Pranav / Sojan.
- Update the latest version in Chatwoot Hub. This is used to show a notification to users using self-hosted installation.
- Create tasks in Product board to deploy the changes to our paid clients.
