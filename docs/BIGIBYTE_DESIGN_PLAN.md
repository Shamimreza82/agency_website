# BigiByte Design Pattern — Findings & Build Plan

**Source:** https://www.bigibyte.com/ (fetched + reviewed 2026-10-30)  
**Target:** `/home/reza/codeing/my-projects/recent-project/agency_website`  
**Status:** Plan only — no code written yet  
**Note:** Follow the design pattern, do **not** copy images, copy text, Calendly/WhatsApp numbers, or brand identity.

---

## 1. BigiByte design pattern (section order)

BigiByte is a service-agency marketing site. Its repeatable section sequence:

| # | Section | Purpose |
|---|---------|---------|
| 1 | **Sticky navbar** | Logo + navigation + two CTAs (Book a call, WhatsApp), blurred backdrop |
| 2 | **Hero** | Bold outcome headline + one-line subhead + trust badges row (`✓…`) + two CTAs |
| 3 | **Proof row** | Grid of project/dashboard screenshots right below hero (visual evidence) |
| 4 | **Who we help** | Persona cards; each opens with a customer quote + service link |
| 5 | **Tech stack grid** | Tool/platform logos they work with |
| 6 | **Services (grouped)** | 3 columns × 3 service cards each, "Popular" badges, "Explore all services" CTA |
| 7 | **Numbered process** | 01 → 02 → 03 steps with illustration + short copy + CTA |
| 8 | **Case studies** | Before/after stories, big metric stats ($18k/mo, 1.2k users, 12 weeks), tech tags, "Read the story" |
| 9 | **Testimonials** | Star rating, quote, client name/title/source, "See more reviews" |
| 10 | **Comparison table** | Agency vs freelancer vs in-house (✓/✕ features) |
| 11 | **FAQ accordion** | Questions with expand/collapse answers |
| 12 | **Project brief form** | Multi-step: need → budget → description → optional phone/WhatsApp → confirmation |
| 13 | **Rich footer** | Logo/tagline, Services + Company + Legal link groups, socials, email/WhatsApp/address, policy links |
| 14 | **Floating WhatsApp button** | Always-visible chat trigger |

**Visual language:** dark theme, single brand accent color, rounded cards (`rounded-2xl/3xl`), subtle drop shadows, large metric numbers, framer-motion reveal-on-scroll, optimized images.

---

## 2. Gap analysis (your codebase vs. pattern)

| BigiByte section | Your current state | Action needed |
|---|---|---|
| Navbar | `components/layout/Navber/Navber.tsx` — sticky, submenus | Add second CTA (Book a call) + inline WhatsApp in desktop menu |
| Hero | `components/home/Hero.tsx` | Rewrite to outcome-focused headline/subhead, add trust badge row, secondary CTA |
| Proof row | Missing | New screenshot strip below hero |
| Who we help | `components/home/HoverCards.tsx` (close) | Rework to quote-first persona cards linking to services/industries |
| Tech stack | Missing | New `TechStack.tsx` logo grid |
| Services | Stub pages (`app/(site)/services/*` mostly say "Main") | Build category × card grid; flesh out detail pages |
| Process | `components/pages/ProcessPage.tsx` (6-step timeline) | Condense to 3 steps + illustration |
| Case studies | `app/(site)/projects/page.tsx` | Add before/after + metric stat cards + tags + "Read story" detail pages |
| Testimonials | `components/faq/FAQ.tsx` (accordion only) | New testimonials section with stars + sources + "See more" page |
| Comparison table | Missing | New "Why us" table (agency vs freelancer vs in-house) |
| FAQ | Exists | Keep, align styling |
| Brief/contact | `components/form/BookingCallForm.tsx` + `app/api/book-a-call/route.ts` | Expand to multi-step brief + confirmation screen |
| Footer | `components/layout/Footer.tsx` | Add email/WhatsApp/address, all policy links, socials |
| Floating WhatsApp | `components/home/WhatsAppButton.tsx` | Keep |
| Blog/SEO | Blog links to Medium; `sitemap.ts`, `JsonLd` exist | Blog listing + articles, OG images, per-page metadata |

---

## 3. Phased build plan

### Phase 0 — Design tokens & brand lock (1–2 days)
- Finalize brand name/tagline (currently "SM Agency" / "Dream Team").
- Lock tokens in `app/globals.css`: keep `#02FF95` accent + dark oklch background, Inter/Geist fonts, cards `rounded-2xl/rounded-3xl`.
- Inventory assets: logo, team photos, project screenshots (`public/images/*`, `assests/*`).

### Phase 1 — Homepage shell & Hero (2–3 days)
- Edit `components/home/Hero.tsx`: outcome headline + subhead + trust badge row + primary CTA + secondary "See our work" CTA + WhatsApp button.
- Add `ProofRow.tsx`: horizontal grid of project screenshots below hero.
- Keep framer-motion reveal animations.

### Phase 2 — Who we help + Tech stack + Services (3–4 days)
- Rework `components/home/HoverCards.tsx` into quote-first persona cards (Real estate, Online shops, Startups, Sales teams, Researchers…) → link to services/industries.
- New `components/home/TechStack.tsx`: tool/logo grid (Excel, Sheets, HubSpot, Airtable, Python, Node.js, Next.js, PostgreSQL, Supabase, Docker, Vercel, Stripe…).
- Build service category grid (3 groups × 3 cards) with "Popular" badges + "Explore all services" → link to `app/(site)/services/*`.
- Flesh out stub service pages (`design`, `development`, etc.).

### Phase 3 — Process + Case studies (3–4 days)
- Keep `components/pages/ProcessPage.tsx`; optionally condense to 3-step pattern + illustration.
- Build case-study cards: before/after images, big metric stat cards, tech tags, "Read the story" → project detail pages under `/projects/[slug]`.
- Add category filter to projects listing page.

### Phase 4 — Trust & social proof (2 days)
- New testimonials section: star rating, quote, client name/title/source, "See more reviews" → testimonials page.
- New comparison table: agency vs freelancer vs in-house (✓/✕).

### Phase 5 — Contact & conversion (3–4 days)
- Expand `components/form/BookingCallForm.tsx` into multi-step project brief: pick need → budget range → description → optional phone/WhatsApp → confirmation ("Brief received").
- Keep `app/api/book-a-call/route.ts` for submission handling.
- Prominent "Book a free 30-minute call" (Calendly) link near form and in navbar.
- Keep floating `WhatsAppButton.tsx`.

### Phase 6 — Footer, legal, blog, SEO (2–3 days)
- Rework `components/layout/Footer.tsx`: logo/tagline, Services + Company + Legal groups, socials, email/WhatsApp/address, policy links.
- Connect existing policy pages (`privacy-policy`, `terms-and-conditions`, `cookie-policy`, `data-protection`, `refund-policy`, `acceptable-use-policy`, `rss.xml`).
- Blog listing + article pages (currently Medium redirect), OG images, per-page metadata (`JsonLd` + `sitemap.ts` already exist).

### Phase 7 — Polish & deploy (2–3 days)
- Responsive checks (mobile menu exists), animation tuning, image optimization (`next/image` `priority`), accessibility (aria labels, focus states).
- Deploy to Vercel; configure env vars (Calendly link, WhatsApp number, email).

---

## 4. Suggested file map

**Edit:**
- `app/globals.css` — design tokens
- `components/layout/Navber/Navber.tsx` + `DextopMenu.tsx` — Book a call CTA
- `components/home/Hero.tsx` — headline, trust badges, CTAs
- `components/home/HoverCards.tsx` → persona cards
- `components/pages/ProcessPage.tsx` — 3-step + illustration
- `components/layout/Footer.tsx` — rich footer
- `components/form/BookingCallForm.tsx` — multi-step brief
- `app/page.tsx` — reorder sections to match pattern
- `app/(site)/services/*` — real service content
- `app/(site)/projects/page.tsx` — case-study cards + detail routes

**Create:**
- `components/home/TechStack.tsx`
- `components/home/ProofRow.tsx` — screenshot strip below hero
- `components/home/Testimonials.tsx` + testimonials page
- `components/home/ComparisonTable.tsx`
- `app/(site)/contact/brief/page.tsx` — multi-step form
- `app/(site)/blog/page.tsx` + blog article routes

---

## 5. "Not a copy" guardrails
- Use **your own** headline, subhead, trust badges, services, case-study numbers, team photos, and brand voice.
- Keep BigiByte's **structure and section order**, but adapt colors/imagery/copy to your agency's niche (yours appears to be design & development; BigiByte's is scraping/automation/SaaS).
- Do **not** reuse BigiByte's images, copy, Calendly/WhatsApp numbers, or brand identity.

---

**Recommended start:** Phase 0 → Phase 1. Let me know which phase you want to implement first and I'll write the actual components and edits.