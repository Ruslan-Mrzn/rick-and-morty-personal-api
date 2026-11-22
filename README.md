# Rick and Morty Personal API

HTTP-сервер.

## Требования

- Node.js **24.19.0**

## Установка

```bash
npm install
```

## Запуск

```bash
npm run dev    # watch-режим (tsx watch)
npm start      # разовый запуск
```

Сервер поднимется на `http://localhost:3000`.

## Эндпоинты

### Проверка состояния

| Метод | Путь      | Описание                   | Ответ    |
| ----- | --------- | -------------------------- | -------- |
| GET   | `/health` | Проверка работоспособности | `200 OK` |

### Персонажи

#### happy-path

| Метод  | Путь              | Описание             | Ответ            |
| ------ | ----------------- | -------------------- | ---------------- |
| GET    | `/characters`     | Список всех          | `200 OK`         |
| POST   | `/characters`     | Создание             | `201 Created`    |
| GET    | `/characters/:id` | Получить одного      | `200 OK` / `404` |
| PUT    | `/characters/:id` | Полная замена        | `200 OK` / `404` |
| PATCH  | `/characters/:id` | Частичное обновление | `200 OK` / `404` |
| DELETE | `/characters/:id` | Удаление             | `204 No Content` |

#### error-path

| Метод    | Путь              | Статус            | Причина                                      |
| -------- | ----------------- | ----------------- | -------------------------------------------- |
| `POST`   | `/characters`     | `400 Bad Request` | Неверный JSON или данные не прошли валидацию |
| `GET`    | `/characters/:id` | `404 Not Found`   | Персонаж с таким `id` не найден              |
| `PUT`    | `/characters/:id` | `404 Not Found`   | Персонаж с таким `id` не найден              |
| `PUT`    | `/characters/:id` | `400 Bad Request` | Неверный JSON или данные не прошли валидацию |
| `PATCH`  | `/characters/:id` | `404 Not Found`   | Персонаж с таким `id` не найден              |
| `PATCH`  | `/characters/:id` | `400 Bad Request` | Неверный JSON или данные не прошли валидацию |
| `DELETE` | `/characters/:id` | `404 Not Found`   | Персонаж с таким `id` не найден              |

### Примеры запросов

**POST /characters**

```json
{
  "name": "Summer Smith",
  "status": "alive",
  "species": "Human",
  "location": "Earth (C-137)",
  "gender": "female",
  "age": 16
}
```

**PUT /characters/:id**

```json
{
  "name": "Summer Smith",
  "status": "alive",
  "species": "Human",
  "location": "Earth (C-137)",
  "gender": "female",
  "age": 35
}
```

**PATCH /characters/:id**

```json
{
  "status": "dead"
}
```

### Формат ошибок

Все ошибки возвращают JSON-объект:

```json
{ "error": "Character not found" }
```

**Возможные сообщения:**

- `Invalid JSON` — тело не распознано как JSON
- `Invalid character data` — поля не прошли валидацию
- `Invalid patch data` — поля PATCH не прошли валидацию
- `Character not found` — `id` не найден
- `Method not allowed` — метод не поддерживается для пути
- `Not found` — путь не найден

**Заголовки ответа:**

- `Content-Type: application/json` — для всех JSON-ответов
- `Cache-Control: no-store` — кэширование отключено
- `204 No Content` — без тела ответа (DELETE)
