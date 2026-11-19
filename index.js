// Native Amp directory plugin for tailrocks-typescript-skills.
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

export default async function (amp) {
  for (const { id, explicitOnly } of skillEntries) {
    await amp.registerSkill({ path: `skills/${id}`, listed: !explicitOnly })
  }
}
