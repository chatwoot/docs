---
sidebar_label: "Requirements"
title: "Chatwoot Self Hosted Requirements"
---


This page includes useful information on the requirements that are needed to install and use Chatwoot.

## Operating Systems

### Supported Linux distribution

- Ubuntu (20.04)


Installation of Chatwoot is possible on most unix environments, but not officially supported.

### Microsoft Windows

Chatwoot is developed for Linux-based operating systems.
It does **not** run on Microsoft Windows, and we have no plans to support it in the near future.
Please consider using a virtual machine to run Chatwoot.

## Software requirements

### Ruby versions

- Ruby 2.7 and later is required.

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

The necessary hard drive space largely depends on the size and number of attachments that you recieve through you conversations.

If you want to be flexible about growing your hard drive space in the future consider mounting it using [logical volume management (LVM)](https://en.wikipedia.org/wiki/Logical_volume_management) so you can add more hard drives when you need them.

Apart from a local hard drive you can also consider using a storage options provided by AWS, Azure, google cloud etc.

### CPU

CPU requirements are dependent on the usage and expected workload. Your exact needs may be more, depending on your workload. Your workload is influenced by factors such as - but not limited to - how active your users are, how many conversations do you recieve and the integrations which you are using.

The following is the recommended minimum CPU hardware guidance for a handful of example Chatwoot conversation base sizes.

- **4 cores** is the **recommended** minimum number of cores and supports up to 10000 conversations a day
- 8 cores supports up to 20000 conversaations
- More conversations? Consider scaling horizontally by adding more application servers

### Memory

Memory requirements are dependent on the usage and expected workload. Your exact needs may be more, depending on your workload. Your workload is influenced by factors such as - but not limited to - how active your users are, how many conversations do you recieve and the integrations which you are using.

The following is the recommended minimum Memory hardware guidance for a handful of example Chatwoot conversation base sizes.

- **4GB RAM** is the **required** minimum memory size and supports up to 10000 conversations a day
  - we are always working to reduce the memory requirement.
- 8GB RAM supports up to 20000 conversations
- More conversations? Consider scaling horizontally by adding more application servers

In addition to the above, we generally recommend having at least 2GB of swap on your server,
even if you currently have enough available RAM. Having swap will help reduce the chance of errors occurring
if your available memory changes. We also recommend configuring the kernel's swappiness setting
to a low value like `10` to make the most of your RAM while still having the swap
available when needed.

## Database

PostgreSQL is the only supported database. We don't have plans to support any other alternatives as of now.

### PostgreSQL Requirements

The server running PostgreSQL should have _at least_ 5-10 GB of storage
available, though the exact requirements depends on the usage on your Chatwoot Instance.

We highly recommend using the latest stable PostgreSQL versions as these were used for development and testing.

### Redis 

Redis stores the background task queue and various chatwoot configurations cached.
The storage requirements for Redis are minimal, You can start with 100MB and scale up as required.

Chatwoot requires Redis version 4.0 or higher.
Redis version 6.0 or higher is recommended

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

For the listed web browsers, Chatwoot supports:

- The current and previous major versions of browsers.
- The current minor version of a supported major version.

NOTE:
We don't support running Chatwoot with JavaScript disabled in the browser.