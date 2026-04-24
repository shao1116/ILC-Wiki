# ILC In Lung Project

## Project Scope

Organize and curate literature on innate lymphoid cells in lung biology, with emphasis on ILC subsets, airway inflammation, respiratory infection, tissue protection, repair, and context-dependent plasticity.

## Priority Questions

- Which ILC subsets and states are most relevant to lung homeostasis and disease?
- How do ILC2 and ILC3 programs differ across lung, airway, gut, and other tissue contexts?
- Which cytokines, neuroimmune signals, metabolic pathways, and transcription factors shape lung ILC activity?
- Which findings are supported by human data, mouse models, ex vivo assays, or single-cell/flow datasets?

## Key Pages

- [ILC_in_lung](../topics/ILC_in_lung.md)
- [sources README](../sources/index.md)
- [ingestion manifest](../sources/source_index.md)
- [ILC2](../entities/ILC2.md)
- [ILC3](../entities/ILC3.md)
- [Lung ILC Disease Roles Companion](../digests/2026-04-20_ILC_pulmonary_disease_roles.md)
- [ILC Research Trend From Then To Now](../digests/2026-04-20_ILC_research_trend_then_to_now.md)
- [Lung ILC Core Evidence Synthesis](../digests/2026-04-22_lung_ILC_core_evidence_synthesis.md)
- [ILC2 Roles In Pulmonary Disease](../topics/ILC2_roles_in_pulmonary_disease.md)
- [ILC3 Roles In Pulmonary Disease](../topics/ILC3_roles_in_pulmonary_disease.md)
- [ILC2 Functional Regulation Mechanisms](../topics/ILC2_functional_regulation_mechanisms.md)
- [ILC3 Functional Regulation Mechanisms](../topics/ILC3_functional_regulation_mechanisms.md)
- [ILC2 Entity](../entities/ILC2.md)
- [ILC3 Entity](../entities/ILC3.md)
- [Reference Coverage Audit](../audit/2026-04-20_reference_coverage_audit.md)
- [High-Priority Manual Crystallization Batch 1](../audit/2026-04-20_high_priority_manual_crystallization_batch1.md)
- [High-Priority Manual Crystallization Batch 2](../audit/2026-04-21_high_priority_manual_crystallization_batch2.md)
- [Focused Manual Crystallization Batch 3](../audit/2026-04-22_focused_manual_crystallization_batch3.md)

## Current Working Model

The current synthesis layer is now organized around one main cross-subset digest plus two canonical cell hubs:
`Lung ILC Core Evidence Synthesis`, `ILC2`, `ILC3`, a disease-first companion page, and the field-trend digest.
This reduces duplication between entity pages and former working-model digests while preserving source-aware routes for different reading styles.

The first detailed topic layer now separates four practical curation tracks:
ILC2 disease roles, ILC3 disease roles, ILC2 regulatory mechanisms, and ILC3 regulatory mechanisms.

The first entity layer now adds ILC2 and ILC3 hubs, and the reference coverage audit routes all ingested references so topic and digest pages can use representative citations without losing track of uncited or context-only sources.

The first manual crystallization batch upgrades 13 direct lung/airway priority papers into mature source notes and supports a reusable model in which ILC2 functions split across viral AHR, repair, braking, and macrophage-imprinting branches, while ILC3 functions split across IL-22 defense, IGF1 neonatal niche biology, IL-17A injury, acetylcholine-associated protease allergy, and SCF/KIT neutrophilic asthma.
The second manual crystallization batch adds human lung subset grounding, COPD-associated ILC2-to-ILC1-like plasticity, allergen-experienced and IL-17-producing ILC2 states, smoke-associated memory-like ILC3s, ILC-macrophage crosstalk, and steroid-resistant asthma target framing.
The third focused crystallization batch adds regulatory depth: tissue residency, helper-like ILC lineage boundaries, ILC2 tissue imprinting, RSV IL-33-ILC2 AHR, NMU/NMUR1 neuroimmune activation, dopamine/DRD1 inhibition, PD-1 metabolic checkpointing, HIF-1alpha/glycolysis, butyrate/HDAC suppression, eosinophil feedback, stromal/mechanical ILC2 plasticity, tumor/NK antagonism, obesity-exacerbated airway disease, and fibroblast SCF/KIT-driven ILC3 IL-17A in neutrophilic asthma.

## Configured Priority Axes

- `ILC_lung_homeostasis`
- `ILC_lung_infection`
- `ILC_airway_inflammation`
- `ILC_plasticity`

## Open Risks

- Automated extraction can confuse article body text, figure legends, references, and supplementary notes.
- Many files are not lung-specific; cross-tissue findings should be kept context-labeled.
- Review articles and primary studies should not be given the same claim weight.

## Next Actions

- Choose whether the first detailed curation axis should be `ILC2 in respiratory virus infection`, `ILC2 in allergic asthma`, or `ILC3 in neutrophilic/steroid-resistant asthma`.
- Review source pages and extracted text for that axis, using the detailed topic pages as maps.
- Promote only source-supported observations into entity pages, tables, and more focused digest pages.
- Use the reference coverage audit to prioritize source-library-only papers that are likely direct support for pulmonary ILC2/ILC3 disease or mechanism claims.
- Use [Lung ILC Core Evidence Synthesis](../digests/2026-04-22_lung_ILC_core_evidence_synthesis.md) as the current claim anchor before creating mechanism entity pages.
- Use [ILC2](../entities/ILC2.md) and [ILC3](../entities/ILC3.md) as stable entity hubs for source-supported synthesis.
- Use audit pages for provenance when checking how a source was promoted from provisional ingest into focused manual crystallization.
