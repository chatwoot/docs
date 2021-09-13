module.exports = {
  handbook: [
    {
      type: "category",
      label: "Company",
      items: [
        "handbook/about-chatwoot/history",
        "handbook/about-chatwoot/investors",
      ],
    },
    {
      type: "category",
      label: "Culture",
      items: [
        "handbook/how-we-work/communication"
      ],
    },
    {
      type: "category",
      label: "Design",
      items: [
        "handbook/design/guidelines"
      ],
    },
    {
      type: "category",
      label: "Engineering",
      items: [
        "handbook/engineering/issue-triage",
        "handbook/engineering/pr-guidelines",
        "handbook/engineering/release-process",
        "handbook/engineering/faq",
      ],
    },
    {
      type: "category",
      label: "Marketing",
      items: [
        "handbook/marketing/brand-guidelines",
      ],
    },
  ],
  selfHosted: [
    { "Getting Started": ["self-hosted"] },
    {
      type: "category",
      label: "Deployment",
      items: [
        "self-hosted/deployment/architecture",
        "self-hosted/deployment/requirements",
        "self-hosted/deployment/heroku",
        "self-hosted/deployment/caprover",
        "self-hosted/deployment/docker",
        "self-hosted/deployment/helm-charts",
        "self-hosted/deployment/linux-vm",
        "self-hosted/deployment/clevercloud",
      ],
    },
    { Performance: ["self-hosted/deployment/performance/cloudfront-cdn"] },
    {
      Configuration: [
        "self-hosted/configuration/environment-variables",
        "self-hosted/configuration/email-notifications",
        "self-hosted/configuration/enable-ip-logging",

      ],
    },
    {
      Monitoring: [
        "self-hosted/monitoring/super-admin-sidekiq",
        "self-hosted/monitoring/apm-and-error-monitoring",
        "self-hosted/monitoring/rate-limiting"
      ],
    },
    {
      "Email Channel": [
        "self-hosted/configuration/features/email-channel/conversation-continuity",
        "self-hosted/configuration/features/email-channel/conversation-continuity-using-sendgrid",
        "self-hosted/configuration/features/email-channel/setup",
      ],
    },
    {
      Integrations: [
        "self-hosted/configuration/features/integrations/facebook-channel-setup",
        "self-hosted/configuration/features/integrations/twitter-channel-setup",
        "self-hosted/configuration/features/integrations/slack-integration-setup",
      ],
    },
    {
      Storage: [
        "self-hosted/deployment/storage/supported-providers",
        "self-hosted/deployment/storage/s3-bucket",
        "self-hosted/deployment/storage/gcs-bucket",
      ],
    },
    { Others: ["self-hosted/telemetry"] },
  ],
  product: [
    { "Getting Started": [
        "product",
        "product/channels/supported-features",
        "product/features/campaigns",
        "product/features/webhooks",
      ]
    },
    { "Channels": [
        "product/channels/facebook",
        "product/channels/twitter",
        "product/channels/twilio-whatsapp-sms",
      ]
    },
    {
      "Website Live Chat": [
        "product/channels/live-chat/create-website-channel",
        "product/channels/live-chat/sdk/setup",
        "product/channels/live-chat/sdk/identity-validation",
        "product/channels/live-chat/conversation-continuity",
      ],
    },
    {
      "Live Chat Integrations": [
        "product/channels/live-chat/integrations/dialogflow",
        "product/channels/live-chat/webflow-integration",
        "product/channels/live-chat/integrations/docusaurus",
        "product/channels/live-chat/integrations/google-tag-manager",
        "product/channels/live-chat/integrations/react-native-widget",
        "product/channels/live-chat/integrations/nextjs",
        "product/channels/live-chat/integrations/wordpress"
      ]
    },
    {
      "API Channel": [
        "product/channels/api/create-channel",
        "product/channels/api/send-messages",
        "product/channels/api/receive-messages",
        "product/channels/api/client-apis",
      ],
    },
    {
      "Inboxes": [
        "product/inbox/routing-conversations-round-robin"
      ]
    },
    {
      "Mobile App": [
        "product/mobile-app/android",
        "product/mobile-app/ios"
      ],
    },
    {
      "Others": [
        "product/others/interactive-messages",
        "product/others/webhook-events",
        "product/others/websocket-events",
        "product/others/cookies"
      ],
    },
  ],
  userGuide:
  [
    // {"User Guide Info":
    // [
    //   "user-guide",
    // "user-guide/privacy-policy",
    // ]
    // },
    // {
    // type: 'category',
    // label: 'Product Info',
    // items:
    // [
    //   "user-guide/about-chatwoot",
    //   "user-guide/installation-instruction",
    // ]},
    {
      "Setup Chatwoot Account":[
        "user-guide/configure-chatwoot-account",
        "user-guide/profile-settings",
        "user-guide/account-settings",
        "user-guide/add-agent-settings",
        "user-guide/add-inbox-settings",
        "user-guide/setting-up-chatwootwidget",
        "user-guide/add-teams-settings",
        "user-guide/add-label-settings",
        "user-guide/canned-response-settings",
        "user-guide/integrations",
        "user-guide/applications",
      ]
    },
    {
      "Conversations":[
        "user-guide/conversation-workflow",
      ]
    },
    {
      "Contacts":[
        "user-guide/contacts",
      ]
    },
    {
      "Reports":[
        "user-guide/reports",
      ]
    },
    // {"Other":[
    //   "user-guide/backup-and-restore",
    //   "user-guide/code-and-patch-updates",
    //   "user-guide/glossary"
    // ]}
  ],
  ContributingGuide: [
    { "Getting Started": ["contributing-guide"] },
    {
      "Environment Setup": [
        "contributing-guide/environment-setup/mac-os",
        "contributing-guide/environment-setup/ubuntu",
        "contributing-guide/environment-setup/windows",
        "contributing-guide/environment-setup/docker",
      ],
    },
    {
      "Project Setup": [
        "contributing-guide/project-setup",
        "contributing-guide/environment-variables",
        "contributing-guide/common-errors",
      ],
    },
    {
      "Mobile App": [
        "contributing-guide/mobile-app/setup-guide",
        "contributing-guide/mobile-app/custom-release-guide",
      ],
    },
    {
      "Testing": [
        "contributing-guide/tests/cypress",
      ],
    },
    {
      Other: [
        "contributing-guide/translation-guidelines",
        "contributing-guide/api-documentation",
        "contributing-guide/code-of-conduct",
        "contributing-guide/contributors",
      ],
    },
  ],
};
