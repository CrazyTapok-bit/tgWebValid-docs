---
title: 配置
icon: gears
order: 2
---

该库可以开箱即用，无需太多配置，唯一需要的参数是 Telegram API 令牌

## 例子 {#example}

```php
<?php

use TgWebValid\TgWebValid;

include './vendor/autoload.php';

$tgWebValid = new TgWebValid(
  token: 'TELEGRAM_BOT_TOKEN',
  throw: false 
);
```

:bulb: 这将设置机器人和**默认**配置

## 参数 {#parameters}

### `token`
- 类型: `string`
- 必需的: 是的

应代表其进行验证的机器人的 Telegram 令牌。

### `throw`
- 类型: `bool`
- 必需的: 不
- 默认: `false`

如果设置为 `true`，则如果验证失败，库将引发异常。

:::warning
如果您打算处理异常或在多机器人模式下工作，请务必使用 `try/catch` :wink:
:::