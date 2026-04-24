# Topic And Entity Integration Audit

## Why this audit happened

The user noticed that batch-oriented headings in reusable knowledge pages made the wiki read like an ingest history rather than a mature LLM wiki. This audit records the follow-up integration pass across all current `topics/` and `entities/` pages.

## Pages reviewed

- [ILC In Lung](../topics/ILC_in_lung/)
- [ILC2 Roles In Pulmonary Disease](../topics/ILC2_roles_in_pulmonary_disease/)
- [ILC3 Roles In Pulmonary Disease](../topics/ILC3_roles_in_pulmonary_disease/)
- [ILC2 Functional Regulation Mechanisms](../topics/ILC2_functional_regulation_mechanisms/)
- [ILC3 Functional Regulation Mechanisms](../topics/ILC3_functional_regulation_mechanisms/)
- [ILC2](../entities/ILC2/)
- [ILC3](../entities/ILC3/)
- [Entities README](../entities/README/)

## Page families changed

- Topic pages:
  batch-derived additions were merged into disease or mechanism sections instead of remaining as update-history sections.
- Entity pages:
  ILC2 and ILC3 hubs were reorganized around identity, disease branches, regulatory mechanisms, stromal/tissue context, and boundary-state cautions.
- Main topic page:
  `ILC_in_lung` now records the current wiki status, source-mode separation, topic/entity map, and integrated working interpretation.
- Entity directory README:
  clarified that entity pages are reusable knowledge nodes and that batch provenance belongs in digest, audit, and log pages.

## Rule or interpretation changes

- `Batch 3 Regulatory Additions`, `Batch 3 Disease Additions`, and `Batch 3 Additions` are no longer acceptable headings in topic or entity knowledge pages.
- Batch provenance should remain traceable through digest, audit, log, and source pages, but should not structure the reusable biological synthesis.
- Topic pages should be organized by scientific question: disease roles or regulatory mechanisms.
- Entity pages should be organized by biological object: identity, strongest claims, disease branches, regulatory axes, boundary states, contradictions, open questions, and related pages.
- Claim-level confidence remains about biological knowledge claims, not file-processing or ingest status.

## Follow-up actions

- Consider splitting `ILC2` and `ILC3` entity pages into stable subheadings used across all future cell-entity pages: `Core Identity`, `Disease Branches`, `Regulatory Axes`, `Boundary States`, `Contradictions`, and `Open Questions`.
- Consider creating mediator entity pages for `IL33`, `IL17A`, `IL22`, `SCF/KIT`, `NMU/NMUR1`, `PD-1`, `HIF-1alpha`, and `BATF` once enough focused source pages support each mediator.
