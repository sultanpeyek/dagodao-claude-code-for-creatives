---
description: Sync cross-references in both presentation and demo repos
---

Ensure both repositories have consistent cross-references to each other.

## URLs Reference
| Key | URL |
|-----|-----|
| Presentation (live) | https://sultanpeyek.github.io/dagodao-claude-code-for-creatives |
| Presentation (GitHub) | https://github.com/sultanpeyek/dagodao-claude-code-for-creatives |
| Demo Landing | https://sultanpeyek.github.io/dagodao-claude-code-for-creatives-demo/ |
| Demo (GitHub) | https://github.com/sultanpeyek/dagodao-claude-code-for-creatives-demo |
| Image Swiper | https://sultanpeyek.github.io/dagodao-claude-code-for-creatives-demo/demos/image-swiper/ |
| Void Vessels | https://sultanpeyek.github.io/dagodao-claude-code-for-creatives-demo/demos/void-vessels/ |

## Sibling Repo
Demo repo location: ../dagodao-claude-code-for-creatives-demo

## Tasks - This Repo (Presentation)
1. Ensure README.md has "Related" section with demo repo badges
2. Ensure pages/17-demo1-section.md has "Try Live Demo" badge
3. Ensure pages/23-demo2-section.md has "Try Live Demo" badge

## Tasks - Sibling Repo (Demo)
1. Ensure README.md has "Presentation" section with slides badges
2. Ensure index.html has presentation link in .links section

## Badge Templates

### shields.io (for README)
- Demo badge: `[![Live Demos](https://img.shields.io/badge/Live_Demos-Try_Interactive_Demos-d97757?style=for-the-badge)](URL)`
- GitHub badge: `[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](URL)`

### Slides (uses existing CSS class)
- `<a href="URL" target="_blank" class="anthropic-badge-filled">Try Live Demo</a>`

## Verification
After syncing, verify all links work by clicking them.
