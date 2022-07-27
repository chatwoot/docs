---
sidebar_label: "Helm Charts (k8s)"
title: "Deploy Chatwoot using Helm Charts"
---

This guide will help you to deploy a production ready Chatwoot instance with Helm Charts.

To quickly try out the charts, follow the two steps below. For a production deployment, please make sure to 
pass in the required arguments to helm.  

```
helm repo add chatwoot https://chatwoot.github.io/charts
helm install chatwoot chatwoot/chatwoot
```

<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"width="100%" height="443" type="text/html" src="https://www.youtube.com/embed/o1jnYfy8CCo"></iframe>

## Prerequisites

- Kubernetes 1.16+
- Helm 3.1.0+
- PV provisioner support in the underlying infrastructure

The helm installation will create 3 "Persistent Volume Claims" for redis, rails and postgres. Setup up a default "Storage Class" (for automatic PV) or create 3 "Persistent Volumes" with the size of 8GB, before installing chatwoot. If the "Persistent Volume Claims" do not claim the "Persistent Volumes", leave storageClassName blank (inside the PV .yaml files).


## Installing the chart

To install the chart with the release name `chatwoot`:

```console
helm install chatwoot chatwoot/chatwoot
```

The command deploys Chatwoot on the Kubernetes cluster in the default configuration. The [parameters](#parameters) section lists the parameters that can be configured during installation.

> **Tip**: List all releases using `helm list`

## Uninstalling the chart

To uninstall/delete the `chatwoot` deployment:

```console
helm delete chatwoot
```

The command removes all the Kubernetes components associated with the chart and deletes the release.

> **Note**: Persistent volumes are not deleted automatically. They need to be removed manually.


## Parameters


### Chatwoot Image parameters

| Name                | Description                                          | Value                  |
| ------------------- | ---------------------------------------------------- | ---------------------- | 
| `image.repository`  | Chatwoot image repository                            | `chatwoot/chatwoot`    |
| `image.tag`         | Chatwoot image tag (immutable tags are recommended)  | `v2.0.0`               |
| `image.pullPolicy`  | Chatwoot image pull policy                           | `IfNotPresent`         |

 
### Chatwoot Environment Variables

| Name                                 | Type                                                                | Default Value                                              |
| ------------------------------------ | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| `env.ACTIVE_STORAGE_SERVICE`         | Storage service. `local` for disk. `amazon` for s3.                 | `"local"`                                                  |
| `env.ASSET_CDN_HOST`                 | Set if CDN is used for asset delivery.                              | `""`                                                       |
| `env.INSTALLATION_ENV`               | Sets chatwoot installation method.                                  | `"helm"`                                                   |
| `env.ENABLE_ACCOUNT_SIGNUP`          | `true` : default option, allows sign ups, `false` : disables all the end points related to sign ups, `api_only`: disables the UI for signup but you can create sign ups via the account apis.  | `"false"`                                                  |
| `env.FORCE_SSL`                      | Force all access to the app over SSL, default is set to false.                  | `"false"`                                                  |
| `env.FRONTEND_URL`                   | Replace with the URL you are planning to use for your app.                      | `"http://0.0.0.0:3000/"`                                   |
| `env.IOS_APP_ID`                     | Change this variable only if you are using a custom build for mobile app.       | `"6C953F3RX2.com.chatwoot.app"`                            |
| `env.ANDROID_BUNDLE_ID`              | Change this variable only if you are using a custom build for mobile app.       | `"com.chatwoot.app"`                                       |
| `env.ANDROID_SHA256_CERT_FINGERPRINT`| Change this variable only if you are using a custom build for mobile app.       | `"AC:73:8E:DE:EB:5............"`                           |
| `env.MAILER_SENDER_EMAIL`            | The email from which all outgoing emails are sent.                              | `""`                                                       |
| `env.RAILS_ENV`                      | Sets rails environment.                                                         | `"production"`                                             |
| `env.RAILS_MAX_THREADS`              | Number of threads each worker will use.                                         | `"5"`                                                      |
| `env.SECRET_KEY_BASE`                | Used to verify the integrity of signed cookies. Ensure a secure value is set.   | `replace_with_your_super_duper_secret_key_base`            |
| `env.SENTRY_DSN`                     | Sentry data source name.                                                        | `""`                                                       |
| `env.SMTP_ADDRESS`                   | Set your smtp address.                                                          |`""`                                                        |
| `env.SMTP_AUTHENTICATION`            | Allowed values: `plain`,`login`,`cram_md5`                                      | `"plain"`                                                  |
| `env.SMTP_ENABLE_STARTTLS_AUTO`      | Defaults to true.                                                               | `"true"`                                                   |
| `env.SMTP_OPENSSL_VERIFY_MODE`       | Can be: `none`, `peer`, `client_once`, `fail_if_no_peer_cert`                   | `"none"`                                                   |
| `env.SMTP_PASSWORD`                  | SMTP password                                                                   | `""`                                                       |
| `env.SMTP_PORT`                      | SMTP port                                                                       | `"587"`                                                    |
| `env.SMTP_USERNAME`                  | SMTP username                                                                   | `""`                                                       |
| `env.USE_INBOX_AVATAR_FOR_BOT`       | Bot customizations                                                              | `"true"`                                                   |
                                            
### Email setup for conversation continuity (Incoming emails)

| Name                                | Type                                                                                                                                                    | Default Value |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `env.MAILER_INBOUND_EMAIL_DOMAIN`   | This is the domain set for the reply emails when conversation continuity is enabled.                                                                    | `""`          |
| `env.RAILS_INBOUND_EMAIL_SERVICE`   | Set this to appropriate ingress channel with regards to incoming emails. Possible values are `relay`, `mailgun`, `mandrill`, `postmark` and `sendgrid`. | `""`          |
| `env.RAILS_INBOUND_EMAIL_PASSWORD`  | Password for the email service.                                                                                                                         | `""`          |
| `env.MAILGUN_INGRESS_SIGNING_KEY`   | Set if using mailgun for incoming conversations.                                                                                                        | `""`          |
| `env.MANDRILL_INGRESS_API_KEY`      | Set if using mandrill for incoming conversations.                                                                                                       | `""`          |

### Postgres variables

| Name                                | Type                                                                          | Default Value                                    |
| ----------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------ |
| `postgresql.enabled`                | Set to `false` if using external postgres and modify the below variables.     | `true`                                           |
| `postgresql.postgresqlDatabase`     | Chatwoot database name                                                        | `chatwoot_production`                            |
| `postgresql.postgresqlHost`         | Postgres host. Edit if using external postgres.                               | `""`                                             |
| `postgresql.postgresqlPassword`     | Postgres password. Edit if using external postgres.                           | `postgres`                                       |
| `postgresql.postgresqlPort`         | Postgres port                                                                 | `5432`                                           |
| `postgresql.postgresqlUsername`     | Postgres username.                                                            | `postgres`                                       |

### Redis variables

| Name                                | Type                                                                       | Default Value                                       |
| ----------------------------------- | -------------------------------------------------------------------------  | --------------------------------------------------- |
| `redis.auth.password`               | Password used for internal redis cluster                                   | `redis`                                             |
| `redis.enabled`                     | Set to `false` if using external redis and modify the below variables.     | `true`                                              |
| `redis.host`                        | Redis host name                                                            | `""`                                                |
| `redis.port`                        | Redis port                                                                 | `""`                                                |
| `redis.password`                    | Redis password                                                             | `""`                                                |
| `env.REDIS_TLS`                     | Set to `true` if TLS(`rediss://`) is required                              | `false`                                             |
| `env.REDIS_SENTINELS`               | Redis Sentinel can be used by passing list of sentinel host and ports.     | `""`                                                |
| `env.REDIS_SENTINEL_MASTER_NAME`    | Redis sentinel master name is required when using sentinel.                | `""`                                                |


### Logging variables

| Name                                | Type                                                                | Default Value                                              |
| ----------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| `env.RAILS_LOG_TO_STDOUT`           | string                                                              | `"true"`                                                   |
| `env.LOG_LEVEL`                     | string                                                              | `"info"`                                                   |
| `env.LOG_SIZE`                      | string                                                              | `"500"`                                                    |

### Third party credentials 

| Name                                | Type                                                                 | Default Value                                              |
| ----------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------- |
| `env.S3_BUCKET_NAME`                | S3 bucket name                                                       | `""`                                                       |
| `env.AWS_ACCESS_KEY_ID`             | Amazon access key ID                                                 | `""`                                                       |
| `env.AWS_REGION`                    | Amazon region                                                        | `""`                                                       |
| `env.AWS_SECRET_ACCESS_KEY`         | Amazon secret key ID                                                 | `""`                                                       |
| `env.FB_APP_ID`                     | For facebook channel https://www.chatwoot.com/docs/facebook-setup    | `""`                                                       |
| `env.FB_APP_SECRET`                 | For facebook channel                                                 | `""`                                                       |
| `env.FB_VERIFY_TOKEN`               | For facebook channel                                                 | `""`                                                       |
| `env.SLACK_CLIENT_ID`               | For slack integration                                                | `""`                                                       |
| `env.SLACK_CLIENT_SECRET`           | For slack integration                                                | `""`                                                       |
| `env.TWITTER_APP_ID`                | For twitter channel                                                  | `""`                                                       |
| `env.TWITTER_CONSUMER_KEY`          | For twitter channel                                                  | `""`                                                       |
| `env.TWITTER_CONSUMER_SECRET`       | For twitter channel                                                  | `""`                                                       |
| `env.TWITTER_ENVIRONMENT`           | For twitter channel                                                  | `""`                                                       |

### Other Parameters

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| affinity | object | `{}` |  |
| autoscaling.enabled | bool | `false` |  |
| autoscaling.maxReplicas | int | `100` |  |
| autoscaling.minReplicas | int | `1` |  |
| autoscaling.targetCPUUtilizationPercentage | int | `80` |  |
| fullnameOverride | string | `""` |  |
| hooks.affinity | object | `{}` |  |
| hooks.migrate.env | list | `[]` |  |
| hooks.migrate.hookAnnotation | string | `"post-install,post-upgrade"` |  |
| hooks.migrate.resources.limits.memory | string | `"1000Mi"` |  |
| hooks.migrate.resources.requests.memory | string | `"1000Mi"` |  |
| imagePullSecrets | list | `[]` |  |
| ingress.annotations | object | `{}` |  |
| ingress.enabled | bool | `false` |  |
| ingress.hosts[0].host | string | `""` |  |
| ingress.hosts[0].paths[0].backend.service.name | string | `"chatwoot"` |  |
| ingress.hosts[0].paths[0].backend.service.port.number | int | `3000` |  |
| ingress.hosts[0].paths[0].path | string | `"/"` |  |
| ingress.hosts[0].paths[0].pathType | string | `"Prefix"` |  |
| ingress.tls | list | `[]` |  |
| nameOverride | string | `""` |  |
| nodeSelector | object | `{}` |  |
| podAnnotations | object | `{}` |  |
| podSecurityContext | object | `{}` |  |
| redis.master.persistence.enabled | bool | `true` |  |
| redis.nameOverride | string | `"chatwoot-redis"` |  |
| resources | object | `{}` |  |
| securityContext | object | `{}` |  |
| service.port | int | `80` |  |
| service.type | string | `"ClusterIP"` |  |
| serviceAccount.annotations | object | `{}` |  |
| serviceAccount.create | bool | `true` |  |
| serviceAccount.name | string | `""` |  |
| services.annotations | object | `{}` |  |
| services.internlPort | int | `3000` |  |
| services.name | string | `"chatwoot"` |  |
| services.targetPort | int | `3000` |  |
| services.type | string | `"LoadBalancer"` |  |
| tolerations | list | `[]` |  |
| web.replica | int | `1` |  |
| worker.replica | int | `1` |  |


Specify each parameter using the `--set key=value[,key=value]` argument to `helm install`. For example,

```bash
helm install my-release \
  --set env.FRONTEND_URL="chat.yourdomain.com"\
    chatwoot/chatwoot
```

The above command sets the Chatwoot server frontend URL to `chat.yourdoamain.com`.

Alternatively, a YAML file that specifies the values for the parameters can be provided while installing the chart. For example,

```bash
helm install my-release -f values.yaml chatwoot/chatwoot
```

> **Tip** You can use the default `values.yaml` file.

## Postgres

PostgreSQL is installed along with the chart if you choose the default setup. To use an external Postgres DB, please set `postgresql.enabled` to `false` and set the variables under the Postgres section above.

## Redis

Redis is installed along with the chart if you choose the default setup. To use an external Redis DB, please set `redis.enabled` to `false` and set the variables under the Redis section above.


## Upgrading

Do `helm repo update` and check the version of charts that is going to be installed. Helm charts follows semantic versioning and so if the MAJOR version is different from your installed version, there might be breaking changes. Please refer to the changelog before upgrading.

```
helm repo update
helm upgrade chatwoot chatwoot/chatwoot -f <your-custom-values>.yaml
```

### To 0.6.x

Existing labels were causing issues with `helm upgrade`. `0.6.x` introduces breaking changes related to selector 
labels used for deployements. Please delete your helm release and recreate. Deleting your helm release will 
not delete your persistent volumes used for redis and postgres and as such your data should be safe. 

```
helm delete chatwoot
helm repo update
helm install chatwoot chatwoot/chatwoot
```


## TroubleShooting


### pod has unbound immediate PersistentVolumeClaims
Make sure the "Persistent Volume Claims" can be satisfied. Refer to [prerequisites](#prerequisites).
