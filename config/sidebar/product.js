module.exports = [
  {
    type: "category",
    label: "Getting Started",
    items: [
      "product",
      // "user-guide/getting-started/glossary",
      {
        "Setup your account": [
          "user-guide/setup-your-account/create-an-account",
          "user-guide/setup-your-account/configure-your-profile",
          "user-guide/setup-your-account/configure-account-details",
          "user-guide/add-agent-settings",
          "user-guide/add-inbox-settings",
          "user-guide/add-teams-settings",
          "user-guide/add-label-settings",
          "user-guide/integrations",
          "user-guide/applications",
        ],
      },
    ],
    collapsed: false,
    collapsible: false,
  },
  {
    collapsed: false,
    collapsible: true,
    label: "Channels",
    type: "category",
    items: [
      {
        "Website Live Chat": [
          "product/channels/live-chat/create-website-channel",
          "product/channels/live-chat/sdk/setup",
          "product/channels/live-chat/sdk/identity-validation",
          "product/channels/live-chat/sdk/live-chat-dark-mode",
          "product/channels/live-chat/conversation-continuity",
          {
            "Setup Instructions": [
              "product/channels/live-chat/webflow-integration",
              "product/channels/live-chat/integrations/docusaurus",
              "product/channels/live-chat/integrations/google-tag-manager",
              "product/channels/live-chat/integrations/react-native-widget",
              "product/channels/live-chat/integrations/nextjs",
              "product/channels/live-chat/integrations/vue",
              "product/channels/live-chat/integrations/gatsby",
              "product/channels/live-chat/integrations/wordpress",
            ],
          },
        ],
      },
      "product/channels/facebook",
      "product/channels/instagram",
      "product/channels/twitter",
      {
        "Whatsapp Channel": [
          "product/channels/whatsapp/whatsapp-cloud",
          "product/channels/whatsapp/twilio",
          "product/channels/whatsapp/360dialog"
        ],
      },
      {
        "SMS Channel": [
          "product/channels/sms/twilio",
          "product/channels/sms/bandwidth",
        ],
      },
      {
        Email: [
          "product/channels/email/create-channel",
          "product/channels/email/configure-imap",
          "product/channels/email/configure-smtp",
          "product/channels/email/forward-email",
          {
            Gmail: [
              "product/channels/email/gmail/enable-imap",
              "product/channels/email/gmail/less-secure-access",
              "product/channels/email/gmail/generate-app-password",
              "product/channels/email/gmail/add-forward-email",
            ],
            Microsoft: [
              "product/channels/email/microsoft/create-channel",
            ],
          },
        ],
      },
      {
        "API Channel": [
          "product/channels/api/create-channel",
          "product/channels/api/send-messages",
          "product/channels/api/receive-messages",
          "product/channels/api/client-apis",
        ],
      },
      "product/channels/telegram",
      "product/channels/line",
      "product/channels/supported-features",
    ],
  },
  {
    collapsed: false,
    collapsible: true,
    label: "Features",
    type: "category",
    items: [
      "user-guide/features/canned-responses",
      "user-guide/features/custom-attributes",
      "user-guide/features/csat",
      "user-guide/contacts",
      "product/inbox/routing-conversations-round-robin",
      "user-guide/features/folders",
      "user-guide/features/keyboard-shortcuts",
      "user-guide/features/segments",
      "user-guide/features/commandbar",
      "user-guide/features/multilingual-support",
      {
        Reports: [
          "user-guide/features/reports/concepts",
          "user-guide/features/reports/overview",
          "user-guide/features/reports/conversation",
          "user-guide/features/reports/csat",
          "user-guide/features/reports/agent",
          "user-guide/features/reports/label",
          "user-guide/features/reports/inbox",
          "user-guide/features/reports/team"
        ],
      },
      "user-guide/conversation-workflow",
      "product/others/advanced-conversation-filters",
      "user-guide/features/automations",
      "user-guide/features/pre-chat-form",
      {
        type: "category",
        label: "Campaigns",
        items: [
          "product/features/campaigns/ongoing",
          "product/features/campaigns/one-off",
        ],
      },
      {
        type: "category",
        label: "Integrations",
        items: [
          "product/channels/live-chat/integrations/dialogflow",
          "product/features/slack",
        ],
      },
    ],
  },
  {
    collapsed: false,
    collapsible: true,
    label: "Advanced",
    type: "category",
    items: [
      "product/others/agent-bots",
      "product/others/interactive-messages",
      "product/others/dashboard-apps",
      "product/others/help-center",
      {
        type: "category",
        label: "Webhooks",
        items: ["product/features/webhooks", "product/others/webhook-events"],
      },
      "product/others/websocket-events",
      "product/others/cookies",
    ],
  },
  {
    collapsed: false,
    collapsible: true,
    label: "Mobile App",
    type: "category",
    items: ["product/mobile-app/android", "product/mobile-app/ios"],
  },
  {
    collapsed: false,
    collapsible: false,
    label: "Others",
    type: "category",
    items: ["product/others/enterprise-edition","product/others/faq"],
  },
];
