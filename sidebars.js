module.exports = {
  handbook: [
    {
      type: 'category',
      label: 'Company',
      items: [
        'handbook/about-chatwoot/history',
      ],
    },
    {
      type: 'category',
      label: 'Engineering',
      items: [
        'handbook/engineering/issue-triage',
        'handbook/engineering/pr-guidelines',
      ],
    },
  ],
  selfHosted: [
    { 'Getting Started': ['self-hosted'], },
    {
      type: 'category',
      label: 'Deployment',
      items: [
        'self-hosted/deployment/architecture',
        'self-hosted/deployment/requirements',
        'self-hosted/deployment/heroku',
        'self-hosted/deployment/caprover',
        'self-hosted/deployment/docker',
        'self-hosted/deployment/linux-vm',
        'self-hosted/deployment/clevercloud',
      ],
    },
    { Performance: ['self-hosted/deployment/performance/cloudfront-cdn'] },
    {
      Configuration: [
        'self-hosted/configuration/environment-variables',
        'self-hosted/configuration/email-notifications',
        'self-hosted/configuration/enable-ip-logging',
      ]
    },
    {
      'Email Channel': [
        'self-hosted/configuration/features/email-channel/conversation-continuity',
        'self-hosted/configuration/features/email-channel/setup',
      ]
    },
    {
      Integrations: [
        'self-hosted/configuration/features/integrations/facebook-channel-setup',
        'self-hosted/configuration/features/integrations/twitter-channel-setup',
        'self-hosted/configuration/features/integrations/slack-integration-setup',
      ]
    },
    {
      Storage: [
        'self-hosted/deployment/storage/supported-providers',
        'self-hosted/deployment/storage/s3-bucket',
        'self-hosted/deployment/storage/gcs-bucket',
      ]
    }
  ],
  product: [
    { 'Getting Started': ['product'] },
    {
      'Website Live Chat': [
        'product/channels/live-chat/create-website-channel',
        'product/channels/live-chat/sdk/setup',
        'product/channels/live-chat/sdk/identity-validation',
        'product/channels/live-chat/webflow-integration',
      ]
    },
    {
      'Inboxes': [
        'product/inbox/routing-conversations-round-robin'
      ]
    },
    
    {
      'API Channel': [
        'product/channels/api/create-channel',
        'product/channels/api/send-messages',
        'product/channels/api/receive-messages'
      ]
    },
    {
      'Others': [
        'product/channels/facebook',
        'product/channels/twitter',
        'product/channels/twilio-whatsapp-sms',
        'product/channels/supported-features',
        'product/features/webhooks'
      ]
    }
  ],
  ContributingGuide: [
    { 'Getting Started': ['contributing-guide'] },
    {
      'Environment Setup': [
        'contributing-guide/environment-setup/mac-os',
        'contributing-guide/environment-setup/ubuntu',
        'contributing-guide/environment-setup/windows',
        'contributing-guide/environment-setup/docker',
      ]
    },
    {
      "Project Setup": [
        'contributing-guide/project-setup',
        'contributing-guide/environment-variables',
        'contributing-guide/common-errors',
      ]
    },
    {
      Other: [
        'contributing-guide/translation-guidelines',
        'contributing-guide/code-of-conduct',
        'contributing-guide/contributors',
      ]
    }
  ]
};
