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

| Метод | Путь          | Описание                   |
| ----- | ------------- | -------------------------- |
| GET   | `/health`     | Проверка работоспособности |
| GET   | `/characters` | Список персонажей          |
