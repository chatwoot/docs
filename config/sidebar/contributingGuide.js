module.exports = [
  {
    collapsible: false,
    label: "Getting Started",
    type: "category",
    items: ["contributing-guide"],
  },
  {
    collapsible: false,
    type: "category",
    label: "Environment Setup",
    items: [
      "contributing-guide/environment-setup/mac-os",
      "contributing-guide/environment-setup/ubuntu",
      "contributing-guide/environment-setup/windows",
      "contributing-guide/environment-setup/docker",
    ],
  },
  {
    collapsible: false,
    type: "category",
    label: "Project Setup",
    items: [
      "contributing-guide/project-setup",
      "contributing-guide/environment-variables",
      "contributing-guide/common-errors",
    ],
  },
  {
    collapsible: false,
    type: "category",
    label: "Mobile App",
    items: [
      "contributing-guide/mobile-app/setup-guide",
      "contributing-guide/mobile-app/custom-release-guide",
    ],
  },
  {
    collapsible: false,
    type: "category",
    label: "Testing",
    items: [
      "contributing-guide/tests/cypress",
    ],
  },
  {
    collapsible: false,
    type: "category",
    label: "Other",
    items: [
      "contributing-guide/translation-guidelines",
      "contributing-guide/api-documentation",
      "contributing-guide/code-of-conduct",
      "contributing-guide/contributors",
    ],
  },
];
