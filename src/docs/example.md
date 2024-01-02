---
title: Повний приклад
icon: bolt
order: 5
---

Ми намагаємось відобразити максимально повний приклад яким ви, скоріш за все, будете користуватись.

```php
<?php

use TgWebValid\TgWebValid;
use TgWebValid\BotConfig;
use TgWebValid\Exceptions\BotException;
use TgWebValid\Exceptions\ValidationException;
use Exception;

include './vendor/autoload.php';

try {
    /** Вказую налаштування за замовчуванням */
    $tgWebValid = new TgWebValid(
      token: 'TELEGRAM_BOT_TOKEN',
      throw: true
    );

    /** Налаштую ще один додатковий бот щоб працюват з ними */
    $tgWebValid->addBot(new BotConfig(
      name: 'secondary',
      token: 'TELEGRAM_BOT_TOKEN_2'
    ));

    /**
     * Використаю бот за замовчуванням,
     * та викличу бажаний тип перевірки
     */
    $user = $tgWebValid->bot()->validateLoginWidget(
      user: [/** Дані користувача */]
    );

    /** Якщо перевірка успішна, виведу сутність LoginWidget з даними про юзера */
    var_dump($user);

    /**
     * Або, вказую з яким ботом хочу працювати,
     * та викликаю бажаний тип перевірки
     */
    $initData = $tgWebValid->bot(name: 'secondary')->validateInitData(
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