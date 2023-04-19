---
sidebar_label: "Heroku"
title: "Heroku Chatwoot Production deployment guide"
---

### Deploying on Heroku

:::Note
Heroku has discontinued free dynos, postgres and redis. https://blog.heroku.com/new-low-cost-plans<br/>
Chatwoot will switch to using basic/mini plans for all new heroku deployments going forward.
:::

Deploy chatwoot on Heroku through the following steps

1. Click on the [one click deploy button](https://heroku.com/deploy?template=https://github.com/chatwoot/chatwoot/tree/master) and deploy your app.
2. Go to the Resources tab in the Heroku app dashboard and ensure the worker dynos is turned on.
3. Head over to settings tabs in Heroku app dashboard and click reveal config vars.
4. Configure the environment variables for [mailer](/docs/self-hosted/configuration/environment-variables#configure-emails) and [storage](/docs/self-hosted/deployment/storage/supported-providers) as per the [documentation](/docs/self-hosted/configuration/environment-variables).
5. Head over to `yourapp.herokuapp.com` and enjoy using Chatwoot.

<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"width="100%" height="443" type="text/html" src="https://www.youtube.com/embed/iN2Dl0QkvEg?autoplay=0&fs=0&iv_load_policy=3&showinfo=1&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"></iframe>

### Updating the deployment on Heroku

Whenever a new version is out for chatwoot, you update your Heroku deployment through following steps.

1. In the deploy tab, choose `Github` as the deployment option.
2. Connect chatwoot repo to the app.
3. Head over to the manual deploy option, choose `master` branch and hit deploy.

### Known Limitations

1. If you are on a free tier and you don’t access the application for a while Heroku will put your dynos to sleep. You can fix this by upgrading the dynos to paid tier.

2. Heroku has an "ephemeral" hard disk. The files uploaded to Chatwoot would not persist after the application is restarted. By default, Chatwoot uses local disk as the upload destination. To overcome this problem, you will have to [configure a cloud storage](/docs/self-hosted/deployment/storage/supported-providers).

3. If the build version is shown as unknown on the settings page, enable the runtime dyno metadata feature. To enable, use heroku labs:enable runtime-dyno-metadata -a <app-name>.
