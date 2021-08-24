---
title: "APM and Tracing"
---

Chatwoot supports various APM and monitoring tools.
You can enable them by configuring the given environment variables.

## [Sentry](https://sentry.io/)

Provide your `sentry dsn`.

```bash
SENTRY_DSN=
```

## [Scout](https://scoutapm.com)
Provide values for the following environment variables. Refer [scout documentation](https://scoutapm.com/docs/ruby/configuration) for additional options.
```bash
## https://scoutapm.com/docs/ruby/configuration
# SCOUT_KEY=YOURKEY
# SCOUT_NAME=YOURAPPNAME (Production)
# SCOUT_MONITOR=true
```

## [NewRelic](https://newrelic.com/)
Enable Newrelic by configuring the license key. Refer [newrelic documentation](https://docs.newrelic.com/docs/agents/ruby-agent/configuration/ruby-agent-configuration/) for additional options.

```bash
# https://docs.newrelic.com/docs/agents/ruby-agent/configuration/ruby-agent-configuration/
# NEW_RELIC_LICENSE_KEY=
```

## [DataDog](https://www.datadoghq.com/)

Datadog requires an agent running on the host machine to which the tracing library can send data. Chatwoot ruby code contains the tracing library, but you need to configure the agent in your host machine/docker environment for the integration to work.

Enable Datadog in chatwoot by configuring the `trace agent url`.

```bash
## https://github.com/DataDog/dd-trace-rb/blob/master/docs/GettingStarted.md#environment-variables
# DD_TRACE_AGENT_URL=http://localhost:8126
```

### Running Datadog agent in local via docker
```
# to run in your local machine binding to port 8126
# replace <dd API key> and dd_site as required

docker run -d --name dd-agent -v /var/run/docker.sock:/var/run/docker.sock:ro -v /proc/:/host/proc/:ro -v /sys/fs/cgroup/:/host/sys/fs/cgroup:ro -p 8126:8126  -e DD_API_KEY=<dd api key> -e DD_SITE="datadoghq.com" gcr.io/datadoghq/agent:7
```

Refer Datadog documentation to install the agent in specific environments like [Ubuntu](https://docs.datadoghq.com/agent/basic_agent_usage/ubuntu/?tab=agentv6v7), [Docker](https://docs.datadoghq.com/agent/docker/?tab=standard), [kubernetes](https://docs.datadoghq.com/agent/kubernetes/?tab=helm) etc.
