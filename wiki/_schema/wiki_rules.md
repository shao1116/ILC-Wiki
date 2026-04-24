# Wiki Rules

## Purpose

These rules adapt the research-wiki-maintainer principle to the `ILC_in_lung` wiki.

## Layer Rules

### `RAW/`

- `RAW/` is the incoming source layer.
- Successfully ingested PDFs are moved to `RAW/processed/` because this was explicitly requested for this project.
- Do not overwrite, rename, or alter processed PDFs.

### `wiki/`

- `wiki/` contains source-aware markdown pages.
- Every durable biological claim should be traceable to one or more source pages.
- Bulk-generated source pages are provisional knowledge-oriented notes until manually reviewed. They may record title, abstract, early extracted-text, and tag-derived clues, but they should not be treated as fully verified biological summaries.

## Ingest Modes

The `ILC_in_lung` wiki formally distinguishes two ingest modes. Every source page should state its current mode.

### Provisional Bulk-Ingest Mode

Use this mode for batch intake of new PDFs.

Allowed outputs:

- source registration in `wiki/sources/`
- full-text extraction into `private extracted text artifacts omitted from public export`
- conservative evidence tags
- provisional source notes from title, abstract, early extracted text, and automated signals
- manifest, index, and log updates
- movement of successfully processed PDFs to `RAW/processed/`

Forbidden outputs:

- durable biological synthesis in topic, entity, project, or digest pages
- high-confidence mechanistic claims based only on automated extraction
- claim-level confidence statements about file presence, text extraction, source-page creation, or tag usefulness

### Focused Manual Crystallization Mode

Use this mode for priority papers that should change the reusable knowledge layer.

Required work:

- read the source page and extracted text
- check figures, methods, model system, species, tissue, time point, perturbation, and assay context when available
- compare against related topic, entity, project, and digest pages
- state observations, interpretations, caveats, contradictions, and confidence levels

Allowed outputs:

- upgraded source pages with source-supported findings
- updates to topic/entity/project/digest pages
- high-confidence claim sinking into entity hubs when justified
- contradiction and supersession tracking
- audit pages for broad reinterpretation or maintenance-rule changes

## Required Scientific Discipline

- Do not invent biology, metadata, methods, or mechanistic claims.
- Label assumptions explicitly.
- Distinguish observation, interpretation, and hypothesis.
- Distinguish mouse vs human when relevant.
- Distinguish lung, gut, skin, nervous-system, and systemic contexts.
- Distinguish transcript, protein, cytokine secretion, flow phenotype, and functional evidence.
- Distinguish in vivo, ex vivo, and in vitro evidence.
- Record contradictions rather than silently harmonizing them.
- Use `Claim-Level Confidence` only for source-supported biological or knowledge claims, never for PDF presence, text extraction, tag detection, source-page creation, or ingest completeness.
- If no reusable biological claim has been reviewed yet, write `Not assigned` rather than assigning `low confidence` because a page was generated automatically.

## Preferred Page Families

- `sources/`: one page per ingested PDF
- `topics/`: cross-source synthesis pages
- `entities/`: reusable cell, cytokine, receptor, pathway, or method pages
- `projects/`: project-level question and working model pages
- `digests/`: crystallized cross-source working models
- `audit/`: schema changes, broad re-reviews, or reviewer-triggered corrections

## Knowledge-Page Naming Style Guide

This naming guide applies to reader-facing knowledge pages in:

- `entities/`
- `topics/`
- `digests/`

It does not apply to `audit/`, `log.md`, or most `sources/` pages, where workflow history and maintenance language are expected.

### Core naming principles

- Use biology-first, reader-facing headings.
- Use section names that describe what the reader will learn, not what the curator did.
- Keep heading vocabulary stable across pages so the wiki feels navigable rather than improvised.
- Use Title Case for `##` section headings.
- Put workflow provenance, batch history, migration notes, and maintenance details in `audit/` or `log.md`, not in the main section structure of knowledge pages.

### Preferred shared heading vocabulary

Use these names whenever they fit the page:

- `Scope`
- `Evidence Tags`
- `Confidence Snapshot`
- `Established Observations`
- `Interpretation`
- `Open Questions`
- `Related Pages`
- `Future Expansion Directions`

Use these when a page needs stronger synthesis or navigation structure:

- `At A Glance`
- `How To Use This Page`
- `Integrated Working Model`
- `Review Map`
- `Major Biological Branches`
- `Regulatory Architecture`
- `Claim-Level Confidence Boundaries`
- `Interpretation Guardrails`
- `Reading Routes`
- `Core Claims`
- `Evidence Layers`
- `Interpretation Boundaries`
- `How This Companion Fits The Wiki`
- `How To Use This Digest`
- `When To Revisit This Page`
- `Representative Source Spine`
- `Disease-Oriented Reading Guide`
- `Conceptual Timeline`
- `Knowledge Evolution Flowchart`

### Heading names to avoid in knowledge pages

Avoid these as section headings in `entities/`, `topics/`, and `digests/` unless the page itself is explicitly about workflow or schema:

- `Batch`
- `Update`
- `Update Triggers`
- `Next Ingest Targets`
- `Crystallization`
- `Focused Manual Crystallization`
- `Working-Model Source Spine`
- `Migration Notes`
- `Rename Map`
- `TODO`
- `Task List`

These terms may still appear in:

- `audit/`
- `log.md`
- source-page ingest metadata
- guide pages that explicitly explain ingest modes or curation workflow

### Recommended section patterns by page family

#### `entities/`

Recommended order:

1. `Scope`
2. `Evidence Tags`
3. `At A Glance`
4. `How To Use This Page`
5. `Confidence Snapshot`
6. `Integrated Working Model`
7. `Review Map`
8. `Major Biological Branches`
9. `Regulatory Architecture`
10. `Claim-Level Confidence Boundaries`
11. `Interpretation Guardrails`
12. `Contradiction And Supersession`
13. `Open Questions`
14. `Reading Routes`
15. `Related Pages`
16. `Future Expansion Directions`

#### `topics/`

Recommended order:

1. `Scope`
2. `Evidence Tags`
3. `Confidence Snapshot`
4. `Established Observations`
5. `Interpretation`
6. `Contradiction And Supersession`
7. `Open Questions`
8. `Related Pages`
9. `Future Expansion Directions`

Allow narrower subheadings under `Established Observations` when they reflect real biological branches, for example `Metabolic Regulation` or `Glucocorticoid Resistance And Inflammatory Signaling`.

#### `digests/`

Digest pages can vary more, but they should still use reader-facing section names. A typical digest should include most of the following:

1. `Scope`
2. `Evidence Tags`
3. one orienting synthesis section such as `Working Model`, `Disease-First Map`, or `Conceptual Timeline`
4. one evidence-organization section such as `Core Claims`, `Disease-Oriented Reading Guide`, or `How Understanding Changed Over Time`
5. one caution or evidence-structure section such as `Evidence Layers`, `Interpretation Boundaries`, or `Claim-Level Confidence Boundaries`
6. one navigation section such as `How To Use This Digest` or `How This Companion Fits The Wiki`
7. `When To Revisit This Page`
8. `Representative Source Spine`

### Provenance placement rule

When a reader-facing knowledge page needs provenance:

- keep provenance at the bottom of the page
- use `Representative Source Spine` rather than workflow-heavy wording
- do not place provenance sections before the main biological interpretation

### Maintenance-language rule

If a section mainly tells the reader what evidence would strengthen the page later, use `Future Expansion Directions`.

If a section mainly tells the reader when the synthesis should be reconsidered, use `When To Revisit This Page`.

If the content is really curator workflow rather than reader guidance, move it to `audit/` or `log.md` instead of keeping it in a knowledge page.

## Evidence Tags

Preferred tag families include:

- source type: `#source/literature_pdf` `#source/primary` `#source/review`
- species: `#species/mouse` `#species/human` `#species/mixed`
- tissue/context: `#tissue/lung` `#tissue/gut` `#tissue/skin` `#tissue/nasal_polyp` `#tissue/systemic`
- cell focus: `#cell/ILC1` `#cell/ILC2` `#cell/ILC3` `#cell/NK` `#cell/macrophage` `#cell/monocyte` `#cell/T_cell` `#cell/B_cell`
- assay: `#assay/flow` `#assay/scRNAseq` `#assay/RNAseq` `#assay/in_vivo` `#assay/in_vitro` `#assay/KO`
- outcome: `#outcome/inflammation` `#outcome/infection` `#outcome/repair` `#outcome/homeostasis` `#outcome/airway_hyperresponsiveness`
- project axis: `#axis/ILC_lung_homeostasis` `#axis/ILC_lung_infection` `#axis/ILC_airway_inflammation` `#axis/ILC_plasticity`

Topic, entity, and digest pages should store tags in two compatible layers:

- YAML frontmatter `tags:` without the leading `#`, so Obsidian can index them as page tags.
- A visible `## Evidence tags` section using inline-code tags, for example `` `#cell/ILC2` `#tissue/lung` ``.

Do not place raw `#tag` text at the start of a line in page body text. MkDocs/Python-Markdown interprets a line-start `#tag` as a heading, causing oversized browser rendering and incorrect document structure.

## Ingest Rules

1. Confirm the source exists in `RAW/`.
2. Choose and record the ingest mode.
3. Extract full text into `private extracted text artifacts omitted from public export`.
4. Create one source page in `wiki/sources/`.
5. Use conservative tags for automated pages, but keep `Claim-Level Confidence` claim-centered. Do not assign low confidence merely because the page came from automated extraction.
6. Move the processed PDF to `RAW/processed/` only after source-page and text extraction succeed.
7. Update `index.md`, `log.md`, and the manifest.
8. Do not update durable synthesis pages from provisional bulk ingest alone.

## Manual Review Rules

Before promoting claims into topic, entity, digest, or project pages:

1. Read the source page and extracted text.
2. Verify species, tissue, model, intervention, and assay.
3. Add source-supported findings with confidence levels.
4. Note contradictions or context boundaries.
5. Update related topic/entity/project pages only when justified.
