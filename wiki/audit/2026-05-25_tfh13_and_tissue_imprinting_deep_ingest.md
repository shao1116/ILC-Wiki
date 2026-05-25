# 2026-05-25 Tfh13 and Tissue-Imprinting Deep Ingest

## Scope

This audit records the deep ingest of one newly added RAW PDF and the re-review of one duplicate RAW PDF.

## Source Handling

- New PDF:
  [Interleukin-4-producing type 2 innate lymphoid cells in the lymph node promote proallergic Tfh13 cell differentiation](../sources/2026_interleukin_4_producing_type_2_innate_lymphoid_cells_in_the_lymph_node_promote_proall.md)
- Duplicate PDF:
  [Tissue signals imprint ILC2 identity with anticipatory function](../sources/2018_tissue_signals_imprint_ilc2_identity_with_anticipatory_function.md)
- Duplicate handling:
  the RAW copy of `Tissue signals imprint ILC2 identity with anticipatory function.pdf` had the same SHA256 hash as the already processed PDF and was moved to `RAW/processed/duplicate_2026-05-25_Tissue signals imprint ILC2 identity with anticipatory function.pdf`.

## Source-Bounded Claims Added

- Tfh13 source:
  after airway allergen sensitization in mice, activated ILC2s can accumulate in lung-draining lymph nodes, and CCR8-guided trafficking plus ILC2-derived IL-4 supports Tfh13 differentiation, high-affinity IgE, and anaphylaxis-associated outputs.
- Tfh13 source boundary:
  this is mouse draining-lymph-node adaptive-immunity evidence, not direct human lung tissue, BAL, sputum, or bronchial-biopsy evidence.
- Tissue-imprinting source:
  mouse lung, gut, skin, fat, and bone-marrow ILC2s show tissue-organized receptor and transcriptional programs; germ-free and cytokine-pathway-deficient comparisons support tissue-intrinsic organization.
- Tissue-imprinting source boundary:
  the source is primarily mouse experimental evidence; human ILC heterogeneity is background context rather than a direct human comparative dataset in this note.

## Pages Updated

- [ILC2](../entities/ILC2.md)
- [ILC2 roles in pulmonary disease](../topics/ILC2_roles_in_pulmonary_disease.md)
- [ILC2 functional regulation mechanisms](../topics/ILC2_functional_regulation_mechanisms.md)
- [ILC Regulation Of Adaptive Immunity](../topics/ILC_regulation_of_adaptive_immunity.md)
- [Lung ILC Core Evidence Synthesis](../digests/2026-04-22_lung_ILC_core_evidence_synthesis.md)
- [Wiki log](../log.md)

## Verification

- Refreshed private wiki source status counts after source-page promotion.
- Exported the private wiki to the public MkDocs wiki.
- Built the public MkDocs site successfully after the updates.
