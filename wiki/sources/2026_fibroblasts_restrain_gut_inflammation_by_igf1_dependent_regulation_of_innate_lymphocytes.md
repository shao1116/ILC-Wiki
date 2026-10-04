---
tags:
  - cell/ILC3
  - cell/fibroblast
  - cell/pDC
  - tissue/gut
  - species/mouse
  - species/human
  - assay/KO
  - assay/flow
  - outcome/inflammation
  - status/focused_crystallization
---

# Fibroblasts Restrain Gut Inflammation By IGF1-Dependent Regulation Of Innate Lymphocytes

## Citation

- Lin Q, Liu RE, Wang Q, et al. *Science* 393, 1347–1353 (24 September 2026).
- DOI: [10.1126/science.aei0062](https://doi.org/10.1126/science.aei0062).
- Bibliographic metadata verified against the supplied publication PDF; ingested 2026-10-02.

## Ingest Mode

- `focused manual crystallization mode`: full supplied main article, Figures 1–4, legends, discussion, and reported perturbations reviewed.
- Coverage: eight PDF pages, including publisher summary. Separate supplementary methods and Figures S1–S18 are not embedded and were not available for direct inspection. Findings located only in those supplements are identified below as main-text reports, not independently inspected panels.

## Source Type

Primary mouse intestinal inflammation study with human IBD tissue associations and ex vivo human ILC3 stimulation. This is an extrapulmonary mechanistic comparator, not a lung experiment.

## Evidence Profile

`#cell/ILC3` `#cell/fibroblast` `#cell/pDC` `#tissue/gut` `#species/mouse` `#species/human` `#assay/KO` `#assay/flow` `#outcome/inflammation` `#status/focused_crystallization`

The strongest causal chain combines fibroblast Igf1 deletion, RORγt-lineage Igf1r deletion, Igf1r/Cxcl10 double deletion, pDC depletion, and chemotaxis. Human evidence supports conservation and disease association but does not establish the entire causal chain in patients.

## Why It Matters Here

This paper broadens the wiki's view of ILC3 output beyond IL-22 and IL-17: ILC3-derived chemokines can organize a pathogenic myeloid circuit. It also separates two uses of stromal IGF1: developmental support in newborn lung versus restraint of mature intestinal ILC3 inflammatory chemokine output. The same ligand need not imply the same downstream biology.

## Key Findings

### A Protective Fibroblast Population

- **Figure 1; PDF pages 1–2:** reanalysis of human scRNA-seq and matched biopsy flow cytometry identifies an IGF1-enriched C3+ABCA8+ fibroblast population reduced in inflamed IBD intestine. The matched UC comparison includes 13 individuals. Reduced abundance and RNA-velocity relationships do not prove human fibroblast conversion in vivo.
- Tamoxifen-inducible Pdgfra-lineage Igf1 deletion worsens DSS weight loss, colon shortening, and histopathology. The main text reports replication using Gli1-lineage deletion and no major baseline epithelial-growth phenotype. These drivers target broader fibroblast compartments, not exclusively the C3+ subset.

### IGF1R Restrains Chemokine Output Rather Than ILC3 Abundance

- **Figure 2; PDF pages 3–4:** intestinal ILC3s express IGF1R by transcript and protein measurements. RORγt-lineage Igf1r deletion aggravates DSS colitis without a significant change in ILC3 abundance or IL-22+ ILC3 readouts in the displayed comparison. The main text also reports unchanged HB-EGF.
- RORγt-Cre is not ILC3-exclusive. The reported Cd4-Cre comparator and Rag1-deficient background strengthen attribution to innate lymphocytes, but their supplementary panels were not directly available.
- **Figure 3; PDF pages 4–5:** IGF1R-deficient ILC3s increase Cxcl10. IGF1 reduces IFNγ-induced CXCL10 in purified mouse ILC3s at transcript, reporter, and secreted-protein levels. Additional Cxcl10 deletion in the RORγt-lineage Igf1r-deficient model improves disease, placing CXCL10 downstream of the perturbed axis.
- PI3K/AKT inhibitor dependence and reduced IFNγ-induced STAT1 phosphorylation are reported in the main text with supplementary Figure S8; they support a candidate intracellular route but should not be represented as a fully mapped biochemical interaction.

### ILC3–pDC Recruitment Links The Circuit To Disease

- **Figure 4; PDF pages 4–6:** pDC accumulation after Igf1r deletion is reduced by additional Cxcl10 deletion; BDCA2-hDTR-mediated pDC depletion improves DSS disease. ILC3-conditioned-medium chemotaxis is diminished by IGF1 co-stimulation or CXCL10 neutralization. Together these tests support a CXCL10-dependent recruitment circuit, not just a ligand–receptor prediction.
- Main-text reports extend the axis to *H. hepaticus* plus anti-IL-10R chronic inflammation. Increased pDC Ifna and rescue by global Ifnar1 loss support type I IFN involvement, but do not constitute a pDC-specific IFN deletion experiment.
- Human ex vivo IGF1 suppression of IFNγ-induced CXCL10 and matched-tissue correlations among C3+ fibroblasts, ILC3 CXCL10, and pDCs are reported in supplementary Figure S14. They are supportive human evidence, not an interventional IBD trial.

## Claim-Level Confidence

| Claim | Confidence | Boundary |
|---|---|---|
| Fibroblast-derived IGF1 protects in the tested mouse colitis models | High | Strongest directly inspected evidence is acute DSS; deletion is not C3-subset-specific |
| IGF1R restrains an ILC3-associated CXCL10–pDC inflammatory circuit | High | Genetic rescue and recruitment/depletion experiments; RORγt-driver specificity caveat |
| PI3K/AKT–STAT1 and human conservation | Medium | Main-text descriptions of supplementary results; human disease causality untested |
| The same circuit operates in adult lung | Unestablished | No pulmonary experiment in this source |

## Methods and Context

The main-figure DSS experiments use 2.5% DSS for fibroblast Igf1 deletion and 3% for the Igf1r/RORγt comparisons, followed by water recovery; these are distinct cohorts, not directly comparable effect sizes. Readouts include weight, colon length, histology, flow cytometry, sorted-cell qPCR, bulk RNA-seq, reporter mice, ELISA, and chemotaxis. Existing spatial/scRNA datasets nominate cell interactions; perturbations provide the causal support. Detailed supplementary protocols and full donor characteristics remain outside inspected coverage.

## Caveats

- DSS epithelial injury is not the full biology of chronic human IBD. The reported chronic model improves scope without removing this limitation.
- CXCL10 effects are source-cell-dependent: the main text reports worse disease after T-cell Cxcl10 deletion and no comparable disease change after Lyz2-lineage deletion. Do not infer that global CXCL10 inhibition is uniformly beneficial.
- pDC roles vary by colitis model; pDC number and IFNAR rescue do not establish a universal pDC pathogenic identity.
- No claim of clinical IGF1 treatment efficacy or lung therapeutic benefit is supported.

## Contradiction and Supersession

This complements, rather than supersedes, [newborn pulmonary IGF1 niche evidence](./2020_insulin_like_growth_factor_1_supports_a_pulmonary_niche_that_promotes_type_3_innate_lymphoid_cell_development_in.md): neonatal precursor development/IL-22 defense and adult intestinal CXCL10 restraint are different tissue, developmental-stage, and output questions. Unchanged IL-22 in this gut model should not erase the pulmonary developmental finding.

## Related Pages

- [ILC3](../entities/ILC3.md)
- [ILC3 Regulation](../topics/ILC3_functional_regulation_mechanisms.md)
- [Lung ILC Core Evidence Synthesis](../digests/2026-04-22_lung_ILC_core_evidence_synthesis.md)

## Pages Updated From This Source

- [ILC3](../entities/ILC3.md)
- [ILC3 Regulation](../topics/ILC3_functional_regulation_mechanisms.md)
- [Lung ILC Core Evidence Synthesis](../digests/2026-04-22_lung_ILC_core_evidence_synthesis.md)
