---
title: 迷你应用程序
icon: tablet-screen-button
order: 1
head:
  - - meta
    - name: description
      content: 使用 TgWebValid 库在 PHP 项目后端安全地验证 Telegram Mini App 用户。
---

我们通过将接收到的哈希参数与数据验证字符串的 `HMAC-SHA-256` 签名的十六进制表示与密钥（即数据验证字符串的 `HMAC-SHA-256` 签名）进行比较来验证接收到的数据的完整性。 机器人令牌，其中常量字符串 `WebAppData` 用作密钥详细信息[此处](https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app)

:rocket: 完整的代码示例可在 [此页面](../example/mini-app.md)

## 例子 {#example}

```php
<?php

$initData = $bot->validateInitData(
  initData: 'query_id=...',
  throw: true
);
```

:bulb: 验证成功后，该方法将返回可在您的服务器上使用的所有现有用户数据。

## 参数 {#parameters}

### `initData`
- 类型: `string`
- 必需的: 是的

传递给小程序的原始用户数据字符串。

[附加信息](https://core.telegram.org/bots/webapps#initializing-mini-apps)

### `throw`
- 类型: `bool`
- 必需的: 不
- 默认: `null`. 应用默认设置

如果设置为 `true`，则如果验证失败，库将引发异常。

:::warning
如果您打算处理异常，请务必使用 `try/catch` :wink:

如果启用了异常，您将在验证失败后收到 [ValidationException](../exception/validation.md) 异常。 否则，将返回 `false`。
:::