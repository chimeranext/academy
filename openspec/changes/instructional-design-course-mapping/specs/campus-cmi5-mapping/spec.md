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
