---
title: Конфігурація
icon: gears
order: 2
---

Бібліотека може працювати з коробки без особливого налаштування, єдиним обов’язковим параметром є токен Telegram API

## Приклад {#example}

```php
<?php

use TgWebValid\TgWebValid;

include './vendor/autoload.php';

$tgWebValid = new TgWebValid(
  token: 'TELEGRAM_BOT_TOKEN',
  throw: false 
);
```

:bulb: Таким чином, буде налаштовано бот та конфігурацію **за замовчуванням**

## Параметри {#parameters}

### `token`
- Тип: `string`
- Обов'язково: Так

Токен Telegram бота від імені якого треба здійснювати перевірку.

### `throw`
- Тип: `bool`
- Обов'язково: Ні
- За замовчуванням: `false`

Якщо встановлено `true`, бібліотека буде викидати виключення у разі провалу перевірки.

:::warning
Обов'язково використовуйте `try/catch`, якщо плануєте працювати з винятками або в режимі мультибот :wink:
:::