---
title: Full example
icon: bolt
order: 5
---

We try to display as complete an example as possible, which you will most likely use.

```php
<?php

use TgWebValid\TgWebValid;
use TgWebValid\BotConfig;
use TgWebValid\Exceptions\BotException;
use TgWebValid\Exceptions\ValidationException;
use Exception;

include './vendor/autoload.php';

try {
    /** I specify the default settings */
    $tgWebValid = new TgWebValid(
      token: 'TELEGRAM_BOT_TOKEN',
      throw: true
    );

    /** I will set up another additional bot to work with them */
    $tgWebValid->addBot(new BotConfig(
      name: 'secondary',
      token: 'TELEGRAM_BOT_TOKEN_2'
    ));
 
    /**
     * I use the default bot
     * and call the desired type of verification
     */
    $user = $tgWebValid->bot()->validateLoginWidget(
      user: [/** User data */]
    );

    /**
     * If the check is successful,
     * I will display the LoginWidget entity with data about the user
     */
    var_dump($user);
 
    /**
     * Or, I specify which bot I want to work with
     * and call the desired type of verification
     */
    $initData = $tgWebValid->bot(name: 'secondary')->validateInitData(
      initData: 'query_id=...'
    );

    /** If the check is successful, I will output the InitData entity with all the data */
    var_dump($initData);

} catch (ValidationException $e) {
    // I will get a validation exception if the check is failed
} catch (BotException $e) {
    // Having made a mistake with the name of the bot, I will catch this exception
} catch (Exception $e) {
    // I will process other errors if there are any
}
```