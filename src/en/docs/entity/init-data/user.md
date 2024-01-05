---
title: User
icon: user
order: 1
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

First name of the user.

### `lastName`

- **Type:** `string`
- **Default:** `null`

__Optional._ Last name of the user.

### `username`

- **Type:** `string`
- **Default:** `null`

__Optional._ Username of the user.

### `languageCode`

- **Type:** `string`
- **Default:** `null`

__Optional._ IETF language tag of the user's language.

### `isPremium`

- **Type:** `bool`
- **Default:** `null`

__Optional._ `true`, if this user is a Telegram Premium user

### `allowsWriteToPm`

- **Type:** `bool`
- **Default:** `null`

__Optional._ `true`, if this user has allowed the bot to send them messages.

### `addedToAttachmentMenu`

- **Type:** `bool`
- **Default:** `null`

__Optional._ `true`, if this user added the bot to the attachment menu.

### `photoUrl`

- **Type:** `string`
- **Default:** `null`

__Optional._ URL of the user’s profile photo. The photo can be in `.jpeg` or `.svg` formats. Only returned for web applications launched from [attachment menu](https://core.telegram.org/bots/webapps#adding-bots-to-the-attachment-menu).

## Methods {#methods}

### `toArray`

Returns the entity, including children (if any), as an array.

[Created on the basis of official documentation](https://core.telegram.org/bots/webapps#webappuser)