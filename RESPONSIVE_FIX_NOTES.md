# Mobile responsive follow-up

This branch was created to address mobile layout issues in the Tricomed site, especially around the contact form and stacked content blocks.

Because repository file listing/content access is limited in the current session, no source files were modified yet.

Recommended targets to patch:
- app/page.tsx or pages/index.tsx
- components/ContactForm.tsx
- app/globals.css or styles/globals.css
- shared container/section components

Recommended fixes:
- Ensure all major sections use `w-full max-w-* mx-auto px-4 sm:px-6 lg:px-8`
- Replace fixed widths with fluid widths
- Use `grid-cols-1 md:grid-cols-2` for two-column sections
- Add `min-w-0` to flex/grid children to prevent overflow
- Ensure inputs/textareas/buttons use `w-full`
- Prevent horizontal overflow with `overflow-x-hidden` on page shell
- Reduce oversized headings with responsive typography classes
