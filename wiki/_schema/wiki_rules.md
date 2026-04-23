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

## Evidence Tags

Preferred tag families include:

- source type: `#source/literature_pdf` `#source/primary` `#source/review`
- species: `#species/mouse` `#species/human` `#species/mixed`
- tissue/context: `#tissue/lung` `#tissue/gut` `#tissue/skin` `#tissue/nasal_polyp` `#tissue/systemic`
- cell focus: `#cell/ILC1` `#cell/ILC2` `#cell/ILC3` `#cell/NK` `#cell/macrophage` `#cell/monocyte` `#cell/T_cell` `#cell/B_cell`
- assay: `#assay/flow` `#assay/scRNAseq` `#assay/RNAseq` `#assay/in_vivo` `#assay/in_vitro` `#assay/KO`
- outcome: `#outcome/inflammation` `#outcome/infection` `#outcome/repair` `#outcome/homeostasis` `#outcome/airway_hyperresponsiveness`
- project axis: `#axis/ILC_lung_homeostasis` `#axis/ILC_lung_infection` `#axis/ILC_airway_inflammation` `#axis/ILC_plasticity`

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
