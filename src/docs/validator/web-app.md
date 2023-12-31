---
title: Міні додаток
icon: tablet-screen-button
order: 1
---

Ми перевіряємо цілісність отриманих даних, порівнявши отриманий хеш-параметр із шістнадцятковим представленням підпису `HMAC-SHA-256` рядка перевірки даних із секретним ключем, який є підписом `HMAC-SHA-256` маркер бота з постійним рядком, `WebAppData` який використовується як ключ. Деталі [тут](https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app)

## Приклад {#example}

```php
<?php

$initData = $bot->validateInitData(
  initData: 'query_id=...',
  throw: true
);
```

:bulb: Після успішної перевірки, метод поверне сутність [InitData](../entity/init-data/) яка містить усі наявні дані які можуть використовуватися на вашому сервері.

## Параметри {#parameters}

### `initData`
- Тип: `string`
- Обов'язково: Так

Рядок з необробленими даними користувача, переданими в міні-програму.

[Додаткова інформація](https://core.telegram.org/bots/webapps#initializing-mini-apps)

### `throw`
- Тип: `bool`
- Обов'язково: Ні
- За замовчуванням: `null`. Застосовуються базові налаштування

Якщо встановлено `true`, бібліотека буде викидати виключення у разі провалу перевірки.

:::warning
Обов'язково використовуйте `try/catch`, якщо плануєте працювати з винятками :wink:

Якщо винятки увімкнено, то після провалу перевірки ви отримаєте виключення [ValidationException](../exception/validation.md). Інакше, буде повернуто `false`.
:::