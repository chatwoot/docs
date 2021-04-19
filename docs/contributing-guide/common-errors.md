---
title: "Common Errors"
---

The following are some of the errors you might encounter while setting up the project.


### Redis connection error

```bash
ArgumentError: invalid uri scheme
```

This is an error thrown from redis connector. You might not have setup the redis environment variables properly. Please refer to dependencies section to install redis-server and [Configure Redis URL](https://www.chatwoot.com/docs/environment-variables) in the environment-variables section.


### pg gem Installation error

If you see the following error while bundle installation, provide the Postgres path as pg_config.

```
Gem::Ext::BuildError: ERROR: Failed to build gem native extension.

An error occurred while installing pg (x.x.x), and Bundler cannot
continue.
Make sure that `gem install pg -v 'x.x.x' --source 'https://rubygems.org/'`
succeeds before bundling.

checking for pg_config... no
No pg_config... trying anyway. If building fails, please try again with
 --with-pg-config=/path/to/pg_config
```

To fix this, try executing

```
gem install pg -v 'x.x.x' --source 'https://rubygems.org/' -- --with-pg-config=path-to-postgres-installation/12/bin/pg_config
```
