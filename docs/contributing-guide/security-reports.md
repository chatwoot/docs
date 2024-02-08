---
sidebar_label: "Security Reports"
title: "Reporting Security issues"
---

Chatwoot is looking forward to working with security researchers worldwide to keep Chatwoot and our users safe. If you have found an issue in our systems/applications, please reach out to us.

## Reporting a Vulnerability

We use [huntr.dev](https://huntr.dev) for security issues that affect our project. If you believe you have found a vulnerability, please disclose it via this [form](https://huntr.dev/bounties/disclose).

This will enable us to review the vulnerability, fix it promptly, and reward you for your efforts.

If you have any questions about the process, contact security@chatwoot.com.

Please try your best to describe a clear and realistic impact for your report, and please don't open any public issues on GitHub or social media; we're doing our best to respond through Huntr as quickly as possible.

> Note: Please use the email for questions related to the process. Disclosures should be done via [huntr.dev](https://huntr.dev/)

## Supported versions

| Version  | Supported |
| -------- | --------- |
| latest   | ️✅        |
| < latest | ❌         |


## Vulnerabilities we care about 🫣
> Note: Please do not perform testing against Chatwoot production services. Use a `self-hosted instance` to perform tests.

- Remote command execution
- SQL Injection
- Authentication bypass
- Privilege Escalation
- Cross-site scripting (XSS)
- Performing limited admin actions without authorization
- CSRF

## Non-Qualifying Vulnerabilities

We consider the following out of scope, though there may be exceptions.

- Missing HTTP security headers
- Incomplete/Missing SPF/DKIM
- Reports from automated tools or scanners
- Theoretical attacks without proof of exploitability
- Social engineering
- Reflected file download
- Physical attacks
- Weak SSL/TLS/SSH algorithms or protocols
- Attacks involving physical access to a user's device or a device or network that's already seriously compromised (e.g., man-in-the-middle).
- The user attacks themselves
- Incomplete/Missing SPF/DKIM
- Denial of Service attacks
- Brute force attacks
- DNSSEC

If you are unsure about the scope, please create a [report](https://huntr.dev/repos/chatwoot/chatwoot/).

## Triaging Process

Chatwoot team triages the issues in Huntr weekly. We're doing our best to respond through Huntr as quickly as we can, So please don't open any public issues on GitHub or social media and avoid duplicate reports over Emails.

- Based on reviewing the report, the team will assign a priority to the issue and move it into the internal backlog to prioritize a fix.
- In cases where the team needs more information or disagreements of severity, the team will communicate the same over Huntr before completing the triaging.

After triage, the team will start working on the issue based on the following Severity and Timelines.

| Severity      | Timeline  |
| ------------- | --------- |
| Critical (P0) | ️  7 Days |
| High          | 30 Days   |
| Medium        | 60 Days   |
| Low           | 90 Days   |


## Thanks

Thank you for keeping Chatwoot and our users safe. 🙇
