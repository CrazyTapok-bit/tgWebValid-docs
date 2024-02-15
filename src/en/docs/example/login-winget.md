---
title: Login Widget
icon: right-to-bracket
order: 2
head:
  - - meta
    - name: description
      content: How to validate data received via the Telegram Login Widget на PHP
---

We try to display as complete an example as possible, which you will most likely use.

```php
<?php

use TgWebValid\TgWebValid;
use TgWebValid\Exceptions\BotException;
use TgWebValid\Exceptions\ValidationException;
use Exception;

include './vendor/autoload.php';

try {
    /** 
     * I specify the token settings and enable work with exceptions
     */
    $tgWebValid = new TgWebValid(
      token: 'TELEGRAM_BOT_TOKEN',
      throw: true
    );

    /** I will set up another additional bot to work with them */
    $tgWebValid->addBot(
      name: 'secondary',
      token: 'TELEGRAM_BOT_TOKEN_2'
    );

    /** I use the default bot */
    $bot = $tgWebValid->bot();

    /** Or, specify which bot I want to work with */
    $bot = $tgWebValid->bot(
      name: 'secondary'
    );
    
    /**
     * Call the validateLoginWidget method,
     * which checks the data received from the Telegram Login Widget
     */
    $user = $bot->validateLoginWidget(
      user: [/** Дані користувача */]
    );

    /**
     * If the check is successful,
     * I will display the LoginWidget entity with all user data
     */
    var_dump($user);

} catch (ValidationException $e) {
    // I will get a validation exception if the check is failed
} catch (BotException $e) {
    // Having made a mistake with the name of the bot, I will catch this exception
} catch (Exception $e) {
    // I will process other errors if there are any
}
```