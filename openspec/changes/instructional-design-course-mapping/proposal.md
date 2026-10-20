# Proposal

## Why

El repo `../academia` necesita contenido de curso estructurado, pero las guías de auto-estudio de Notion (Vertivo "Biblioteca de Guías") son páginas sin estructura de curso — no tienen objetivos de aprendizaje, evaluaciones, ni capítulos. El `instructional-design-toolkit` debe convertir ese contenido crudo en capítulos de curso listos para `new-course`, con mapeo CAMPUS/cmi5. Este cambio define ese pipeline: Notion crawl → deep research → capítulos de curso.

## What Changes

- New capability `course-content-pipeline`: pipeline que corre `/notion-recursive-fetch` sobre una DB de Notion tipo "Biblioteca de Guías" para generar el sitemap.yaml, luego corre deep-research sobre cada guía y genera capítulos de curso estructurados (objetivos, conceptos, pasos, evaluaciones) listos para `new-course`.
- New capability `campus-cmi5-mapping`: mapeo del contenido ingerido al formato CAMPUS/cmi5 del repo academia — cada guía se convierte en un curso con módulos, lecciones, y evaluaciones según ship-first-design.

## Capabilities

### New Capabilities
- `course-content-pipeline`: Pipeline de conversión Notion → capítulos de curso. Lee sitemap.yaml, por cada guía corre deep-research (crawl + scrapers + síntesis), produce capítulos estructurados con objetivos de aprendizaje, conceptos clave, procedimientos paso a paso, y evaluaciones.
- `campus-cmi5-mapping`: Mapeo del contenido ingerido al formato CAMPUS/cmi5. Define cómo cada guía se convierte en un curso: módulos, lecciones, evaluaciones, badges, y trazabilidad al origen Notion.

### Modified Capabilities
- (none)

## Impact

- New toolkit capability: `course-content-pipeline` y `campus-cmi5-mapping` en `instructional-design-toolkit`.
- Genera el sitemap.yaml vía `/notion-recursive-fetch` (el crawler es el comando en sí, no un toolkit hermano).
- Produce capítulos de course en `academy/content/<curso>/capitulos/`.
- No modifica existing specs.

## Non-goals

- No implementar el crawler — `/notion-recursive-fetch` ya lo es (skill + script + protocol).
- No crear cursos completos (eso es `new-course`, downstream).
- No mapear manufacturing ni schematics (son toolkits separados).

## Success criteria

- Dado el output de `/notion-recursive-fetch` (sitemap.yaml con 38 guías), el pipeline produce 38 capítulos estructurados.
- Cada capítulo tiene: objetivos de aprendizaje, conceptos clave, procedimientos, evaluaciones.
- Cada capítulo mapea a CAMPUS/cmi5 con trazabilidad al origen Notion.
- El contenido es usable por `new-course` sin edición manual.
