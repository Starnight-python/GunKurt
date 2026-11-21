# ружьё курта 🐋 — фан-сайт

Фан-сайт артиста ружья курта (gunkurtt): Next.js 16 (App Router) + Tailwind CSS 4 + framer-motion.

Страницы: `/` (главная: hero, баннер «АЕ» с плеером, прослушка), `/release` (всё о треке «АЕ»: встроенный плеер, факты, пасхалка с найтивыходом, ссылки на площадки), `/music` (релизы + плеер), `/about` (о нём), `/links` (связь).

## Быстрый старт

Через bun:

```bash
bun install
bun run dev        # дев-сервер на http://localhost:3000
bun run build      # прод-сборка (standalone)
bun run start      # прод-сервер на http://localhost:3000
```

Через npm/node — то же самое: `npm install` → `npm run dev` / `npm run build` → `npm run start`.

## Деплой

- **Vercel**: импортируй репозиторий, настроек не нужно — Next.js определится сам. Переменные окружения не требуются.
- **Свой сервер / VPS**: `bun run build`, затем `NODE_ENV=production node .next/standalone/server.js` (порт задаётся через `PORT`, хост — `HOSTNAME`). В `Caddyfile` — пример обратного прокси с TLS.

## Что где лежит

- `src/app/` — страницы и метаданные (layout.tsx — общий каркас, SEO, шрифты)
- `src/components/site/` — секции страниц:
  - `ae-player.tsx` — встроенный плеер «АЕ» (клик → официальный iframe Яндекс.Музыки, альбом 45073324)
  - `player.tsx` — «прослушка» на /music: карточки релизов, по клику — iframe Яндекс.Музыки
  - `countdown.tsx` — обратный отсчёт (сейчас не подключён, пригодится к следующему релизу)
- `public/images/` — обложки и арты (ae.png, cover-autopilot.png и др.)
- CSP и заголовки — в `next.config.ts` (frame-src разрешает music.yandex.ru для встроенного плеера)

## Нюансы

- `prisma/` и `src/lib/db.ts` — остатки шаблона, страницами не используются; `.env` не нужен.
- Все ссылки на площадки (Яндекс Музыка, ВК, zvonko, тгк) — из постов канала https://t.me/gunkurtt.
- Тексты цитат — дословные из тгк; мат сохранён как часть стиля артиста.
