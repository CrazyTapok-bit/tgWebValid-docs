---
title: LoginWidget
icon: object-group
order: 2
---

This object contains the data returned after successful authentication with [login widget](../validator/login-widget.md).

## Properties {#properties}

### `id`

- **Type:** `int`

Unique user ID. This number can have 32-52 significant bits. Therefore, a 64-bit signed integer or double-precision float type is safe to store this identifier.

### `firstName`

- **Type:** `string`

First name of the user.

### `lastName`

- **Type:** `string`
- **Default:** `null`

_Optional._ Last name of the user.

### `username`

- **Type:** `string`
- **Default:** `null`

_Optional._ Username of the user.

### `photoUrl`

- **Type:** `string`
- **Default:** `null`

_Optional._ URL of the user’s profile photo. The photo can be in `.jpeg` or `.svg` formats.

### `authDate`

- **Type:** [`CarbonInterface`](https://carbon.nesbot.com/docs/)

A date interface for obtaining the time of opening a form in `Unix` format, and not only that.

### `hash`

- **Type:** `string`

A hash of all passed parameters, with which the validator can check their validity.

## Methods {#methods}

### `toArray`

Returns the entity, including children (if any), as an array.

[Created on the basis of official documentation](https://core.telegram.org/widgets/login#receiving-authorization-data)