---
sidebar_label: "Translation"
title: "Translate Chatwoot to your language"
help_discord: "https://discord.gg/uPtCrFfb9B"
help_github_discussions: "https://github.com/chatwoot/chatwoot/discussions/categories/translations"
---

Chatwoot uses American English by default. Every string in Chatwoot can be translated to the language of your choice. We prefer using the formal form of a language wherever possible. For instance, German has two forms of _you_ - _Sie_ (formal) and _Du_ (informal). In this case, _Sie_ is preferred over _Du_ for translation.

The translation process for Chatwoot web and mobile app is managed using Crowdin at [https://translate.chatwoot.com](https://translate.chatwoot.com). You must have an account on Crowdin before you can contribute to a language.

You can find the strings in the following locations of the codebase:

- `app/javascript/dashboard/i18n` for strings related to the agent dashboard
- `app/javascript/widget/i18n` for strings related to the web widget
- `config/locales` for strings used in backend messages or API response

If you don't find your language on Crowdin, please create an [issue](https://github.com/chatwoot/chatwoot/issues) while adhering to the [contributor guidelines](/contributing-guide).

> If you're the only person contributing to a language, inform any of the Chatwoot members to gain access to manage the language.

## Releasing a new language

All translated strings will be included in the next release. If a language has *60% or more translated strings* in Crowdin, we will enable the language for the Chatwoot app during the next release.

> Currently, translations are being accepted without a proofreading step. However, this will change as an when there are more contributors to each language.
