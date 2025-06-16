# Описание проекта

## Окружение

Версия **Node.js** - 20.11.0
Версия **npm** - 10.2.4

Установка зависимостей проекта из **npm**

```bash
npm install
```

Для бэкэнда команда выполняется в терминале из директории backend
Для фронтэнда та же команда выполняется в терминале из директории frontend

## Структура проекта

### Директория `backend`

Содержит файлы с кодом для бэкэнда
backend/apps - модули приложений
backend/libs - библиотеки
backend/dist - создается в процессе компиляции проекта, в нее помещаются результирующие файлы

Серверная часть состоит из четырех микросервисов (МС):
users - содержит логику работы с пользователем
trainings - содержит логику работы с тренировками
files - работа с файлами
api - является точной входа для фронтэнда

Используется база данных MongoDB
Загружаемые файлы сохраняются на сервере в директории `backend / apps / files / uploads`
Для развертывания контейнеров используется Docker

### Директория `frontend`

директория frontend/public - содержит статические ресурсы: стили, шрифты, изображения
директория frontend/src - содержит файлы с кодом для фронтэнда
директория frontend/dist - создается в процессе компиляции проекта, в нее помещаются результирующие файлы

Сборка фронтенда реализована на основе Vite.

### Файл `Readme.md`

краткое описание проекта

### Сценарии

#### Запуск проекта

необходимо запустить все четыре МС и фронт.

##### запуск МС users

Команды запуска МС выполняются в терминале из директории `backend`

```bash
npx nx run users:serve
```

команда для подготовки контейнера

```bash
docker compose --file ./apps/users/user-compose.dev.yml --project-name "fitfriends-user" --env-file ./apps/users/user.env up -d
```

После завершения загрузки образов и подготовки контейнеров веб-интерфейс для администрирования MongoDB будет доступен по адресу http://localhost:8081/.

переменные окружения в файле `backend/apps/users/user.env`
пример в файле `backend/apps/users/user.env-example`

Файл для тестирование запросов
`backend/libs/user/src/user.http`

##### запуск МС trainings

Команды запуска МС выполняются в терминале из директории `backend`

```bash
npx nx run trainings:serve
```

команда для подготовки контейнера

```bash
docker compose --file ./apps/trainings/training-compose.dev.yml --project-name "fitfriends-trainings" --env-file ./apps/trainings/trainings.env up -d
```

После завершения загрузки образов и подготовки контейнеров веб-интерфейс для администрирования MongoDB будет доступен по адресу http://localhost:8084/.

переменные окружения в файле `backend/apps/trainings/trainings.env`
пример в файле `backend/apps/trainings/trainings.env-example`

Файл для тестирование запросов
`backend/libs/training/src/training.http`

##### запуск МС files

Команды запуска МС выполняются в терминале из директории backend

```bash
npx nx run files:serve
```

команда для подготовки контейнера

```bash
docker compose --file ./apps/files/file-compose.dev.yml  --project-name "fitfriends-file" --env-file ./apps/files/file.env up -d
```

После завершения загрузки образов и подготовки контейнеров веб-интерфейс для администрирования MongoDB будет доступен по адресу http://localhost:8085/.

переменные окружения в файле `backend/apps/files/file.env`
пример в файле `backend/apps/files/file.env-example`

Файл для тестирование запросов
`backend/libs/file-uploader/src/file-uploader.http`

##### запуск МС api

Команды запуска МС выполняются в терминале из директории backend

```bash
npx nx run api:serve
```

переменные окружения в файле `backend/apps/api/api.env`
пример в файле `backend/apps/api/api.env-example`

!! Порты в переменных окружения МС api USERS_URL и TRAINING_URL должны соответствовать значениям переменных PORT в файлах user.env и trainings.env

Файл для тестирование запросов
`backend/apps/api/src/app/api.http`

##### запуск фронтэнда

команда выполняется в терминале из директории `frontend`

```bash
npm run start
```

#### Сборка проекта

```bash
npm run build
```

#### Проверка линтером

```bash
npm run lint
```

### Остальное

Проект реализован не полностью.
Подробнее в README.md
