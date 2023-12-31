---
title: LoginWidget
icon: object-group
order: 2
---

Цей об’єкт містить дані, які повертаються після успішної автентифікації за допомогою [віджета входу](../validator/login-widget.md).

## Властивості {#properties}

### `id`

- **Тип:** `int`

Унікальний ідентифікатор користувача. Це число може мати 32-52 значущих біти. Тому 64-розрядне ціле число зі знаком або тип з плаваючою точністю подвійної точності безпечні для зберігання цього ідентифікатора.

### `firstName`

- **Тип:** `string`

Ім'я користувача

### `lastName`

- **Тип:** `string`
- **За замовчуванням:** `null`

_Опціонально._ Прізвище користувача

### `username`

- **Тип:** `string`
- **За замовчуванням:** `null`

_Опціонально._ Нік користувача

### `photoUrl`

- **Тип:** `string`
- **За замовчуванням:** `null`

_Опціонально._ URL фотографії профілю користувача. Фотографія може бути у форматах `.jpeg` або `.svg`.

### `authDate`

- **Тип:** [`CarbonInterface`](https://carbon.nesbot.com/docs/)

Інтерфейс роботи з датою для отримання часу відкриття форми в форматі `Unix`, і не тільки.

### `hash`

- **Тип:** `string`

Хеш усіх переданих параметрів, за допомогою якого валідотор може перевірити їх дійсність.

## Методи {#methods}

### `toArray`

Повертає сутність, включно з дочірніми (якщо такі є), у вигляді масива.

[Створено на основі офіційної документації](https://core.telegram.org/widgets/login#receiving-authorization-data)