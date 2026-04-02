# 116 Construction LLC content guide

## Main files to edit
- `src/data/siteDetails.ts` — company name, phone, email, service area, homepage hero copy
- `src/data/services.ts` — services page and homepage service cards
- `src/data/projects.ts` — project gallery, featured projects, and project detail pages
- `src/data/testimonials.ts` — testimonial cards

## Replace placeholder images
All obvious placeholder images live in `public/images/placeholders/`.

When you have real project photography:
1. Add the new file under `public/images/` (for example `public/images/projects/valdosta-kitchen/cover.jpg`)
2. Update the image path inside the relevant data object
3. Deploy

## Add a new project
1. Duplicate an object inside `src/data/projects.ts`
2. Give it a new `slug`
3. Update `title`, `location`, `summary`, `scope`, and image paths
4. Set `featured: true` if you want it on the homepage

## Contact form
The contact form currently opens the visitor's email app using a `mailto:` workflow so the site works immediately.

If you want a server-backed form later, replace the logic in `src/components/contact/ContactForm.tsx`.
