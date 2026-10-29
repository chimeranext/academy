# ISTQB Certification Prep — reference (exam structure, weight, strategy)

Pending for anyone preparing for ISTQB certification "tomorrow". Synthesized from
official ISQI/ISTQB material (exam-structure tables, rules, syllabi, sample exams).
Source PDFs retained locally (references: ISTQB v1.18 tables, v1.2 rules, GenAI
v1.1, CTAL-TA v4.0, CTAL-TAE v2.0, CTAL-TM v3.0).

---

## Global exam rules

| Rule | Value |
|---|---|
| Format | 100% **multiple-choice**; a question may have 1 or several correct options ("Select ONE" / "Select TWO") |
| Min questions | 40 (all exams; some have 45–50) |
| Pass mark | **≥ 65% of total points**, always rounded **up** to the next integer |
| Point value | Foundation: every question = 1 pt. Advanced/Specialist: K1/K2 = 1 pt, K3 = 2 pt, K4 = 3 pt |
| Time per question | K1 = 1 min, K2 = 1–2 min, K3 = 3 min, K4 = 4 min |
| Extra time | +25% if exam language ≠ candidate's native language |
| Examinable | All learning objectives (LO) + all glossary keywords. Foundation/Specialist: keywords at K2. Advanced: no K1 questions |

## Certification comparison table

| Certification | Level | Questions | Max pts | 65% (min score) | Pass | Duration |
|---|---|---|---|---|---|---|
| CTFL v4.0 | Foundation | 40 | 40 | 26.0 → **26** | 26 | 60 min |
| CT-GenAI v1.1 | Specialist | 40 | 46 | 29.9 → **30** | 30 | 60 min |
| CTAL-TA v4.0 | Advanced | 45 | 78 | 50.7 → **51** | 51 | 120 min |
| CTAL-TAE v2.0 | Advanced | 40 | 66 | 42.9 → **43** | 43 | 90 min |
| CTAL-TM v3.0 | Advanced | 50 | 88 | 57.2 → **58** | 58 | 120 min |

## Weight by knowledge area (points)

### CTFL v4.0 (40 pts)
| Chapter | Q | Pts | Weight |
|---|---|---|---|
| 4 · Test design techniques | 11 | 11 | 27.5% |
| 5 · Test management / tools | 9 | 9 | 22.5% |
| 1 · Fundamentals | 8 | 8 | 20% |
| 2 · Testing in SDLC | 6 | 6 | 15% |
| 3 · Static testing (reviews) | 4 | 4 | 10% |
| 6 · Tools | 2 | 2 | 5% |
**Dominant:** Ch4 + Ch5 = 50%.

### CT-GenAI v1.1 (46 pts)
| Chapter | Q | Pts | Weight |
|---|---|---|---|
| 2 · Applied prompt engineering | 11 | 16 | 34.8% |
| 3 · Risks (hallucination, privacy, regs) | 10 | 11 | 23.9% |
| 1 · GenAI/LLM fundamentals | 7 | 7 | 15.2% |
| 5 · Adoption / change management | 7 | 7 | 15.2% |
| 4 · Infrastructure (RAG, fine-tuning, LLMOps) | 5 | 5 | 10.9% |
**Dominant:** Ch2 + Ch3 ≈ 59%.

### CTAL-TA v4.0 (78 pts)
| Chapter | Q | Pts | Weight |
|---|---|---|---|
| 3 · Test techniques (black-box, experience) | 22 | 42 | 53.8% |
| 5 · Defects (prevention, RCA) | 8 | 16 | 20.5% |
| 1 · Test Analyst tasks | 8 | 9 | 11.5% |
| 2 · Risk-based testing | 3 | 7 | 9% |
| 4 · Test types (functional, usability…) | 4 | 4 | 5.1% |
**Dominant:** Ch3 is nearly half the exam.

### CTAL-TAE v2.0 (66 pts) — distributed
| Chapter | Q | Pts | Weight |
|---|---|---|---|
| 8 · Continuous improvement | 6 | 13 | 19.7% |
| 3 · Automation design concepts | 6 | 10 | 15.2% |
| 2 · Infrastructure / tool selection | 5 | 9 | 13.6% |
| 5 · CI/CD integration | 6 | 8 | 12.1% |
| 6 · Automation data | 4 | 8 | 12.1% |
| 7 · Infrastructure verification | 6 | 8 | 12.1% |
| 4 · Solution development (risks, maintainability) | 4 | 7 | 10.6% |
| 1 · Purpose of automation | 3 | 3 | 4.5% |

### CTAL-TM v3.0 (88 pts)
| Chapter | Q | Pts | Weight |
|---|---|---|---|
| 1 · Test management activities | 26 | 46 | 52.3% |
| 2 · Metrics, estimation, defect management | 15 | 27 | 30.7% |
| 3 · Test team & stakeholders | 9 | 15 | 17% |

## K-level distribution per certification

| Cert | K1 | K2 | K3 | K4 |
|---|---|---|---|---|
| CTFL | 8 | 24 | 8 | 0 |
| GenAI | 8 | 26 | 6 | 0 |
| TA v4.0 | 0 | 18 | 21 | 6 |
| TAE v2.0 | 0 | 20 | 14 | 6 |
| TM v3.0 | 0 | 26 | 10 | 14 |

## Question patterns

- K1/K2: "Select ONE", 4 options (a–d); matching 1–4 → A–D; statement-set (i–v) combos.
- K2/K3: "Select TWO", 5 options (a–e); scenario application.
- K3/K4: application/analysis scenarios (Advanced).
- Points shown per question header (e.g. "Question #12 (2 Points)").
- Sample exams are LO-ordered; real exam is mixed.

## Key concept definitions (high-yield per syllabus)

- **CTFL:** test level, test design technique, test case, test oracle, coverage criterion.
- **GenAI:** generative AI, LLM, tokenization, context window, LLM types (foundation /
  instruction-tuned / reasoning), hallucination / reasoning errors / bias, Shadow AI.
- **TA:** test analysis→design→implementation→execution; high- vs low-level test case;
  keyword-driven testing (action vs verification keywords, two abstraction layers);
  test oracle; techniques (domain, combinatorial, random, CRUD, state transition,
  scenario, decision table, metamorphic, checklists, crowd, session-based).
- **TAE:** test automation, SUT, automation infrastructure, maintainability, CI/CD
  integration, continuous improvement.
- **TM:** test process/management, risk-based testing, test strategy, metrics/estimation
  (GQM), defect management + RCA, team & stakeholders (TMMi, TPI NEXT, SMART goals).

## Strategy to pass "tomorrow"

- **CTFL:** Ch4 + Ch5 cover ~50%. Mostly K1/K2 (memorize). Need 26/40.
- **GenAI:** Ch2 (prompt engineering, 35%) + Ch3 (risks, 24%). 85% is K1/K2. Need 30/46.
- **CTAL-TA:** Ch3 (techniques, 54%) is everything — practice applying techniques to
  scenarios. 60% is K3/K4. Need 51/78.
- **CTAL-TAE:** flat distribution; don't skip chapters. K2/K3 half & half. Need 43/66.
- **CTAL-TM:** Ch1 (management, 52%) is dominant; most analytical (K4 = 14). Need 58/88.

Rules: learn the 65% + round-up; in Advanced never memorize isolated keyword definitions
(all K2+); in Foundation/Specialist nail keyword definitions (K2); practice with sample
exams using the answer key; for multi-select only score if you hit all required options.

## Sources

- ISTQB Exam Structure Tables v1.18 · Exam Structures and Rules v1.2
- CT-GenAI v1.1 syllabus + sample exam A · CTAL-TA v4.0 · CTAL-TAE v2.0 · CTAL-TM v3.0
  (syllabi + sample exams A/B), PDFs retained locally.
