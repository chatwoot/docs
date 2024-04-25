---
sidebar_label: 'Restricted Instances'
title: 'Running Chatwoot in Restricted Instances'
---

This guide outlines the necessary configurations for deploying Chatwoot in environments with restricted internal networks, ensuring full functionality and compliance.

## Activating Licenses

Licensing is critical for the operational legality and functionality of Chatwoot:

1. **Whitelist Licensing Server:**
   Add `https://hub.2.chatwoot.com` to your network's whitelist for license activation and management of Stripe payment links.

2. **Switch to Email Invoices:**
   For organizations preferring email invoices, contact our sales team at `sales@chatwoot.com` with your installation identifier to configure this billing option.

## Enabling ChatWidget for Users

To ensure seamless functionality of the ChatWidget within restricted networks, perform the following configurations:

1. **WebSockets:**
   Enable WebSocket connections through `wss://yourdomain.com/cable` to facilitate real-time communications.

2. **Widget API URLs:**
   Open all API endpoints under the widget path to ensure full functionality. Configure your network to allow access to:
   - `https://yourdomain.com/api/v1/widget/*`
   This wildcard approach ensures all necessary widget functionalities such as conversation handling, message management, and contact updates are operable without individual endpoint specifications.

3. **Widget Assets:**
   Make sure that static assets required by the ChatWidget are accessible. These are typically served from:
   - `https://yourdomain.com/packs`
   Ensure all paths under this directory are accessible to support the widget fully.

## SMTP Configuration for Emails

Proper SMTP setup is essential for managing email communications within restricted networks:

1. **SMTP Server Details:**
   Configure your SMTP server to handle outgoing emails from Chatwoot, including server address, port, authentication details, and secure connection protocols.

2. **Secure Connections:**
   Employ TLS/SSL for secure email transmissions, ensuring your network permits connections over the designated SMTP port (commonly 587 for TLS).

## Additional Configuration for Restricted Networks

Additional considerations are necessary for the optimal operation of Chatwoot in restricted environments:

1. **DNS Configuration:**
   Ensure DNS settings are optimized to reduce resolution times and enhance the accessibility of Chatwoot services.

2. **SSL/TLS Configuration:**
   Maintain up-to-date SSL/TLS certificates that are compatible with all internal systems and browsers.

3. **Monitoring and Logging:**
   Implement comprehensive monitoring and logging solutions to swiftly detect and address potential disruptions, maintaining system stability and performance.

By following these detailed instructions, your Chatwoot deployment can effectively operate within restricted network environments, ensuring a robust and secure customer support platform.
