---
title: Multibot
icon: gem
order: 3
---

Setting up multiple bots is very easy. For this, it is enough to call the `addBot` method and pass the necessary settings.

## Example {#example}

```php
<?php

use TgWebValid\BotConfig;

/**
 * Set up a basic configuration first
 * After that, add the required number of bots
 */

$tgWebValid->addBot(new BotConfig(
  name: 'secondary',
  token: 'TELEGRAM_BOT_TOKEN_2'
));
```

## Parameters {#parameters}

### `name`
- Type: `string`
- Required: Yes

Come up with an arbitrary bot name. It is he who you will specify to call checks on his behalf.

### `token`
- Type: `string`
- Required: Yes

The Telegram token of the bot on whose behalf the verification should be carried out.