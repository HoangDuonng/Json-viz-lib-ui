# Cấu trúc dự án Next.js (Battle-tested 2025)

Tham khảo: [The Battle-Tested NextJS Project Structure I Use in 2025](https://medium.com/@burpdeepak96/the-battle-tested-nextjs-project-structure-i-use-in-2025-f84c4eb5f426)

## Công nghệ sử dụng (mới nhất)

| Công nghệ | Phiên bản | Ghi chú |
|-----------|-----------|---------|
| Next.js | 15.x | App Router, React Server Components, Turbopack |
| React | 19.x | useActionState, useFormStatus |
| TypeScript | 5.x | strict mode |
| Tailwind CSS | 4.x | @theme trong CSS, PostCSS |
| TanStack Query | 5.x | Data fetching & cache |
| Zustand | 5.x | State management (nhẹ, thay Redux) |
| Axios | 1.x | HTTP client |
| ESLint | 9.x | Flat config (eslint.config.mjs) |
| Jest | 29.x | Unit/Integration test |
| Husky + lint-staged | - | Pre-commit hooks |

## Cây thư mục

```
├── .github/
│   └── workflows/
│       ├── ci.yml          # Lint + build
│       └── tests.yml       # Chạy test
├── .husky/
│   └── pre-commit          # Chạy lint-staged trước commit
├── public/
│   └── assets/
│       ├── fonts/
│       ├── images/
│       └── svgs/
├── src/
│   ├── app/                # App Router (Next.js 13+)
│   │   ├── (auth)/         # Route group: auth (không ảnh hưởng URL)
│   │   │   ├── layout.tsx
│   │   │   └── login/page.tsx
│   │   ├── (main)/         # Route group: app chính
│   │   │   ├── layout.tsx
│   │   │   └── dashboard/
│   │   │       ├── page.tsx
│   │   │       └── settings/page.tsx
│   │   ├── api/
│   │   │   └── v1/         # API versioning
│   │   │       └── health/route.ts
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Trang chủ /
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── common/         # Button, Input, ...
│   │   ├── ui/             # Re-export / primitives (shadcn style)
│   │   ├── sections/       # Section lớn (Hero, Footer, ...)
│   │   ├── templates/      # Page templates
│   │   └── icons/
│   ├── config/
│   │   ├── constants.ts
│   │   ├── navigation.ts
│   │   └── theme.ts
│   ├── contexts/           # React Context (Theme, Auth, ...)
│   ├── features/           # Feature-based modules
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   └── index.ts    # Public API của feature
│   │   ├── dashboard/
│   │   └── shared/
│   ├── hooks/              # Global hooks (useDebounce, useLocalStorage, ...)
│   ├── lib/
│   │   ├── api/            # Axios instance, API clients
│   │   ├── utils/          # cn(), format, ...
│   │   └── services/       # Business logic thuần
│   ├── providers/          # QueryProvider, ThemeProvider, AppProviders
│   ├── stores/             # Zustand stores
│   ├── styles/
│   │   └── globals.css     # Tailwind v4 @import + @theme
│   ├── types/              # Global TypeScript types
│   └── utils/              # helpers, validation
├── .dockerignore
├── .env.example
├── .gitignore
├── .prettierrc
├── Dockerfile
├── eslint.config.mjs      # ESLint 9 flat config
├── jest.config.mjs
├── jest.setup.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs     # Tailwind v4
├── tsconfig.json
└── README.md
```

## Nguyên tắc

1. **Route groups** `(auth)` và `(main)`: tổ chức layout theo nhóm, không thêm segment vào URL.
2. **features/**: mỗi feature gói components, hooks, services, types; export qua `index.ts`.
3. **services/** trong feature: gọi API, transform data (pure logic).
4. **hooks/** trong feature: state, event, logic gắn với UI.
5. **API versioning**: `src/app/api/v1/` để dễ mở rộng v2 sau này.
6. **Path alias**: `@/*` → `./src/*` (trong `tsconfig.json`).

## Scripts

- `yarn dev` — Chạy dev với Turbopack
- `yarn build` — Build production
- `yarn start` — Chạy production
- `yarn lint` / `yarn lint:fix` — ESLint
- `yarn format` / `yarn format:check` — Prettier
- `yarn test` / `yarn test:watch` — Jest
