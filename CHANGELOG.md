# Changelog

## 0.29.4 - 2026-11-20

- Complete the shared model API controls and reasoning-state guidance.
- State the native discovery limits for user-invoked workflows.
- Preserve the portable author in the Claude manifest and validate that match.
- Use the shared release procedure with full commit pins and optional tags.

## 0.29.3 - 2026-11-20

- Refresh the shared validator for user-invoked policy packages and the
  retirement of the standalone Vitalik Mode package.

## 0.29.2 - 2026-11-20

- Enforce portable description characters and the shared 500-line skill limit.
- Clarify native Grok confirmation and record Antigravity installation evidence.

## 0.29.1 - 2026-11-20

- Replace backtracking in package validation with bounded parsing.
- Commit and ship the resolved dependency graph with pinned Bun 1.4.4.

## 0.29.0 - 2026-11-20

- Documented pinned native installs across the Tailrocks hosts, including
  OpenCode V2, Amp, Antigravity, omp, and pi.
- Added shared model guidance, portable skill metadata, and native package
  validation.
- Aligned generated CI on Velnor Actions 0.1.80 with offline link and anchor
  checks.
- Included package-root visual harness files in the installed package.

## 0.28.1 - 2026-10-08

Applied the common active-package structure on branch
`standardize/package-rewrite`:

- Rewrote `plugin.json` as the portable Agent Plugins 1.0.0 manifest.
  It is now the source of truth for name, version, and description.
- Trimmed `.claude-plugin/plugin.json` to name, version, and
  description.
- Rewrote `.kimi-plugin/plugin.json` with `skills` set to `./skills/`
  and a four-field interface block.
- Removed the component marketplace file
  `.claude-plugin/marketplace.json`. The central `tailrocks`
  marketplace is now the only catalog.
- Removed the legacy host manifest directory `.codex-plugin/`. Codex
  uses the portable manifest.
- Removed the dead root file `catalog.json`. Nothing referenced it.
- Removed the generated duplicate skill definitions and the
  generated docs index. Each `SKILL.md` file is now the only
  definition.
- Pruned `scripts/` to the referenced runtime helpers: the three
  support modules and the visual-QA harness. Removed the docs
  generator and the procedures owned by other packages.
- Added `.alint.yml`, pinned to the shared active profile.
- Restructured `README.md` into the eight required sections.
- Replaced the old generated docs with the six standard guides under
  `docs/`.
- Added `AGENTS.md` and `.github/PULL_REQUEST_TEMPLATE.md`.
- Rewrote all twelve `SKILL.md` files in the common body order and in
  strict ASD-STE100 prose. Labeled Bun, TanStack, GraphQL, and Rust
  ownership as Tailrocks architecture choices. Removed fixed finding
  orders and fixed receipt labels. Corrected the TypeScript 6
  side-by-side rule against the official TypeScript 7 announcement.
- Fixed the first-pass review findings. The TanStack version policy
  now names the canonical template as the tool-pin source and drops
  the stale Renovate claim. The web-design, review, and remediate
  skills no longer contradict themselves. Per-skill template
  directories moved under the skill assets name. The usage guide no
  longer sends OpenCode users to a slash picker. Authored prose no
  longer uses semicolons and no longer exceeds the sentence limits.
- Regenerated CI with Velnor Actions 0.1.4.
- Replaced the `.github/CLAUDE.md` symlink with a regular pointer
  file. Installers that reject symlinks now accept the package.

## 0.28.0 - 2026-10-06

Twelve-skill package at commit `0652a50fce67c4a11f01ebb960a50fd5e283e0a9`
("ci: adopt velnor-actions 0.1.0 (#2)"). Two skills are
model-selectable. Ten skills are user-only and need an explicit human
command.
