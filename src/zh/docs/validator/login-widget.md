---
title: 登录小部件
icon: right-to-bracket
order: 2
head:
  - - meta
    - name: description
      content: 使用 TgWebValid 库安全地验证 PHP 项目中的 Telegram Login Widget 用户。
---

我们通过将接收到的哈希参数与数据验证字符串的 `HMAC-SHA-256` 签名的十六进制表示形式以及用作密钥的机器人令牌的 `SHA256` 哈希进行比较来验证接收到的数据的身份验证和完整性 。 详细信息 [此处](https://core.telegram.org/widgets/login#checking-authorization)

:rocket: 完整的代码示例可在 [此页面](../example/login-winget.md)

## 例子 {#example}

```php
<?php

$user = $bot->validateLoginWidget(
  user: [
      'auth_date' => 1679130118,
      'first_name' => 'Сергій',
      // 其他领域
  ],
  throw: true
);
```

:bulb: 验证成功后，该方法将返回可在您的服务器上使用的所有现有用户数据。

## 参数 {#parameters}

### `user`
- 类型: `array`
- 必需的: 是的

授权小部件返回的原始用户数据数组。

[附加信息](https://core.telegram.org/widgets/login#receiving-authorization-data)

### `throw`
- 类型: `bool`
- Requi必需的red: 不
- 默认: `null`. 应用默认设置

如果设置为 `true`，则如果验证失败，库将引发异常。

:::warning
如果您计划处理异常，请务必使用 `try/catch` :wink:

如果启用了异常，则在验证失败后您将收到 [ValidationException] 异常(../exception/validation.md)。 否则，将返回 `false`。
:::