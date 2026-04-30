# Wiki Log

## 2026-04-20

- Created the initial `ILC_in_lung` wiki skeleton.
- Started automated bulk ingest of PDFs from `RAW/` into source pages and extracted text.

## 2026-04-20

- Automated bulk ingest from `ILC_in_lung/RAW/`.
- Created or refreshed wiki scaffolding for the `ILC_in_lung` project.
- Processed 121 PDF files into source pages and extracted text files.
- Moved successfully processed PDFs into `RAW/processed/`.
- Failed files: 0.
- Biological synthesis was not promoted from automated extraction alone; manual source review is still required before durable claims are added to topic/entity/digest pages.

## 2026-04-20

- Created four early working digest pages from the local ILC source inventory and representative extracted source text:
  `ILC2`, `ILC3`, `Role Of ILC In Pulmonary Diseases`, and `ILC Research Trend From Then To Now`.
- Updated `index.md`, `digests/README.md`, `topics/ILC_in_lung.md`, and `projects/ILC_in_lung_project.md` so the new digests are discoverable.
- Preserved the caveat that these digests are working models and should be refined by manual source-page review before manuscript-level use.

## 2026-04-20

- Created four detailed topic pages:
  `ILC2 Roles In Pulmonary Disease`, `ILC3 Roles In Pulmonary Disease`, `ILC2 Functional Regulation Mechanisms`, and `ILC3 Functional Regulation Mechanisms`.
- Updated `index.md`, `topics/ILC_in_lung.md`, and `projects/ILC_in_lung_project.md` so the disease-role and mechanism pages are discoverable.
- Kept source-linked caveats for species, tissue, model, assay type, and manual-review status.

## 2026-04-20

- Created ILC2 and ILC3 entity hub pages with representative source-linked observations and explicit caveats for lung versus extrapulmonary evidence.
- Created a reference coverage audit that routes all 121 ingested paper references by intended wiki use across topic, entity, and digest pages.
- Updated the wiki index, main ILC-in-lung topic, digest README, and project hub so the entity layer and coverage audit are discoverable.

## 2026-04-20

- Rewrote all 121 ingested paper source pages so `Claim-Level Confidence` describes biological/source claims rather than PDF-processing confidence.
- Rebuilt source-page `Key Findings`, `Why It Matters Here`, `Methods and Context`, `Caveats`, `Related Pages`, and `Pages Updated From This Source` from title, abstract/early extracted text, current tags, and actual incoming wiki links.
- Added a source-page claim-confidence rewrite audit and updated source navigation language.

## 2026-04-20

- Completed high-priority manual crystallization batch 1 for 13 direct lung/airway ILC2 and ILC3 papers.
- Upgraded the selected source pages into mature source notes with source-specific disease context, claim confidence, methods/context, caveats, and contradiction framing.
- Added a reusable batch digest and audit record, then updated index, digest README, project hub, main topic page, source README, and log navigation.
- Reviewer-gate status: no blocking accuracy issues detected; remaining caveats are OCR artifacts, incomplete figure/method review, historical ILC2 terminology in the 2011 influenza AHR paper, peripheral-blood limits in the 2023 human ILC3 asthma paper, and preclinical framing for imatinib in the 2025 SCF/KIT source.
- 2026-04-21: Completed high-priority manual crystallization batch 2 for 11 human lung, COPD/smoke, ILC plasticity, and steroid-resistant asthma sources.
- 2026-04-21: Updated ILC2 and ILC3 entity hubs by sinking high-confidence claims from high-priority crystallization batches 1 and 2 into claim-centered confidence snapshots and established observations.
- 2026-04-21: Reviewer-gate status for batch 2: no blocking accuracy issues detected; remaining caveats are compartment differences among lung tissue, sputum, blood, and nasal samples; review-level SRA target framing; and weaker human causality compared with mouse perturbation.
- 2026-04-21: Corrected four digest pages so `Highest-confidence claims`, scope, contradictions, and update triggers describe biological ILC knowledge rather than wiki/source-management status; audit recorded in `audit/2026-04-21_digest_claim_confidence_correction.md`.

- 2026-04-21: Ingested 7 new PDF files from `ILC_in_lung/RAW/`; created source pages and extracted text files, moved processed PDFs into `RAW/processed/`, and kept these as provisional knowledge-oriented source notes without promoting durable topic/entity/digest claims.
  - Group 3 innate lymphoid cells produce the growth factor HB-EGF
  - ILC3s select microbiota-specific regulatory T cells to establish tolerance in the gut
  - Divergent ILC3 responses to PDGF-D control mucosal immunity
  - Group 2 Innate Lymphoid Cells Team Players in Regulating Asthma
  - RORγt+ dendritic cells are a distinct lymphoid-derived lineage
  - Subsets of ILC3-ILC1-like cells generate a diversity spectrum of innate lymphoid cells in human mucosal tissues
  - ZBTB46 defines and regulates ILC3s that protect the intestine

## 2026-04-22

- Formalized two ingest modes across the ILC wiki and reusable research-wiki-maintainer workflow: `provisional bulk-ingest mode` and `focused manual crystallization mode`.
- Added `Ingest Mode` sections to source pages: 104 provisional bulk-ingest pages and 24 focused manual crystallization pages.
- Updated wiki rules, sources README, project config, ingestion scripts, index, and audit trail so future bulk ingest cannot be mistaken for mature source crystallization.

- 2026-04-22: Ingested 6 new PDF files from `ILC_in_lung/RAW/`; created source pages and extracted text files, moved processed PDFs into `RAW/processed/`, and kept these as provisional knowledge-oriented source notes without promoting durable topic/entity/digest claims.
  - Differentiation of type 1 ILCs from a common progenitor to all helper-like innate lymphoid cell lineages
  - Pulmonary IL-33 orchestrates innate immune cells to mediate respiratory syncytial virus-evoked airway hyperreactivity and eosinophilia
  - Regulation of type 2 innate lymphoid cell-dependent airway hyperreactivity by butyrate
  - The neuropeptide NMU amplifies ILC2-driven allergic lung inflammation
  - Tissue residency of innate lymphoid cells in lymphoid and nonlymphoid organs
  - Tissue signals imprint ILC2 identity with anticipatory function

- 2026-04-22: Completed focused manual crystallization batch 3 for 17 sources: 10 selected older provisional bulk-ingest papers, 6 newly added RAW PDFs, and the specified pulmonary fibroblast-derived SCF/KIT ILC3 paper. Updated source modes, source notes, batch digest, audit, ILC2/ILC3 entity hubs, and ILC2/ILC3 topic pages.
- 2026-04-22: Integrated batch 3 additions into entity/topic page structure by replacing batch-labeled headings with mechanism- and disease-oriented headings. Batch provenance remains in digest/audit/log pages rather than in reusable knowledge hubs.
- 2026-04-22: Updated and integrated all current topic and entity pages. Merged batch-derived claims into disease/mechanism sections, reorganized ILC2 and ILC3 entity hubs, refreshed the main ILC-in-lung topic page, updated the entities README and index, and added a topic/entity integration audit.
- 2026-04-22: Added a public sharing workflow for the ILC wiki: private `.gitignore`, private README, sanitized public export script, generated `ILC_in_lung_public/`, created MkDocs configuration, and added a public export setup audit.
- 2026-04-22: Replaced three batch-oriented digest pages with `Lung ILC Core Evidence Synthesis`, rewrote the wiki index as a reader-facing homepage, moved digest `Crystallized from` sections to page bottoms, and rebuilt `ILC Research Trend From Then To Now` as a beginner-friendly timeline with an explicit role for Ya-Jen Chang, Christina Li-Ping Thio, and Jheng-Syuan Shao-led work.
- 2026-04-22: Verified Source Index title/year metadata for 134 source notes using CrossRef-backed metadata overrides. Added `wiki/sources/source_metadata_overrides.csv`, added a metadata verification audit, and updated the public export script so Source Index no longer trusts filename year prefixes.

## 2026-04-23

- Canonicalized private source metadata before public export: renamed 53 source notes and 53 extracted-text files whose verified title/year differed from the original filename metadata, synchronized ingestion manifests, refreshed all 134 source-page Citation blocks with verified title/year/DOI metadata, and updated internal wiki links.
- Added `scripts/apply_source_metadata_renames.py` plus `audit/2026-04-23_source_note_filename_metadata_canonicalization.md` and its rename map so future filename/year corrections are auditable and repeatable.

- 2026-04-23: Ingested 6 new PDF files from `ILC_in_lung/RAW/`; created source pages and extracted text files, moved processed PDFs into `RAW/processed/`, and kept these as provisional knowledge-oriented source notes without promoting durable topic/entity/digest claims.
  - Adventitial Stromal Cells Define Group 2 Innate Lymphoid Cell Tissue Niches
  - Chitin activates parallel immune modules that direct distinct inflammatory responses via innate lymphoid type 2 and γδ T cells
  - IFN-γ increases susceptibility to influenza A infection through suppression of group II innate lymphoid cells
  - Interferon gamma constrains type 2 lymphocyte niche boundaries during mixed inflammation
  - Interleukin-33 and Interferon-γ Counter-Regulate Group 2 Innate Lymphoid Cell Activation during Immune Perturbation
  - The ins and outs of innate and adaptive type 2 immunity
- 2026-04-23: Focus-crystallized 10 ILC2-centered sources covering adventitial niches, chitin-triggered parallel modules, IFN-gamma brakes, TLR9/interferon suppression of ILC2-driven AHR, lung-gut ILC2 maturation, NMU/AREG tissue protection, PAC1/CGRP inhibitory signaling, and type 2 immunity framing.
- 2026-04-23: Rebuilt `ILC In Lung` as a beginner-facing guide, refreshed source-library status counts to 140 total / 50 focused / 90 provisional, added a reusable status-count refresh script, connected bulk ingest to automatic count refresh, and added Mermaid CSS plus compact diagrams for more readable GitHub Pages rendering.
- 2026-04-23: Audited every Mermaid diagram in `wiki/topics/` and `wiki/digests/`; removed remaining hard-shrink risks by using vertical flowcharts, shorter node labels, accessibility labels, class styling, public/private Mermaid CSS, and verified public MkDocs build.
- 2026-04-23: Updated public export styling to a Notion-style MkDocs Material layout with a curated nav, Inter/JetBrains Mono typography, white minimal theme, compact sidebars, and persistent custom CSS. The public exporter now preserves `.git` during `--force` refreshes and regenerates this style automatically.
- 2026-04-24: Reorganized the wiki architecture so `ILC2` and `ILC3` are the canonical cell-level hubs, while the former ILC2/ILC3 working-model digests now act as companion pages. Demoted the former `Role Of ILC In Pulmonary Diseases` page into the disease-first companion `Lung ILC Disease Roles Companion`, refreshed homepage hierarchy, updated reference-coverage routing, and repaired related links.
- 2026-04-24: Completed focused manual crystallization batch 4 for 10 sources covering ILC2 costimulation, immunometabolism, inhibitory neuroimmune regulation, alveolar-macrophage niche switching, and ILC3 AHR, vitamin D, iron, and ER-stress regulation. Updated the corresponding source notes, `ILC2`, `ILC3`, `ILC2 Roles In Pulmonary Disease`, `ILC2 Functional Regulation Mechanisms`, `Lung ILC Core Evidence Synthesis`, and the reference-coverage audit.

- 2026-04-29: Ingested 1 new PDF files from `ILC_in_lung/RAW/`; created source pages and extracted text files, moved processed PDFs into `RAW/processed/`, and kept these as provisional knowledge-oriented source notes without promoting durable topic/entity/digest claims.
  - A population of c-kit+ IL-17A+ ILC2s in sputum from individuals with severe asthma supports ILC2 to ILC3 trans-differentiation

- 2026-04-29: Completed focused manual ingest batch 5 for 10 sources: one newly added severe-asthma sputum ILC2/ILC3-boundary paper and nine previously provisional sources. Updated source pages, ILC2/ILC3 entity hubs, disease/regulation topic pages, the core evidence synthesis, and audit trail; review sources were kept as orientation layers rather than primary mechanistic anchors.

- 2026-04-30: Completed focused manual ingest batch 6 for 10 previously provisional sources. Updated source-reviewed notes, ILC2/ILC3 entity hubs, disease and regulation topic pages, the core evidence synthesis, index project-note links, manifest tags, and audit trail. ILC3 gut/mucosal mechanisms were kept as context rather than direct lung claims.

- 2026-04-30: Completed adaptive-immunity source review for ILC regulation of T cells, B cells, and Tregs. Promoted six source pages, added the ILC Regulation Of Adaptive Immunity topic, updated ILC2/ILC3 hubs and mechanism pages, refreshed core synthesis, manifest tags, and audit trail.
