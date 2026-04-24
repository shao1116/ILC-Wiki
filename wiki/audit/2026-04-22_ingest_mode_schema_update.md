# Ingest Mode Schema Update

## Why this audit happened

The user identified a recurring ambiguity between bulk ingestion and mature source-page crystallization. The wiki now formally separates those workflows so provisional source registration is not mistaken for durable biological synthesis.

## Sources revisited

- [wiki rules](../_schema/wiki_rules/)
- [sources README](../sources/)
- `project_config.yaml omitted from public export`
- source pages in [sources](../sources/)
- reusable research-wiki-maintainer skill ingest workflow

## Page families changed

- Schema pages: added formal `Ingest Modes` rules.
- Source pages: added an `Ingest Mode` section to distinguish provisional bulk-ingest source notes from focused manual crystallization source notes.
- Sources README: added explicit mode definitions and added `Ingest Mode` to the required source-page section list.
- Project config: added machine-readable mode definitions and allowed/forbidden page-update boundaries.
- Index and log: recorded the schema update.

## Rule or interpretation changes

- `Provisional bulk-ingest mode` means source registration, full-text extraction, initial tags, provisional source notes, manifest/index/log updates, and processed-PDF movement only.
- `Focused manual crystallization mode` means close reading of source text, figures, methods, and results before updating topic/entity/project/digest pages.
- Durable synthesis should not be updated from provisional bulk-ingest output alone.
- Source pages should explicitly state the current mode so future readers know whether a page is a triage note or a manually crystallized knowledge node.

## Follow-up actions

- Future ingestion scripts should add `Ingest Mode` automatically.
- Future manual crystallization passes should change the source page mode when durable claims are promoted.
- Topic/entity/digest pages should cite manually crystallized source pages preferentially when making high-confidence claims.
