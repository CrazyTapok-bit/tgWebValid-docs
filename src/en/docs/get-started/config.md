---
title: Config
icon: gears
order: 2
---

The library can work out of the box without much configuration, the only required parameter is the Telegram API token

## Example {#example}

```php
<?php

use TgWebValid\TgWebValid;

include './vendor/autoload.php';

$tgWebValid = new TgWebValid(
  token: 'TELEGRAM_BOT_TOKEN',
  throw: false 
);
```

:bulb: This will set up the bot and the **default** configuration

## Parameters {#parameters}

### `token`
- Type: `string`
- Required: Yes

The Telegram token of the bot on whose behalf the verification should be carried out.

### `throw`
- Type: `bool`
- Required: No
- Default: `false`

If set to `true`, the library will throw an exception if validation fails.

:::warning
Be sure to use `try/catch' if you plan to work with exceptions or in multibot mode :wink:
:::