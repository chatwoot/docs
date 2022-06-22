module.exports = [
  {
    collapsible: false,
    label: "Getting Started",
    type: 'category',
    items: ["self-hosted"],
  },
  {
    collapsible: false,
    label: "Deployment",
    type: "category",
    items: [
      "self-hosted/deployment/architecture",
      "self-hosted/deployment/requirements",
      "self-hosted/deployment/linux-vm",
      "self-hosted/deployment/chatwoot-ctl",
      "self-hosted/deployment/docker",
      "self-hosted/deployment/helm-charts",
      "self-hosted/deployment/heroku",
      "self-hosted/deployment/caprover",
      "self-hosted/deployment/cloudron",
      "self-hosted/deployment/clevercloud",
    ],
  },
  {
    collapsible: false,
    label: "Cloud provider guides",
    type: "category",
    items: [
      "self-hosted/deployment/aws",
      "self-hosted/deployment/aws-marketplace",
      "self-hosted/deployment/azure",
      "self-hosted/deployment/digital-ocean",
      "self-hosted/deployment/gcp",
    ],
  },
  {
    collapsible: false,
    label: "Performance",
    type: "category",
    items: ["self-hosted/deployment/performance/cloudfront-cdn"]
  },
  {
    collapsible: false,
    label: "Configuration",
    type: "category",
    items: [
      "self-hosted/configuration/environment-variables",
      "self-hosted/configuration/email-notifications",
      "self-hosted/configuration/enable-ip-logging",
    ],
  },
  {
    collapsible: false,
    label: "Monitoring",
    type: "category",
    items: [
      "self-hosted/monitoring/super-admin-sidekiq",
      "self-hosted/monitoring/apm-and-error-monitoring",
      "self-hosted/monitoring/rate-limiting"
    ],
  },
  {
    collapsible: false,
    label: "Email Channel",
    type: "category",
    items: [
      "self-hosted/configuration/features/email-channel/conversation-continuity",
      "self-hosted/configuration/features/email-channel/conversation-continuity-using-sendgrid",
      "self-hosted/configuration/features/email-channel/setup",
    ],
  },
  {
    collapsible: false,
    label: "Integrations",
    type: "category",
    items: [
      "self-hosted/configuration/features/integrations/facebook-channel-setup",
      "self-hosted/configuration/features/integrations/instagram-channel-setup",
      "self-hosted/configuration/features/integrations/twitter-channel-setup",
      "self-hosted/configuration/features/integrations/slack-integration-setup",
    ],
  },
  {
    collapsible: false,
    label: "Storage",
    type: "category",
    items: [
      "self-hosted/deployment/storage/supported-providers",
      "self-hosted/deployment/storage/s3-bucket",
      "self-hosted/deployment/storage/gcs-bucket",
    ],
  },
  {
    type: "category",
    label: "Others",
    items: ["self-hosted/telemetry"]
  },
];
