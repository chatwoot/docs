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
	      "Linux": [
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
    label: "Upgrade",
    type: "category",
    items: [
      "self-hosted/deployment/upgrade",
    ],
  },
  {
    collapsible: true,
    label: "Cloud provider guides",
    type: "category",
    items: [
      {
        "AWS": [
          "self-hosted/deployment/aws",
          "self-hosted/deployment/aws-marketplace",
        ],
      },
      "self-hosted/deployment/azure",
      "self-hosted/deployment/digital-ocean",
      "self-hosted/deployment/gcp",
      "self-hosted/deployment/heroku",
      {
        "Others": [
          "self-hosted/deployment/caprover",
          "self-hosted/deployment/cloudron",
          "self-hosted/deployment/clevercloud",
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
        "Performance": [
          "self-hosted/deployment/performance/cloudfront-cdn",
        ]
      },
      {
        "Monitoring": [
          "self-hosted/monitoring/super-admin-sidekiq",
          "self-hosted/monitoring/apm-and-error-monitoring",
          "self-hosted/monitoring/rate-limiting",
        ],
      },
      {
        "Storage": [
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
        ],
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
      "self-hosted/configuration/features/integrations/twitter-channel-setup",
      "self-hosted/configuration/features/integrations/slack-integration-setup",
    ],
  },
  {
    type: "category",
    label: "Runbooks",
    collapsible: false,
    items: [
      "self-hosted/runbooks/migrate-chatwoot-database",
      "self-hosted/configuration/email-notifications",
      "self-hosted/configuration/enable-ip-logging",
    ],
  },
  {
    type: "category",
    label: "Others",
    items: ["self-hosted/telemetry", "self-hosted/faq"],
  },
];
