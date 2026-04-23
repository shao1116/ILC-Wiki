# Public Export Setup Audit

## Why this audit happened

The user asked how to share the ILC LLM wiki and then approved the next implementation step. The goal was to make the wiki shareable without accidentally publishing raw PDFs, extracted full text, local absolute paths, or private ingest artifacts.

## Files added

- `repository README omitted from MkDocs navigation`
- `.gitignore omitted from MkDocs navigation`
- `maintenance script omitted from public export`

## Generated public export

- `../ILC_in_lung_public/`
- `../ILC_in_lung_public/README.md`
- `../ILC_in_lung_public/.gitignore`
- `../ILC_in_lung_public/mkdocs.yml`
- `../ILC_in_lung_public/wiki/`

## Public export rules

- Keep reusable knowledge pages: topics, entities, digests, projects, audit records, schema rules, source-note pages, index, and log.
- Omit raw PDF files.
- Omit extracted full-text files.
- Omit local absolute paths.
- Omit machine ingest manifests such as CSV and JSONL files.
- Replace the private ingestion manifest with a public `sources/source_index.md`.
- Keep claim-level confidence and ingest-mode language focused on scientific claims and curation status, not on file availability.

## Verification

- No PDF files were found in the public export.
- No extracted full-text directory was exported.
- No local Windows user-home paths were found in the public export.
- No CSV or JSONL machine ingest manifest references were found in the public export.
- Relative markdown link validation passed after including `_schema/` in the public export.
- MkDocs was not built in this environment because the bundled Python runtime does not currently have `mkdocs` installed.

## Follow-up actions

- Install `mkdocs-material` in the environment that will preview or deploy the public site.
- Create a GitHub repository from `ILC_in_lung_public/`.
- Enable GitHub Pages from GitHub Actions or from the built `site/` directory.
