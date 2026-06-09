# 2026-06-09 New PDF Deep Ingest

## Scope

This audit records the deep ingest of two newly added PDFs from `ILC_in_lung/RAW/` into source-reviewed evidence notes and source-bounded knowledge-page updates.

## Sources Reviewed

| Source | Evidence mode | Main reusable claim | Main boundary |
|---|---|---|---|
| [Cellular context of IL-33 expression dictates impact on anti-helminth immunity](../sources/2020_cellular_context_of_il_33_expression_dictates_impact_on_anti_helminth_immunity.md) | Source-reviewed evidence note | Epithelial IL-33 supports ILC2-associated type 2 anti-helminth immunity, whereas CD11c+ APC IL-33 supports ST2+GATA3+Foxp3+ Treg restraint in mouse intestinal helminth systems. | Gut/MLN helminth biology; human airway evidence is expression/localization context, not functional lung causality. |
| [Systemic Human ILC Precursors Provide a Substrate for Tissue ILC Differentiation](../sources/2017_systemic_human_ilc_precursors_provide_a_substrate_for_tissue_ilc_differentiation.md) | Source-reviewed evidence note | Human CD117+ ILCPs are distinct from mature ILC3s, can generate multiple ILC outputs, and adult human lung contains ILCP activity. | Precursor/taxonomy evidence; not a pulmonary disease mechanism. |

## Metadata Handling

- The raw PDFs were processed into source notes and extracted text files.
- DOI/year metadata were checked against local PDF text and external metadata records before being added to `source_metadata_overrides.csv`.
- The ILCP source was canonicalized to the 2017 publication year.

## Pages Updated

- [ILC2](../entities/ILC2.md)
- [ILC3](../entities/ILC3.md)
- [ILC In Lung](../topics/ILC_in_lung.md)
- [ILC2 Functional Regulation Mechanisms](../topics/ILC2_functional_regulation_mechanisms.md)
- [ILC3 Functional Regulation Mechanisms](../topics/ILC3_functional_regulation_mechanisms.md)
- [ILC Regulation Of Adaptive Immunity](../topics/ILC_regulation_of_adaptive_immunity.md)
- [Lung ILC Core Evidence Synthesis](../digests/2026-04-22_lung_ILC_core_evidence_synthesis.md)

## Accuracy Checks

- IL-33 wording was constrained to source-cell context and gut/MLN helminth models.
- The APC-derived IL-33 branch was written as Treg restraint, not as direct ILC2 activation.
- Human sinonasal evidence in the IL-33 source was kept as expression/localization context.
- Human ILCP wording was constrained to precursor activity, differentiation potential, and RORC/IL-17A+ ILC3 boundary.
- Adult human lung ILCP evidence was not promoted to asthma, COPD, ARDS, or infection causality.

## Remaining Caveats

- The IL-33 paper may be useful for alarmin-source reasoning in lung ILC2 work, but only with explicit tissue and model labels.
- The ILCP paper strengthens human lung ILC taxonomy but should be paired with mature ILC subset or disease-context sources for pulmonary-disease claims.
