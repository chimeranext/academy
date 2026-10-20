# Design — instructional-design-course-mapping

## D1 — Course content pipeline architecture

The pipeline consumes a sitemap.yaml from logistics-toolkit, runs deep-research per guide, and produces structured course chapters.

Flow:
1. Read sitemap.yaml → list of 38 guides with children.
2. For each guide, run `deep-research` skill:
   - Crawl Notion pages via notion-batch MCP.
   - Extract external URLs (including bookmark destinations via REST).
   - For each resource by kind:
     - youtube → `yt-dlp --write-subs --skip-download` → transcript → `.md`
     - article → `crw <url>` → `.md`
     - pdf → `crw <url>` → `.md`
     - image → download to `<out>/assets/`
     - bookmark → resolve via REST API → recurse by resolved kind
3. Synthesize chapters with: objectives, concepts, procedures, assessments.

## D2 — Chapter structure per guide

Each chapter SHALL contain:
- Learning objectives (2-4 per guide)
- Key concepts with definitions
- Step-by-step procedures
- External resources (verbatim URLs)
- Assessments (quiz + exercise)

## D3 — CAMPUS/cmi5 mapping

Each chapter maps to CAMPUS course structure:
- Module grouping (Fundamentos / Procedimientos / Herramientas)
- Lessons per chapter (1 per concept or procedure)
- Assessments per lesson (quiz for concepts, exercise for procedures)
- Badges per completed module

## D4 — Traceability

Every chapter includes frontmatter:
```yaml
source: <notion-url>
notion_id: <id>
extracted_at: <ISO>
sitemap_guide_id: <01-38>
```

## D5 — Notion crawl integration

Uses the same `notion-batch` MCP as logistics-toolkit:
- `query_database` for inventory
- `fetch_tree` for recursive walk
- `renderBlock` with bookmark resolution for verbatim URLs

## D6 — Transcript analysis

YouTube transcripts are not just dumped — they are:
- Parsed for key concepts (intro, body, summary structure)
- Mapped to chapter sections (introduction → objective, demo → procedure, etc.)
- Cross-referenced with articles for enrichment
