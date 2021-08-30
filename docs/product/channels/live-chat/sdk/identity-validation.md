---
sidebar_label: "Identity Validation"
title: 'Identity validation in Chatwoot'
---

To make sure the conversations between the customers and the support agents are private and to disallow impersonation, you can setup identity validation Chatwoot.

Identity validation can be enabled by generating an HMAC. The key used to generate HMAC for each webwidget is different and can be copied from Inboxes -> Settings -> Configuration -> Identity Validation -> Copy the token shown there

You can generate HMAC in different languages as shown below.

## Generate HMAC

### PHP

```php
<?php

$key = '<webwidget-hmac-token>';
$message = '<identifier>';

$identifier_hash = hash_hmac('sha256', $message, $key);
?>
```

### Javascript (Node.js)

```js
const crypto = require('crypto');

const key = '<webwidget-hmac-token>';
const message = '<identifier>';

const hash = crypto.createHmac('sha256', key).update(message).digest('hex');
```

### Ruby

```rb
require 'openssl'
require 'base64'

key = '<webwidget-hmac-token>'
message = '<identifier>'

OpenSSL::HMAC.hexdigest('sha256', key, message)
```

### Elixir

```elixir
key = '<webwidget-hmac-token>'
message = '<identifier>'

signature = :crypto.hmac(:sha256, key, message)

Base.encode16(signature, case: :lower)
```

### Golang

```go
package main

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/base64"
	"encoding/hex"
)

func main() {
  secret := []byte("<webwidget-hmac-token>")
  message := []byte("<identifier>")

  hash := hmac.New(sha256.New, secret)
  hash.Write(message)
  hex.EncodeToString(hash.Sum(nil))
}
```

### Python

```py
import hashlib
import hmac
import base64

secret = bytes('<webwidget-hmac-token>', 'utf-8')
message = bytes('<identifier>', 'utf-8')

hash = hmac.new(secret, message, hashlib.sha256)
hash.hexdigest()
```
