---
sidebar_label: "Requirements"
title: "Chatwoot Self Hosted Requirements"
---


This page incldues useful information on the requirements that are needed to install and run Chatwoot on your servers.

## Operating Systems

### Supported Linux distribution

- Ubuntu (20.04)


Installation of Chatwoot is possible on most unix environments, but not officially supported.

### Microsoft Windows

Chatwoot is developed for Linux-based operating systems. Please consider using a virtual machine to run Chatwoot on windows

## Software requirements

### Ruby versions

- Ruby 3.0 and later is required.

You must use the standard MRI implementation of Ruby. Chatwoot needs several Gems that have native extensions.

### Node.js versions

We only support Node.js 10.13.0 or higher.

We recommend Node 14.x, as it's faster.

Chatwoot uses [webpack](https://webpack.js.org/) to compile frontend assets, which requires a minimum
version of Node.js 10.13.0.

You can check which version you're running with `node -v`. If you're running
a version older than `v10.13.0`, you need to update it to a newer version. You
can find instructions to install from community maintained packages or compile
from source at the [Node.js website](https://nodejs.org/en/download/).


## Hardware requirements

### Storage

The necessary hard drive space largely depends on your usage, the size and number of attachments that you recieve through your conversations etc.

Consider using a storage option provided by AWS, Azure, google cloud etc, if you want to stay flexible and accomodate the growing storage requirements. Chatwoot
also supports other s3 api compatible services viz Minio, DigitalOcean Spaces, Linode Objects etc. 

### CPU

CPU requirements are dependent on the usage and expected workload. Your workload is influenced by factors such as - but not limited to - how active your users are, how many conversations do you recieve and the conversation channels which you are using.

The following is the recommended minimum CPU hardware guidance for a handful of example Chatwoot conversation base sizes.

- **4 cores** is the **recommended** minimum number of cores and supports up to 10,000 conversations a day.
- 8 cores supports up to 20,000 conversations a day.
- More conversations? Consider scaling horizontally by adding more application servers.

### Memory

Memory requirements are dependent on the usage and expected workload. Your workload is influenced by factors such as - but not limited to - How active your users are, how many conversations do you recieve and the conversation channels which you are using.

The following is the recommended minimum Memory hardware guidance for a handful of example Chatwoot conversation base sizes.

- **4GB RAM** is the **required** minimum memory size and supports up to 10,000 conversations a day.
  - we are always working to reduce the memory requirement.
- 8GB RAM supports up to 20,000 conversations a day.
- More conversations? Consider scaling horizontally by adding more application servers.

**Note:** Add at least 1GB of swap memory to the machine to ensure that the machine doesn't run out of resources during an upgrade.

## Database

PostgreSQL is the only supported database. We don't have plans to support any other alternatives as of now.

### PostgreSQL Requirements

The server running PostgreSQL should have _at least_ 5-10 GB of storage
available, though the exact requirements depends on the usage on your Chatwoot Instance.

We highly recommend using the latest stable PostgreSQL versions as these were used for development and testing.

### Redis 

Redis stores the background task queue and various chatwoot configurations cached.
The storage requirements for Redis are minimal, You can start with 100MB and scale up as required.

Redis version 7.0 or higher is recommended

## Sidekiq

Sidekiq processes the background jobs with a multi-threaded process.
This process starts with the entire Rails stack but it can grow over time due to memory leaks.
On a very active server the Sidekiq process can use 1GB+ of memory.

You can opt to have both the sidekiq workers and rails servers to run on the same machine. 
But we recommend keeping the worker process and rails server on seperate webservers for better scalability.

## Supported web browsers

Chatwoot supports the following web browsers:

- [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)
- [Google Chrome](https://www.google.com/chrome/)
- [Chromium](https://www.chromium.org/getting-involved/dev-channel)
- [Apple Safari](https://www.apple.com/safari/)
- [Microsoft Edge](https://www.microsoft.com/en-us/edge)

NOTE:
We don't support running Chatwoot with JavaScript disabled in the browser.
