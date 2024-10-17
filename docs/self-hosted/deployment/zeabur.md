---
sidebar_label: "Zeabur"
title: "Zeabur Chatwoot deployment guide"
---

This guide will help you deploy Chatwoot on Zeabur using a pre-configured template.

## Deployment

Click the button below to open the Chatwoot Template page on Zeabur.

After opening the page, log in and click "Deploy" to access the configuration pop-up window.

<img src={require('./images/zeabur-deploy-configuration.webp').default} width="50%" alt="Open the deployment configuration of Chatwoot" />

Fill in your desired domain and region, then click "Deploy". The Chatwoot instance will be deployed to your selected region, which may take a few seconds. You can then view your Chatwoot instance in your Zeabur dashboard.

## Configuration

It is recommended to update the `SECRET_KEY_BASE` for both the `sidekiq` and `rails` services to a unique value. You can generate a new secret key by running `bundle exec rake secret`. Ensure the value is consistent across both services.

The default Chatwoot configuration on Zeabur does not include email and social media settings. Refer to the [`.env.example` file in the Chatwoot repository](https://github.com/chatwoot/chatwoot/blob/develop/.env.example) to check the available configuration options, and update the `rails` service accordingly.
