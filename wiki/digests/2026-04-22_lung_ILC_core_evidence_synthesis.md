---
tags:
  - digest/core_evidence
  - tissue/lung
  - tissue/airway
  - cell/ILC2
  - cell/ILC3
  - cell/ILC1
  - cell/fibroblast
  - cell/eosinophil
  - cell/macrophage
  - disease/asthma
  - disease/infection
  - disease/ARDS
  - disease/COPD
  - axis/ILC_lung_infection
  - axis/ILC_airway_inflammation
  - axis/ILC_plasticity
  - axis/ILC_regulation
  - axis/human_lung_ILC
---

# Lung ILC Core Evidence Synthesis

## Scope

This digest provides a biology-first map of the strongest source-linked evidence currently supporting the ILC-in-lung wiki. It integrates lung and airway ILC sources across ILC2 and ILC3 disease roles, regulatory mechanisms, tissue context, and translational boundaries.

The digest is designed as a reusable orientation page: a reader should be able to understand the main lung ILC claims without needing to know the project history behind each source note. Project history remains traceable through project-note and log pages.

## Evidence tags

`#digest/core_evidence` `#tissue/lung` `#tissue/airway` `#cell/ILC2` `#cell/ILC3` `#cell/ILC1` `#cell/fibroblast` `#cell/eosinophil` `#cell/macrophage` `#disease/asthma` `#disease/infection` `#disease/ARDS` `#disease/COPD` `#axis/ILC_lung_infection` `#axis/ILC_airway_inflammation` `#axis/ILC_plasticity` `#axis/ILC_regulation` `#axis/human_lung_ILC`

## Working model

The current focused evidence supports a lung ILC model organized around context, not around a single fixed function. ILC2s and ILC3s act as tissue-sensitive immune modules whose outputs depend on disease setting, tissue compartment, stimulus, timing, and regulatory niche.

ILC2s are best understood as lung and airway signal integrators. In allergic airway disease, they amplify type 2 inflammation through IL-5, IL-13, lipid mediators, epithelial alarmins, memory-like behavior, and eosinophil feedback. In respiratory viral disease, they can drive airway hyperreactivity, but they can also support repair or reprogram macrophage niches depending on the virus and time point. Their function is tuned by neuroimmune signals, costimulatory pathways such as ICOS:ICOSL and OX40L, autophagy-supported metabolism, checkpoint pathways, microbial metabolites, stromal or mechanical cues, interorgan trafficking, and LIF-linked immune-cell egress. They also occupy structured stromal and peribronchovascular niches rather than acting as freely distributed effector cells, and interferon-rich settings can directly restrain their expansion, positioning, or effector output. Recent pulmonary evidence further shows that IL-33-activated ILC2-derived IL-13 can reprogram tissue-resident alveolar macrophages toward an IRF4-driven inflammatory niche state. This makes ILC2 biology broader than a simple "type 2 cytokine cell" model.

ILC3s are best understood as IL-22/IL-17-capable cells whose lung roles split into protective/developmental and inflammatory branches. In bacterial infection and newborn lung biology, ILC3s can support barrier defense and developmental niches. In ARDS-like injury, neutrophilic asthma, smoking-associated asthma, and steroid-resistant asthma, ILC3-related IL-17A, neutrophil chemoattractants, glucocorticoid resistance, and stromal SCF/KIT signaling become central. Around those pulmonary branches sits a broader mechanism layer, mostly defined in gut or mucosal studies, in which AHR and WASH support identity, vitamin D restrains IL-23 signaling, CD71-linked iron handling and NPM1-supported mitochondrial OXPHOS support maintenance, IRE1alpha/XBP1 sustains inflammatory cytokine output, IL-17D/CD93 supports IL-22 programs, and PDGF-D responses are species- and receptor-context dependent. However, IL-17-producing ILC-like cells require careful classification because some IL-17-producing states may reflect ILC2/ILC3 boundary biology rather than stable canonical ILC3s.
Adaptive-immunity regulation now has a distinct evidence layer. The lung-direct anchor is mouse ILC2 OX40L control of local Th2 and Treg expansion in type 2 inflammation. ILC3 adaptive-immunity mechanisms are stronger in gut, tonsil, and blood: MHCII-positive ILC3s can restrain commensal-specific CD4 T cells, intestinal ILC3s can maintain or select Tregs through IL-2 and antigen-presentation-linked programs, and human CD40L-positive ILC3s can support regulatory B-cell differentiation. These mechanisms are important for the conceptual map, but most are not yet direct pulmonary evidence; see [ILC Regulation Of Adaptive Immunity](../topics/ILC_regulation_of_adaptive_immunity.md).

```mermaid
flowchart TB
    accTitle: Lung ILC Core Map
    accDescr: Compact map separating ILC2 and ILC3 state branches in lung and airway disease. Detailed mediators are described in the prose below the diagram.

    tissue["Lung/airway context"] --> ilc2["ILC2 states"]
    tissue --> ilc3["ILC3 states"]

    ilc2 --> allergic["Type 2 disease"]
    ilc2 --> viral["Viral outcomes"]
    ilc2 --> regulation["Regulatory axes"]
    ilc2 --> plasticity["Boundary states"]

    ilc3 --> defense["Defense/development"]
    ilc3 --> injury["Inflammatory disease"]
    ilc3 --> stromal["Stromal licensing"]
    ilc3 --> caution["Classification caution"]

    classDef tissue_class fill:#e8f3ff,stroke:#3b6ea8,stroke-width:2px,color:#17324d
    classDef ilc2_class fill:#fff4de,stroke:#b47a1f,stroke-width:2px,color:#4a3108
    classDef ilc3_class fill:#f6eefc,stroke:#7a55a3,stroke-width:2px,color:#2d1645
    classDef branch fill:#eef7ed,stroke:#4d8a50,stroke-width:2px,color:#173d1d

    class tissue tissue_class
    class ilc2 ilc2_class
    class ilc3 ilc3_class
    class allergic,viral,regulation,plasticity,defense,injury,stromal,caution branch
```

## Core claims

- Lung ILC2s can drive airway hyperreactivity through innate, non-adaptive pathways, especially in IL-33/IL-13-linked respiratory viral or allergic contexts.
- Lung ILC2s can also support repair and niche remodeling, including amphiregulin-linked epithelial repair and GM-CSF-dependent monocyte-derived alveolar macrophage imprinting in infection-conditioned settings.
- Lung ILC2s can also remodel the alveolar niche more directly: in a recent pulmonary source, IL-33-activated ILC2-derived IL-13 reprogrammed tissue-resident alveolar macrophages from a PPARgamma-centered homeostatic state toward an IRF4-driven inflammatory program.
- Lung ILC2s can be anatomically positioned in adventitial/peribronchovascular stromal niches supported by IL-33/TSLP-producing fibroblast-like cells, creating a spatial layer for type 2 activation and feedback.
- IFN-gamma is a context-dependent ILC2 brake that can suppress IL-33-driven activation, constrain type 2 lymphocyte tissue dispersion, inhibit ILC2-driven AHR through TLR9/interferon/STAT1 signaling, or suppress protective ILC2 output during influenza.
- ILC2 disease activity is regulated by epithelial alarmins, lipid mediators, neuroimmune cues, metabolic state, checkpoint pathways, microbial metabolites, and stromal or cellular feedback.
- ILC2s can regulate adaptive type 2 immunity through OX40L-mediated local Th2 and Treg expansion in mouse lung type 2 inflammation.

- Activated pulmonary ILC2s are also shaped by spatial guidance cues, including CCR8-CCL8 positioning signals and collagen-I-dependent migratory behavior in inflamed lung.
- ILC2 neuroimmune regulation is receptor- and context-dependent rather than uniformly activating: some circuits amplify type 2 inflammation, whereas others support tissue-protective amphiregulin programs or constrain IL-13-dominant pathology.
- Human lung contains identifiable ILC subsets, but human lung tissue, sputum, blood, nasal airway, and mouse lung evidence should not be treated as interchangeable.
- Lung ILC3s can support IL-22-associated antibacterial defense and neonatal pulmonary niche development.
- Lung ILC3s can also participate in IL-17A/neutrophil-rich inflammatory disease, including ARDS-like injury, neutrophilic asthma, smoking-associated asthma, and steroid-resistant asthma.
- Obesity-associated airway hyperreactivity adds a distinct NLRP3-IL-1beta-IL-17-producing innate-lymphoid branch to the ILC3 disease map.
- Pulmonary fibroblast-derived SCF/KIT signaling is a focused stromal axis that can augment ILC3 IL-17A and neutrophilic asthma-like inflammation.
- ILC3 regulation also includes restraint programs; current source-linked context includes a gut-labeled CTLA-4-positive ILC3 checkpoint branch downstream of IL-23.
- ILC3 adaptive-immunity regulation includes gut-labeled MHCII/CD4 T-cell restraint, IL-2- and MHCII-linked Treg maintenance or selection, and a human tonsil/blood CD40L/BAFF/IL-15 regulatory B-cell branch.

- ILC3 regulation also includes identity, nutrient, and stress-support programs; current source-linked context includes AHR/WASH maintenance, vitamin D-mediated IL-23 restraint, a CD71-iron axis, and IRE1alpha/XBP1-dependent cytokine sustainment, though these mechanisms are currently best labeled as extrapulmonary or mucosal context unless matched lung evidence is present.
- ILC plasticity is not a side issue: ILC2-to-ILC1-like conversion, memory-like ILC2s, IL-17-producing ST2+ ILC2s, c-Kit+ ILC2/ILC3-like states, severe-asthma sputum intermediate ILC2s, and memory-like ILC3s all shape interpretation.

## Evidence layers

| Evidence layer | What it supports | Main caution |
|---|---|---|
| Mouse perturbation models | Strongest causal links between mediator, ILC state, and disease readout | Translation to human asthma, COPD, ARDS, or infection requires tissue and disease matching |
| Human lung tissue | Baseline presence and subset potential of pulmonary ILCs | Often not causal by itself |
| Human sputum or airway sampling | Disease-associated airway ILC states in asthma phenotypes | Compartment differs from lung parenchyma and blood |
| Human nasal airway or polyp systems | Useful airway plasticity comparator | Should not be treated as lower-lung proof |
| Reviews and pathway syntheses | Field-level framing and therapeutic hypotheses | Need primary-source support before upgrading mechanistic confidence |

## Contradictions to track

- ILC2s can be pathogenic, reparative, or niche-modifying depending on virus, allergen, timing, mediator output, and outcome readout.
- ILC3 IL-22-associated defense and ILC3 IL-17A-associated pathology should not be collapsed into one "ILC3 protective" or "ILC3 pathogenic" model.
- Human association and mouse perturbation answer different questions. The strongest wiki claims preserve whether the evidence is human tissue association, ex vivo function, mouse causality, or review-level synthesis.
- SCF/c-Kit has distinct ILC2 and ILC3 branches. ILC2 SCF/c-Kit in chronic allergic disease should not be merged with fibroblast SCF/KIT-driven ILC3 IL-17A in neutrophilic asthma.
- IL-17-producing ILC-like states may reflect bona fide ILC3s, ILC2-derived boundary states, or mixed gating contexts. Marker, lineage, and tissue labels are essential.

## How to use this digest

Use this page as the first evidence synthesis layer after the homepage. For cell-specific detail, go to [ILC2](../entities/ILC2.md) or [ILC3](../entities/ILC3.md). For question-specific detail, go to [ILC2 roles in pulmonary disease](../topics/ILC2_roles_in_pulmonary_disease.md), [ILC3 roles in pulmonary disease](../topics/ILC3_roles_in_pulmonary_disease.md), [ILC2 functional regulation mechanisms](../topics/ILC2_functional_regulation_mechanisms.md), or [ILC3 functional regulation mechanisms](../topics/ILC3_functional_regulation_mechanisms.md). For a disease-first rearrangement of the same cross-subset material, use [Lung ILC Disease Roles Companion](./2026-04-20_ILC_pulmonary_disease_roles.md).

## Future Expansion Directions

- Add human lung, BAL, bronchial biopsy, sputum, or spatial data that directly links ILC2/ILC3 states to asthma, COPD, ARDS, pneumonia, fibrosis, or lung cancer outcomes.
- Add primary intervention evidence for ILC3-related steroid-resistant asthma or neutrophilic asthma targets before treating therapeutic claims as stronger evidence.
- Revisit the ILC2 regulatory hierarchy if the same human cohort measures alarmins, neuroimmune receptors, metabolic programs, checkpoint molecules, and ILC2 cytokine output.
- Revisit IL-17-producing ILC taxonomy when new lineage, fate-mapping, or single-cell multiome evidence separates bona fide ILC3s from plastic ILC2-derived states in lung disease.

## Representative Source Spine

### Viral disease, repair, and ILC2 lung function

- [Innate lymphoid cells mediate influenza-induced airway hyper-reactivity independently of adaptive immunity](../sources/2011_innate_lymphoid_cells_mediate_influenza_induced_airway_hyper_reactivity_independently.md)
- [Innate lymphoid cells promote lung-tissue homeostasis after infection with influenza virus](../sources/2011_innate_lymphoid_cells_promote_lung_tissue_homeostasis_after_infection_with_influenza.md)
- [Pulmonary IL-33 orchestrates innate immune cells to mediate respiratory syncytial virus-evoked airway hyperreactivity and eosinophilia](../sources/2020_pulmonary_il_33_orchestrates_innate_immune_cells_to_mediate_respiratory_syncytial_virus_evoked_airway_hyperreact.md)
- [IL-1beta prevents ILC2 expansion, type 2 cytokine secretion, and mucus metaplasia in response to early-life rhinovirus infection in mice](../sources/2020_il_1beta_prevents_ilc2_expansion_type_2_cytokine_secretion_and_mucus_metaplasia_in_response_to_early_life_rhinov.md)
- [BATF promotes group 2 innate lymphoid cell-mediated lung tissue protection during acute respiratory virus infection](../sources/2022_batf_promotes_group_2_innate_lymphoid_cell_mediated_lung_tissue_protection_during_acu.md)
- [Dampening type 2 properties of group 2 innate lymphoid cells by a gammaherpesvirus infection reprograms alveolar macrophages](../sources/2023_dampening_type_2_properties_of_group_2_innate_lymphoid_cells_by_a_gammaherpesvirus_in.md)

### ILC2 allergic inflammation, regulation, and plasticity

- [Lung type 2 innate lymphoid cells express cysteinyl leukotriene receptor 1 which regulates TH2 cytokine production](../sources/2013_lung_type_2_innate_lymphoid_cells_express_cysteinyl_leukotriene_receptor_1_which_regu.md)
- [Cysteinyl leukotriene E4 activates human group 2 innate lymphoid cells and enhances the effect of prostaglandin D2 and epithelial cytokines](../sources/2017_cysteinyl_leukotriene_e4_activates_human_group_2_innate_lymphoid_cells_and_enhances_the_effect_of_prostaglandin.md)
- [Kinetics of the accumulation of group 2 innate lymphoid cells in IL-33-induced and IL-25-induced murine models of asthma a potential role for the chemokine CXCL16](../sources/2019_kinetics_of_the_accumulation_of_group_2_innate_lymphoid_cells_in_il_33_induced_and_il_25_induced_murine_models_o.md)
- [Pulmonary environmental cues drive group 2 innate lymphoid cell dynamics in mice and humans](../sources/2019_pulmonary_environmental_cues_drive_group_2_innate_lymphoid_cell_dynamics_in_mice_and_human.md)
- [Fevipiprant, a selective prostaglandin D2 receptor 2 antagonist, inhibits human group 2 innate lymphoid cell aggregation and function](../sources/2019_fevipiprant_a_selective_prostaglandin_d2_receptor_2_antagonist_inhibits_human_group_2_innate_lymphoid_cell_aggre.md)
- [ICOS-ligand interaction is required for type 2 innate lymphoid cell function, homeostasis, and induction of airway hyperreactivity](../sources/2015_icos_icos_ligand_interaction_is_required_for_type_2_innate_lymphoid_cell_function_homeostasis_and_induction_of_a.md)
- [Allergen-Experienced Group 2 Innate Lymphoid Cells Acquire Memory-like Properties and Enhance Allergic Lung Inflammation](../sources/2016_allergen_experienced_group_2_innate_lymphoid_cells_acquire_memory_like_properties_and.md)
- [A population of c-kit+ IL-17A+ ILC2s in sputum from individuals with severe asthma supports ILC2 to ILC3 trans-differentiation](../sources/2025_a_population_of_c_kit_il_17a_ilc2s_in_sputum_from_individuals_with_severe_asthma_supp.md)
- [Mesenchymal Stem Cells Suppress Severe Asthma by Directly Regulating Th2 Cells and Type 2 Innate Lymphoid Cells](../sources/2021_mesenchymal_stem_cells_suppress_severe_asthma_by_directly_regulating_th2_cells_and_ty.md)
- [Vitamin D3 resolved human and experimental asthma via B lymphocyte-induced maturation protein 1 in T cells and innate lymphoid cells](../sources/2023_vitamin_d3_resolved_human_and_experimental_asthma_via_b_lymphocyte_induced_maturation_protein_1_in_t_cells_and_i.md)
- [S1P-dependent interorgan trafficking of group 2 innate lymphoid cells supports host defense](../sources/2018_s1p_dependent_interorgan_trafficking_of_group_2_innate_lymphoid_cells_supports_host_d.md)
- [Tissue-Restricted Adaptive Type 2 Immunity Is Orchestrated by Expression of the Costimulatory Molecule OX40L on Group 2 Innate Lymphoid Cells](../sources/2018_tissue_restricted_adaptive_type_2_immunity_is_orchestrated_by_expression_of_the_costimulatory_molecule_ox40l_on.md)
- [ILC2-derived LIF licences progress from tissue to systemic immunity](../sources/2024_ilc2_derived_lif_licences_progress_from_tissue_to_systemic_immunity.md)
- [The molecular and epigenetic mechanisms of innate lymphoid cell (ILC) memory and its relevance for asthma](../sources/2021_the_molecular_and_epigenetic_mechanisms_of_innate_lymphoid_cell_ilc_memory_and_its_re.md)
- [Trained immunity and tolerance in innate lymphoid cells, monocytes, and dendritic cells during allergen-specific immunotherapy](../sources/2021_trained_immunity_and_tolerance_in_innate_lymphoid_cells_monocytes_and_dendritic_cells_during_allergen_specific_i.md)
- [Inflammatory triggers associated with exacerbations of COPD orchestrate plasticity of group 2 innate lymphoid cells in the lungs](../sources/2016_inflammatory_triggers_associated_with_exacerbations_of_copd_orchestrate_plasticity_of.md)
- [IL-17-producing ST2(+) group 2 innate lymphoid cells play a pathogenic role in lung inflammation](../sources/2019_il_17_producing_st2_group_2_innate_lymphoid_cells_play_a_pathogenic_role_in_lung_inflammation.md)
- [IL-1beta, IL-23, and TGF-beta drive plasticity of human ILC2s towards IL-17-producing ILCs in nasal inflammation](../sources/2019_il_1beta_il_23_and_tgf_beta_drive_plasticity_of_human_ilc2s_towards_il_17_producing_ilcs_in_nasal_inflammation.md)
- [The Role of the TL1A/DR3 Axis in the Activation of Group 2 Innate Lymphoid Cells in Subjects with Eosinophilic Asthma](../sources/2020_the_role_of_the_tl1a_dr3_axis_in_the_activation_of_group_2_innate_lymphoid_cells_in_subjects_with_eosinophilic_a.md)
- [Lipid-Droplet Formation Drives Pathogenic Group 2 Innate Lymphoid Cells in Airway Inflammation](../sources/2020_lipid_droplet_formation_drives_pathogenic_group_2_innate_lymphoid_cells_in_airway_inf.md)
- [Autophagy is critical for group 2 innate lymphoid cell metabolic homeostasis and effector function](../sources/2020_autophagy_is_critical_for_group_2_innate_lymphoid_cell_metabolic_homeostasis_and_effector_function.md)
- [Dichotomous metabolic networks govern human ILC2 proliferation and function](../sources/2021_dichotomous_metabolic_networks_govern_human_ilc2_proliferation_and_function.md)
- [Long-acting muscarinic antagonist regulates group 2 innate lymphoid cell-dependent airway eosinophilic inflammation](../sources/2021_long_acting_muscarinic_antagonist_regulates_group_2_innate_lymphoid_cell_dependent_ai.md)
- [Cannabinoid receptor 2 engagement promotes group 2 innate lymphoid cell expansion and enhances airway hyperreactivity](../sources/2022_cannabinoid_receptor_2_engagement_promotes_group_2_innate_lymphoid_cell_expansion_and_enhances_airway_hyperreact.md)
- [beta(2)-adrenergic receptor-mediated negative regulation of group 2 innate lymphoid cell responses](../sources/2018_beta_2_adrenergic_receptor_mediated_negative_regulation_of_group_2_innate_lymphoid_cell_responses.md)
- [Group 2 innate lymphoid cells (ILC2) are regulated by stem cell factor during chronic asthmatic disease](../sources/2019_group_2_innate_lymphoid_cells_ilc2_are_regulated_by_stem_cell_factor_during_chronic_a.md)
- [The neuropeptide NMU amplifies ILC2-driven allergic lung inflammation](../sources/2017_the_neuropeptide_nmu_amplifies_ilc2_driven_allergic_lung_inflammation.md)
- [Basophils prime group 2 innate lymphoid cells for neuropeptide-mediated inhibition](../sources/2020_basophils_prime_group_2_innate_lymphoid_cells_for_neuropeptide_mediated_inhibition.md)
- [Regulation of type 2 innate lymphoid cell-dependent airway hyperreactivity by butyrate](../sources/2018_regulation_of_type_2_innate_lymphoid_cell_dependent_airway_hyperreactivity_by_butyrat.md)
- [PD-1 pathway regulates ILC2 metabolism and PD-1 agonist treatment ameliorates airway hyperreactivity](../sources/2020_pd_1_pathway_regulates_ilc2_metabolism_and_pd_1_agonist_treatment_ameliorates_airway.md)
- [Blocking the HIF-1alpha glycolysis axis inhibits allergic airway inflammation by reducing ILC2 metabolism and function](../sources/2025_blocking_the_hif_1alpha_glycolysis_axis_inhibits_allergic_airway_inflammation_by_reducing_ilc2_metabolism_and_fu.md)
- [Dopamine inhibits group 2 innate lymphoid cell-driven allergic lung inflammation by dampening mitochondrial activity](../sources/2023_dopamine_inhibits_group_2_innate_lymphoid_cell_driven_allergic_lung_inflammation_by_d.md)
- [Neuromedin-U Mediates Rapid Activation of Airway Group 2 Innate Lymphoid Cells in Mild Asthma](../sources/2024_neuromedin_u_mediates_rapid_activation_of_airway_group_2_innate_lymphoid_cells_in_mil.md)
- [mTORC1 signaling in group 2 innate lymphoid cells coordinates neuro-immune crosstalk in allergic lung inflammation](../sources/2025_mtorc1_signaling_in_group_2_innate_lymphoid_cells_coordinates_neuro_immune_crosstalk.md)
- [Eosinophils promote effector functions of lung group 2 innate lymphoid cells in allergic airway inflammation in mice](../sources/2023_eosinophils_promote_effector_functions_of_lung_group_2_innate_lymphoid_cells_in_aller.md)
- [Innate type 2 lymphocytes trigger an inflammatory switch in alveolar macrophages](../sources/2026_innate_type_2_lymphocytes_trigger_an_inflammatory_switch_in_alveolar_macrophages.md)
- [Mechanics-activated fibroblasts promote pulmonary group 2 innate lymphoid cell plasticity propelling silicosis progression](../sources/2024_mechanics_activated_fibroblasts_promote_pulmonary_group_2_innate_lymphoid_cell_plasti.md)
- [Tissue signals imprint ILC2 identity with anticipatory function](../sources/2018_tissue_signals_imprint_ilc2_identity_with_anticipatory_function.md)
- [ILC2-driven innate immune checkpoint mechanism antagonizes NK cell antimetastatic function in the lung](../sources/2020_ilc2_driven_innate_immune_checkpoint_mechanism_antagonizes_nk_cell_antimetastatic_fun.md)
- [Innate lymphoid cells contribute to allergic airway disease exacerbation by obesity](../sources/2016_innate_lymphoid_cells_contribute_to_allergic_airway_disease_exacerbation_by_obesity.md)

### ILC regulation of adaptive immunity

- [Tissue-Restricted Adaptive Type 2 Immunity Is Orchestrated by Expression of the Costimulatory Molecule OX40L on Group 2 Innate Lymphoid Cells](../sources/2018_tissue_restricted_adaptive_type_2_immunity_is_orchestrated_by_expression_of_the_costimulatory_molecule_ox40l_on.md)
- [Innate lymphoid cells regulate CD4+ T-cell responses to intestinal commensal bacteria](../sources/2013_innate_lymphoid_cells_regulate_cd4_t_cell_responses_to_intestinal_commensal_bacteria.md)
- [Group 3 innate lymphoid cells mediate intestinal selection of commensal bacteria-specific CD4+ T cells](../sources/2015_group_3_innate_lymphoid_cells_mediate_intestinal_selection_of_commensal_bacteria_specific_cd4_t_cells.md)
- [Innate lymphoid cells support regulatory T cells in the intestine through interleukin-2](../sources/2019_innate_lymphoid_cells_support_regulatory_t_cells_in_the_intestine_through_interleukin.md)
- [ILC3s select microbiota-specific regulatory T cells to establish tolerance in the gut](../sources/2022_ilc3s_select_microbiota_specific_regulatory_t_cells_to_establish_tolerance_in_the_gut.md)
- [Human CD40 ligand-expressing type 3 innate lymphoid cells induce IL-10-producing immature transitional regulatory B cells](../sources/2018_human_cd40_ligand_expressing_type_3_innate_lymphoid_cells_induce_il_10_producing_immature_transitional_regulator.md)
- [The interplay between innate lymphoid cells and T cells](../sources/2020_the_interplay_between_innate_lymphoid_cells_and_t_cells.md)

### ILC3 defense, injury, asthma, and classification

- [Group 3 innate lymphoid cells mediate early protective immunity against tuberculosis](../sources/2019_group_3_innate_lymphoid_cells_mediate_early_protective_immunity_against_tuberculosis.md)
- [Activation of Type 3 innate lymphoid cells and interleukin 22 secretion in the lungs during Streptococcus pneumoniae infection](../sources/2014_activation_of_type_3_innate_lymphoid_cells_and_interleukin_22_secretion_in_the_lungs.md)
- [Insulin-like Growth Factor 1 Supports a Pulmonary Niche that Promotes Type 3 Innate Lymphoid Cell Development in Newborn Lungs](../sources/2020_insulin_like_growth_factor_1_supports_a_pulmonary_niche_that_promotes_type_3_innate_lymphoid_cell_development_in.md)
- [Innate Lymphoid Cells Are the Predominant Source of IL-17A during the Early Pathogenesis of Acute Respiratory Distress Syndrome](../sources/2016_innate_lymphoid_cells_are_the_predominant_source_of_il_17a_during_the_early_pathogene.md)
- [Interleukin-17-producing innate lymphoid cells and the NLRP3 inflammasome facilitate obesity-associated airway hyperreactivity](../sources/2014_interleukin_17_producing_innate_lymphoid_cells_and_the_nlrp3_inflammasome_facilitate.md)
- [ILC3-derived acetylcholine promotes protease-driven allergic lung pathology](../sources/2021_ilc3_derived_acetylcholine_promotes_protease_driven_allergic_lung_pathology.md)
- [Group 3 innate lymphoid cells secret neutrophil chemoattractants and are insensitive to glucocorticoid via aberrant GR phosphorylation](../sources/2023_group_3_innate_lymphoid_cells_secret_neutrophil_chemoattractants_and_are_insensitive.md)
- [Cigarette smoke aggravates asthma by inducing memory-like type 3 innate lymphoid cells](../sources/2022_cigarette_smoke_aggravates_asthma_by_inducing_memory_like_type_3_innate_lymphoid_cell.md)
- [Innate Lymphoid Cells Are Required to Induce Airway Hyperreactivity in a Murine Neutrophilic Asthma Model](../sources/2022_innate_lymphoid_cells_are_required_to_induce_airway_hyperreactivity_in_a_murine_neutr.md)
- [Group 3 Innate Lymphoid Cells A Potential Therapeutic Target for Steroid Resistant Asthma](../sources/2024_group_3_innate_lymphoid_cells_a_potential_therapeutic_target_for_steroid_resistant_asthma.md)
- [Pulmonary fibroblast-derived stem cell factor promotes neutrophilic asthma by augmenting IL-17A production from ILC3s](../sources/2025_pulmonary_fibroblast_derived_stem_cell_factor_promotes_neutrophilic_asthma_by_augment.md)
- [c-Kit-positive ILC2s exhibit an ILC3-like signature that may contribute to IL-17-mediated pathologies](../sources/2019_c_kit_positive_ilc2s_exhibit_an_ilc3_like_signature_that_may_contribute_to_il_17_medi.md)
- [Differentiation of type 1 ILCs from a common progenitor to all helper-like innate lymphoid cell lineages](../sources/2014_differentiation_of_type_1_ilcs_from_a_common_progenitor_to_all_helper_like_innate_lymphoid_cell_lineages.md)
- [Tissue residency of innate lymphoid cells in lymphoid and nonlymphoid organs](../sources/2015_tissue_residency_of_innate_lymphoid_cells_in_lymphoid_and_nonlymphoid_organs.md)
- [Interleukin-17D regulates group 3 innate lymphoid cell function through its receptor CD93](../sources/2021_interleukin_17d_regulates_group_3_innate_lymphoid_cell_function_through_its_receptor.md)
- [Reciprocal transcription factor networks govern tissue-resident ILC3 subset function and identity](../sources/2021_reciprocal_transcription_factor_networks_govern_tissue_resident_ilc3_subset_function.md)
- [Nucleophosmin 1 promotes mucosal immunity by supporting mitochondrial oxidative phosphorylation and ILC3 activity](../sources/2024_nucleophosmin_1_promotes_mucosal_immunity_by_supporting_mitochondrial_oxidative_phosphorylation_and_ilc3_activit.md)
- [Divergent ILC3 responses to PDGF-D control mucosal immunity](../sources/2026_divergent_ilc3_responses_to_pdgf_d_control_mucosal_immunity.md)
- [CTLA-4-expressing ILC3s restrain interleukin-23-mediated inflammation](../sources/2024_ctla_4_expressing_ilc3s_restrain_interleukin_23_mediated_inflammation.md)
- [AHR drives the development of gut ILC22 cells and postnatal lymphoid tissues via pathways dependent on and independent of Notch](../sources/2012_ahr_drives_the_development_of_gut_ilc22_cells_and_postnatal_lymphoid_tissues_via_path.md)
- [WASH maintains NKp46+ ILC3 cells by promoting AHR expression](../sources/2017_wash_maintains_nkp46_ilc3_cells_by_promoting_ahr_expression.md)
- [Vitamin D downregulates the IL-23 receptor pathway in human mucosal group 3 innate lymphoid cells](../sources/2018_vitamin_d_downregulates_the_il_23_receptor_pathway_in_human_mucosal_group_3_innate_lymphoid_cells.md)
- [Nutrition impact on ILC3 maintenance and function centers on a cell-intrinsic CD71-iron axis](../sources/2023_nutrition_impact_on_ilc3_maintenance_and_function_centers_on_a_cell_intrinsic_cd71_iron_axis.md)
- [The IRE1alpha/XBP1 pathway sustains cytokine responses of group 3 innate lymphoid cells in inflammatory bowel disease](../sources/2024_the_ire1alpha_xbp1_pathway_sustains_cytokine_responses_of_group_3_innate_lymphoid_cells_in_inflammatory_bowel_di.md)

### Lung overview and review orientation

- [Innate Lymphoid Cells of the Lung](../sources/2019_innate_lymphoid_cells_of_the_lung.md)
### Human baseline and airway translation

- [Characterization and Quantification of Innate Lymphoid Cell Subsets in Human Lung](../sources/2016_characterization_and_quantification_of_innate_lymphoid_cell_subsets_in_human_lung.md)
- [Spatial and Temporal Mapping of Human Innate Lymphoid Cells Reveals Elements of Tissue Specificity](../sources/2019_spatial_and_temporal_mapping_of_human_innate_lymphoid_cells_reveals_elements_of_tissue_specificity.md)
- [Innate immune crosstalk in asthmatic airways Innate lymphoid cells coordinate polarization of lung macrophages](../sources/2019_innate_immune_crosstalk_in_asthmatic_airways_innate_lymphoid_cells_coordinate_polarization_of_lung_macrophages.md)

### ILC2 niche, interferon brake, and type 2 circuit

- [Adventitial Stromal Cells Define Group 2 Innate Lymphoid Cell Tissue Niches](../sources/2019_adventitial_stromal_cells_define_group_2_innate_lymphoid_cell_tissue_niches.md)
- [Chitin activates parallel immune modules that direct distinct inflammatory responses via innate lymphoid type 2 and gamma delta T cells](../sources/2014_chitin_activates_parallel_immune_modules_that_direct_distinct_inflammatory_responses_via_innate_lymphoid_type_2.md)
- [IFN-gamma increases susceptibility to influenza A infection through suppression of group II innate lymphoid cells](../sources/2018_ifn_gamma_increases_susceptibility_to_influenza_a_infection_through_suppression_of_group_ii_innate_lymphoid_cell.md)
- [Interleukin-33 and Interferon-gamma Counter-Regulate Group 2 Innate Lymphoid Cell Activation during Immune Perturbation](../sources/2015_interleukin_33_and_interferon_gamma_counter_regulate_group_2_innate_lymphoid_cell_activation_during_immune_pertu.md)
- [Interferon gamma constrains type 2 lymphocyte niche boundaries during mixed inflammation](../sources/2022_interferon_gamma_constrains_type_2_lymphocyte_niche_boundaries_during_mixed_inflammation.md)
- [Toll-like receptor 9-dependent interferon production prevents group 2 innate lymphoid cell-driven airway hyperreactivity](../sources/2019_toll_like_receptor_9_dependent_interferon_production_prevents_group_2_innate_lymphoid.md)
- [Maturation and specialization of group 2 innate lymphoid cells through the lung-gut axis](../sources/2022_maturation_and_specialization_of_group_2_innate_lymphoid_cells_through_the_lung_gut_a.md)
- [Neuropeptide regulation of non-redundant ILC2 responses at barrier surfaces](../sources/2022_neuropeptide_regulation_of_non_redundant_ilc2_responses_at_barrier_surfaces.md)
- [PAC1 constrains type 2 inflammation through promotion of CGRP signaling in ILC2s](../sources/2024_pac1_constrains_type_2_inflammation_through_promotion_of_cgrp_signaling_in_ilc2s.md)
- [The ins and outs of innate and adaptive type 2 immunity](../sources/2023_the_ins_and_outs_of_innate_and_adaptive_type_2_immunity.md)
