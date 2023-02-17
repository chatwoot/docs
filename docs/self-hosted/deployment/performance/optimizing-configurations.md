---
sidebar_label: "Optimizing Configurations"
title: "Optimizing Configuration for Maximum Performance"
---

This document helps you to fine-tune various configuration values available in Chatwoot to extract the maximum performance out of your Chatwoot Installation. 

## Puma
Chatwoot uses [Puma](https://puma.io/) as its Webserver. So let's start with a brief introduction to Puma workers and threads.

Puma is a popular web server for Ruby on Rails applications, and it uses multiple workers and threads to handle incoming requests. Each Worker runs its own instance of the application, and each thread within a worker can handle a single request at a time.

Now, let's move on to how you can configure Puma workers and threads using environment variables.


### Workers
Each Puma worker is a separate process that runs an instance of the Ruby application. Each Worker has its own event loop that can handle incoming requests concurrently using multiple threads. 

When the Puma server receives a request, it is assigned to a worker process in a round-robin fashion. Once a worker receives a request, it assigns the request to an available thread within its process. Each thread then handles the request, including any required database queries, calculations, and other processing tasks. Using multiple worker processes allows Puma to handle multiple requests concurrently without blocking other requests or causing a bottleneck.

#### Configuring the number of workers

The `WEB_CONCURRENCY` environment variable can be used to configure the number of workers in Puma. It's important to consider the number of available CPU cores and aim for a ratio of workers to cores that allows the server to run at maximum capacity without causing performance issues. It's recommended to have a number of workers that matches or is slightly less than the number of available CPU cores to avoid competition for CPU time, which can lead to performance issues.


```
WEB_CONCURRENCY=2
```

> Note: The default configuration in Chatwoot for `WEB_CONCURRENCY` is `0`. I.e. it runs one Worker. This is to ensure the application works on machines with a lower configuration. If you run Chatwoot on machines with higher specs, fine-tune this configuration accordingly.


### Threads

Each Puma thread is a lightweight execution context that can handle a single request at a time. When a worker process receives a request, it is assigned to an available thread within that process. Each thread then handles the request, including any required database queries, calculations, and other processing tasks.

Using multiple threads can increase concurrency and performance, but balancing the number of threads with the available CPU resources is essential to avoid competition for CPU time. The number of threads can be configured using the following environment variables. 

```
# Only required to configure if absolutely necessary
# Defaults to Max threads value by default
# RAILS_MIN_THREADS=5
RAILS_MAX_THREADS=5
```

> Note? The default configuration in Chatwoot for `RAILS_MAX_THREADS` values is `5`. You can fine-tune it based on your requirements. The value of `RAILS_MIN_THREADS` defaults to `RAILS_MAX_THREADS` unless a specific value is provided. 

### Fine-tuning

TLDR: You can configure `WEB_CONCURRENCY` to the number of CPU cores and then fine-tune the number of `RAILS_MAX_THREADS` based on the available `memory` and `CPU` resources. While running the sidekiq and rails server on a single machine, consider the sidekiq configuration while determining these numbers.


References: 

- https://devcenter.heroku.com/articles/deploying-rails-applications-with-the-puma-web-server
- https://www.speedshop.co/2017/10/12/appserver.html
- https://github.com/ankane/the-ultimate-guide-to-ruby-timeouts#puma


## Sidekiq

Sidekiq is a popular job processing library for Ruby on Rails applications. Chatwoot uses it as a simple and efficient way to execute background jobs asynchronously in the Rails application.

Sidekiq uses Redis to manage a job queue, allowing you to run multiple workers in parallel, each processing jobs from the queue. This makes it easy to distribute workloads and handle large volumes of jobs without bogging down your Rails application's main thread.

You can configure the number of sidekiq workers using the following environment variables.

```
# the default value in Chatwoot is 10 
SIDEKIQ_CONCURRENCY=10
```

Note: If you are running sidekiq on dedicated pods, you can fine-tune the `SIDEKIQ_CONCURRENCY` number to extract the maximum performance of the available CPU resources. 


## Database Connections

When a Ruby on Rails application is launched, it creates a pool of database connections that are stored in memory. These connections are established with the database server at the beginning of the application and are kept open throughout the life of the application. When a request is made to the application that requires access to the database, the application server will retrieve a connection from the pool and use it to process the request. Once the request is complete, the connection is returned to the pool to be used for future requests.

The size of the database pool in Chatwoot is configured automatically based on the values of `RAILS_MAX_THREADS` and `SIDEKIQ_CONCURRENCY`
```
https://github.com/chatwoot/chatwoot/blob/4d719a8fe33bed72ec57812e174dab1874315340/config/database.yml#L7
```

Ref: 
- https://stackoverflow.com/questions/40412611/in-puma-how-do-i-calculate-db-connections

> Note: If you have a database server with higher resources available, you can leverage it by bumping up the number of rails and sidekiq pods so that more of the connection limit is being used.


### FAQ

## Getting `ActiveRecord::ConnectionTimeoutError` errors. 

There is a potential bug with Chatwoot's implementation of `rack-timeout`, in specific installations, which results in connections not being released properly. For the time being, you can set the following environment variable to disable `rack-timeout` if you are experiencing this. 

```
RACK_TIMEOUT_SERVICE_TIMEOUT=0
```
