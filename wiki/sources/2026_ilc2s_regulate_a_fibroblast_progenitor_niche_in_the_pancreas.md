---
tags:
  - cell/ILC2
  - cell/fibroblast
  - cell/macrophage
  - tissue/pancreas
  - species/mouse
  - assay/lineage_tracing
  - assay/scRNAseq
  - outcome/repair
  - status/focused_crystallization
---

# ILC2s Regulate A Fibroblast Progenitor Niche In The Pancreas

## Citation

- Yip T, Stockis J, Simpson C, et al. *Science* 393, eaea5113 (2 July 2026).
- DOI: [10.1126/science.aea5113](https://doi.org/10.1126/science.aea5113).
- Metadata verified against the supplied publication PDF; ingested 2026-10-02.

## Ingest Mode

- `focused manual crystallization mode`: supplied 19-page PDF, including summary, full 17-page article, Figures 1–6, legends, methods, and discussion reviewed.
- Separate supplementary Figures S1–S14, tables, and movie were not embedded or available for direct inspection. Their results below are explicitly main-text reports. The main article contains substantial methods, unlike the separate methods supplement of the gut IGF1 paper.

## Source Type

Primary mouse pancreatic stromal-niche study spanning homeostasis, cytokine stimulation, acute caerulein pancreatitis, and pancreatic cancer models. Human or pulmonary functional conservation is not demonstrated by this study.

## Evidence Profile

`#cell/ILC2` `#cell/fibroblast` `#cell/macrophage` `#tissue/pancreas` `#species/mouse` `#assay/lineage_tracing` `#assay/scRNAseq` `#outcome/repair` `#status/focused_crystallization`

Imaging, flow cytometry, scRNA-seq, multiple ILC2-deficiency/depletion models, BrdU pulse–chase, and Dpp4 lineage tracing support the main niche model. CellChat, pseudotime, RNA velocity, and CellRank provide inference, not standalone proof of physical contact or lineage conversion.

## Why It Matters Here

The paper shifts the stromal story from “fibroblasts activate ILC2s” toward reciprocal control of fibroblast population size and progenitor behavior. It is a useful cross-tissue extension of the wiki's lung adventitial-niche model and a macrophage comparator. It does not demonstrate that lung fibroblasts have identical lineage relationships, or that ILC2s invariably cause fibrosis.

## Key Findings

### An Anatomically Defined Progenitor Niche

- **Figures 1–2; PDF pages 2–5:** pancreatic ILC2s are enriched in capsular/interstitial niches near IL-33+Pi16+Dpp4+Ly6c+ fibroblasts, rather than exclusively in islets or vascular cuffs. Col15a1+Eng+Ly6c− fibroblasts occupy the parenchyma. IL-33-pretreated reporter imaging is complemented by untreated-mouse 3D imaging.
- Reciprocal uLIPSTIC experiments do not detect appreciable ILC2–fibroblast labeling under the tested conditions. This favors a secreted-factor model; colocalization and transcript-based interactions are not evidence of obligate direct contact, and a negative proximity assay does not exclude all transient contacts.
- **Figure 3; PDF pages 4–6:** ILC2-deficient/hypomorphic mice have fewer baseline fibroblasts; IL-33-induced Ly6c+ fibroblast cycling is reduced in several ILC2-loss models. Fibroblasts lack detectable Il1rl1 in the reported transcript analysis, favoring an indirect IL-33 response through ILC2s.

### Lineage Potential Is Supported Beyond Pseudotime

- **Figure 4; PDF pages 6–7:** IL-33/BrdU pulse–chase shifts labeled fibroblasts from interstitium toward parenchyma. Dpp4-CreERT2 lineage tracing over 35–140 days shows labeled Ly6c−Dpp4− cells and a Col15a1-associated phenotype. These experiments support progenitor capacity, although they do not resolve every distinction between differentiation, transdifferentiation, and reversible state change.
- **Figure 5; PDF pages 8–9:** caerulein injury initially depletes fibroblasts, followed by repopulation. IL-33 deficiency or acute ILC2 depletion impairs fibroblast cycling; pulse–chase and Dpp4 lineage tracing support contribution of the progenitor compartment during recovery. This is evidence for stromal repopulation, not a direct demonstration that every aspect of epithelial repair requires ILC2s.

### Positive And Negative Feedback Are Different Arms

- **Main text, PDF pages 7 and 9; supplementary S7 reports:** IL-13 loss, ILC2-targeted Il4/Il13 deletion, and WT versus Il13-deficient ILC2 cocultures support a partial IL-13 contribution to fibroblast growth and progenitor-like state. Residual activity argues against IL-13 as the only mediator.
- Repeated IL-33 does not simply increase all fibroblasts or produce fibrosis in the reported pancreas experiments. Ly6c− fibroblasts decline, despite substantial Ly6c+ cycling.
- Tim4+ resident macrophages acquire fibroblast-associated label; anti-CSF1R treatment depletes the resident macrophage compartment and increases Ly6c+ fibroblast numbers. These findings support a macrophage restraint arm and suggest phagocytic uptake. They are not a Tim4-specific genetic test or definitive live-cell proof of phagocytosis.
- **Main text, PDF page 9; supplementary S8 reports:** OSM/LIF administration can reduce Ly6c− fibroblasts, but Lif deletion in ILC2s, germline Osm deletion, and fibroblast gp130 deletion fail to rescue IL-33-driven reductions. Partial drug rescue does not establish an obligatory direct ILC2→OSM/LIF→fibroblast mechanism; the responsible indirect circuit remains unresolved.

### Baseline Density And Cancer Are Distinct Outcomes

- **Figure 6A–D; PDF pages 10–11:** constitutive ILC2 deficiency, Il13 deficiency, and fibroblast-reducing pretreatment associate with less acute acinar injury. Acute ILC2 depletion does not reproduce that protection. This supports a baseline fibroblast-density/injury-threshold model, not “acute ILC2 activation causes all necrosis.” Fibroblast-derived DAMPs are an explanatory model rather than a fully isolated mediator pathway.
- **Figure 6E–O; PDF pages 10–12:** the niche expands around PanIN lesions. Dpp4 lineage-traced cells contribute to iCAF, myCAF, and Sox6+ CAF compartments in orthotopic tumors; ILC2-deficient mice have fewer iCAFs/myCAFs, with apCAF numbers unchanged. CAF abundance/ontogeny is not equivalent to demonstrated effects on tumor survival, metastasis, or therapy response. Post-implantation Dpp4 labeling also cannot identify every labeled cell as a pre-existing baseline progenitor.

## Claim-Level Confidence

| Claim | Confidence | Boundary |
|---|---|---|
| ILC2s regulate the pancreatic fibroblast progenitor niche and fibroblast abundance | High | Multiple mouse perturbations; some models affect other lymphocytes |
| Dpp4+ fibroblasts contribute to differentiated and CAF states | High | Genetic lineage evidence, not just velocity; not all CAFs or all organs |
| IL-13 contributes to the growth arm | Medium-high | Complementary experiments reported in main text; supplementary panels not inspected |
| Resident macrophages constrain the niche through phagocytosis | Medium | Restraint supported; phagocytosis mechanism suggested, depletion not Tim4-exclusive |
| Direct OSM/LIF signaling is the necessary negative-feedback mechanism | Unsupported | Several genetic tests failed to rescue the phenotype |

## Methods and Context

Mouse experiments use mostly 8–14-week animals with age/sex matching when possible. Key methods include multiphoton and multiplex/cleared-tissue imaging; fibroblast gating as live CD45−EpCAM−CD31−Pdpn+PDGFRα+; Ki67 and BrdU readouts; inducible Dpp4 lineage tracing; and cytokine/coculture perturbations. Six hourly caerulein injections model acute injury with recovery followed through day 7. KC mice model PanINs; orthotopic KPC-derived allografts and a separate subcutaneous Pi16 lineage experiment address CAF contribution. Anti-CSF1R is a macrophage-depletion intervention, not a selective blockade of phagocytic machinery.

## Caveats

- Genetic ILC2-deficiency models have lineage and developmental limitations; convergence across models is stronger than any one model alone.
- Human fibroblast-atlas conservation motivates questions but is not functional validation in human pancreas or lung.
- Separate supplementary panels and tables were not directly inspected. No precise effect-size claims are imported from them.
- Acute injury, chronic fibrosis, and cancer are different time scales and endpoints.

## Contradiction and Supersession

This refines the [adventitial stromal niche model](./2019_adventitial_stromal_cells_define_group_2_innate_lymphoid_cell_tissue_niches.md), without replacing pulmonary evidence. Pancreatic macrophage restraint of fibroblast abundance differs from the [ILC2-driven inflammatory switch in alveolar macrophages](./2026_innate_type_2_lymphocytes_trigger_an_inflammatory_switch_in_alveolar_macrophages.md); do not merge these into a universal ILC2–macrophage circuit.

## Related Pages

- [ILC2](../entities/ILC2.md)
- [ILC2 Regulation](../topics/ILC2_functional_regulation_mechanisms.md)
- [Lung ILC Core Evidence Synthesis](../digests/2026-04-22_lung_ILC_core_evidence_synthesis.md)

## Pages Updated From This Source

- [ILC2](../entities/ILC2.md)
- [ILC2 Regulation](../topics/ILC2_functional_regulation_mechanisms.md)
- [Lung ILC Core Evidence Synthesis](../digests/2026-04-22_lung_ILC_core_evidence_synthesis.md)
