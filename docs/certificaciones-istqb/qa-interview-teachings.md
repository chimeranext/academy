# QA Interview Teachings — synthesised from the "Manual Testing Interview Q&A" playlist

Reference derived from analysing 9 video transcripts (Parts 2–10) of the YouTube
playlist "Manual Testing Interview Questions and Answers with Examples". Useful for
interview prep and to ground ISTQB certification concepts in practical answers.

---

## Topics covered

- Test levels (unit, integration, system, acceptance) vs **types of testing**.
- Integration testing: Big Bang vs incremental (top-down/bottom-up/functional), stubs & drivers.
- Acceptance testing: UAT, operational, compliance/regulatory, contract, alpha, beta.
- Development approaches: waterfall, V-model, iterative, agile (scrum/kanban/RAD/XP).
- Quality: QA vs QC vs QE; verification (static) vs validation (dynamic).
- Test management: test plan, test environment/test bed, entry/exit criteria, DoR/DoD,
  test closure, RTM.
- Test case development: analysis → design → implementation.
- Design techniques: equivalence partitioning, boundary value, decision table, state
  transition, error guessing, exploratory, risk-based.
- Defects: lifecycle, severity vs priority, defect report, DDP.
- Risk: product vs project risk.
- Manual vs automation; black/white/gray box; testing principles (pesticide paradox,
  exhaustive testing impossible, shift-left/early testing).

## Most frequent interview questions

1. Difference between unit and integration testing.
2. Integration testing approaches (Big Bang vs incremental) + trade-offs.
3. Difference between integration and system testing.
4. Difference between system and acceptance testing.
5. Types of acceptance testing.
6. QA vs QC vs QE.
7. Verification vs validation.
8. Retesting vs regression testing.
9. Static vs dynamic testing.
10. Functional vs non-functional testing.
11. How to approach test case development.
12. Importance of test cases.
13. Entry/exit criteria (DoR/DoD in agile).
14. What is test planning.
15. What is agile/scrum.
16. Equivalence partitioning vs boundary value analysis.
17. What is risk-based testing.
18. Severity vs priority.

## Answer frameworks

- **Test process:** planning → analysis → design → execution → defect lifecycle →
  reporting (TSR/TCR) → closure.
- **Test case design:** analyse test basis → conditions/scenarios → detailed test cases
  (input, test data, precondition, expected result, priority).
- **Defect report:** summary, steps to reproduce, expected vs actual, severity+priority,
  screenshots/logs, unique ID.
- **Defect prioritisation:** severity = tester (functional impact); priority = business/product
  owner (defect triage meeting).
- **Types of testing:** functional / non-functional / structural (white box) /
  change-related (retest/regression).
- **Shift-left / prevention:** prevention is more cost-efficient than detection.
- NOTE: STAR and "tell me about yourself" are NOT in this series (announced as future).

## Design techniques (with examples)

- Equivalence partitioning: valid 1–10, invalid <1 and >10; one value per partition.
- Boundary value analysis: test 0, 1, 10, 11.
- Decision table (cause-effect): loan EMI example (amount/tenure/interest → EMI or error).
- State transition: ATM card/PIN flow; e-commerce logged-out → logged-in → home.
- Error guessing: experience-based, no formal rules.
- Exploratory testing: minimal planning, parallel design+execution, minimal docs.
- Risk-based testing: prioritise by product risk.
- Technique categories: specification-based (black box) / structure-based (white box) /
  experience-based.

## SQL & database

- No SQL questions in this series. Databases appear only as test-environment config
  (MySQL, SQL Server, Oracle) and to verify persistence.
- **Gap:** prepare SQL separately (joins, group by/having, aggregation).

## Tools mentioned

- Jira (+ X-ray / Zephyr), Confluence, Excel.
- Databases: MySQL, SQL Server, Oracle.
- Source control: Git, GitHub, Bitbucket, CVS.
- Config/DevOps: Chef, Ansible.
- Defect management: Bugzilla, TestLink.
- Automation (future): Selenium, Java.

## Gap vs ISTQB

Covered: principles (partial), test levels/types, static vs dynamic, verification/validation,
test management, black-box + experience-based techniques, defect management, risk.

Missing: full 7 principles, use cases/classification tree/pairwise, code coverage measures
(statement/branch/decision), formal reviews detail, estimation (3-point, function points),
SQL/database testing, soft skills/behavioral, test pyramid strategy.

## Key vocabulary to use

Test basis, test condition, test scenario, test suite, test procedure, DoR/DoD,
entry/exit criteria, shift-left, RTM, acceptance criteria, stubs & drivers, verification vs
validation, QA vs QC vs QE, pesticide paradox, exhaustive testing, black/white/gray box,
EP, BVA, decision table, state transition, risk-based testing, product vs project risk,
exploratory testing, error guessing, non-functional attributes, TSR/TCR, testware, defect
triage, severity vs priority, defect report, DDP.

## Alignment with ISTQB prep

Use this as the "practical interview" companion to `istqb-certification-prep.md`. The
ISTQB reference supplies the exam structure, weights, and exact definitions; this file
supplies the fluent, example-backed answers expected in an interview.
