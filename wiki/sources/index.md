# Public Source Notes

This directory contains sanitized source-note pages for citation routing and claim traceability.

The public export intentionally omits:

- raw PDF files
- extracted full-text files
- local absolute paths
- machine ingest manifests

## Ingest Modes

### Provisional bulk-ingest mode

Used for batch ingestion of papers
Automatically creates/updates: sources, extracted text, tags, index, and logs
Does NOT update core knowledge pages (topic / entity / project / digest)
Claim-Level Confidence should reflect only biologically supported claims from the text, not processing steps or system actions

### Focused manual crystallization mode

Used for deep curation of priority papers
Requires manual reading (including figures, methods, and experimental context)
Updates core knowledge pages (topic / entity / project / digest)
Emphasizes: context, evidence strength, limitations, and contradictions

Use [source_index.md](./source_index.md) as the public source list. Source-note pages may include conservative summaries, evidence profiles, caveats, related pages, and claim-level confidence statements, but they should not be treated as replacements for the original papers.
