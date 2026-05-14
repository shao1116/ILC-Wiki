# Beginner Editorial Polish And Source Check

## Scope

This audit records the 2026-05-14 editorial pass that made the reader-facing ILC-in-lung wiki easier for young immunologists to enter while preserving source-linked biological meaning.

The pass focused on orientation, wording, heading consistency, and beginner interpretation guardrails. It did not promote new biological claims from provisional source pages, and it did not rewrite raw source notes into new syntheses.

## Pages Edited

- [index](../index.md)
- `repository README omitted from MkDocs navigation`
- [ILC In Lung](../topics/ILC_in_lung.md)
- [ILC2](../entities/ILC2.md)
- [ILC3](../entities/ILC3.md)
- [Lung ILC Core Evidence Synthesis](../digests/2026-04-22_lung_ILC_core_evidence_synthesis.md)
- [Entities README](../entities/README.md)
- [Digests README](../digests/README.md)
- Reader-facing topic and digest headings were standardized to Title Case.

## Editorial Changes

- Added a homepage section explaining how to read source-linked ILC claims.
- Added a reader contract to the beginner guide, emphasizing subset, compartment, stimulus, output, and evidence type.
- Added beginner translation sections to the ILC2 and ILC3 entity hubs.
- Added a new-reader note to the core evidence digest to discourage overgeneralized statements such as "ILC2s are pathogenic" or "ILC3s are protective."
- Fixed the private reference-library link on the homepage from a public-export-only path to the local ingestion manifest.
- Standardized reader-facing headings such as `Evidence Tags`, `Confidence Snapshot`, `Established Observations`, `Claim-Level Confidence Boundaries`, `Interpretation Guardrails`, and `Related Pages`.

## Source Comparison Notes

| Wiki claim checked | Source comparison | Editorial decision |
|---|---|---|
| ILC2s can support repair after influenza injury through amphiregulin-associated programs. | The 2011 influenza repair source states that lung ILCs accumulated after influenza, ILC depletion impaired epithelial integrity and lung function, and amphiregulin restored depletion-associated defects ([source note](../sources/2011_innate_lymphoid_cells_promote_lung_tissue_homeostasis_after_infection_with_influenza.md)). | Preserved the repair claim, but kept it framed as influenza-injury, mouse-functional evidence with human presence support rather than universal viral protection. |
| Human lung contains detectable ILC1, ILC2, and ILC3 compartments. | The human lung flow-cytometry source identifies CD45+ Lin- CD127+ pulmonary ILC subsets using surface markers and transcription factors, with inducible cytokine potential after stimulation ([source note](../sources/2016_characterization_and_quantification_of_innate_lymphoid_cell_subsets_in_human_lung.md)). | Preserved as a baseline human-lung anchor; avoided treating this as causal disease evidence. |
| Severe-asthma sputum contains ILC2/ILC3-like boundary states that require caution. | The 2025 severe-asthma sputum source reports increased sputum ILC3s in neutrophilic inflammation and c-kit+ IL-17A+ intermediate ILC2s in mixed granulocytic inflammation, with IL-1beta/IL-18 in vitro support but no in vivo lineage tracing ([source note](../sources/2025_a_population_of_c_kit_il_17a_ilc2s_in_sputum_from_individuals_with_severe_asthma_supp.md)). | Preserved the boundary-state wording and avoided stronger claims of irreversible in vivo trans-differentiation. |
| ILC2s can reprogram alveolar macrophage states under type 2 inflammation. | The 2026 Immunity source note states that IL-33-activated ILC2-derived IL-13 drives a tissue-resident alveolar macrophage transition from a PPARgamma-centered homeostatic program toward an IRF4-driven inflammatory state in a mouse system ([source note](../sources/2026_innate_type_2_lymphocytes_trigger_an_inflammatory_switch_in_alveolar_macrophages.md)). | Preserved as a lung-specific mouse mechanism and explicitly avoided universalizing it to every asthma endotype or macrophage compartment. |
| Lung ILC3s include IL-22 defense, developmental niche, and IL-17/neutrophilic inflammation branches. | Source notes support IL-22 production during Streptococcus pneumoniae infection, neonatal alveolar-fibroblast IGF1 support of ILC3 development, glucocorticoid-insensitive neutrophil chemoattractant programs, and fibroblast SCF/KIT-driven ILC3 IL-17A in neutrophilic asthma-like inflammation ([IL-22 source](../sources/2014_activation_of_type_3_innate_lymphoid_cells_and_interleukin_22_secretion_in_the_lungs.md); [IGF1 source](../sources/2020_insulin_like_growth_factor_1_supports_a_pulmonary_niche_that_promotes_type_3_innate_lymphoid_cell_development_in.md); [glucocorticoid-resistance source](../sources/2023_group_3_innate_lymphoid_cells_secret_neutrophil_chemoattractants_and_are_insensitive.md); [SCF/KIT source](../sources/2025_pulmonary_fibroblast_derived_stem_cell_factor_promotes_neutrophilic_asthma_by_augment.md)). | Preserved the branch-based model and strengthened beginner-facing wording that ILC3 is not synonymous with either protection or pathology. |

## Interpretation Guardrails Preserved

- Mouse perturbation, human lung tissue, sputum, blood, nasal airway, and review-level evidence remain separated.
- ILC2 pathogenic, reparative, adaptive-crosstalk, and macrophage-niche branches are treated as context-dependent rather than mutually exclusive.
- ILC3 IL-22 defense and IL-17/neutrophilic inflammation are treated as distinct branches.
- Sputum and nasal-airway plasticity claims are not promoted to definitive lower-lung lineage-tracing claims.
- Review-level therapeutic framing remains lower confidence unless paired with primary intervention evidence.

## Remaining Risks

- This was an editorial and source-alignment pass, not a full re-review of all 153 source notes.
- Some topic pages remain dense because they preserve detailed source traceability; future work could add one-page visual summaries for each disease or mechanism topic.
- Public export should be refreshed after this private wiki pass so the MkDocs-facing copy receives the same reader-facing improvements.
