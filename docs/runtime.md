# Runtime requirements

Install the [complete package](installation.md). The native registrars only
register skill files. Skill procedures control when to call tools or execute a
script. Installation grants no authority for a skill action.

Use Bun and Git for project work. Run TanStack gates with the target's Bun
toolchain. Visual checks need the pinned Playwright browser of the target.

Ship the complete package-root `scripts/` tree. TanStack workflows read the
bounded command and fetch helpers. The web visual harness under
`scripts/web-visual-qa/` includes its templates and imports the transaction
helper one directory above it. Keep this layout when an installed skill
resolves the package root from its own directory.
