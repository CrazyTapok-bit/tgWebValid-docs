---
title: Chat
icon: message
order: 3
---

This object represents a chat.

## Properties {#properties}

### `id`

- **Type:** `int`

A unique identifier for this chat. This number can have 32-52 significant bits. Therefore, a 64-bit signed integer or double-precision float type is safe to store this identifier.

### `type`

- **Type:** `string`

Type of chat, can be either `group`, `supergroup` or `channel`

### `title`

- **Type:** `string`

Title of the chat

### `username`

- **Type:** `string`
- **Default:** `null`

__Optional._ Username of the chat

### `photoUrl`

- **Type:** `string`
- **За замовчуванням:** `null`

__Optional._ URL of the chat’s photo. The photo can be in `.jpeg` or `.svg` formats. Only returned for Web Apps launched from the [attachment menu](https://core.telegram.org/bots/webapps#adding-bots-to-the-attachment-menu).

## Methods {#methods}

### `toArray`

Returns the entity, including children (if any), as an array.

[Created on the basis of official documentation](https://core.telegram.org/bots/webapps#webappchat)