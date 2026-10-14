# Claude Code for Creatives

Slides for a DagoDAO workshop that shows artists, designers, and makers how to build things by asking Claude Code instead of writing code by hand. The theme is turning "I Wish I Could" into "Let Me Just Ask". The deck has 28 slides covering what Claude Code is, installation and pricing, a prompting framework, context management, skills, and two live demos.

Live deck: https://sultanpeyek.github.io/dagodao-claude-code-for-creatives/

The two demo projects live in a separate repo, [dagodao-claude-code-for-creatives-demo](https://github.com/sultanpeyek/dagodao-claude-code-for-creatives-demo). Its live site is https://sultanpeyek.github.io/dagodao-claude-code-for-creatives-demo/, with these demos:

- [Image Swiper](https://sultanpeyek.github.io/dagodao-claude-code-for-creatives-demo/demos/image-swiper/), a Tinder-style photo organizer
- [Void Vessels](https://sultanpeyek.github.io/dagodao-claude-code-for-creatives-demo/demos/void-vessels/), a procedural NFT ship generator

## Stack

- [Slidev](https://sli.dev/) (`@slidev/cli`) with the `seriph` theme
- Vue 3 for custom components
- UnoCSS for styling, with an Anthropic-inspired colour palette in `uno.config.ts`
- Bun as the package manager (`bun.lock`)

## Getting started

Install dependencies, then start the dev server. The server opens the deck in your browser, by default at http://localhost:3030.

```bash
bun install
bun dev
```

Other scripts from `package.json`:

```bash
bun run build    # slidev build, output in dist/
bun run export   # slidev export (PDF by default)
```

## Project structure

```
slides.md        Slidev entry point: frontmatter (theme, fonts, SEO) and the ordered list of slides
pages/           One Markdown file per slide, numbered 01 to 28
components/      Vue components usable inside slides
styles/          Global CSS imported through styles/index.ts
snippets/        Code snippets embedded in slides
public/          Cover, icons, Open Graph image, and slide images
docs/            Notes on Slidev patterns and metadata
.claude/commands Claude Code slash commands for maintaining this repo
```

`slides.md` pulls each slide in with `src: ./pages/NN-name.md`. To reorder or add a slide, edit that list.

## Deployment

The GitHub Actions workflow `.github/workflows/deploy.yml` deploys to GitHub Pages on every push to `main`. It builds with `bun run build --base /dagodao-claude-code-for-creatives/` and publishes `dist/`.

`netlify.toml` and `vercel.json` also configure a single-page-app build with `npm run build` and `dist/` as the output folder.

## Licence

MIT. Author: Sultan Peyek.
