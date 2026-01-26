# Slidev Patterns

Entry point is `slides.md` with YAML frontmatter configuration.

## Syntax

- Slides separated by `---`
- Per-slide frontmatter: `---\ntransition: fade\n---`
- Slide notes in HTML comments at end of each slide
- Vue components usable directly in markdown
- UnoCSS utility classes work inline
- Code highlighting: ` ```ts {1,3-5} `

## Images

- Store in `/public`
- Always show source link on slide (small, at bottom)
