---
title: "Common errors"
---

You may encounter the following errors while setting up the project.

- **Redis connection error**: The following error is thrown from the Redis connector if the Redis environment variables are not set up properly.

  ```bash
  ArgumentError: invalid uri scheme
  ```

  To fix, install the Redis-server for your respective environment and [configure Redis URL](/self-hosted/configuration/environment-variables#configure-redis).

- **pg gem installation error**: This error is thrown during bundle installation.

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

  To fix, provide the Postgres path as pg_config.

  ```
  gem install pg -v 'x.x.x' --source 'https://rubygems.org/' -- --with-pg-config=path-to-postgres-installation/12/bin/pg_config
  ```
