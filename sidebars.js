module.exports = {
  handbook: [
    {
      type: "category",
      label: "Company",
      items: [
        "handbook/about-chatwoot/history",
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
      ],
    },
    {
      "Email Channel": [
        "self-hosted/configuration/features/email-channel/conversation-continuity",
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
  ],
  product: [
    { "Getting Started": ["product"] },
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
        "product/channels/live-chat/integrations/nextjs"
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
      Others: [
        "product/channels/facebook",
        "product/channels/twitter",
        "product/channels/twilio-whatsapp-sms",
        "product/channels/supported-features",
        "product/features/webhooks",
        "product/features/campaigns",
      ],
    },
  ],
  UserGuide:
  [
    {"User Guide Info": 
    [
      "user-guide",
    "user-guide/privacypolicy",
    "user-guide/reviewanddistribution"
    ]
    },
    {"Product Info": 
    [
      "user-guide/aboutchatwoot",
      "user-guide/installationinstruction",
      "user-guide/settingupchatwootbackend",
      "user-guide/settingupchatwootwidget",
      "user-guide/backendsettings",
      "user-guide/howconversationhappens",
      "user-guide/backupandrestore",
      "user-guide/codeandpatchupdates",
      "user-guide/glossary"
    ]
    },
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
