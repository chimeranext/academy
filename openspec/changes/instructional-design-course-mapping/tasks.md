# Tasks — instructional-design-course-mapping

## Implementation

- [ ] T1: Create `toolkits/instructional-design-toolkit/scripts/course-pipeline.py` (reads sitemap, runs deep-research, produces chapters)
- [ ] T2: Create `toolkits/instructional-design-toolkit/scripts/transcript-analyzer.py` (parses yt-dlp transcripts for concepts/procedures)
- [ ] T3: Create `toolkits/instructional-design-toolkit/scripts/campus-mapper.py` (maps chapters to CAMPUS modules/lessons/assessments)
- [ ] T4: Write `references/course-content-pipeline/protocol.md`
- [ ] T5: Write `commands/course-import.md` (thin entry: /course-import <sitemap.yaml>)
- [ ] T6: Update `skills/deep-research/SKILL.md` to explicitly invoke transcript analysis
- [ ] T7: Validate: given sitemap.yaml with 38 guides, pipeline produces 38 chapters with objectives, concepts, procedures, assessments

## Verification

- [ ] T8: Each chapter has frontmatter with notion_url + extracted_at
- [ ] T9: Each chapter maps to at least 1 CAMPUS lesson
- [ ] T10: Each lesson has at least 1 assessment
- [ ] T11: `openspec validate instructional-design-course-mapping` passes
