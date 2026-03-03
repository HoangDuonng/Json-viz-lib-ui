# Json Viz Lib UI

Next.js 15 boilerplate with a battle-tested (2025) project structure and modern tooling.

## Tech stack

- **Next.js 15** — App Router, React Server Components, Turbopack
- **React 19** — Latest React APIs
- **TypeScript** — Strict mode
- **Tailwind CSS 4** — Utility‑first, configured via `@theme` in CSS
- **TanStack Query v5** — Server state & caching
- **Zustand** — Lightweight client state
- **ESLint 9** — Flat config
- **Jest** — Testing

## Getting started

```bash
# Install dependencies
yarn

# Copy env
cp .env.example .env

# Run dev (Turbopack)
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

See [STRUCTURE.md](./STRUCTURE.md) for full details.

- **Route groups**: `(auth)` for login/register, `(main)` for dashboard/app.
- **Features**: Each feature owns its `components/`, `hooks/`, `services/`, and exposes a public API via `index.ts`.
- **API**: Versioned under `src/app/api/v1/`.

## Scripts

| Script       | Description                 |
|-------------|-----------------------------|
| `yarn dev`  | Dev server (Turbopack)      |
| `yarn build`| Build production bundle     |
| `yarn start`| Run built app in production |
| `yarn lint` | Run ESLint                  |
| `yarn format` | Format code (Prettier)    |
| `yarn test` | Run Jest tests              |

## Docker

```bash
docker build -t json-viz-lib-ui .
docker run -p 3000:3000 json-viz-lib-ui
```

## References

- [The Battle-Tested NextJS Project Structure I Use in 2025](https://medium.com/@burpdeepak96/the-battle-tested-nextjs-project-structure-i-use-in-2025-f84c4eb5f426)
