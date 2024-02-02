---
title: Login Widget
icon: right-to-bracket
order: 2
head:
  - - meta
    - name: description
      content: Securely validate Telegram Login Widget users in your PHP project using the TgWebValid library.
---

We verify the authentication and integrity of the received data by comparing the received hash parameter to the hexadecimal representation of the `HMAC-SHA-256` signature of the data validation string with the `SHA256` hash of the bot token used as the secret key. Details [here](https://core.telegram.org/widgets/login#checking-authorization)

## Example {#example}

```php
<?php

$user = $bot->validateLoginWidget(
  user: [
      'auth_date' => 1679130118,
      'first_name' => 'Сергій',
      // other fields
  ],
  throw: true
);
```

:bulb: Upon successful validation, the method will return a [LoginWidget](../entity/login-widget.md) entity that contains all existing user data that can be used on your server.

## Parameters {#parameters}

### `user`
- Type: `array`
- Required: Yes

An array of raw user data returned by the authorization widget.

[Additional Information](https://core.telegram.org/widgets/login#receiving-authorization-data)

### `throw`
- Type: `bool`
- Required: No
- Default: `null`. Default settings apply

If set to `true`, the library will throw an exception if validation fails.

:::warning
Be sure to use `try/catch` if you plan to handle exceptions :wink:

If exceptions are enabled, you will get a [ValidationException] exception after a validation failure(../exception/validation.md). Otherwise, `false' will be returned.
:::