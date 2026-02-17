# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.3.2 documentation site for "Skyfleet Dash Tokenomics" using Nextra 4.2.17 as the documentation framework. The site uses MDX for content and includes features like dark mode support and search functionality via Pagefind.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Architecture

### Content Structure
- `/content/` - All documentation content in MDX format
  - Files are named with numeric prefixes (e.g., `1_0_introduction.mdx`)
  - Each MDX file requires frontmatter with `title` and `sidebarTitle`
  - `_meta.js` - Controls navigation structure and ordering

### Key Components
- `/app/layout.js` - Root layout that integrates Nextra theme
- `/app/[[...mdxPath]]/page.jsx` - Dynamic route handler for MDX content
- `/mdx-components.js` - Custom MDX component definitions

### Configuration
- Nextra is configured in `next.config.mjs` using `createMDX()`
- Tailwind CSS v4 is used for styling
- Pagefind search is automatically built after production builds

### Important Notes
- The project uses React 19 and React DOM 19
- Images are stored in `/public/img/` and `/content/IMAGES/`
- Search functionality requires running `npm run build` to generate the Pagefind index