# ILC in Lung Research Wiki

🔗 This wiki has been deployed as a public website and can be accessed at:  
https://shao1116.github.io/ILC-Wiki/

A source-aware, LLM-assisted knowledge framework for organizing innate lymphoid cell (ILC) biology in the lung.

---

## Overview

This project is a structured research wiki designed to map the conceptual landscape of innate lymphoid cell (ILC) biology in pulmonary systems. It integrates primary literature into a navigable, source-linked knowledge layer that supports rapid understanding, hypothesis generation, and research synthesis.

Rather than functioning as a textbook or a conventional review, this wiki operates as a **traceable knowledge map**, where each claim is anchored to underlying references and organized to reflect how the field is currently structured.

This is a living document that evolves over time, with ongoing and unscheduled updates as new literature, insights, and interpretations are incorporated.

---

## Purpose

The primary goal of this resource is to transform raw literature into structured, auditable, and reusable scientific knowledge.

Specifically, this framework is designed to:

- Enable **source-aware synthesis** for figures, manuscripts, and grant development  
- Provide a **conceptual map of the ILC field**, including major mechanisms and unresolved questions  
- Maintain **traceability between interpretation and primary literature**  
- Support **iterative knowledge refinement**, rather than static summarization  

---

## Scope

This wiki focuses on innate lymphoid cell biology in the context of lung and airway systems, including:

- ILC subsets 
- Lung homeostasis and tissue adaptation  
- Respiratory infection (e.g., viral pneumonia)  
- Asthma and inflammatory airway disease  
- Tissue repair and regeneration  
- Mucosal immunity and cross-tissue comparisons  

The scope is intentionally selective and reflects literature that is conceptually informative, mechanistically important, or useful for building coherent models of the field.

---

## Design Principles

This resource follows a set of principles aimed at maintaining scientific rigor and usability:

### Source traceability

All entries are linked to primary literature whenever possible, enabling direct verification and reinterpretation.  
In the public version of this repository, original PDFs and extracted full texts are not distributed. However, **complete reference metadata is retained**, allowing readers to reliably locate and cross-check the original sources.

### Separation of knowledge layers

Biological content is explicitly distinguished into:

- **Observation** (data-driven findings)  
- **Interpretation** (author or field-level inference)  
- **Hypothesis** (forward-looking models)

### Structured ingestion pipeline

- Literature is processed into structured records after extraction  
- Each paper is represented as a dedicated page in `wiki/sources/`  
- Full extracted text is maintained in the internal version for auditability, but is not included in the public release  

### LLM-assisted, human-curated workflow

Automatically generated pages serve as scaffolds and are iteratively refined through manual review.

### Non-exhaustive, evolving synthesis

This wiki does not aim for completeness. Instead, it prioritizes clarity, structure, and conceptual relevance.

---

## How to Use

This repository is designed for flexible navigation depending on your goal:

- Start with **overview, ILC research trend and core synthesis** to understand the field structure  
- Explore **cell-type pages** for ILC subset-specific biology  
- Navigate **disease topics** for context-specific mechanisms  
- Use **regulatory maps** to examine signaling and interaction networks  
- Refer to **source pages** for reference tracking and validation  

---

## Notes on Interpretation

This resource represents a curated and interpreted synthesis of the literature. While efforts are made to maintain close alignment with primary sources, inaccuracies or oversimplifications may occur.

All content is designed to remain traceable to its references. Readers are encouraged to verify interpretations against the original literature and contribute corrections where needed.

---

## Framework / Method Overview

This wiki is built on a structured, LLM-assisted workflow for transforming primary literature into a source-aware knowledge layer. The system integrates literature ingestion, and multi-layered synthesis while maintaining traceability to original references.

A detailed description of the underlying framework, including workflow design and implementation principles, is available in the companion repository:

👉 https://github.com/shao1116/research-wiki-maintainer-skill

