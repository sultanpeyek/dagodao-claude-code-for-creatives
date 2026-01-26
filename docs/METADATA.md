# Metadata Configuration (SSOT)

All project metadata is centralized in `config/site.ts`. This single source of truth controls values across:

| File | What it controls |
|------|------------------|
| `slides.md` | Slidev frontmatter, SEO, Open Graph |
| `index.html` | Extended OG image metadata |
| `public/site.webmanifest` | PWA manifest |
| `package.json` | npm package info |

## Claude Commands

| Command | Description |
|---------|-------------|
| `/sync-meta` | Regenerate all files from `config/site.ts` |
| `/check-meta` | Audit metadata consistency across files |
| `/show-meta` | Display current metadata configuration |
| `/update-meta [field] [value]` | Update a field and regenerate files |

## Manual Sync

```bash
bun run build:meta
```

## Configuration Structure

```ts
// config/site.ts

export const site = {
  baseUrl: 'https://sultanpeyek.github.io/dagodao-claude-code-for-creatives/',
  author: { name: 'Sultan Peyek', twitter: '@sultanpeyek' },
  organization: 'DagoDAO',
  defaults: { locale: 'en_US', lang: 'en', ... }
};

export const presentation = {
  title: 'Claude Code for Creatives',
  tagline: 'Turn "I Wish I Could" into "Let Me Just Ask"',
  themeColor: '#d97757',
  ...
};
```
