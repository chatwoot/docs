module.exports = [
  {
    collapsible: false,
    label: "Getting Started",
    type: "category",
    items: ["self-hosted"],
  },
  {
    collapsible: true,
    label: "Deployment",
    type: "category",
    items: [
      "self-hosted/deployment/architecture",
      "self-hosted/deployment/requirements",
      {
        Linux: [
          "self-hosted/deployment/linux-vm",
          "self-hosted/deployment/docker",
        ],
      },
      "self-hosted/deployment/helm-charts",
      "self-hosted/deployment/chatwoot-ctl",
    ],
  },
  {
    collapsible: true,
    label: "Cloud",
    type: "category",
    items: [
      {
        AWS: [
          "self-hosted/deployment/aws",
          "self-hosted/deployment/aws-marketplace",
        ],
      },
      "self-hosted/deployment/azure",
      "self-hosted/deployment/digital-ocean",
      "self-hosted/deployment/gcp",
      "self-hosted/deployment/heroku",
      {
        "Community contributed": [
          "self-hosted/deployment/caprover",
          "self-hosted/deployment/clevercloud",
          "self-hosted/deployment/cloudron",
          "self-hosted/deployment/restack",
          "self-hosted/deployment/easypanel",
          "self-hosted/deployment/elestio",
        ],
      },
      "self-hosted/deployment/troubleshooting",
    ],
  },
  {
    collapsible: true,
    label: "Configuration",
    type: "category",
    items: [
      "self-hosted/configuration/environment-variables",
      {
        Performance: [
          "self-hosted/deployment/performance/optimizing-configurations",
          "self-hosted/deployment/performance/cloudfront-cdn",
        ],
      },
      {
        Monitoring: [
          "self-hosted/monitoring/super-admin-sidekiq",
          "self-hosted/monitoring/apm-and-error-monitoring",
          "self-hosted/monitoring/rate-limiting",
        ],
      },
      {
        Storage: [
          "self-hosted/deployment/storage/supported-providers",
          "self-hosted/deployment/storage/s3-bucket",
          "self-hosted/deployment/storage/gcs-bucket",
        ],
      },
      {
        "Email Channel": [
          "self-hosted/configuration/features/email-channel/conversation-continuity",
          "self-hosted/configuration/features/email-channel/conversation-continuity-using-sendgrid",
          "self-hosted/configuration/features/email-channel/setup",
          "self-hosted/configuration/features/email-channel/azure-app-setup",
          "self-hosted/configuration/features/email-channel/google-workspace-setup",
        ],
      },
      {
        "Help Center": ["self-hosted/configuration/help-center"],
      },
    ],
  },
  {
    collapsible: true,
    label: "Integrations",
    type: "category",
    items: [
      "self-hosted/configuration/features/integrations/facebook-channel-setup",
      "self-hosted/configuration/features/integrations/instagram-channel-setup",
      "self-hosted/configuration/features/integrations/instagram-via-instagram-business-login",
      "self-hosted/configuration/features/integrations/slack-integration-setup",
      "self-hosted/configuration/features/integrations/linear-integration-setup",
      "self-hosted/configuration/features/integrations/shopify-integration-setup",
    ],
  },
  {
    collapsible: true,
    label: "Maintenance",
    type: "category",
    items: ["self-hosted/deployment/upgrade", "self-hosted/deployment/backup"],
  },
  {
    type: "category",
    label: "Runbooks",
    collapsible: true,
    items: [
      "self-hosted/runbooks/migrate-chatwoot-database",
      "self-hosted/runbooks/upgrade-to-chatwoot-v4",
      "self-hosted/configuration/email-notifications",
      "self-hosted/configuration/enable-ip-logging",
    ],
  },
  {
    type: "category",
    label: "Others",
    items: [
      "self-hosted/telemetry",
      "self-hosted/enterprise-edition",
      "self-hosted/supported-features",
      "self-hosted/restricted-instances",
      "self-hosted/faq",
    ],
  },
];
