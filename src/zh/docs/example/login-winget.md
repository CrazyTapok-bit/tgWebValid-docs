---
title: 登录小部件
icon: right-to-bracket
order: 2
head:
  - - meta
    - name: description
      content: 如何验证通过 Telegram Login Widget 收到的数据 - PHP
---

我们尝试展示尽可能完整的示例，您很可能会使用该示例。

```php
<?php

use TgWebValid\TgWebValid;
use TgWebValid\Exceptions\BotException;
use TgWebValid\Exceptions\ValidationException;
use Exception;

include './vendor/autoload.php';

try {
    /** 
     * 我指定令牌设置并启用异常处理
     */
    $tgWebValid = new TgWebValid(
      token: 'TELEGRAM_BOT_TOKEN',
      throw: true
    );

    /** 我将设置另一个额外的机器人来与他们合作 */
    $tgWebValid->addBot(
      name: 'secondary',
      token: 'TELEGRAM_BOT_TOKEN_2'
    );

    /** 我使用默认机器人 */
    $bot = $tgWebValid->bot();

    /** 或者，指定我想要使用哪个机器人 */
    $bot = $tgWebValid->bot(
      name: 'secondary'
    );
    
    /**
     * 调用 validateLoginWidget 方法，
     * 检查从 Telegram Login Widget 收到的数据
     */
    $user = $bot->validateLoginWidget(
      user: [/** 用户数据 */]
    );

    /**
     * 如果检查成功，
     * 我将显示包含所有用户数据的 LoginWidget 实体
     */
    var_dump($user);

} catch (ValidationException $e) {
    // 如果检查失败，我将收到验证异常
} catch (BotException $e) {
    // 由于机器人名称错误，我会捕获此异常
} catch (Exception $e) {
    // 如果有其他错误我会处理
}
```