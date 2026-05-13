# Reader-Facing Claim And Diagram Audit

Date: 2026-05-13

## Scope

This audit checked core reader-facing pages affected by recent ILC2/ILC3 source integration:

- `wiki/index.md`
- `wiki/topics/ILC_in_lung.md`
- `wiki/topics/ILC_regulation_of_adaptive_immunity.md`
- `wiki/topics/ILC2_functional_regulation_mechanisms.md`
- `wiki/topics/ILC3_functional_regulation_mechanisms.md`
- `wiki/entities/ILC3.md`
- `wiki/digests/2026-04-20_ILC_research_trend_then_to_now.md`
- `wiki/digests/2026-04-22_lung_ILC_core_evidence_synthesis.md`

## Claim Checks

- The ILC2 red pulp macrophage branch was checked against the PNAS 2026 RPM source. Reader-facing text already preserved the spleen/systemic context; the ILC2 regulation diagram was corrected so RPM expansion is linked to `IL-4/13 + GM-CSF`, not to `AREG repair`.
- The CGRP/PAC1 branch was checked against the 2024 PAC1/CGRP source. The diagram now shows PAC1 as an enabler of CGRP-response genes, consistent with the paper's conclusion that PAC1 is not the CGRP ligand or receptor subunit but promotes CGRP-response gene accessibility and CGRP-mediated restraint.
- The ILC3 PGE2/EP4 branch was checked against the PNAS 2026 eosinophil COX-2/PGE2 source. The ILC3 diagram was corrected so `PGE2 / EP4` points to IL-22 support rather than broad ILC3 maintenance.
- The activated splenic/peripheral ILC3 antigen-presentation branch was checked against the 2014 PNAS source. Diagram language was changed from `CD4 priming` and `TD B-cell help` to `CD4 proliferation` and `TD antibody response`, matching the paper's measured OT-II proliferation and T-dependent antibody readouts.
- The Gata3high Treg branch was checked against the 2024 ILC2-Treg source. The existing interpretation was retained because it matches the paper's evidence for ILC2-Treg OX40L/OX40 and CCL1/CCR8 dialogue, local Gata3high Treg accumulation, and Treg control of OX40L bioavailability on ILC2s.

## Editorial Cleanup

- Replaced reader-facing source-processing language in overview and digest pages with evidence-facing wording.
- Kept curation and provenance vocabulary in audit/source layers where it supports traceability.
