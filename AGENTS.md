<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:project-design-rules -->
# Project design rules

- Use Tailwind CSS utility classes for styling whenever possible. Avoid custom CSS unless Tailwind cannot express the needed result cleanly or the style is truly global/reusable.
- Be pixel-perfect when implementing designs: match spacing, sizing, typography, alignment, colors, responsive behavior, and interaction states as closely as possible.
- Treat this project as RTL-first. Prefer RTL-aware layout choices and Tailwind logical/directional utilities where available; verify text alignment, flex/grid ordering, margins, padding, and animations work correctly in right-to-left layouts.
<!-- END:project-design-rules -->
