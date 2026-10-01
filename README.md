# academy

Thin wrapper over `nuxtui-lms-template`. Override via `academy.config.ts` — never fork template code.

| Repo | Role | Preset |
| --- | --- | --- |
| `nuxtui-lms-template` | source (Envato white-label, demo data, offline docs) | `static` demo / `node-server` |
| `academy` | override (tokens Chimera, contenido real, keys prod) | `node-server` |

Site: `https://academy.chimeranext.dev`

## Quickstart

```bash
cp .env.example .env   # academy-prod Neon + Bunny keys
pnpm install
pnpm dev
```

## Specs / docs

- Deltas: `specs/overrides/` (template specs stay upstream).
- Docs site: `apps/academy-docs/` (Docusaurus + OpenAPI plugin; spec generated from Nitro, never hand-written).
