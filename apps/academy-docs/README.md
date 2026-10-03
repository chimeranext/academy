# apps/academy-docs (Docusaurus shell)

Full scaffold (run inside this dir):

```bash
pnpm dlx create-docusaurus@latest . classic --typescript
pnpm add docusaurus-plugin-openapi-docs
```

Point the OpenAPI plugin at `../../nuxtui-lms-template/openapi/academy.openapi.yaml`
(spec is GENERATED from Nitro `/api/_openapi.json` — never hand-write).

Deploys to `academy.chimeranext.dev/docs`.
