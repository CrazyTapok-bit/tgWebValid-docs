---
title: Віджет входу
icon: right-to-bracket
order: 2
head:
  - - meta
    - name: description
      content: Як перевірити дані користувача, отримані через Telegram Login Widget на PHP
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

    /** Налашту ще один додатковий бот щоб працювати з ними */
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
     * Викликаю метод validateLoginWidget який перевіре дані
     * отримані від Telegram Login Widget
     */
    $user = $bot->validateLoginWidget(
      user: [/** Дані користувача */]
    );

    /** Якщо перевірка успішна, виведу сутність LoginWidget з усіма даними */
    var_dump($user);

} catch (ValidationException $e) {
    // Отримаю виняток валідації якщо перевірку провалено
} catch (BotException $e) {
    // Помилившись з назвою бота буду перехоплювати цей виняток
} catch (Exception $e) {
    // Оброблю інші помилки, якщо такі будуть
}
```