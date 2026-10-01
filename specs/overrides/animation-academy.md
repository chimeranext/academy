# Override: generative motion — academy deltas

Parent change: `../nuxtui-lms-template/openspec/changes/add-generative-landing-motion/`
(template ships seeded demo data; academy binds real data).

## Deltas
- Dungeon rooms ← `courses` + `enrollments.progress` (room fill = completion %;
  boss room = final exam; locked rooms render iron, completed render gold).
- PCB chips ← shared-services nodes (each service a chip; traces = live API
  dependencies; ratsnest→routed plays once per deploy version).
- Griffin mascot state machine adds `enrolled` / `certified` states driven by
  `credentials_issued`.
- Fonts inside canvas labels: Piazzolla (room names), Inconsolata (stats).
- Same perf contract; GPU sections excluded from crawler prerender via routeRules.

## Apply status (template change `add-generative-landing-motion`)
Template implements: `lib/generative/{dungeon,pcb,adapters}.ts`,
`app/components/motion/{DungeonCanvas,PcbCanvas,GriffinMascot}.vue`,
`app/composables/useScrollTheater.ts`, landing wiring in `app/pages/index.vue`.
Data binding (rooms←courses/enrollments, chips←services, mascot enrolled/certified
states) activates when academy wires the template as a Nuxt layer — until then
academy renders template demo data (follow-up, needs layer wiring + prod Neon).
