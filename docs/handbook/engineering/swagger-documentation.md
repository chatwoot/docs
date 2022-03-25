---
title: 'Swagger Documentation
---

Chatwoot maintains its [API documentation](https://www.chatwoot.com/developers/api/) using swagger. Therefore, whenever you commit an API change to Chatwoot, The associated `swagger` Documentation needs to be updated. 

This guide will walk you through adding documentation for a new endpoint in Chatwoot's [`swagger.json`](https://github.com/chatwoot/chatwoot/blob/develop/swagger/swagger.json). The guide uses `Canned Responses` as the example object for documentation.

## Prerequisities 

You can access swagger documentation for the Chatwoot app in your local installation over: `http://localhost:3000/swagger`
The commands to update your `swagger.json` is as follows.
```
rake swagger:build
```

If you are familiar with the process, need a sample reference, head over to the example [Pull Request](https://github.com/chatwoot/chatwoot/pull/4295)

## Steps to add a new endpoint

### 1. Define Tag in swagger index

Define the Tag for the object to be added in `swagger/index.yml`. Since we want this endpoint under `Application APIs`, it is added under the name `Application`.

see the changes in [reference commit](https://github.com/chatwoot/chatwoot/pull/4295/commits/1f6fbd1b6e6546ed4a50815d9fbe0b574a45acfc)

### 2. Add the resource definition

Add the resource definition and its attributes to a definition file. You should place the resource definition file in the  `root` or a `sub folder` of  `swagger/definitions/resource`. 

Don't forget to add the resource definition path to `index` in `swagger/definitions/index.yml`
In our case for the **Canned Response**, we are placing it in `swagger/definitions/resource/canned_response.yml`


see the changes in [reference commit](https://github.com/chatwoot/chatwoot/pull/4295/commits/c4b8a66d057ab0fafd23e504dd805a37d62c84e7)


### 3. Define request payloads

The next step is to define the  `request`  payloads. You can split methods like `create`, `update` etc. into single or multiple files based on your requirement. Also, make sure to add the paths to the index.

Ensure to add the response payload definition path to `index` in `swagger/definitions/index.yml`

In our case of **Canned Response**, since the payload is the same for both create and update, we are adding it in  `swagger/definitions/request/canned_response/create_update_payload.yml`

see the changes in [reference commit](https://github.com/chatwoot/chatwoot/pull/4295/commits/f70bd0a606ff976d1375c0de405201444e882bff)

### 4. Define request paths

Define the required `paths` for the endpoint to `swagger/paths/index.yml`. Create appropriate files for each route. In the path definitions, you can reference the request objects defined in `step 2` and params from `step 3`.

For `Canned Response`, we are defining the following path files.

```
swagger/paths/application/canned_responses/create.yml
swagger/paths/application/canned_responses/delete.yml
swagger/paths/application/canned_responses/index.yml
swagger/paths/application/canned_responses/update.yml
```

see the changes in [reference commit](https://github.com/chatwoot/chatwoot/pull/4295/commits/1b36a40e42f8ce88d805272931eef4b9bae6e023)


### 5. Build and verify

Run `rake swagger:build` and verify the updated documentation at `http://localhost:3000/swagger`.
If there are build errors, you will see them while loading the documentation in the browser. Fix the issues and re-run `build` until the documentation is ready. Then, raise a PR with the changes.

Ensure to commit the newly generated `/swagger/swagger.json`.

see the changes in [reference commit](https://github.com/chatwoot/chatwoot/pull/4295/commits/43e4ddc1d4e17708b716cdeab2696427a0e7d315)


## Updating Chatwoot API docs page

> If you are a community contributor, The PR reviewer will take care of this step.

Updating the swagger documentation on [`https://www.chatwoot.com/developers/api/`](https://www.chatwoot.com/developers/api/) requires a commit on the [`chatwoot-website` repo](https://github.com/chatwoot/chatwoot-website).

You should copy the contents of newly generated `swagger.json` and update the following files in the [`chatwoot-website` repo](https://github.com/chatwoot/chatwoot-website)

```
src/data/swagger/swagger-develop.json
src/data/swagger/swagger.json
```

see the changes in [reference pull request](https://github.com/chatwoot/chatwoot-website/pull/118/files)
