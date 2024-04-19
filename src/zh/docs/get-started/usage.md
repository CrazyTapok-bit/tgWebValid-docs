---
title: 用法
icon: play
order: 4
---

首先，指定机器人的名称，您需要检查用户的名称。 或者将该选项留空以获取默认机器人。

## 例子 {#example}

```php
<?php

/**
 * 首先设置基本配置
 * 如果需要，添加其他机器人
 */

/** 我使用默认机器人 */
$bot = $tgWebValid->bot();

/** 或者，指定我想要使用哪个机器人 */
$bot = $tgWebValid->bot(
  name: 'secondary'
);
```

## 参数 {#parameters}

### `name`
- 类型: `string`
- 必需的: 不

通过指定名称，您将可以访问上一步中添加的多功能机器人。

:::warning
如果您指定机器人名称但不添加它，我们将被迫抛出 [BotException](../exception/bot.md) 以保持完整性
:::

## 验证者 {#validators}
接下来，您需要决定需要完成的身份验证类型。

可用验证器的列表可以在 [此页面](../validator/) 上找到