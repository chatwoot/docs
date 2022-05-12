---
sidebar_label: 'Enterprise Edition'
title: 'Developing Enterprise Edition Features'
---

Chatwoot ships two versions of its software, a Community Edition and an [Enterprise Edition](/product/others/enterprise-edition). This guide focuses on the engineering best praticses while developing features for the Enterprise edition.

> The guidelines followed in Chatwoot's Enterprise edition development is heavily inspired from the model adopted by [Gitlab](https://docs.gitlab.com/ee/development/ee_features.html) and Hence their guide is good reference to learn more.

## Testing Community Edition

Chatwoot team should be developing features over the Enterprise Edition in their local development environments by default.
You can test how the community edition will behave by toggling the environment variable `DISABLE_ENTERPRISE` to `true` and restarting Chatwoot Server.

## Organization of Code

The `javascript` part of Chatwoot code is completly MIT, while `enterprise` seperation is applied over the `ruby` code concerncing the backend Chatwoot APIs and Services.
All Enterprise Edition specific code should be placed under the top level `enterprise` top-level directory. The modules should follow the structure as close to their Community Edition counterparts (See the specifics in sub Sections).

The specs specific for enterprise edition should reside in `spec/enterprise` folder. 

## How to develop features

For Community Edition features, you can follow the general best pratices for Ruby on Rails and Vue.js Development.
But when you identifying a feature that is exclusive or has Enterprise edition extentions you have to follow the appropriate guidelines as mentioned below.

### General Guidelines
#### Javascript
The `javascript` part of Chatwoot code is availble under MIT. But you might want to limit the visibility of specific components based on the edition of Chatwoot Version. In such cases you can rely on the the helper method `isEnterprise()` available in `app/javascript/shared/mixins/configMixin.js` . Include the mixin in your Component and implement a conditional check to render the sub component appropriately.

#### Helpers in ruby Code
While working in the ruby code `ChatwootApp.enterprise?` helper is available for you to determine whether the user is running enterprise edition of the software.

#### Data Models & Data Migrations
Since Users could be migrating between versions, you should always ensure that all the migrations are run for both the edition and the database schema remains same for both the editions. In Case of DataMigrations, you can have blank implementations for these migrations by conditionally excluding Enterprise specific DataModels with 
`ChatwootApp.enterprise?`

### Routes
In cases where you want to limit the the access of a specific route to `Enterprise` Edition alone use the `ChatwootApp.enterprise?` helper.

```
  if ChatwootApp.enterprise?
    get '/enterprise', to: 'dashboard#enterprise'
  else
```

### Developing Features as extension of Community Edition

When developing Enterprise features that are built over the Community Edition software, Implement a base functionality in Community edition code and extend it over in an Enteprise licensed module.

This can be done by writing a module in the Enterprise namespace and injecting in the community edition class as shown in the given example.

```
# app/models/inbox.rb
class Inbox < ApplicationRecord
  # placeholder method which will be overriden in Enterprise edition
  def member_ids_with_assignment_capacity
    members.ids
  end
end

Inbox.prepend_mod_with('Inbox')
```

```
# enterprise/app/models/enterprise/inbox.rb
module Enterprise::Inbox
  def member_ids_with_assignment_capacity
    super - get_agent_ids_over_assignment_limit
  end

  private

  def get_agent_ids_over_assignment_limit
    # implement proprietry enterprise logic
  end
end

```
You can use the helper methods like `prepend_mod_with`, `extend_mod_with`, or `include_mod_with` depending on how you want to include the enterprise method into the chain. Refer [InjectEnterpriseEditionModule](https://github.com/chatwoot/chatwoot/blob/develop/config/initializers/01_inject_enterprise_edition_module.rb) to learn more.

Always ensure that the module written to extend the Community Logic has to be put under the `Enterprise` namespace.
```
# notice the extra namespacing with in models directory
# enterprise/app/models/enterprise/inbox.rb

# other examples
# enterprise/app/controllers/enterprise/paid_feature_controller.rb
# enterprise/app/builders/enterprise/paid_builder.rb

```


### Developing Feature Exclusive for Enterprise Edition

If the feature is not present in Community Edition in any form, You can directly put the code into the enterprise directory without the enterprise namespace.  This works because we have the enterprise directory in [autoload paths](https://github.com/chatwoot/chatwoot/blob/41b89014324772d8351b15936d25623f852980cb/config/application.rb#L19).

```
# no need for extra enterprise namespacing since we aren't preppending 
# enterprise/app/controllers/paid_feature_controller.rb
# enterprise/app/models/paid_feature.rb

```


## CI Pipeline for Community Edition
We run a `Community Edition` pipeline over all the pull requests raised against Chatwoot to ensure that the updates doesn't break existing features. 
This pipeline ensures the stability by stripping off the `enterprise` folder from the codebase and running the full suite of tests against Chatwoot.



