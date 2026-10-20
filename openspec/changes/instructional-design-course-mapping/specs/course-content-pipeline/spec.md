# course-content-pipeline Specification

## Purpose

Pipeline de conversión Notion → capítulos de curso. Toma un sitemap.yaml (producido por logistics-toolkit), corre deep-research sobre cada guía, y genera capítulos de curso estructurados listos para `new-course`.

## ADDED Requirements

### Requirement: Guía a capítulo de conversión

El pipeline SHALL convertir cada guía del sitemap en un capítulo de curso estructurado con objetivos de aprendizaje, conceptos clave, procedimientos paso a paso, y evaluaciones.

#### Scenario: Guía se convierte en capítulo

- **WHEN** el pipeline procesa una guía del sitemap.yaml
- **THEN** genera un capítulo de curso con: objetivos de aprendizaje, conceptos clave, procedimientos paso a paso, evaluaciones, y fuente (URL Notion + fecha extracción)

#### Scenario: Guía con subpáginas se convierte en múltiples capítulos

- **WHEN** una guía tiene subpáginas hijas
- **THEN** el pipeline las procesa recursivamente y genera capítulos por subpágina, vinculados al capítulo padre

### Requirement: Deep research por guía

El pipeline SHALL correr deep-research sobre cada guía usando el skill `deep-research` antes de generar el capítulo.

#### Scenario: Deep research produce contenido estructurado

- **WHEN** el pipeline corre deep-research sobre una guía
- **THEN** el skill produce: conceptos clave, procedimientos, herramientas mencionadas, videos (con transcripts), y referencias externas

#### Scenario: Transcript de video se analiza

- **WHEN** una guía tiene videos YouTube
- **THEN** el pipeline usa yt-dlp para descargar transcripts y los incluye en el análisis

### Requirement: Sitemap como entrada

El pipeline SHALL leer el sitemap.yaml producido por logistics-toolkit como entrada, sin re-fetchear Notion.

#### Scenario: Pipeline lee sitemap existente

- **WHEN** el pipeline corre con --sitemap docs/vertivo/sitemap.yaml
- **THEN** usa los 38 guías ya crawlados, no vuelve a fetchear Notion

# campus-cmi5-mapping Specification

## Purpose

Mapeo del contenido ingerido al formato CAMPUS/cmi5 del repo academia. Define cómo cada guía se convierte en un curso: módulos, lecciones, evaluaciones, badges, y trazabilidad al origen Notion.

## ADDED Requirements

### Requirement: Curso a módulos CAMPUS

El sistema SHALL organizar cada curso en módulos CAMPUS según la taxonomía del repo academia.

#### Scenario: Curso se organiza en módulos

- **WHEN** un curso tiene múltiples capítulos
- **THEN** el sistema los agrupa en módulos CAMPUS (ej. "Fundamentos", "Procedimientos", "Herramientas")

### Requirement: Lecciones por capítulo

El sistema SHALL convertir cada capítulo en una o más lecciones CAMPUS.

#### Scenario: Capítulo se convierte en lecciones

- **WHEN** un capítulo tiene conceptos clave y procedimientos
- **THEN** el sistema genera lecciones: una por concepto clave, una por procedimiento

### Requirement: Evaluaciones por lección

El sistema SHALL generar evaluaciones para cada lección según ship-first-design.

#### Scenario: Lección tiene evaluación

- **WHEN** una lección tiene objetivos de aprendizaje
- **THEN** el sistema genera evaluaciones: quiz (conceptos), ejercicio (procedimiento), y proyecto (integración)

### Requirement: Trazabilidad al origen Notion

El sistema SHALL mantener trazabilidad de cada lección a su origen Notion.

#### Scenario: Lección referencia Notion

- **WHEN** una lección es generada desde un capítulo
- **THEN** la lección incluye frontmatter con: notion_url, notion_id, extracted_at
