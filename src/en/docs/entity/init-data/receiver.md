---
title: Receiver
icon: paper-plane
order: 2
---

This object contains the user data of the Mini App.

## Properties {#properties}

### `id`

- **Type:** `int`

The unique identifier of the user or bot. This number can have 32-52 significant bits. Therefore, a 64-bit signed integer or double-precision floating-point type is safe to store this identifier.

### `isBot`

- **Type:** `bool`
- **Default:** `null`

__Optional._ `true`, if this user is a bot.

### `firstName`

- **Type:** `string`

First name of the bot.

### `lastName`

- **Type:** `string`
- **Default:** `null`
- __Optional._ Last name of the bot.

### `username`

- **Type:** `string`
- **Default:** `null`
- __Optional._ Username of the bot.

### `isPremium`

- **Type:** `bool`
- **Default:** `null`
- __Optional._ `true`, if this user is a Telegram Premium user

### `photoUrl`

- **Type:** `string`
- **Default:** `null`

__Optional._ URL of the user’s profile photo. The photo can be in `.jpeg` or `.svg` formats. Only returned for web applications launched from [attachment menu](https://core.telegram.org/bots/webapps#adding-bots-to-the-attachment-menu).

## Methods {#methods}

### `toArray`

Returns the entity, including children (if any), as an array.

[Created on the basis of official documentation](https://core.telegram.org/bots/webapps#webappuser)