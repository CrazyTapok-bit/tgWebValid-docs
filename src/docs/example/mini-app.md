---
title: Міні додаток
icon: tablet-screen-button
order: 1
head:
  - - meta
    - name: description
      content: Як перевірити дані користувача, отримані через Telegram Mini App на PHP
---

Ми намагаємось відобразити максимально повний приклад яким ви, скоріш за все, будете користуватись.

```php
<?php

use TgWebValid\TgWebValid;
use TgWebValid\Exceptions\BotException;
use TgWebValid\Exceptions\ValidationException;
use Exception;

include './vendor/autoload.php';

try {
    /** 
     * Вказую налаштування токена, та вмикаю роботу з винятками
     */
    $tgWebValid = new TgWebValid(
      token: 'TELEGRAM_BOT_TOKEN',
      throw: true
    );

    /** Налаштую ще один додатковий бот щоб працювати з ними */
    $tgWebValid->addBot(
      name: 'secondary',
      token: 'TELEGRAM_BOT_TOKEN_2'
    );

    /** Використаю бот за замовчуванням */
    $bot = $tgWebValid->bot();

    /** Або, вказую з яким ботом хочу працювати*/
    $bot = $tgWebValid->bot(
      name: 'secondary'
    );
    
    /**
     * Викликаю метод validateInitData який перевіре дані
     * отримані від Telegram Mini App
     */
    $initData = $bot->validateInitData(
      initData: 'query_id=...'
    );

    /** Якщо перевірка успішна, виведу сутність InitData з усіма даними */
    var_dump($initData);

} catch (ValidationException $e) {
    // Отримаю виняток валідації якщо перевірку провалено
} catch (BotException $e) {
    // Помилившись з назвою бота буду перехоплювати цей виняток
} catch (Exception $e) {
    // Оброблю інші помилки, якщо такі будуть
}
```