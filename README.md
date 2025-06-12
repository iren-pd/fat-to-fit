# Fat to Fit

Приложение для отслеживания прогресса похудения с социальными функциями.

## Технологии

- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Firebase (Authentication, Firestore)
- React Hook Form + Zod
- React Router
- Zustand
- React Query
- Recharts

## Установка

1. Клонируйте репозиторий
2. Установите зависимости:

```bash
npm install
```

3. Создайте файл `.env` на основе `.env.example` и заполните его данными из Firebase Console

4. Запустите проект:

```bash
npm run dev
```

## Структура проекта

- `/src/components` - переиспользуемые компоненты
  - `/ui` - UI компоненты (shadcn)
  - `/auth` - компоненты аутентификации
  - `/layout` - компоненты макета
- `/src/features` - функциональные модули
- `/src/hooks` - кастомные хуки
- `/src/lib` - утилиты и конфигурации
- `/src/pages` - страницы приложения
- `/src/store` - управление состоянием (Zustand)
- `/src/types` - TypeScript типы
- `/src/utils` - вспомогательные функции

## Функциональность

- Регистрация и авторизация
- Профиль пользователя
- Отслеживание веса и ИМТ
- Расчет калорий
- Задания и поинты
- Соревнования с друзьями
- Рейтинг пользователей
