---
title: 多机器人
icon: gem
order: 3
---

设置多个机器人非常简单。 为此，调用 `addBot` 方法并传递必要的设置就足够了。

## 例子 {#example}

```php
<?php

/**
 * 首先设置基本配置
 * 之后，添加所需数量的机器人
 */

$tgWebValid->addBot(
  name: 'secondary',
  token: 'TELEGRAM_BOT_TOKEN_2'
);
```

## 参数 {#parameters}

### `name`
- 类型: `string`
- 必需的: 是的

想出一个任意的机器人名称。 您将指定他代表他来支票。

### `token`
- 类型: `string`
- 必需的: 是的

应代表其进行验证的机器人的 Telegram 令牌。