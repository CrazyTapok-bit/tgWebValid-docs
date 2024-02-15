---
title: Mini App
icon: tablet-screen-button
order: 1
head:
  - - meta
    - name: description
      content: Securely validate Telegram Mini App users on the backend of your PHP project using the TgWebValid library.
---

We verify the integrity of the received data by comparing the received hash parameter with the hexadecimal representation of the `HMAC-SHA-256` signature of the data validation string with the secret key that is the `HMAC-SHA-256` signature of the bot token with the constant string `WebAppData` used as a key Details [here](https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app)

## Example {#example}

```php
<?php

$initData = $bot->validateInitData(
  initData: 'query_id=...',
  throw: true
);
```

:bulb: Upon successful validation, the method will return an [InitData](../entity/init-data/) entity that contains all available data that can be used on your server.

## Parameters {#parameters}

### `initData`
- Type: `string`
- Required: Yes

A string of raw user data passed to the applet.

[Additional Information](https://core.telegram.org/bots/webapps#initializing-mini-apps)

### `throw`
- Type: `bool`
- Required: No
- Default: `null`. Default settings apply

If set to `true`, the library will throw an exception if validation fails.

:::warning
Be sure to use `try/catch' if you plan to handle exceptions :wink:

If exceptions are enabled, you will get a [ValidationException](../exception/validation.md) exception after a validation failure. Otherwise, `false' will be returned.
:::