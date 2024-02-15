---
title: InitData
icon: object-group
dir:
  order: 1
---

This object contains the data that is passed to the applet when it is opened. This entity can only be accessed after successful user authentication using the validator [mini-app](../../validator/mini-app.md).

## Properties {#properties}

### `queryId`

- **Type:** `string`
- **Default:** `null`

__Optional._ A unique identifier for the Web App session

### `user`

- **Type:** [`TgWebValid\Entities\InitData\User`](./user.md)
- **Default:** `null`

__Optional._ An object containing data about the current user.

### `receiver`

- **Type:** [`TgWebValid\Entities\InitData\Receiver`](./receiver.md)
- **Default:** `null`

__Optional._ An object containing data about the chat partner of the current user in the chat where the bot was launched via the attachment menu. Returned only for private chats and only for Web Apps launched via the [attachment menu](https://core.telegram.org/bots/webapps#adding-bots-to-the-attachment-menu).

### `chat`

- **Type:** [`TgWebValid\Entities\InitData\Chat`](./chat.md)
- **Default:** `null`

__Optional._ An object containing data about the chat where the bot was launched via the attachment menu. Returned for supergroups, channels and group chats – only for Web Apps launched via the [attachment menu](https://core.telegram.org/bots/webapps#adding-bots-to-the-attachment-menu).

### `chatType`

- **Type:** `string`
- **Default:** `null`

__Optional._ Type of the chat from which the Web App was opened. Can be either `sender` for a private chat with the user opening the link, `private`, `group`, `supergroup`, or `channel`. Returned only for Web Apps launched from direct links.

### `chatInstance`

- **Type:** `string`
- **Default:** `null`

__Optional._ Global identifier, uniquely corresponding to the chat from which the Web App was opened. Returned only for Web Apps launched from a direct link.

### `startParam`

- **Type:** `string`
- **Default:** `null`

The value of the [`startattach`](https://core.telegram.org/bots/webapps#adding-bots-to-the-attachment-menu) parameter, passed via link. Only returned for Web Apps when launched from the [attachment menu](https://core.telegram.org/bots/webapps#adding-bots-to-the-attachment-menu) via link.

### `canSendAfter`

- **Type:** `int`
- **Default:** `null`

__Optional._ Time in seconds, after which a message can be sent via the [answerWebAppQuery](https://core.telegram.org/bots/api#answerwebappquery) method.

### `authDate`

- **Type:** [`CarbonInterface`](https://carbon.nesbot.com/docs/)

A date interface for obtaining the time of opening a form in `Unix` format, and not only that.

### `hash`

- **Type:** `string`

A hash of all passed parameters, with which the validator can check their validity.

## Methods {#methods}

### `toArray`

Returns the entity, including children (if any), as an array.

[Created on the basis of official documentation](https://core.telegram.org/bots/webapps#webappinitdata)