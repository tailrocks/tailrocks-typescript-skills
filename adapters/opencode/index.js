import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { Plugin, Skill } from '@opencode/plugin'
import { parse } from 'yaml'

const skillEntries = [
  {
    "id": "tailrocks-tanstack-project-audit",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-tanstack-project-migrate",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-tanstack-project-remediate",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-tanstack-project-setup",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-typescript-best-practices",
    "explicitOnly": false
  },
  {
    "id": "tailrocks-typescript-migrate",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-typescript-refactor",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-typescript-review",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-web-design",
    "explicitOnly": false
  },
  {
    "id": "tailrocks-web-design-audit",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-web-visual-baseline",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-web-visual-regression",
    "explicitOnly": true
  }
]

export default Plugin.define({
  id: 'tailrocks-typescript-skills',
  async setup(ctx) {
    const skills = await Promise.all(skillEntries.map(async ({ id, explicitOnly }) => {
      const url = new URL(`../../skills/${id}/SKILL.md`, import.meta.url)
      const path = fileURLToPath(url)
      const source = await readFile(url, 'utf8')
      const frontmatter = /^\uFEFF?---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/.exec(source)
      if (!frontmatter) {
        throw new Error(`Missing YAML frontmatter in ${path}`)
      }

      const { name, description } = parse(frontmatter[1]) ?? {}
      if (name !== id || typeof description !== 'string' || !description.trim()) {
        throw new Error(`Invalid name or description in ${path}`)
      }

      return {
        id: Skill.ID.make(id),
        name: Skill.Name.make(name),
        description,
        path: Skill.Info.fields.path.make(path),
        content: source.slice(frontmatter[0].length),
        autoinvoke: !explicitOnly,
      }
    }))

    await ctx.skill.transform((editor) => {
      for (const skill of skills) editor.add(skill)
    })
  },
})
