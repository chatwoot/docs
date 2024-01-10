---
sidebar_label: "Make Commands"
title: "Speed up your local development with Make"
---

Speed up your local development workflow with make commands. 

## Clone the repo and cd to the Chatwoot directory

Clone the repository and navigate to the Chatwoot directory:
```
git clone https://github.com/chatwoot/chatwoot.git
cd chatwoot
```

## Install Ruby & JavaScript dependencies

Install Ruby and JavaScript dependencies using the following command. This command runs Bundler and Yarn:
```
make burn
```

## Run database migrations

Apply necessary database schema changes to your development environment by running the following command:
```
make db
```

## Run database seed

Apply necessary database seed to your development environment by running the following command:
```
make db_seed
```

## Run dev server using Overmind

Start the development server using Overmind, a process manager that can run multiple processes concurrently:
```
make run
```

## Force run if ./.overmind.sock file exists

If the `make run` command fails due to the existence of a `./.overmind.sock` file, you can try using the following command:
```
make force_run
```

## Debug - Attach to backend via Overmind tmux session

For debugging purposes, you can attach to the backend via the Overmind tmux session using the following command:
```
make debug
```

## Debug worker

To debug the worker, use the following command:
```
make debug_worker
```

## Get Rails console

Access the Rails console, which provides an interactive environment for interacting with the Chatwoot application:
```
make console
```

## Build Docker image

Build the Docker image for the Chatwoot project:
```
make docker
```

## Workflow after pulling in the latest changes from `develop`

To update your development environment after pulling the latest changes from the `develop` branch, follow these steps:
```
make burn     # Install dependencies

make db       # Run migrations

make run      # Start the server
```
