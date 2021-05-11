---
title: "API Documentation"
---

Chatwoot uses [Swagger 2.0](https://swagger.io/specification/v2/) for documenting the API.

### File/Directory structure

```bash
- swagger/ ### folder in which all the API documentation is available
  - definitions/
  - parameters/
  - paths/
  - index.yml
  - swagger.json
```

### Build Swagger files

A rake task is available to build `swagger.json` file after you have made changes to the swagger directory.

```bash
rake swagger:build
```

### Testing

In development mode, `http://localhost:3000/swagger` is available to test whether the API changes has been updated.
