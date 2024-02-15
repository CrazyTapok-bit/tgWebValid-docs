---
title: Usage
icon: play
order: 4
---

First of all, specify the name of the bot, the name of which you need to check the user. Or leave the option blank to get the default bot.

## Example {#example}

```php
<?php

/**
 * Set up a basic configuration first
 * Add other bots if needed
 */

/** I use the default bot */
$bot = $tgWebValid->bot();

/** Or, specify which bot I want to work with */
$bot = $tgWebValid->bot(
  name: 'secondary'
);
```

## Parameters {#parameters}

### `name`
- Type: `string`
- Required: No

By specifying the name, you will get access to the multibot added in the previous step.

:::warning
If you specify a bot name but don't add it, we'll be forced to throw a [BotException](../exception/bot.md) in order to maintain integrity
:::

## Validators {#validators}
Next, you need to decide on the type of authentication that needs to be done.

The list of available validators can be found on [this page](../validator/)