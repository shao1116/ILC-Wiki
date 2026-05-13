# Evidence Matrices And Adaptive-Immunity Tables

Date: 2026-05-13

## Scope

This audit records two reader-facing refinements:

- Added evidence matrices to `ILC2 Functional Regulation Mechanisms` and `ILC3 Functional Regulation Mechanisms`.
- Added subsection evidence tables to `ILC Regulation Of Adaptive Immunity` for:
  - ILC2 -> Th2 / Treg
  - ILC3 -> CD4 T Cell / Treg
  - ILC3 -> B Cell / Regulatory B Cell

## Evidence-Boundary Checks

- Each mechanism row now includes ILC subset, tissue or compartment, species, disease anchor, perturbation logic, main output, and caveat.
- Disease anchors reflect the source's disease model, infection model, inflammatory model, developmental context, immunization context, tolerance context, or homeostatic context.
- Lung-direct evidence was kept separate from gut, spleen, tonsil, blood, sputum, nasal, and ex vivo evidence.
- ILC2 adaptive-immunity rows were anchored to mouse lung type 2 sources for PD-L1, OX40L, and Gata3high Treg feedback.
- ILC3 adaptive-immunity rows were kept gut-, lymphoid-, tonsil-, or blood-labeled unless a direct lung source was present.
- Rows without a true disease model were labeled as homeostasis, tolerance, immunization, developmental, or species-comparative context rather than being forced into a pulmonary-disease category.
- CGRP/PAC1 was retained as an inhibitory neuroimmune ILC2 branch supported mainly by mouse causal perturbation plus human association, not as an activating NMU-like pathway.
- Gata3high Treg language was retained as a local mouse lung feedback circuit, not a general claim that all Tregs are ILC2 dependent.

## Reader-Facing Language Check

- The added sections avoid source-processing language and use biology-first framing.
- Caveats emphasize biological evidence limits, not PDF-processing or source-library status.

## Files Changed

- `wiki/topics/ILC2_functional_regulation_mechanisms.md`
- `wiki/topics/ILC3_functional_regulation_mechanisms.md`
- `wiki/topics/ILC_regulation_of_adaptive_immunity.md`
- `wiki/log.md`
