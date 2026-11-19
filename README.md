# tailrocks-typescript-skills

One portable package with twelve skills. The skills write, review,
refactor, migrate, and audit TypeScript 7 and React code. They scaffold
and migrate TanStack Start applications on the Tailrocks baseline. They
also design web screens and verify them against frozen references. Two
skills are model-selectable. Ten skills are user-only and need an
explicit human command.

## Skills

| Skill | Task |
| --- | --- |
| [`tailrocks-tanstack-project-audit`](skills/tailrocks-tanstack-project-audit/SKILL.md) | Audit one app baseline. User-only. Read-only. |
| [`tailrocks-tanstack-project-migrate`](skills/tailrocks-tanstack-project-migrate/SKILL.md) | Migrate one app to the baseline. User-only. |
| [`tailrocks-tanstack-project-remediate`](skills/tailrocks-tanstack-project-remediate/SKILL.md) | Close approved baseline gaps. User-only. |
| [`tailrocks-tanstack-project-setup`](skills/tailrocks-tanstack-project-setup/SKILL.md) | Scaffold one new app. User-only. |
| [`tailrocks-typescript-best-practices`](skills/tailrocks-typescript-best-practices/SKILL.md) | Write strict TypeScript and React. |
| [`tailrocks-typescript-migrate`](skills/tailrocks-typescript-migrate/SKILL.md) | Migrate source contracts. User-only. |
| [`tailrocks-typescript-refactor`](skills/tailrocks-typescript-refactor/SKILL.md) | Restructure without behavior change. User-only. |
| [`tailrocks-typescript-review`](skills/tailrocks-typescript-review/SKILL.md) | Review and report. User-only. Read-only. |
| [`tailrocks-web-design`](skills/tailrocks-web-design/SKILL.md) | Design screens in the app. |
| [`tailrocks-web-design-audit`](skills/tailrocks-web-design-audit/SKILL.md) | Audit screens against the reference. User-only. Read-only. |
| [`tailrocks-web-visual-baseline`](skills/tailrocks-web-visual-baseline/SKILL.md) | Freeze screenshot baselines. User-only. |
| [`tailrocks-web-visual-regression`](skills/tailrocks-web-visual-regression/SKILL.md) | Compare screens with baselines. User-only. Read-only. |

Each skill body lives in its own directory. Read
`skills/tailrocks-typescript-review/SKILL.md` for one complete example.

## Install

Install one complete package in your host's chosen scope. The [Tailrocks
catalog](https://github.com/tailrocks/tailrocks-skills) selects the source commit.
Use the route for your host.

| Host | Native install route |
| --- | --- |
| Claude Code | [Marketplace plugin](docs/installation.md#claude-code) |
| Codex | [Marketplace plugin](docs/installation.md#codex) |
| Grok Build | [Marketplace plugin](docs/installation.md#grok-build) |
| Muse Code | [Marketplace snapshot](docs/installation.md#muse-code) |
| omp | [Marketplace plugin](docs/installation.md#omp) |
| OpenCode V2 | [Git package](docs/installation.md#opencode) |
| Amp | [Directory plugin](docs/installation.md#amp) |
| Antigravity | [Local plugin installer](docs/installation.md#antigravity) |
| pi | [Git package](docs/installation.md#pi) |
| Kimi Code | [Marketplace manager](docs/installation.md#kimi-code) |

Run these commands to install from the Claude Code marketplace.

```sh
claude plugin marketplace add tailrocks/tailrocks-skills
claude plugin install tailrocks-typescript-skills@tailrocks --scope user
```

See [runtime requirements](docs/runtime.md) for tools and files the skills use.

## Use

Select the owner for the requested work. To review one TypeScript
file on Claude Code (session):

```text
/tailrocks-typescript-skills:tailrocks-typescript-review src/auth/session.ts
```

The skill returns a report with findings, evidence, and narrow
corrections. The skill is read-only. See `docs/usage.md` for every
owner, more examples, and the family boundaries.

## Documentation

- [Package guide](docs/README.md)
- [Installation](docs/installation.md)
- [Usage](docs/usage.md)
- [Runtime requirements](docs/runtime.md)
- [Model settings](docs/models.md)
- [Compatibility and verification](docs/compatibility.md)
- [Maintenance](docs/maintenance.md)

## Update and remove

Use [the host's update and removal steps](docs/installation.md).
For a pinned Git package, install the new catalog revision and use one copy in
the chosen scope.

## Contribute

Open an issue or a pull request on GitHub. Write all new and changed
prose in ASD-STE100 Simplified Technical English, Issue 9 rules. Run
`alint check`, the strict-JSON check, and the frontmatter check
before the pull request. See `docs/maintenance.md` for the full
list. Never add evaluation content.

## License

Apache License, Version 2.0. See `LICENSE` for the full text.
