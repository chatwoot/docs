---
title: "API Documentation"
---

Chatwoot uses [Swagger 2.0](https://swagger.io/specification/v2/) for documenting its APIs.

### Directory

```bash
- swagger/ ### folder in which all the API documentation is available
  - definitions/
  - parameters/
  - paths/
  - index.yml
  - swagger.json
```

### Building Swagger files

After you've made changes to the directory, a rake task builds the `swagger.json` file.

```bash
rake swagger:build
```

### Testing

Testing can be done via `http://localhost:3000/swagger` in the development mode to check if changes have been updated.
