---
tags:
  - cell/ILC2
  - cell/Th2
  - tissue/lung
  - species/mouse
  - species/human
  - assay/KO
  - assay/metabolomics
  - axis/ILC_airway_inflammation
  - status/focused_crystallization
---

# Tolerance To Ferroptosis Facilitates Lipid Metabolism And Pathogenic Type 2 Immunity In Allergic Airway Inflammation

## Citation

- Wientjens C, Doverman M, Zurkovic J, et al. *Immunity* 59, 322–338.e1–e9 (10 February 2026 issue).
- Published online: **10 December 2025**, as stated in the article history. This is a new wiki addition, not a paper first published after the wiki's June 2026 update.
- DOI: [10.1016/j.immuni.2025.11.018](https://doi.org/10.1016/j.immuni.2025.11.018).
- Metadata verified against supplied PDF; ingested 2026-10-02. Filename year follows the journal issue year.

## Ingest Mode

`focused manual crystallization mode`: all 35 supplied PDF pages reviewed, including main Figures 1–6, STAR Methods, supplementary Figures S1–S6 and legends, and limitations. Supplementary figure headings and some legend labels differ; references below follow the figure-panel heading and PDF page, not the inconsistent legend number alone.

## Source Type

Primary mouse allergic-airway immunometabolism study with purified-cell functional assays, lipidomics/tracing, Red5-driven genetic deletion, pharmacological intervention, and healthy-donor blood ILC2 experiments. Human data are not an asthma treatment trial or a direct diseased-airway validation cohort.

## Evidence Profile

`#cell/ILC2` `#cell/Th2` `#tissue/lung` `#species/mouse` `#species/human` `#assay/KO` `#assay/metabolomics` `#axis/ILC_airway_inflammation` `#status/focused_crystallization`

The central claim is supported by survival rescue, iron dependence, lipid-peroxidation measurements, genetic perturbations, and airway pathology. Expression alone is not treated as proof of ferroptosis. Red5 targets IL-5-expressing ILC2s **and a fraction of Th2 cells**, limiting exclusive attribution of whole-animal effects to ILC2s.

## Why It Matters Here

The paper adds the missing redox side of the [2020 lipid-droplet model](./2020_lipid_droplet_formation_drives_pathogenic_group_2_innate_lymphoid_cells_in_airway_inf.md): acquiring lipids for membrane synthesis creates a need to prevent their peroxidation. Pathogenic ILC2s can be flexible about fuel yet vulnerable to loss of antioxidant capacity. This distinction explains why “more metabolic flexibility” does not mean “no metabolic dependency.”

## Key Findings

### Flexible Fuel Use With A Cystine Constraint

- **Figure 1; PDF pages 3–4:** papain/Alternaria-activated mouse ILC2s show increased inferred glycolytic and fatty-acid/amino-acid oxidation capacity by SCENITH. Nutrient-depletion cultures identify a strong cystine requirement in the tested media; GSH restores survival/proliferation after cystine deprivation. These short-term culture results do not mean other amino acids or glucose are universally dispensable in vivo.
- **Figure 2; PDF pages 5–6:** erastin and transsulfuration inhibition do not reproduce cystine deprivation in these conditions. Slc1a5 expression, V9302 inhibition, GSH rescue, and intracellular GSH measurements support an ASCT2-associated route. The short-time isotope-labeled GSH fractions did **not** show a significant reduction; lower total GSH does not prove exclusive cysteine transport by ASCT2. Glutamine transport and pharmacological specificity remain unresolved, as the authors acknowledge.

### Lipid Loading Requires Anti-Ferroptotic Capacity

- **Figure 3; PDF pages 5, 7–8:** activated ILC2s acquire more PUFA and incorporate it into membrane PE/PC. Lipid tracing and lipidomics support membrane lipid remodeling rather than a claim based only on pathway transcripts. GPX4 protein and antioxidant-pathway transcripts increase while measured lipid peroxidation and ROS decrease despite greater lipid/iron uptake.
- Healthy-donor blood ILC2 cultures reproduce reduced lipid peroxidation after IL-33 activation and GSH rescue of cystine deprivation; published human expression/metabolomic datasets provide complementary evidence. This does not establish the pathway's magnitude or safety as a target in patients with asthma.
- **Figure 4; PDF pages 8–10; supplementary panel S4, PDF page 32:** RSL3 reduces ILC2 survival and raises lipid peroxidation. Ferrostatin-1, α-tocopherol, and iron chelation protect, whereas zVAD does not rescue the reported phenotype. This convergent pattern supports ferroptotic death rather than equating any ROS increase with ferroptosis.
- Following cytokine stimulation, GPX4 increases before the later rise in lipid acquisition and proliferation. Activated ILC2s resist excess PUFA better but are more sensitive to GPX4 inhibition: resistance to lipid stress and dependence on its defense system are compatible.

### Genetic And Drug Tests Link Redox Defense To Airway Pathology

- **Figure 5; PDF pages 10–11; S5, pages 33–34:** Red5-driven Gpx4 deletion reduces allergen-induced ILC2 accumulation, cytokine-producing cells, eosinophilia, infiltrates, and PAS+ mucus-associated pathology; lipid peroxidation rises and lipid uptake falls. Th2 cells are also affected. This is strong mouse type-2-lineage evidence, not a strictly ILC2-exclusive whole-animal experiment.
- **Figure 6; PDF pages 10, 12–13; S6, page 35:** TRi-1 treatment reduces ILC2/Th2 accumulation and inflammatory pathology, while Red5-driven Txnrd1 deletion provides convergent genetic support. The inhibitor is administered starting with allergen exposure, so the experiment supports prevention/suppression during challenge, not reversal of established chronic asthma.
- **S5, pages 33–34:** naive mice and the tested day-7 *N. brasiliensis* infection differ from allergen challenge. GPX4 loss does not substantially change the measured ILC2 accumulation, cytokine output, or lipid uptake after infection despite increased lipid peroxidation. This establishes context dependence of the measured outputs, not proof that all repair functions or host-defense outcomes are preserved.

## Claim-Level Confidence

| Claim | Confidence | Boundary |
|---|---|---|
| GPX4-dependent ferroptosis protection sustains allergen-activated mouse ILC2s | High | Multiple orthogonal cell-death and rescue tests; model-specific |
| GPX4/TXNRD1 support lipid handling and type 2 airway pathology | High | Cell assays plus genetics; Red5 also targets IL-5+ Th2 |
| ASCT2 is the sole critical cysteine/cystine importer | Unestablished | Inhibitor-based attribution and substrate ambiguity; isotope-fraction changes nonsignificant |
| Human ILC2s share aspects of cystine/GSH and redox control | Medium | Healthy-donor blood cultures and reused datasets, not patient-airway causality |
| TXNRD1 inhibition is safe or effective asthma therapy | Unestablished | Preclinical co-treatment, no clinical efficacy/safety evidence |

## Methods and Context

Mouse allergen challenge uses intranasal papain or Alternaria on days 0, 3, 6, and 13, with endpoint around day 14. TRi-1 co-treatment begins on day 0. Most experiments use female C57BL/6 mice; supplementary S3 includes male replication, with some lipid-peroxidation comparisons not reaching significance. Readouts include SCENITH puromycin-based metabolic dependency estimates, BODIPY C16 lipid acquisition, C11 lipid-peroxidation ratios, DCFDA ROS, alkyne-fatty-acid tracing, mass spectrometry, GPX4 protein, and histology. SCENITH is not a direct carbon-flux measurement. Culture media, serum, duration, and cytokine supplementation matter when comparing nutrient-depletion results with prior metabolic studies.

## Caveats

- No direct airway-hyperresponsiveness/lung-mechanics endpoint is reported here; reduced eosinophilia or mucus must not be relabeled as demonstrated AHR improvement.
- Red5 genetics and local drug delivery are not perfectly ILC2-specific. The experiments do not establish a clinically safe therapeutic window versus epithelial or other immune-cell injury.
- Cystine in depletion media, cysteine isotope tracing, and inferred transporter substrate preferences must be kept distinct.
- No feeding/dietary recommendation follows from the culture nutrient experiments.
- The preservation of selected infection readouts is not proof of preserved worm clearance, epithelial repair, or long-term safety.

## Contradiction and Supersession

The source extends rather than replaces [lipid-droplet evidence](./2020_lipid_droplet_formation_drives_pathogenic_group_2_innate_lymphoid_cells_in_airway_inf.md) and [human metabolic-state evidence](./2021_dichotomous_metabolic_networks_govern_human_ilc2_proliferation_and_function.md). Different culture conditions, activation states, and endpoints can reveal different nutrient constraints. Antioxidant protection of pathogenic lymphocytes also must not be conflated with the consequences of inducing ferroptosis throughout lung tissue.

## Related Pages

- [ILC2](../entities/ILC2.md)
- [ILC2 Regulation](../topics/ILC2_functional_regulation_mechanisms.md)
- [ILC2 Pulmonary Disease](../topics/ILC2_roles_in_pulmonary_disease.md)
- [Lung ILC Core Evidence Synthesis](../digests/2026-04-22_lung_ILC_core_evidence_synthesis.md)

## Pages Updated From This Source

- [ILC2](../entities/ILC2.md)
- [ILC2 Regulation](../topics/ILC2_functional_regulation_mechanisms.md)
- [ILC2 Pulmonary Disease](../topics/ILC2_roles_in_pulmonary_disease.md)
- [Lung ILC Core Evidence Synthesis](../digests/2026-04-22_lung_ILC_core_evidence_synthesis.md)
